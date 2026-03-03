import React from "react";
import FocusBlock from "./FocusBlock";
import AnimatedText from "./AnimatedText";

export default function About({ about, title, highlightsTitle }) {
  return (
    <FocusBlock as="section" className="section" id="about">
      <h2><AnimatedText text={title} /></h2>
      {about.paragraphs.map((paragraph) => (
        <p key={paragraph}><AnimatedText text={paragraph} /></p>
      ))}

      <div className="card">
        <h3><AnimatedText text={highlightsTitle} /></h3>
        <ul className="bullet-list">
          {about.achievements.map((item) => (
            <li key={item}><AnimatedText text={item} /></li>
          ))}
        </ul>
      </div>
    </FocusBlock>
  );
}
