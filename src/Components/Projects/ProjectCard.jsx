import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { image, name, livelink, id } = project || {};

  return (
    <div className="card bg-base-100  shadow-xl hover:scale-105 transition overflow-hidden">
      <figure className="p-2">
        <img className="h-52 rounded-lg" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl text-navy font-bold">{name}</h2>
        <div className="card-actions justify-center mt-4">
          <a href={livelink} target="_blank">
            <button className="btn bg-royal-blue text-white hover:bg-navy-light ">
              Live Link
            </button>
          </a>

          <Link
            to={`/project/${id}`}
            className="btn bg-royal-blue text-white hover:bg-navy-light "
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
