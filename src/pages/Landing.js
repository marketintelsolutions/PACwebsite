import React from "react";
import SectionOne from "../components/SectionOne";
import SectionThree from "../components/SectionThree";
import SectionTwo from "../components/SectionTwo";
import SectionFour from "../components/SectionFour";

const Landing = () => {
  return (
    <main className="landing">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </main>
  );
};

export default Landing;
