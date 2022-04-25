import React from "react";
import "./MainFooter.css";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
function MainFooter() {
  return (
    <div>
      <section className="footer-flex">
        <div>
          <h1>Follow Me</h1>
          <p>Learn about my work and experience.</p>
        </div>
        <div className="contact-icons">
          <a href="https://github.com/vjaxel34">
            <BsGithub className="icons" />
          </a>
          <a href="twitter.com">
            <BsTwitter className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/axel-vargas-jimenes2001/">
            <BsLinkedin className="icons" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default MainFooter;
