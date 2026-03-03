import React from "react";
import FocusBlock from "./FocusBlock";
import AnimatedText from "./AnimatedText";

const skillGroups = ["backend", "frontend", "desktop"];

export default function Skills({
  skills,
  softSkills,
  title,
  softSkillsTitle,
  skillGroups: groupTitles,
}) {
  return (
    <FocusBlock as="section" className="section" id="skills">
      <h2><AnimatedText text={title} /></h2>

      <div className="skills-grid">
        {skillGroups.map((groupKey) => (
          <div className="skills-group" key={groupKey}>
            <h3><AnimatedText text={groupTitles[groupKey]} /></h3>
            <ul className="skills-list">
              {skills[groupKey].map((skill) => (
                <li key={skill}><AnimatedText text={skill} /></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="card">
        <h3><AnimatedText text={softSkillsTitle} /></h3>
        <ul className="bullet-list">
          {softSkills.map((item) => (
            <li key={item}><AnimatedText text={item} /></li>
          ))}
        </ul>
      </div>
    </FocusBlock>
  );
}
