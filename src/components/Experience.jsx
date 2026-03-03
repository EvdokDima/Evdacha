import React from "react";
import FocusBlock from "./FocusBlock";
import AnimatedText from "./AnimatedText";

export default function Experience({ experience, title }) {
  return (
    <FocusBlock as="section" className="section" id="experience">
      <h2><AnimatedText text={title} /></h2>
      {experience.map((job) => (
        <FocusBlock as="article" className="card" key={job.title} minOpacity={0.28}>
          <div className="card-head">
            <h3><AnimatedText text={job.title} /></h3>
            <span><AnimatedText text={job.meta} /></span>
          </div>
          <ul className="bullet-list">
            {job.points.map((point) => (
              <li key={point}><AnimatedText text={point} /></li>
            ))}
          </ul>
        </FocusBlock>
      ))}
    </FocusBlock>
  );
}
