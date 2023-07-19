import React from "react";
import vendorbg from "../../assets/images/vendorbg.png";
import SectionOne from "../../components/about/SectionOne";
import locationGrey from "../../assets/logos/locationGrey.svg";
import house from "../../assets/logos/house.svg";
import date from "../../assets/logos/date.svg";
import suitcase from "../../assets/logos/suitcase.svg";
import pen from "../../assets/logos/pen.svg";
import microscope from "../../assets/logos/microscope.svg";
import nuban from "../../assets/logos/nuban.svg";
import contact from "../../assets/logos/contact.svg";
import position from "../../assets/logos/position.svg";
import business from "../../assets/logos/business.svg";
import cloud from "../../assets/logos/cloud.svg";
import cancel from "../../assets/logos/cancel.svg";

const Vendor = () => {
  return (
    <div className="vendor">
      <SectionOne
        color="#38B6FF"
        text="Vendor Registration Form"
        img={vendorbg}
      />
      <div className="section-two">
        <div className="center">
          <div className="heading">
            <p>Vendor Information</p>
          </div>
          <form>
            <div className="name">
              <label htmlFor="company">Name of Company</label>
              <input type="text" id="company" />
            </div>

            <div className="address">
              <label>Permanent Business Address</label>
              <div className="input">
                <img src={locationGrey} alt="locationGrey" />
                <input type="text" placeholder="Street Address" />
              </div>
              <div className="input">
                <img src={locationGrey} alt="locationGrey" />
                <input type="text" placeholder="Apt. Suite. Bldg. (optional)" />
              </div>

              <div className="items">
                <div className="input">
                  <img src={locationGrey} alt="locationGrey" />
                  <input type="text" placeholder="City" />
                </div>
                <div className="input">
                  <img src={locationGrey} alt="locationGrey" />
                  <input type="text" placeholder="State / Province / Region" />
                </div>
                <div className="input">
                  <img src={locationGrey} alt="locationGrey" />
                  <input type="text" placeholder="Postal / Zip Code" />
                </div>
                <select name="" id="">
                  <option value="">- - Select Country - -</option>
                  <option value="nigeria">nigeria</option>
                </select>
              </div>
            </div>
            <div className="information">
              <div className="item">
                <label htmlFor="registration">
                  Company Registration Number
                </label>
                <div className="input">
                  <img src={house} alt="locationGrey" />
                  <input
                    type="text"
                    id="registration"
                    placeholder="CAC registration number"
                  />
                </div>
              </div>
              <div className="item">
                <label htmlFor="registration">Date of Incorporation</label>
                <div className="input">
                  <img src={date} alt="locationGrey" />
                  <input
                    type="date"
                    id="registration"
                    placeholder="Select Date"
                  />
                </div>
              </div>
              <div className="item">
                <label htmlFor="paidUpShare">Paid-Up Share Capital</label>
                <div className="input">
                  <img src={suitcase} alt="locationGrey" />
                  <input
                    type="text"
                    id="paidUpShare"
                    placeholder="CAC registration number"
                  />
                </div>
              </div>
              <div className="item">
                <label htmlFor="authorisedShare">
                  Authorized Share Capital:
                </label>
                <div className="input">
                  <img src={pen} alt="locationGrey" />
                  <input type="text" id="authorisedShare" placeholder="" />
                </div>
              </div>
              <div className="item">
                <label htmlFor="tin">Tax Identification Number</label>
                <div className="input">
                  <img src={microscope} alt="locationGrey" />
                  <input type="text" id="tin" placeholder="TIN" />
                </div>
              </div>
            </div>
            <div className="heading">
              <p>Account Information</p>
            </div>
            <div className="information">
              <div className="item">
                <label htmlFor="bank">Bank Name</label>
                <div className="input">
                  <img src={house} alt="house" />
                  <input type="text" id="bank" />
                </div>
              </div>
              <div className="item">
                <label htmlFor="account">Account Number</label>
                <div className="input">
                  <img src={nuban} alt="house" />
                  <input
                    type="text"
                    id="account"
                    placeholder="NUBAN or standard account number"
                  />
                </div>
              </div>
            </div>
            <div className="account-type">
              <label htmlFor="">Type of Account</label>
              <div className="options">
                <div className="option">
                  <input type="radio" value="savings" name="accountType" />{" "}
                  <span>Savings</span>
                </div>
                <div className="option">
                  <input type="radio" value="current" name="accountType" />{" "}
                  <span>Current</span>
                </div>
                <div className="option">
                  <input type="radio" value="domiciliary" name="accountType" />{" "}
                  <span>Domiciliary</span>
                </div>
                <div className="option">
                  <input type="radio" value="corporate" name="accountType" />{" "}
                  <span>Corporate</span>
                </div>
                <div className="option">
                  <input type="radio" value="other" name="accountType" />{" "}
                  <span>Other</span>
                </div>
              </div>
            </div>
            <div className="heading">
              <p>Contact Information</p>
            </div>
            <div className="information">
              <div className="item">
                <label htmlFor="phone">Phone Number</label>
                <div className="input">
                  <img src={house} alt="house" />
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Official phone number"
                  />
                </div>
              </div>
              <div className="item">
                <label htmlFor="mobile">Mobile Phone</label>
                <div className="input">
                  <img src={date} alt="house" />
                  <input
                    type="text"
                    id="mobile"
                    placeholder="Alternative phone number"
                  />
                </div>
              </div>
              <div className="item">
                <label htmlFor="email">Email Address</label>
                <div className="input">
                  <img src={suitcase} alt="suitcase" />
                  <input type="email" id="email" />
                </div>
              </div>
              <div className="item">
                <label htmlFor="years">Number of years in business</label>
                <div className="input">
                  <img src={pen} alt="pen" />
                  <input type="email" id="years" />
                </div>
              </div>
            </div>
            <label htmlFor="nature">Nature of Business</label>
            <textarea name="nature" id="nature" className="nature"></textarea>

            <div className="account-type">
              <label htmlFor="">
                Are you registered with any other organisation
              </label>
              <div className="options">
                <div className="option">
                  <input type="radio" value="yes" name="otherOrg" />{" "}
                  <span>Yes</span>
                </div>
                <div className="option">
                  <input type="radio" value="no" name="otherOrg" />{" "}
                  <span>No</span>
                </div>
              </div>
            </div>

            <label htmlFor="keyOrganisations">
              If yes, give names and addresses of key Organisations
            </label>
            <textarea
              name="keyOrganisations"
              id="keyOrganisations"
              className="text-details"
              placeholder="Other companies you are registered with"
            ></textarea>
            <label htmlFor="workDetails">
              Give brief details of the type and value of work you have done in
              the 24 months
            </label>
            <textarea
              name="workDetails"
              id="workDetails"
              className="text-details"
            ></textarea>

            {/* REFERENCES */}
            <div className="heading">
              <p>References</p>
            </div>
            <h3>
              Please list one (1) reference that is familiar with your work
            </h3>
            <label htmlFor="organisation">Name of Organisation</label>
            <div className="input">
              <img src={locationGrey} alt="locationGrey" />
              <input type="text" id="organisation" placeholder="Company name" />
            </div>

            <div className="address">
              <label>Address</label>
              <div className="input">
                <img src={locationGrey} alt="locationGrey" />
                <input
                  type="text"
                  placeholder="Street Address"
                  name="referenceStreet"
                />
              </div>
              <div className="input">
                <img src={locationGrey} alt="locationGrey" />
                <input
                  type="text"
                  placeholder="Apt. Suite. Bldg. (optional)"
                  name="referenceApartment"
                />
              </div>

              <div className="items">
                <div className="input">
                  <img src={locationGrey} alt="locationGrey" />
                  <input type="text" placeholder="City" name="referenceCity" />
                </div>
                <div className="input">
                  <img src={locationGrey} alt="locationGrey" />
                  <input
                    type="text"
                    placeholder="State / Province / Region"
                    name="referenceState"
                  />
                </div>
                <div className="input">
                  <img src={locationGrey} alt="locationGrey" />
                  <input
                    type="text"
                    placeholder="Postal / Zip Code"
                    name="referencePostal"
                  />
                </div>
                <select name="referenceCountry" id="">
                  <option value="">- - Select Country - -</option>
                  <option value="nigeria">nigeria</option>
                </select>
              </div>
            </div>
            <div className="information">
              <div className="item">
                <label htmlFor="contactPerson">Contact Person</label>
                <div className="input">
                  <img src={contact} alt="locationGrey" />
                  <input type="text" id="contactPerson" />
                </div>
              </div>
              <div className="item">
                <label htmlFor="contactPosition">Position</label>
                <div className="input">
                  <img src={position} alt="locationGrey" />
                  <input type="text" id="contactPosition" />
                </div>
              </div>
              <div className="item">
                <label htmlFor="contactPhone">Phone Number</label>
                <div className="input">
                  <img src={suitcase} alt="locationGrey" />
                  <input
                    type="tel"
                    id="contactPhone"
                    placeholder="Contact’s phone number"
                  />
                </div>
              </div>
              <div className="item">
                <label htmlFor="referenceBusinessYears">
                  Years in business
                </label>
                <div className="input">
                  <img src={business} alt="locationGrey" />
                  <input
                    type="number"
                    id="referenceBusinessYears"
                    placeholder="How long have you been in business with the above named company"
                  />
                </div>
              </div>
            </div>

            {/* UPLOADS */}
            <div className="heading">
              <p>Uploads</p>
            </div>
            <h3>
              Please note that application should be accompanied with the
              following;
            </h3>
            <p className="upload-text">
              1. A photocopy of Certificate of Incorporation 2. A photocopy of
              Memorandum and Articles of Association 3. A photocopy of VAT
              registration Certificate 4. Any other relevant document
            </p>
            <label>Upload documents mentioned above</label>
            <div className="upload-input">
              <label htmlFor="documents">
                <input type="file" multiple id="documents" />
                <div className="upload-btn">
                  <img src={cloud} alt="cloud" />
                </div>
                {/* <button type="button" className="upload-btn">
                </button> */}
              </label>
              <button type="button" className="cancel-btn">
                <img src={cancel} alt="cancel" />
              </button>
            </div>
            <label>Other relevant documents</label>
            <div className="upload-input">
              <label htmlFor="otherDocuments">
                <input type="file" multiple id="otherDocuments" />
                <div className="upload-btn">
                  <img src={cloud} alt="cloud" />
                </div>
                {/* <button type="button" className="upload-btn">
                </button> */}
              </label>
              <button type="button" className="cancel-btn">
                <img src={cancel} alt="cancel" />
              </button>
            </div>
            <div className="account-type">
              <label htmlFor="accountType">
                I hereby certify that the above information submitted is true
                and correct
              </label>
              <div className="options">
                <div className="option">
                  <input
                    type="radio"
                    value="trueInformation"
                    name="accountType"
                    id="accountType"
                  />{" "}
                  <span>Yes, I confirm</span>
                </div>
              </div>
            </div>
            <button type="submit" className="submit-btn">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Vendor;
