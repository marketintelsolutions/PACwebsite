import axios from "axios";

export const contact = ({
  fullName,
  email,
  subject,
  message,
  fields,
  recipient_email,
}) => {
  if (fullName && email && subject && message) {
    axios
      .post(
        `${process.env.REACT_APP_SEND_EMAIL_BASE_URL}/pacwebsite/send-message`,
        // " http://localhost:8080/pacwebsite/send-message",
        {
          fullName,
          email,
          subject,
          message,
          fields,
          recipient_email,
        }
      )
      .then(() => alert("Message Sent successfully"))
      .catch((err) => {
        console.log(err);

        alert("Ooops...failed");
      });
  } else return alert("Fill all fields");
};

export const gettingStarted = ({
  firstName,
  lastName,
  email,
  address,
  phone,
  message,
  fields,
  recipient_email,
}) => {
  if (firstName && lastName && email && address && phone && message) {
    axios
      .post(
        `${process.env.REACT_APP_SEND_EMAIL_BASE_URL}/pacwebsite/getting-started`,
        // " http://localhost:8080/pacwebsite/getting-started",
        {
          firstName,
          lastName,
          email,
          address,
          phone,
          message,
          fields,
          recipient_email,
        }
      )
      .then(() => alert("Message Sent successfully"))
      .catch((err) => {
        console.log(err);

        alert("Ooops...failed");
      });
  } else return alert("Fill all fields");
};

// Keep these in sync with the limits in PACbackend/modules/websiteForms.js.
const MAX_UPLOAD_FILE_SIZE = 5 * 1024 * 1024;
const MAX_UPLOAD_TOTAL_SIZE = 18 * 1024 * 1024;
const MAX_FILES_PER_UPLOAD = 5;
const UPLOAD_EXTENSIONS = [".pdf", ".jpg", ".jpeg", ".png", ".doc", ".docx"];
export const ACCEPTED_UPLOAD_TYPES = UPLOAD_EXTENSIONS.join(",");

const VENDOR_TEXT_FIELDS = [
  "company",
  "streetAddress",
  "aptSuiteBuilding",
  "city",
  "state",
  "postalCode",
  "country",
  "registration",
  "dateOfIncorporation",
  "paidUpShare",
  "authorizedShare",
  "tin",
  "bank",
  "account",
  "accountType",
  "phone",
  "mobile",
  "email",
  "yearsInBusiness",
  "natureOfBusiness",
  "registeredWithOtherOrg",
  "keyOrganisations",
  "workDetails",
  "organisation",
  "referenceStreet",
  "referenceApartment",
  "referenceCity",
  "referenceState",
  "referencePostal",
  "referenceCountry",
  "contactPerson",
  "contactPosition",
  "contactPhone",
  "referenceBusinessYears",
  "certified",
];

// Returns an error message, or null when the selected files are acceptable.
export const validateUploads = ({ documents = [], otherDocuments = [] }) => {
  if (
    documents.length > MAX_FILES_PER_UPLOAD ||
    otherDocuments.length > MAX_FILES_PER_UPLOAD
  ) {
    return `You can upload up to ${MAX_FILES_PER_UPLOAD} files in each section`;
  }
  const all = [...documents, ...otherDocuments];
  for (const file of all) {
    const name = file.name.toLowerCase();
    if (!UPLOAD_EXTENSIONS.some((ext) => name.endsWith(ext))) {
      return `${file.name} is not supported. Allowed types: PDF, JPG, PNG, DOC, DOCX`;
    }
    if (file.size > MAX_UPLOAD_FILE_SIZE) {
      return `${file.name} is larger than 5 MB`;
    }
  }
  const total = all.reduce((sum, f) => sum + f.size, 0);
  if (total > MAX_UPLOAD_TOTAL_SIZE) {
    return "Your files add up to more than 18 MB. Please upload smaller files";
  }
  return null;
};

export const vendorForm = ({
  documents = [],
  otherDocuments = [],
  ...values
}) => {
  if (!VENDOR_TEXT_FIELDS.every((field) => values[field])) {
    return alert("Fill all fields");
  }
  if (values.certified !== "yes") {
    return alert("Please confirm that the information submitted is true and correct");
  }
  if (!documents.length) {
    return alert("Please upload the required documents");
  }
  const uploadError = validateUploads({ documents, otherDocuments });
  if (uploadError) return alert(uploadError);

  const body = new FormData();
  VENDOR_TEXT_FIELDS.forEach((field) => body.append(field, values[field]));
  documents.forEach((file) => body.append("documents", file));
  otherDocuments.forEach((file) => body.append("otherDocuments", file));

  // Don't set Content-Type: the browser adds the multipart boundary itself.
  return axios
    .post(
      `${process.env.REACT_APP_SEND_EMAIL_BASE_URL}/pacwebsite/vendor-info`,
      // " http://localhost:8080/pacwebsite/vendor-info",
      body
    )
    .then(() => alert("Message Sent successfully"))
    .catch((err) => {
      console.log(err);

      alert(err.response?.data?.error || "Ooops...failed");
    });
};
