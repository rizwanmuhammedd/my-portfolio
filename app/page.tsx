



"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FloatingShapes from "./components/FloatingShapes";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import TypingGame from "./components/Typinggame";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main style={{ position:"relative", minHeight:"100vh", background:"var(--bg)" }}>
      <FloatingShapes />
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <TypingGame />
      <Contact />
      <Footer />
    </main>
  );
}