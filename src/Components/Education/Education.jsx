import "./Education.css";
import graduate from "../../images/gradutionPic.png";

function Education() {
  return (
    <div id="education" class="bg-[white] h-screen education">
      <div className="education-title">
        <h1>EDUCATION</h1>
      </div>
      <div class="container">
        <div class="palette text-[black]">
          <div class="color">
            <img src={graduate}></img>
            <span>
              <h1> Master 1 in Applied Animal Sciences </h1>
              <h1>Lebanese University, Faculty of Science | 2020-2022.</h1>
            </span>
          </div>
          <div class="color">
            <img src={graduate}></img>
            <span>
              <h1> Bachelor degree in Biology </h1>
              <h1>Lebanese University, Faculty of Science | 2017-2020.</h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
