import React from "react";
import Image from "./components/Image";
import List from "./components/List";
import About from "./components/About";
import { Cloud } from "./components/Cloud";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";

const App: React.FC = () => {
  return (
    <section className="flex flex-col  lg:flex-row justify-between h-screen w-full font-semibold">
      <div className="w-1/2 border-r-2 flex flex-col items-center justify-center text-center p-10 lg:fixed z-10">
        <Image />
        <h1 className="text-3xl mt-2 ml-6">Jay M. Rangoonwala</h1>
        <h3>Software Engineer Trainee</h3>
        <br />
        <span className="text-sm text-slate-400">
          Writing code that speaks, solving problems that matter. <br />
          Always learning, always building.
        </span>
        <List />
      </div>
      <div className="relative z-50 w-1/2 ml-auto mt-24">
        <h1 className="text-2xl ml-10 hover:text-slate-100">About</h1>
        <About />
        <Cloud />
        <h1 className="text-2xl ml-14 hover:text-slate-100 mt-16">Skills</h1>
        <Skills />
        <h1 className="text-2xl ml-14 hover:text-slate-100 mt-16">Projects</h1>
        <Projects/>
        <Projects/>
        <Projects/>
        <h1 className="text-2xl ml-14 hover:text-slate-100 mt-16">Education</h1>
        <Education/>
        <Education/>

        <h1 className="m-10 mx-16 text-slate-400">NOTE : Updates To This Portfolio Are Ongoing..</h1>
      </div>
    </section>
  );
};

export default App;
