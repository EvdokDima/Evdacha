import React from "react";
import FocusBlock from "./FocusBlock";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <FocusBlock as="section" className="section" id="experience">
      <h2>Experience</h2>
      {experience.map((job) => (
        <FocusBlock as="article" className="card" key={job.title} minOpacity={0.28}>
          <div className="card-head">
            <h3>{job.title}</h3>
            <span>{job.meta}</span>
          </div>
          <ul className="bullet-list">
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </FocusBlock>
      ))}
    </FocusBlock>
  );
}
