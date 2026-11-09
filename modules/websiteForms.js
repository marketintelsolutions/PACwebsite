const path = require('path');
const multer = require('multer');
const nodemailer = require('nodemailer');

const DEFAULT_RECIPIENT = 'info@panafricancapitalholdings.com';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SHORT = 300;
const LONG = 10000;

let transporter;
const getTransporter = () => {
    if (!transporter) {
        transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
    }
    return transporter;
};

const escapeHtml = (value) =>
    String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

const oneLine = (value) => value.replace(/[\r\n"]+/g, ' ');

// ---- Vendor document uploads ----
// Gmail rejects messages over ~25 MB and attachments grow ~33% when encoded,
// so the total raw upload is capped at 18 MB.
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_TOTAL_SIZE = 18 * 1024 * 1024;
const MAX_FILES_PER_FIELD = 5;
const ALLOWED_EXTENSIONS = ['.pdf', '.jpg', '.jpeg', '.png', '.doc', '.docx'];
const UPLOAD_FIELDS = [
    { name: 'documents', label: 'Required documents', required: true },
    { name: 'otherDocuments', label: 'Other relevant documents', required: false },
];

const vendorMulter = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: MAX_FILE_SIZE,
        files: MAX_FILES_PER_FIELD * UPLOAD_FIELDS.length,
        fields: 60,
        fieldSize: 20 * 1024,
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname || '').toLowerCase();
        if (ALLOWED_EXTENSIONS.includes(ext)) return cb(null, true);
        const err = new Error(`${file.originalname} is not an allowed file type (${ALLOWED_EXTENSIONS.join(', ')})`);
        err.status = 400;
        cb(err);
    },
}).fields(UPLOAD_FIELDS.map(({ name }) => ({ name, maxCount: MAX_FILES_PER_FIELD })));

const MULTER_MESSAGES = {
    LIMIT_FILE_SIZE: `Each file must be ${MAX_FILE_SIZE / 1024 / 1024} MB or smaller`,
    LIMIT_FILE_COUNT: 'Too many files uploaded',
    LIMIT_UNEXPECTED_FILE: `Too many files (max ${MAX_FILES_PER_FIELD} per upload field)`,
};

// Parses multipart/form-data and turns upload problems into 400 responses.
exports.vendorUpload = (req, res, next) => {
    vendorMulter(req, res, (err) => {
        if (!err) return next();
        if (err instanceof multer.MulterError) {
            return res.status(400).json({ error: MULTER_MESSAGES[err.code] || err.message });
        }
        if (err.status === 400) return res.status(400).json({ error: err.message });
        next(err);
    });
};

const validateVendorFiles = (req) => {
    const files = req.files || {};
    for (const { name, label, required } of UPLOAD_FIELDS) {
        if (required && !(files[name] && files[name].length)) {
            return `Please upload: ${label.toLowerCase()}`;
        }
    }
    const total = Object.values(files).flat().reduce((sum, f) => sum + f.size, 0);
    if (total > MAX_TOTAL_SIZE) {
        return `Uploads must total ${MAX_TOTAL_SIZE / 1024 / 1024} MB or less`;
    }
    return null;
};

