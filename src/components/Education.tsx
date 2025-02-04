import React, { useState, useEffect } from "react";

interface Education {
  title: string;
  location: string;
  year: string;
  description: string;
  grade: string;
}

const Education: React.FC = () => {
  const [education, setEducation] = useState<Education[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/education.json");
      if (response.ok) {
        const data: Education[] = await response.json();
        setEducation(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("education", education);

  return (
    <section>
      {education.map((data1) => {
        console.log(data1);
        return (
          <div className="flex mx-14 mt-5 hover:bg-slate-700 bg-transparent items-center transition ease-in-out rounded-2xl">
            <h3 className="p-7 text-nowrap text-slate-400 w-[160px]">
              {data1.year}
            </h3>
            <div className="p-3">
              <h1 className="text-lg">{data1.title}</h1>
              <span className="text-wrap text-slate-500 text-sm">
                {data1.location}
              </span>
              {data1.description ? (
                <>
                  <br />
                  <span className="text-wrap text-slate-500 text-sm">
                    {data1.description}
                  </span>{" "}
                </>
              ) : null}
              <br />
              <span className="text-wrap text-slate-500 text-sm">
                {data1.grade}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Education;
