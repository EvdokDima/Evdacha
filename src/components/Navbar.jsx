import React from "react";
import AnimatedText from "./AnimatedText";

export default function Navbar({ lang, setLang, nav }) {
  return (
    <nav className="navbar">
      <a className="brand" href="#top" aria-label="Go to top">
        DE
      </a>
      <div className="nav-links">
        <a href="#about"><AnimatedText text={nav.about} /></a>
        <a href="#experience"><AnimatedText text={nav.experience} /></a>
        <a href="#education"><AnimatedText text={nav.education} /></a>
        <a href="#projects"><AnimatedText text={nav.projects} /></a>
        <a href="#skills"><AnimatedText text={nav.skills} /></a>
        <a href="#contact"><AnimatedText text={nav.contact} /></a>
      </div>
      <button
        className="lang-toggle"
        type="button"
        onClick={() => setLang((prev) => (prev === "en" ? "ru" : "en"))}
        aria-label="Switch language"
      >
        {lang === "en" ? "RU" : "EN"}
      </button>
    </nav>
  );
}
