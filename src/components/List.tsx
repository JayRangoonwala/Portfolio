import React from "react";
import { Instagram, Github } from "lucide-react";
import {Link} from 'react-scroll';

const List: React.FC = () => {
  return (
    <div className="m-5 flex flex-col items-center justify-center">
      <ul className="flex flex-col text-slate-400">
        <Link to="about" smooth={true} className="hover:cursor-pointer hover:text-black hover:bg-slate-300 rounded-xl p-2 hover:scale-[1.03] transition ease-in-out">
          About
        </Link>
        <Link to="skills" smooth={true} className="hover:cursor-pointer hover:text-black hover:bg-slate-300 rounded-xl p-2 hover:scale-[1.03] transition ease-in-out">
          Skill
        </Link>
        <Link to="projects" smooth={true} className="hover:cursor-pointer hover:text-black hover:bg-slate-300 rounded-xl p-2 hover:scale-[1.03] transition ease-in-out">
          Project
        </Link>
        <Link to="education" smooth={true} className="hover:cursor-pointer hover:text-black hover:bg-slate-300 rounded-xl p-2 hover:scale-[1.03] transition ease-in-out">
          Education
        </Link>
      </ul>
      <ul className="flex gap-10 mt-5">
        <Instagram size={30} className="cursor-pointer" onClick={() => {window.open("https://www.instagram.com/jay._.rangoon/","_blank")}}/>
        <Github size={30} className="cursor-pointer" onClick={() => {window.open("https://github.com/JayRangoonwala","_blank")}}/>
        <img
          src="linkedin.png"
          alt="Linkedin"
          className="h-8 w-8 cursor-pointer bg-slate-300 rounded-lg"
          onClick={() => {window.open("https://linkedin.com/in/jay-rangoonwala-720361250","_blank")}}
        />
      </ul>
    </div>
  );
};

export default List;
