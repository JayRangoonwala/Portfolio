import React from "react";

const Skills: React.FC = () => {
  return (
    <>
      <div className="relative flex gap-x-5 gap-y-5 p-8 flex-wrap ml-16 mt-10 items-center text-center box-border ">
        <div className="group h-[100px] w-[100px] flex flex-col items-center">
          <img src="react.svg" alt="React" className="object-cover h-16 w-16 transition-opacity ease-in-out"/>
          <span className="skill-span">REACT</span>
        </div>
        <div className="group h-[100px] w-[100px] flex flex-col items-center">
          <img src="nodejs.svg" alt="Node Js" className="h-16 w-16" />
          <span className="skill-span">NODE JS</span>
        </div>
        <div className="group h-[100px] w-[100px] flex flex-col items-center">
          <img src="express.svg" alt="Express" className="h-16 w-16" />
          <span className="skill-span">EXPRESS</span>
        </div>
        <div className="group h-[100px] w-[100px] flex flex-col items-center">
          <img src="mongodb.svg" alt="Mongodb" className="h-16 w-16" />
          <span className="skill-span">MONGO DB</span>
        </div>
        <div className="group h-[100px] w-[100px] flex flex-col items-center">
          <img src="tailwind.svg" alt="Tailwindcss" className="h-16 w-16" />
          <span className="skill-span">TAILWINDCSS</span>
        </div>
        <div className="group h-[100px] w-[100px] flex flex-col items-center">
          <img src="redux.svg" alt="Redux" className="h-16 w-16" />
          <span className="skill-span">REDUX</span>
        </div>
        <div className="group h-[100px] w-[100px] flex flex-col items-center">
          <img src="javascript.svg" alt="Javascript" className="h-16 w-16 px-2"/>
          <span className="skill-span">JAVASCRIPT</span>
        </div>
        <div className="group h-[100px] w-[100px] flex flex-col items-center">
          <img src="typescript.svg" alt="Typescript" className="h-16 w-16 px-2"/>
          <span className="skill-span">TYPESCRIPT</span>
        </div>
        <div className="group h-[100px] w-[100px] flex flex-col items-center">
          <img src="html-1.svg" alt="HTML" className="h-16 w-16 px-2" />
          <span className="skill-span">HTML</span>
        </div>
        <div className="group h-[100px] w-[100px] flex flex-col items-center">
          <img src="css3.svg" alt="CSS" className="h-16 w-16 px-1" />
          <span className="skill-span">CSS</span>
        </div>
        <div className="group h-[100px] w-[100px] flex flex-col items-center">
          <img src="c-1.svg" alt="C" className="h-16 w-16 px-2" />
          <span className="skill-span">C</span>
        </div>
        <div className="group h-[100px] w-[100px] flex flex-col items-center">
          <img src="python.svg" alt="Python" className="h-16 w-16 px-2" />
          <span className="skill-span">PYTHON</span>
        </div>
        <div className="group h-[100px] w-[100px] flex flex-col items-center">
          <img src="github.svg" alt="Github" className="h-16 w-16 px-2" />
          <span className="skill-span">GIT-GITHUB</span>
        </div>
      </div>
    </>
  );
};

export default Skills;
