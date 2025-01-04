import React from "react";

const Title = ({ title }) => {
  return (
    <div className="mt-10 mb-5 md:mt-20 md:mb-9">
      <h1 className="text-center text-4xl font-bold text-royal-blue">{title}</h1>
    </div>
  );
};

export default Title;
