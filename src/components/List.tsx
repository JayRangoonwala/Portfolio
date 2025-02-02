import React from "react";
import { Instagram,Github } from 'lucide-react';

const List: React.FC = () => {
  return (
    <div className="m-5 flex flex-col items-center justify-center">
      <ul className="flex flex-col text-slate-400">
        <li className="hover:cursor-pointer hover:text-black hover:bg-slate-300 rounded-xl p-2 hover:scale-[1.03] transition ease-in-out">About</li>
        <li className="hover:cursor-pointer hover:text-black hover:bg-slate-300 rounded-xl p-2 hover:scale-[1.03] transition ease-in-out">Skill</li>
        <li className="hover:cursor-pointer hover:text-black hover:bg-slate-300 rounded-xl p-2 hover:scale-[1.03] transition ease-in-out">Project</li>
        <li className="hover:cursor-pointer hover:text-black hover:bg-slate-300 rounded-xl p-2 hover:scale-[1.03] transition ease-in-out">Education</li>
      </ul>
      <ul className="flex gap-10 mt-5">
        <Instagram size={30} className="cursor-pointer"/>
        <Github size={30} className="cursor-pointer"/>
        <img src="linkedin.png" alt="" className="h-8 w-8 cursor-pointer bg-slate-300 rounded-lg" />
      </ul>
    </div>
  );
};

export default List;
