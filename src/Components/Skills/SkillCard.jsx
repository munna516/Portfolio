import React from "react";

const skillCard = ({ skill }) => {
  const { name, image } = skill || {};
  return (
    <div className="card bg-base-100 shadow-xl hover:scale-105 transition overflow-hidden">
      <figure className="p-5">
        <img className="w-32 h-24" src={image} alt={name} />
      </figure>
      <h1 className="flex justify-center py-3 text-xl font-bold text-royal-blue">{name}</h1>
    </div>
  );
};

export default skillCard;
