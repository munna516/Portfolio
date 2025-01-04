import { useEffect, useState } from "react";
import Title from "../Title/Title";
import SkillCard from "./SkillCard";

const Skills = () => {
  const [allSkill, setAllSkill] = useState([]);
  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        setAllSkill(data);
      });
  }, []);
  return (
    <div id="skills">
      <Title title="Skills"></Title>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {allSkill.map((skill) => (
          <SkillCard key={skill.id} skill={skill}></SkillCard>
        ))}
      </div>
    </div>
  );
};

export default Skills;
