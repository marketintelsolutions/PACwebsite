import React, { useEffect } from "react";
import SectionFour from "../components/about/SectionFour";
import SectionOne from "../components/about/SectionOne";
import SectionThree from "../components/about/SectionThree";
import SectionTwo from "../components/about/SectionTwo";

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <section className="about">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </section>
  );
};

export default About;
