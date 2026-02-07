// "use client";

// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import FloatingShapes from "./components/FloatingShapes";
// import Skills from "./components/Skills";
// import Projects from "./components/projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// export default function Home() {
//   return (
//     <main className="relative min-h-screen">
//       <div className="bg-red-500 text-white p-10 text-4xl">
// </div>

//       <FloatingShapes />
//       <Header />
//       <Hero />
//       <Skills />
//       <Projects />
//       <Contact />
//       <Footer />
//     </main>
//   );
// }



"use client";

import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FloatingShapes from "./components/FloatingShapes";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId) as HTMLElement | null;
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <main className="relative min-h-screen">
      <FloatingShapes />
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}