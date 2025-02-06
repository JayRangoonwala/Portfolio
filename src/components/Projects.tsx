import { useState, useEffect } from "react";
import React from "react";

interface Project {
  image_url: string;
  title: string;
  description: string;
  skills: string[];
  link: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/projects.json");
        if (!response.ok) throw new Error("Failed to fetch projects");
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap gap-6 max-md:p-0 max-md:gap-5 w-full items-center justify-center">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-slate-800 w-[300px] max-md:w-[150px] max-md:h-[320px] rounded-xl p-5 max-md:p-2 shadow-lg transition-all hover:scale-105 cursor-pointer flex flex-col justify-between items-center"
          onClick={() => window.open(project.link, "_blank")}
        >
          {/* Image */}
          <div className="w-[300px] h-[200px] max-md:w-[150px] max-md:h-[100px] flex justify-center items-center overflow-hidden rounded-lg">
            <img
              src={project.image_url}
              alt={project.title}
              className="w-full h-full object-cover px-5 max-md:px-2"
            />
          </div>

          {/* Content */}
          <h2 className="text-xl font-semibold mt-4 max-md:[font-size:14px] max-md:[line-height:16px] max-md:mt-2 text-center">{project.title}</h2>
          <p className="text-xs text-slate-400 text-center mt-2">
            {project.description}
          </p>

          {/* Skills */}
          <ul className="flex flex-wrap justify-center gap-3 mt-8 max-md:gap-1 max-md:mt-5">
            {project.skills.map((skill, idx) => (
              <li
                key={idx}
                className="bg-slate-900 text-center text-xs px-3 py-1 max-md:[font-size:9px] max-md:[line-height:11px] max-md:px-2 rounded-xl"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Projects;
