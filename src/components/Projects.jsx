import React from "react";
import FocusBlock from "./FocusBlock";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <FocusBlock as="section" className="section" id="projects">
      <h2>Projects</h2>

      {projects.map((project) => (
        <FocusBlock as="article" className="card" key={project.name} minOpacity={0.28}>
          <div className="card-head">
            <h3>{project.name}</h3>
            <a href={project.link} target="_blank" rel="noreferrer">
              Source Code
            </a>
          </div>
          <p>{project.description}</p>
          <p className="card-stack">Stack: {project.stack}</p>
        </FocusBlock>
      ))}
    </FocusBlock>
  );
}
