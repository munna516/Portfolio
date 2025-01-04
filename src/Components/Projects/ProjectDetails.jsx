import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const {
    name,
    image,
    description,
    livelink,
    client,
    server,
    technology,
    features,
    limitaion,
  } = project || {};
  useEffect(() => {
    fetch("/allProjects.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const projects = data.find((item) => item.id == id);
        setProject(projects);
      });
  }, []);
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="mt-24 mb-5 text-center md:text-2xl lg:text-4xl font-bold text-royal-blue">
        <Typewriter
          words={[name]}
          loop={50}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>

      <div className="mt-7">
        <div className="border-2 rounded-xl p-4 md:p-10 lg:p-20">
          <img src={image} alt="" />
        </div>
        <div>
          <h1 className="mt-5 text-navy px-3 md:px-5 lg:px-10">
            {description}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8  px-3 md:px-5 lg:px-10">
            <div className="">
              <h1 className="text-lg md:text-xl lg:text-3xl text-royal-blue  mb-3 font-bold">
                {" "}
                <i>Technology</i>{" "}
              </h1>
              {technology &&
                technology.map((tech) => (
                  <li className="text-lg font-semibold text-navy">{tech}</li>
                ))}
            </div>
            <div>
              <h1 className="text-lg md:text-xl lg:text-3xl text-royal-blue mb-3 font-bold">
                Features
              </h1>
              {features &&
                features.map((feature) => (
                  <li className="text-lg font-semibold text-navy">{feature}</li>
                ))}
            </div>
            <div>
              <h1 className="text-lg md:text-xl lg:text-3xl text-royal-blue mb-3 font-bold">
                Limitaions
              </h1>
              {limitaion &&
                limitaion.map((limit) => (
                  <li className="text-lg font-semibold text-navy">{limit}</li>
                ))}
            </div>
          </div>
          <div className="my-12 flex justify-center gap-4 lg:gap-10">
            <a href={livelink} target="_blank">
              <button className="btn bg-royal-blue text-white hover:bg-navy-light ">
                Live URL
              </button>
            </a>
            <a href={client} target="_blank">
              <button className="btn bg-royal-blue text-white hover:bg-navy-light ">
                Client Repo
              </button>
            </a>
            <a href={server} target="_blank">
              <button className="btn bg-royal-blue text-white hover:bg-navy-light ">
                Server Repo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
