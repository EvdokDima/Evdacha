import React from "react";
import FocusBlock from "./FocusBlock";
import AnimatedText from "./AnimatedText";

export default function Projects({ projects, title, sourceCodeLabel, stackLabel }) {
  return (
    <FocusBlock as="section" className="section" id="projects">
      <h2><AnimatedText text={title} /></h2>

      {projects.map((project) => (
        <FocusBlock as="article" className="card" key={project.name} minOpacity={0.28}>
          <div className="card-head">
            <h3><AnimatedText text={project.name} /></h3>
            <a href={project.link} target="_blank" rel="noreferrer">
              <AnimatedText text={sourceCodeLabel} />
            </a>
          </div>
          <p><AnimatedText text={project.description} /></p>
          <p className="card-stack"><AnimatedText text={`${stackLabel}: ${project.stack}`} /></p>
        </FocusBlock>
      ))}
    </FocusBlock>
  );
}
