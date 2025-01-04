import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";


const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
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
      <h2 className="mt-24 mb-5 text-center text-4xl font-bold text-royal-blue">
        <Typewriter
          words={[project?.name]}
          loop={50}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>

      
    </div>
  );
};

export default ProjectDetails;
