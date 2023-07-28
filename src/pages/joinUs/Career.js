import React, { useEffect, useState } from "react";
import SectionOne from "../../components/about/SectionOne";
import careerBg from "../../assets/images/careerBg.png";
import { careerData } from "../../utils/career";
import CareerBlock from "../../components/joinus/CareerBlock";
import CareerBlockReversed from "../../components/joinus/CareerBlockReversed";

const Career = () => {
  const [subject, setSubject] = useState("test subject");
  const [message, setMessage] = useState("");
  const [mailLink, setMailLink] = useState("");

  useEffect(() => {
    updateMailLink();
  }, [subject, message]);

  const updateMailLink = () => {
    const mailString =
      `?subject=` +
      encodeURIComponent(subject) +
      `&body=` +
      encodeURIComponent(message);
    setMailLink("mailto:person@email.com" + mailString);

    // console.log(mailString);
  };

  return (
    <section className="career">
      <SectionOne color="#38B6FF" text="Careers" img={careerBg} />
      <div className="career-section-two">
        <div className="content">
          {careerData.map((item, index) => {
            if (index % 2 !== 0)
              return (
                <CareerBlockReversed
                  key={index}
                  {...item}
                  mailLink={mailLink}
                />
              );
            return (
              <CareerBlock
                key={index}
                {...item}
                mailLink={mailLink}
                setSubject={setSubject}
              />
            );
          })}
        </div>
        <div className="join">
          <h1>Join Us</h1>
          <p>
            It’s never been easier to find your perfect role that meets your
            career ambitions. Head over to our career page to explore an
            opportunity at PAC Holdings.
          </p>
          <button>View All Jobs</button>
        </div>
      </div>
    </section>
  );
};

export default Career;
