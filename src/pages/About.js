import React from "react";
// import { NavLink } from "react-router-dom";
// import Projects from "./Projects";
import "./About.css";
function About() {
  return (
    <>
      <section className="about-author">
        <div className="work-statement">
          <div className="work-experience">
          <div className="work-image">
          <img src="./images/untitled.png" alt="self" width="500px" />
        </div>
        <div className="about-me">
            <h1>About Me</h1>
            <p>
              I have learned to adapt to different environments by communicating
              effectively and applying professional skills to the work
              environment. I demonstrated a strong work ethic and leadership in
              various jobs. With my experience, I strive to make progress and
              help the work environment a better place. I like to learn new skills such as cooking, styling, and flexibility outside of work. I enjoy volunteering to help others and become a better person whenever I have time.
            </p>
          </div>
          </div>
          <div className="author-skills">
            <h1>Skills</h1>
            <div className="skills">
              <div>
                <h2>HTML</h2>
                <p>As an apprentice at Road to Hire, I developed my technical skills by using HTML in projects, assignments, and weekly challenges. HTML is the first language I learned as I continued to learn to code. As I made progress, I learned to write Semantic HTML. </p>
              </div>
              <div>
                <h2>CSS</h2>
                <p>Using external CSS allowed me to display images, style, color, etc. I used external CSS to style the portfolio that you are viewing now. With CSS, I learned to organize my content using Flexbox and Grid. </p>
              </div>
              <div>
                <h2>React.js</h2>
                <p>After five months of intense training with the Road to Hire program, I expanded my knowledge and used what I had learned to build single-page websites using React.js. I have created e-commerce websites using HTML, CSS, MySQL, and React.js. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Projects /> */}
    </>
  );
}

export default About;
