import React from "react";
import FocusBlock from "./FocusBlock";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <FocusBlock className="hero-content" minOpacity={0.35}>
        <p className="hero-kicker">{profile.role}</p>
        <h1>{profile.fullName}</h1>
        <p>{profile.summary}</p>
        <p>{profile.intro}</p>

        <div className="hero-actions">
          <a className="hero-cta" href="#projects">
            Explore Projects
          </a>
          <a className="hero-link" href="#contact">
            Contact Me
          </a>
        </div>

        <div className="hero-stats">
          {profile.highlights.map((item) => (
            <div className="stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </FocusBlock>
    </section>
  );
}
