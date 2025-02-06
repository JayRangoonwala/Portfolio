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
    <section className="w-full flex flex-col max-md:gap-3">
      {education.map((data1) => {
        console.log(data1);
        return (
          <div className="flex mx-14 mt-5 hover:bg-slate-700 bg-transparent items-center transition ease-in-out rounded-2xl max-md:m-0">
            <h3 className="p-7 text-nowrap text-slate-400 w-[160px] max-md:w-[80px] max-md:p-3 max-md:[font-size:12px] max-md:[line-height:14px]">
              {data1.year}
            </h3>
            <div className="p-3 max-md:px-5">
              <h1 className="text-lg max-md:text-base max-md:[font-size:12px] max-md:[line-height:14px]">{data1.title}</h1>
              <span className="text-wrap text-slate-500 text-sm max-md:[font-size:10px] max-md:[line-height:12px]">
                {data1.location}
              </span>
              {data1.description ? (
                <>
                  <br />
                  <span className="text-wrap text-slate-500 text-sm max-md:text-xs max-md:[font-size:10px] max-md:[line-height:12px]">
                    {data1.description}
                  </span>{" "}
                </>
              ) : null}
              <br />
              <span className="text-wrap text-slate-500 text-sm max-md:[font-size:10px] max-md:[line-height:12px]">
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
