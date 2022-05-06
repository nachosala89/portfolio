import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section>
      <h2>My recent works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}

export default Projects;