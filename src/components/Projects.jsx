import React from "react";
import "../styles/Projects.css";
import picSrc from "../assets/images/pBG.jpg";

export default function Projects() {
  const projects = [
    {
      imgSrc: picSrc,
      name: "Photo-tagging-app",
      description:
        'A "Where is Waldo" like App, where you need to look for a list of characters on the image. A project using firebase as a backend service.',
      id: 1,
    },
    {
      imgSrc: picSrc,
      name: "Shopping cart",
      description:
        "An E-commerce project. Used DummyJSON API as a simulation for backend communication. React-router-dom for a client side routing",
      id: 2,
    },
    {
      imgSrc: picSrc,
      name: "Memory Card",
      description:
        "A game app where to test your memory. Utilizing React Library functional components.",
      id: 3,
    },
    {
      imgSrc: picSrc,
      name: "Battleship",
      description:
        'A game app based on the board game "Battleship". Created using only Javascript, HTML & CSS',
      id: 4,
    },
    {
      imgSrc: picSrc,
      name: "Weather App",
      description:
        'An app that shows the current weather of the entered. Portrays my ability to communicate with the backend and handling "Promises"',
      id: 5,
    },
    {
      imgSrc: picSrc,
      name: "Restaurant",
      description:
        "A Restaurant page. A project showcasing webpack, ES6 Modules",
      id: 6,
    },
  ];

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
