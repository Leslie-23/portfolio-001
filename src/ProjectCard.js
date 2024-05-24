import React from "react";
import ProjectCard from "./ProjectCard";
import "./Project.css";

const ProjectData = () => {
  const projectData = [
    {
      title: "Project One",
      description: "This is a brief description of project one.",
      imageUrl: "https://via.placeholder.com/300",
      link: "https://example.com/project-one",
    },
    {
      title: "Project Two",
      description: "This is a brief description of project two.",
      imageUrl: "https://via.placeholder.com/300",
      link: "https://example.com/project-two",
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container" id="projects">
      <h2>My ProjectData</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectData;