const vendorAttachments = (req) => {
    const files = req.files || {};
    return UPLOAD_FIELDS.flatMap(({ name, label }) =>
        (files[name] || []).map((f) => ({
            label,
            filename: path.basename(f.originalname).replace(/[\r\n"]+/g, '_'),
            content: f.buffer,
            contentType: f.mimetype,
        }))
    );
};

/**
 * Builds an Express handler that validates a website form and emails it.
 *
 * fields: [name, label, maxLength]. Every field is required, and a field
 * named "email" must be a valid address. The submitter's email becomes
 * Reply-To, so staff can reply directly.
 */
const createFormHandler = ({
    formName,
    fields,
    getSubject,
    getReplyName,
    validateFiles = () => null,
    getAttachments = () => [],
}) => async (req, res) => {
    const body = req.body || {};
    const data = {};

    for (const [name, , max] of fields) {
        const raw = body[name];
        const value = typeof raw === 'string' || typeof raw === 'number' ? String(raw).trim() : '';
        if (!value) {
            return res.status(400).json({ error: `${name} is required` });
        }
        if (value.length > max) {
            return res.status(400).json({ error: `${name} is too long` });
        }
        data[name] = value;
    }

    if (!EMAIL_PATTERN.test(data.email)) {
        return res.status(400).json({ error: 'email is invalid' });
    }

    const fileError = validateFiles(req);
    if (fileError) {
        return res.status(400).json({ error: fileError });
    }
    const attachments = getAttachments(req);

    // The recipient is fixed on the server. Taking it from the request would
    // let anyone use these endpoints to send mail to any address.
    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || DEFAULT_RECIPIENT;
    const subject = oneLine(`${formName}: ${getSubject(data)}`);
    const longFields = fields.filter(([, , max]) => max === LONG);
    const shortFields = fields.filter(([, , max]) => max !== LONG);

    try {
        const info = await getTransporter().sendMail({
            from: `"PAC Website" <${process.env.EMAIL}>`,
            to: recipient,
            replyTo: { name: oneLine(getReplyName(data)), address: data.email },
            subject,
            text: [
                ...shortFields.map(([name, label]) => `${label}: ${data[name]}`),
                ...longFields.map(([name, label]) => `\n${label}:\n${data[name]}`),
                ...(attachments.length
                    ? ['\nAttached files:', ...attachments.map((a) => `- ${a.filename} (${a.label})`)]
                    : []),
            ].join('\n'),
            attachments: attachments.map(({ filename, content, contentType }) => ({ filename, content, contentType })),
            html: `<body>
                <h2>New ${escapeHtml(formName)} submission from the PAC website</h2>
                <table style="border-collapse:collapse;font-size:1.05em">
                    ${shortFields
                        .map(([name, label]) => `<tr>
                        <td style="padding:4px 16px 4px 0;vertical-align:top"><b>${escapeHtml(label)}</b></td>
                        <td style="padding:4px 0">${escapeHtml(data[name])}</td>
                    </tr>`)
                        .join('')}
                </table>
                ${longFields
                    .map(([name, label]) => `<h3>${escapeHtml(label)}</h3>
                <p style="white-space:pre-wrap;font-size:1.05em">${escapeHtml(data[name])}</p>`)
                    .join('')}
                ${attachments.length
                    ? `<h3>Attached files</h3><ul>${attachments
                        .map((a) => `<li>${escapeHtml(a.filename)} <span style="color:#777">(${escapeHtml(a.label)})</span></li>`)
                        .join('')}</ul>`
                    : ''}
            </body>`,
        });

        console.log(`${formName} sent:`, info.response);
        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error(`Error sending ${formName}:`, error);
        res.status(500).json({ error: 'An error occurred while sending the message' });
    }
};

exports.sendContactMessage = createFormHandler({
    formName: 'Contact form',
    fields: [
        ['fullName', 'Full Name', 200],
        ['email', 'Email', 320],
        ['subject', 'Subject', SHORT],
        ['message', 'Message', LONG],
    ],
    getSubject: (d) => d.subject,
    getReplyName: (d) => d.fullName,
});

exports.sendGettingStarted = createFormHandler({
    formName: 'Alumni getting started',
    fields: [
        ['firstName', 'First Name', 200],
        ['lastName', 'Last Name', 200],
        ['email', 'Email', 320],
        ['phone', 'Phone', 50],
        ['address', 'Address', 500],
        ['message', 'Message', LONG],
    ],
    getSubject: (d) => `${d.firstName} ${d.lastName}`,
    getReplyName: (d) => `${d.firstName} ${d.lastName}`,
});

exports.sendVendorInfo = createFormHandler({
    formName: 'Vendor registration',
    fields: [
        ['company', 'Company Name', SHORT],
        ['streetAddress', 'Street Address', SHORT],
        ['aptSuiteBuilding', 'Apt / Suite / Building', SHORT],
        ['city', 'City', SHORT],
        ['state', 'State', SHORT],
        ['postalCode', 'Postal Code', SHORT],
        ['country', 'Country', SHORT],
        ['registration', 'Registration Number', SHORT],
        ['dateOfIncorporation', 'Date of Incorporation', SHORT],
        ['paidUpShare', 'Paid-up Share Capital', SHORT],
        ['authorizedShare', 'Authorized Share Capital', SHORT],
        ['tin', 'TIN', SHORT],
        ['bank', 'Bank', SHORT],
        ['account', 'Account Number', SHORT],
        ['accountType', 'Account Type', SHORT],
        ['phone', 'Phone', SHORT],
        ['mobile', 'Mobile', SHORT],
        ['email', 'Email', 320],
        ['yearsInBusiness', 'Years in Business', SHORT],
        ['natureOfBusiness', 'Nature of Business', SHORT],
        ['registeredWithOtherOrg', 'Registered with Other Organisations', SHORT],
        ['organisation', 'Reference Organisation', SHORT],
        ['referenceStreet', 'Reference Street', SHORT],
        ['referenceApartment', 'Reference Apt / Suite', SHORT],
        ['referenceCity', 'Reference City', SHORT],
        ['referenceState', 'Reference State', SHORT],
        ['referencePostal', 'Reference Postal Code', SHORT],
        ['referenceCountry', 'Reference Country', SHORT],
        ['contactPerson', 'Reference Contact Person', SHORT],
        ['contactPosition', 'Reference Contact Position', SHORT],
        ['contactPhone', 'Reference Contact Phone', SHORT],
        ['referenceBusinessYears', 'Years of Business with Reference', SHORT],
        ['certified', 'Certified information is true and correct', 10],
        ['keyOrganisations', 'Key Organisations', LONG],
        ['workDetails', 'Work Details', LONG],
    ],
    getSubject: (d) => d.company,
    getReplyName: (d) => d.company,
    validateFiles: validateVendorFiles,
    getAttachments: vendorAttachments,
});
