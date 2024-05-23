import graduate from "../../images/graduate.png";

function About() {
  return (
    <div className="w-[100%] h-[100vh] flex justify-evenly items-center">
      <div className="w-[40%] h-[80%] border-[1px] border-[pink]">
        <h1 className="text-[7vw] leading-[1]">
          WELCOME TO MY PORTFOLIO
        </h1>
      </div>
      <div className="border-[1px] border-[orange] h-[80%] w-[30%] rounded-[250px]">
        <img
          src={graduate}
          className="object-cover h-[100%]  rounded-[250px]"
          alt="graduate"
        ></img>
      </div>
    </div>
  );
}

export default About;
