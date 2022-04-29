import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="container mx-auto px-20">
      <h2>My recent works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProjectCard />
      </div>
    </section>
  );
}

export default Projects;