import React from "react";
import FocusBlock from "./FocusBlock";
import { education } from "../data/content";

export default function Education() {
  return (
    <FocusBlock as="section" className="section" id="education">
      <h2>Education</h2>
      {education.map((item) => (
        <FocusBlock as="article" className="card" key={item.place} minOpacity={0.28}>
          <div className="card-head">
            <h3>{item.place}</h3>
            <span>{item.period}</span>
          </div>
          <p>{item.description}</p>
        </FocusBlock>
      ))}
    </FocusBlock>
  );
}
