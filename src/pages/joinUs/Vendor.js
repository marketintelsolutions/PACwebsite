import React from "react";
import vendorbg from "../../assets/images/vendorbg.png";
import SectionOne from "../../components/about/SectionOne";
import locationGrey from "../../assets/logos/locationGrey.svg";
import house from "../../assets/logos/house.svg";
import date from "../../assets/logos/date.svg";
import suitcase from "../../assets/logos/suitcase.svg";
import pen from "../../assets/logos/pen.svg";
import microscope from "../../assets/logos/microscope.svg";

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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Vendor;
