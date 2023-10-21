"use client";

import Intro from "./components/Intro";
import Tools from "./components/Tools";
import Services from "./components/Services";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contact";
import Header from "./layout/Header";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <main className="!scroll-smooth">
      <Menu />
      <Header />
      <Intro />
      <Tools />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
