import React from "react";
import "./Project.css";
import sytycc from "./2024-05-23 (9).png";
import palTechWeather from "./2024-05-23 (10).png";
import incomeTracker from "./2024-05-23 (11).png";
import mordecaiRigby from "./2024-05-23 (12).png";
import divineCounter from "./2024-05-23 (14).png";

const Project = ({ title, description, imageUrl, link }) => {
  return (
    <>
      <h1 id="projects">Projects</h1>
      <div className="body-wrap">
        <div className="project-card">
          <img
            src={sytycc}
            alt={`${sytycc} screenshot`}
            className="project-image"
          />
          <div className="project-details">
            <h3>So you think you can code</h3>
            <p>
              A small get away to refresh web Skills in multiple languages with
              multiple questions
            </p>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            src={palTechWeather}
            alt={`${palTechWeather} screenshot`}
            className="project-image"
          />
          <div className="project-details">
            <h3>palTechWeather</h3>
            <p>
              Connecting to a weather API to display real time data on weather
              all over the world
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            src={mordecaiRigby}
            alt={`${mordecaiRigby} screenshot`}
            className="project-image"
          />
          <div className="project-details">
            <h3>mordecai and Rigby</h3>
            <p>
              for regular show lovers. The page displays random jokes as might
              be said by the duo. Data from a jokeAPI
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            src={incomeTracker}
            alt={`${incomeTracker} screenshot`}
            className="project-image"
          />
          <div className="project-details">
            <h3>Income & Tracker</h3>
            <p>
              A nice web page to quickly check spending and earning with the
              option to print a pdf doc
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            src={divineCounter}
            alt={`${divineCounter} screenshot`}
            className="project-image"
          />
          <div className="project-details">
            <h3>Divine Counter</h3>
            <p>
              A nice page to ensure the counting of heads at events (this was
              tailored for church)
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            src={divineCounter}
            alt={`${divineCounter} screenshot`}
            className="project-image"
          />
          <div className="project-details">
            <h3>Divine Counter</h3>
            <p>
              A nice page to ensure the counting of heads at events (this was
              tailored for church)
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
