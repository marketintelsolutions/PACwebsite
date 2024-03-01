const nodemailer = require('nodemailer');

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // user: `${process.env.EMAIL}`,
        // pass: `${process.env.EMAIL_PASSWORD}`,
        user: 'mail.pacholdings@gmail.com',
        pass: 'zwveytcpxozeopyx'
    },
});


exports.sendMailZiltch = async (req, res) => {
    try {
        const { recipient_email,
            name,
            email,
            subject,
            message,
            formName,
            fields, } = req.body;

        console.log(req.body);

        // Send mail with defined transport object
        const info = await transporter.sendMail({
            from: 'info@pacholdings.com',
            // to: ['igbagboleye@gmail.com', 'igbagboleye2@gmail.com'],
            to: recipient_email,
            subject: subject,
            html: `<body>
                        <h2>${subject}</h2>
                        <ul style="font-size:1.1em">
                        <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[0]}</b>: ${name}</span></li><br/>
                        <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[1]}</b>: ${email}</span></li><br/>
                        <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[2]}</b>: ${subject}</span></li><br/>
                        <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[3]}</b>: ${message}</span></li><br/>
                        </ul>
                    </body>`,
        });

        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'An error occurred while sending the email' });
    }
}
