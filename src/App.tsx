import React from "react";
import Image from "./components/Image";
import List from "./components/List";
import About from "./components/About";
import { Cloud } from "./components/Cloud";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { MoveRight } from "lucide-react";
import { Element } from "react-scroll";

const App: React.FC = () => {
  return (
    <section className="flex flex-row justify-between h-screen w-full font-semibold max-md:flex-col">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center px-5 py-10 z-10 md:fixed">
        <Image />
        <h1 className="text-3xl mt-2 ml-6">Jay M. Rangoonwala</h1>
        <h3>Software Engineer Trainee</h3>
        <br />
        <span className="text-sm text-center text-slate-400">
          Writing code that speaks, solving problems that matter. Always
          learning, always building.
        </span>
        <List />
      </div>

      <div className="relative z-50 w-full lg:w-1/2 md:ml-[50%] p-10 max-md:p-5 max-md:mt-[0px] mt-[20px]">
        <Element name="about">
          <h1 className="text-2xl ml-12 hover:text-slate-100 max-md:text-center max-md:ml-0 ">
            About
          </h1>
          <About />
        </Element>
        <div className="flex justify-center items-center">
          <Cloud />
        </div>
        <Element name="skills">
          <h1
            id="skills"
            className="text-2xl ml-14 hover:text-slate-100 mt-16 max-md:text-center max-md:ml-0"
          >
            Skills
          </h1>

          <Skills />
        </Element>
        <Element name="projects">
          <h1
            id="projects"
            className="text-2xl ml-14 hover:text-slate-100 mt-3 mb-8 max-md:text-center max-md:ml-0"
          >
            Projects
          </h1>
          <Projects />
        </Element>
        <span
          className="text-lg underline text-slate-400 my-10 w-full justify-center flex gap-1 items-center cursor-pointer"
          onClick={() =>
            window.open("https://github.com/JayRangoonwala", "_blank")
          }
        >
          See More Archieves
          <MoveRight className="size-6 pt-[5px]" />
        </span>
        <Element name="education">
          <h1
            id="education"
            className="text-2xl ml-14 hover:text-slate-100 mt-8 max-md:text-center max-md:ml-0 max-md:mb-5"
          >
            Education
          </h1>
          <Education />
        </Element>

        <h1 className=" my-5 flex w-full justify-center hover:text-slate-300 py-10 text-sm text-slate-400 max-md:my-2 max-md:py-5">
          <span className="text-slate-200 pr-1">NOTE - </span> Updates To This
          Portfolio Are Ongoing..
        </h1>
      </div>
    </section>
  );
};

export default App;
