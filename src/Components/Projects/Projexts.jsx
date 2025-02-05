import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import ProjectCard from "./ProjectCard";

const Projexts = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/allProjects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return (
    <div id="project">
      <Title title="Projects"></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projexts;
