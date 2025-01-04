import React from "react";
import Title from "../Title/Title";
import diuPic from "../../assets/Images/Daffodil.jpg";

const Education = () => {
  return (
    <div>
      <Title title="Education"></Title>
      <div className="md:flex items-center justify-center gap-10 md:gap-20 lg:gap-40 ">
        <div className="flex justify-center items-center">
          <img className="w-60 " src={diuPic} alt="" />
        </div>
        <div className="flex flex-col justify-start items-center md:items-start gap-4">
          <h1 className="text-navy font-bold text-xl md:text-2xl lg:text-4xl">
            Daffodil International University
          </h1>
          <h2 className="text-bold font-semibold text-center md:text-left md:text-lg lg:text-2xl">
            Bachelor of Science & Engineering
          </h2>
          <h2 className="text-bold font-semibold text-center md:text-left md:text-lg lg:text-2xl">
            Dept of Computer Science And Engineering
          </h2>
          <p className="text-navy font-medium text-lg">Jan 2022 - Present</p>
          <p className="text-navy font-medium">CGPA : 3.78</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
