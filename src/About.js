import React from "react";
import { useState, useEffect } from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faPython,
  faReact,
  faNodeJs,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import profile from "./profile.jpg";

const About = () => {
  const words = [
    "amazing",
    "wonderful",
    "great",
    "exciting",
    "interesting",
    "fresh",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper" id="#about">
      <div className="row">
        <div className="body mid-text">
          <h1 className="h1">
            Full Stack <br />
            Developer
          </h1>
          <p className="p typing">
            I craft seamless and dynamic web experiences from end to end.
            <br />
            Specializing in both back-end and front-end development, I transform
            ideas into reality.
          </p>
          <p>
            Let's build something{" "}
            <span className="display">
              {words[currentWordIndex].toLocaleUpperCase()}
            </span>{" "}
            together!
          </p>

          <div className="tech-icons-container">
            <br />
            <p>Tech Stack |</p>
            <FontAwesomeIcon
              icon={faHtml5}
              size="2x"
              className="icon"
              title="HTML5"
            />
            <FontAwesomeIcon
              icon={faCss3Alt}
              size="2x"
              className="icon"
              title="CSS3"
            />
            <FontAwesomeIcon
              icon={faJs}
              size="2x"
              className="icon"
              title="JavaScript"
            />
            <FontAwesomeIcon
              icon={faPython}
              size="2x"
              className="icon"
              title="Python"
            />
            <FontAwesomeIcon
              icon={faJava}
              size="2x"
              className="icon"
              title="Java"
            />
            <FontAwesomeIcon
              icon={faDatabase}
              size="2x"
              className="icon"
              title="MongoDB"
            />
            <FontAwesomeIcon
              icon={faReact}
              size="2x"
              className="icon"
              title="React"
            />
            <FontAwesomeIcon
              icon={faNodeJs}
              size="2x"
              className="icon"
              title="Node.js"
            />

            <div className="custom-icon" title="Django">
              Dj
            </div>
            <div className="custom-icon" title="Express">
              Ex
            </div>
          </div>
        </div>
        <img src={profile} class="profile-pic" alt="profilePic" />
      </div>
    </div>
  );
};

export default About;
