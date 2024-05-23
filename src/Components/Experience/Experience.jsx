import React, { useState } from "react";
import "./Experience.css";
import in2info from "../../images/in2info-logo-white1NEW.png";
import codi from "../../images/NEW.png"

function Experience() {
  const [lastHovered, setLastHovered] = useState("experience");

  const handleMouseEnter = (target) => {
    setLastHovered(target);
  };

  return (
    <div className=" h-[auto]">
      <div className="experience-container">
        <div className="experience-titles">
          <div className="exp">
            <img
              className=" w-[250px]"
              src={in2info}
              alt="in2info"
              onMouseEnter={() => handleMouseEnter("in2info")}
            />
            <h1>in2info</h1>
          </div>
          <div className="dashed"></div>
          <div className="exp2">
            <img
              className=" w-[170px]"
              src={codi}
              alt="codi"
              onMouseEnter={() => handleMouseEnter("Codi")}
            />
            <h1>Codi tech</h1>
          </div>
        </div>
        <div className="experience-explanation">
          {lastHovered === "in2info" && (
            <div className="explanation-section">
              <img
                id="in2info"
                className="image-explanation"
                src={in2info}
                alt="in2info"
              />
              <h1>Aug 2023 - Present</h1>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit
              </p>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex
              </p>
            </div>
          )}
          {lastHovered === "Codi" && (
            <div className="explanation-section">
              <img
                id="Codi"
                className="image-explanation"
                src={in2info}
                alt="in2info"
              />
              <h1>Aug 2022 - Sep 2023</h1>
              <p>
                " ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit
              </p>
              <p>
                "ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem
                ipsum didunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam,
              </p>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex
              </p>
            </div>
          )}

          {lastHovered === "experience" && (
            <div className="default-section">
              <h1>EXPERIENCE</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Experience;
