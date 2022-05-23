import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="green-bcg p-10 rounded-3xl">
      <h2 className="poppins text-4xl">My recent works</h2>
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