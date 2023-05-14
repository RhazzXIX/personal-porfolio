import React from "react";
import "../styles/Projects.css";

export default function Projects() {
  const projects = [];

  return (
    <>
      <h2>Projects</h2>
      <ul className="cardContainer">
        {projects.map((project) => {
          return (
            <li className="card" key={project.id}>
              <img src={project.imgSrc} />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
