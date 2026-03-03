import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import React, { useEffect, useState } from "react";
import { localizedContent } from "./data/content";

function App() {
  const [lang, setLang] = useState("en");
  const content = localizedContent[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <Navbar lang={lang} setLang={setLang} nav={content.ui.nav} />
      <Hero profile={content.profile} ui={content.ui.hero} />
      <About about={content.about} title={content.ui.sections.about} highlightsTitle={content.ui.sections.highlights} />
      <Experience experience={content.experience} title={content.ui.sections.experience} />
      <Education education={content.education} title={content.ui.sections.education} />
      <Projects projects={content.projects} title={content.ui.sections.projects} sourceCodeLabel={content.ui.sections.sourceCode} stackLabel={content.ui.sections.stack} />
      <Skills
        skills={content.skills}
        softSkills={content.softSkills}
        title={content.ui.sections.skills}
        softSkillsTitle={content.ui.sections.softSkills}
        skillGroups={content.ui.skillGroups}
      />
      <Footer contacts={content.contacts} />
    </>
  );
}

export default App;
