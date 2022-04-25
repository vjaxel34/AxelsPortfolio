import React from "react";
import "./MainNav.css";
import { NavLink } from 'react-router-dom';

function MainNav() {
  return (
    <>
    <section className="about-header">
      <section className="flex-container">
        <div className="flex-info">
          <h1 className="info-header">Axel Vargas-jimenes</h1>
          <img src="./images/AxelBlobBlue.png" alt="self" width="500px"></img>
        </div>
        <div className="flex-button">
          <NavLink className="link" to="/about">
            About Me
          </NavLink>

          <NavLink className="link" to="/projects">
            Projects
          </NavLink>
        </div>
      </section>
    </section>
    </>
  );
}

export default MainNav;
