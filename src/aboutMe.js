import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me" id="about">
      <h1>About Me</h1>
      <div className="row-wrap">
        <p className="p-tags">
          Hello, I'm Engineer Ajayi, a self-taught full-stack developer
          passionate about creating innovative solutions using the MERN stack.
          With a strong foundation in Node.js, React, MongoDB, and Express, I
          thrive on tackling complex problems and turning ideas into reality.
        </p>
        <p className="p-tags">
          My journey into software engineering has honed my problem-solving
          skills, allowing me to approach challenges with creativity and
          perseverance. I believe in continuous learning and staying updated
          with the latest technologies to deliver cutting-edge solutions.
        </p>
        <p className="p-tags">
          Whether it's building scalable web applications, designing intuitive
          user interfaces, or optimizing backend systems, I enjoy every aspect
          of the development process. I am dedicated to crafting efficient,
          elegant, and user-centric solutions that make a difference.
        </p>
        <p className="p-tags">
          Outside of coding, I love exploring new technologies, attending tech
          meetups, and contributing to open-source projects. Let's connect and
          collaborate on exciting projects that push the boundaries of
          innovation!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
