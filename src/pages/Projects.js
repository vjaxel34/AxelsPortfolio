import React from "react";
import "./Projects.css";
// import { NavLink } from 'react-router-dom';

function Projects() {
  return (
    <>
      <section className="projects-container">
        <section className="project-examples">
          <div className="project-box ex1">
            <a href="https://samueljr3.github.io/code4Justice/index.html" target="_blank" rel="noopener noreferrer">
              <h1 className="project-url">View Page</h1>
            </a>
           
          </div>
          <div className="project-box ex2">
            <a href="https://avmediav1.herokuapp.com/products" target="_blank" rel="noopener noreferrer">
              <h1 className="project-url">View Page</h1>
            </a>
           
          </div>
          <div className="project-box ex3">
          <a href="https://vjaxel34.github.io/numberguessgame/" target="_blank" rel="noopener noreferrer"><h1 className="project-url">View Page</h1></a>
       
          </div>
          <div className="project-box ex4">
          <a href="https://simple-login-app-av.herokuapp.com/route/logout" target="_blank" rel="noopener noreferrer"><h1 className="project-url">View Page</h1></a>
       
          </div>
          <div className="project-box ex5">
          <a href="https://tic-tac-toe-r2h.herokuapp.com/" target="_blank" rel="noopener noreferrer"><h1 className="project-url">View Page</h1></a>
       
          </div>
          <div className="project-box ex6">
          <a href="https://vjaxel34.github.io/pig-game/" target="_blank" rel="noopener noreferrer"><h1 className="project-url">View Page</h1></a>
       
          </div>
        </section>
      </section>
    </>
  );
}

export default Projects;
