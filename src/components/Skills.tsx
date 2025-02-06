import React from "react";
import { useState, useEffect } from "react";

interface Skill {
  image_url: string;
  title: string;
}

const Skills: React.FC = () => {
  const [skill, setSkill] = useState<Skill[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/skills.json");
      if (response.ok) {
        const data: Skill[] = await response.json();
        setSkill(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative flex gap-5 p-8 flex-wrap ml-16 mt-4 items-center justify-center text-center box-border max-md:w-full max-md:m-0 max-md:gap-2">
      {skill.map((skill) => {
        return (
          <div className="group h-[100px] w-[100px] max-md:h-[50px] max-md:w-[50px] flex flex-col items-center">
            <img
              src={skill.image_url}
              alt={skill.title}
              className="object-cover h-14 w-14 max-md:h-7 max-md:w-7 transition-opacity ease-in-out"
            />
            <span className="skill-span">{skill.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
