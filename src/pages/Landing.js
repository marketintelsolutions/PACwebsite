import React from "react";
import SectionOne from "../components/SectionOne";
import SectionThree from "../components/SectionThree";
import SectionTwo from "../components/SectionTwo";
import SectionFour from "../components/SectionFour";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <main className="landing">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </main>
  );
};

export default Landing;
