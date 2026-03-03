import React from "react";
import FocusBlock from "./FocusBlock";
import { about } from "../data/content";

export default function About() {
  return (
    <FocusBlock as="section" className="section" id="about">
      <h2>About</h2>
      {about.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <div className="card">
        <h3>Highlights</h3>
        <ul className="bullet-list">
          {about.achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </FocusBlock>
  );
}
