import React from "react";
import FocusBlock from "./FocusBlock";
import { skills, softSkills } from "../data/content";

export default function Skills() {
  return (
    <FocusBlock as="section" className="section" id="skills">
      <h2>Skills</h2>
      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <div className="card">
        <h3>Soft Skills</h3>
        <ul className="bullet-list">
          {softSkills.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </FocusBlock>
  );
}
