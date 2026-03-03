import React from "react";
import FocusBlock from "./FocusBlock";
import AnimatedText from "./AnimatedText";

export default function Hero({ profile, ui }) {
  return (
    <section className="hero" id="top">
      <FocusBlock className="hero-content" minOpacity={0.35}>
        <p className="hero-kicker"><AnimatedText text={profile.role} /></p>
        <h1><AnimatedText text={profile.fullName} /></h1>
        <p><AnimatedText text={profile.summary} /></p>
        <p><AnimatedText text={profile.intro} /></p>

        <div className="hero-actions">
          <a className="hero-cta" href="#projects">
            <AnimatedText text={ui.explore} />
          </a>
          <a className="hero-link" href="#contact">
            <AnimatedText text={ui.contact} />
          </a>
        </div>

        <div className="hero-stats">
          {profile.highlights.map((item) => (
            <div className="stat" key={item.label}>
              <strong><AnimatedText text={item.value} /></strong>
              <span><AnimatedText text={item.label} /></span>
            </div>
          ))}
        </div>
      </FocusBlock>
    </section>
  );
}
