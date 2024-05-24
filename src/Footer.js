import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  const date = new Date().getFullYear.toString;
  const day = new Date().getTime;
  return (
    <>
      <div className="footer-body" id="footer">
        <p>Copyright &copy; 2024. All Rights reserved</p>
        <div className="social-media-buttons">
          <a
            href="https://github.com/Leslie-23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="mailto:leslieajayi27@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
