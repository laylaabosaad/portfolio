import "./Skills.css";
import react from "../../images/react.png";
import tailwind from "../../images/tailwind.png";
import php from "../../images/php.png";
import laravel from "../../images/laravel.png";
import nodejs from "../../images/nodejs.png";
import photoshop from "../../images/photoshop.png";
import mysql from "../../images/mySQL.png";
import figma from "../../images/figma.png";
import github from "../../images/gitHub.png";
import git from "../../images/git.png";
import mongo from "../../images/mongodb.png"
import phpMyADmin from "../../images/phpMyAdmin.png"


function Skills() {
  return (
    <div class="p-[5%]">
      <div>
        <div className="skills">
          <h1>SKILLS</h1>
        </div>
        <div className="imagesSkill">
          <div className="image">
            <img className="w-[100px] h-[100px]" src={react}></img>
            <h1>ReactJS</h1>
          </div>

          <div className="image">
            <img className="w-[100px] h-[100px]" src={tailwind}></img>

            <h1>Tailwind CSS</h1>
          </div>
          <div className="image">
            <img className="w-[130px] h-[100px]" src={nodejs}></img>
            <h1>Node JS</h1>
          </div>
          <div className="image">
            <img className="w-[100px] h-[100px]" src={php}></img>

            <h1>PHP</h1>
          </div>
          <div className="image">
            <img className="w-[100px] h-[100px]" src={laravel}></img>
            <h1>laravel</h1>
          </div>
          <div className="image">
            <img className="w-[100px] h-[100px]" src={figma}></img>

            <h1>Figma</h1>
          </div>
          <div className="image">
            <img className="w-[130px] h-[100px]" src={photoshop}></img>

            <h1>Adobe Photoshop</h1>
          </div>
          <div className="image">
            <img className="w-[100px] h-[100px]" src={mysql}></img>

            <h1>MySQL</h1>
          </div>
          <div className="image">
            <img className="w-[150px] h-[100px]" src={git}></img>

            <h1>GIT</h1>
          </div>

          <div className="image">
            <img className="w-[100px] h-[100px]" src={github}></img>

            <h1>gitHub</h1>
          </div>
          <div className="image">
            <img className="w-[140px] h-[100px]" src={phpMyADmin}></img>

            <h1>phpMyAdmin</h1>
          </div>
          <div className="image">
            <img className="w-[140px] h-[100px]" src={mongo}></img>

            <h1>MongoDB</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
