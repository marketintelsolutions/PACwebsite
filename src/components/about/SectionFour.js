import React from "react";
import businessMan from "../../assets/images/businessMan.png";
import team1 from "../../assets/images/team-1.jpg";
import team2 from "../../assets/images/team-2.jpg";
import team3 from "../../assets/images/team-3.jpg";
import placeholder from "../../assets/images/placeholder.png";

const SectionFour = () => {
  return (
    <section className="about-section-four">
      <div className="section-center">
        <h1>Our Leadership</h1>

        <div className="bottom">
          <p>board of directors</p>
          <div className="items">
            <div className="item">
              <img src={team1} alt="businessMan" />
              <div className="text">
                <h2>Dolapo Atekoja</h2>
                <p>Chairman</p>
                <button>read bio</button>
              </div>
            </div>
            <div className="item">
              <img src={team2} alt="businessMan" />
              <div className="text">
                <h2>Chris Oshiafi</h2>
                <p>Chief Executive Officer</p>
                <button>read bio</button>
              </div>
            </div>
            <div className="item">
              <img src={team3} alt="businessMan" />
              <div className="text">
                <h2>Sina Alimi</h2>
                <p>Deputy Chief Executive Officer</p>
                <button>read bio</button>
              </div>
            </div>
            <div className="item">
              <img src={placeholder} alt="placeholder" />
              <div className="text">
                <h2>Eric Okoruwa</h2>
                <p>Director</p>
                <button>read bio</button>
              </div>
            </div>
            <div className="item">
              <img src={placeholder} alt="placeholder" />
              <div className="text">
                <h2>Tessa Egbe Ikimi</h2>
                <p>Director</p>
                <button>read bio</button>
              </div>
            </div>
            <div className="item">
              <img src={placeholder} alt="placeholder" />
              <div className="text">
                <h2>Garba Ahmed</h2>
                <p>Director</p>
                <button>read bio</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
