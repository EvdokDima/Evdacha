import React from "react";
import FocusBlock from "./FocusBlock";
import { skills, softSkills } from "../data/content";

const skillGroups = [
  { key: "backend", title: "Backend" },
  { key: "frontend", title: "Frontend" },
  { key: "desktop", title: "Desktop" },
];

export default function Skills() {
  return (
    <FocusBlock as="section" className="section" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skills-group" key={group.key}>
            <h3>{group.title}</h3>
            <ul className="skills-list">
              {skills[group.key].map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

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
