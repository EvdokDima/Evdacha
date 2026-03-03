import React from "react";
import FocusBlock from "./FocusBlock";
import AnimatedText from "./AnimatedText";

export default function Education({ education, title }) {
  return (
    <FocusBlock as="section" className="section" id="education">
      <h2><AnimatedText text={title} /></h2>
      {education.map((item) => (
        <FocusBlock as="article" className="card" key={item.place} minOpacity={0.28}>
          <div className="card-head">
            <h3><AnimatedText text={item.place} /></h3>
            <span><AnimatedText text={item.period} /></span>
          </div>
          <p><AnimatedText text={item.description} /></p>
        </FocusBlock>
      ))}
    </FocusBlock>
  );
}
