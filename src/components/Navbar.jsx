import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a className="brand" href="#top" aria-label="Go to top">
        DE
      </a>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
