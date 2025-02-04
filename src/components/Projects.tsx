import { useState, useEffect } from "react";
import React from "react";

interface Project {
  image_url: string;
  title: string;
  description: string;
  skills: string[];
}

const Projects: React.FC = () => {
  const [project, setProject] = useState<Project[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/projects.json");
      if (response.ok) {
        const data: Project[] = await response.json();
        setProject(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("project", project);

  return (
    <>
      {project.map((data: Project) => {
        return (
          <section
            className="mt-5 px-16"
            onClick={() => window.open(data.link, "_blank")}
          >
            <div className="flex items-center justify-between cursor-pointer">
              <img src={data.image_url} className="h-[150px] w-[160px]" />
              <div className="flex flex-col items-start px-4 py-3 bg-slate-700 h-[150px] w-full rounded-r-lg">
                <h1 className="text-xl">{data.title}</h1>
                <span className="text-xs text-slate-400">
                  {data.description}
                </span>
                <ul className="flex gap-3 mt-4">
                  {data.skills.map((skill: string) => {
                    return (
                      <li className="bg-slate-900 p-[6px] px-[8px] text-xs rounded-xl">
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Projects;
