

// "use client";

// import { useEffect } from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import FloatingShapes from "./components/FloatingShapes";
// import Skills from "./components/Skills";
// import Projects from "./components/projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// export default function Home() {
//   useEffect(() => {
//     // Smooth scroll for anchor links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//       anchor.addEventListener('click', (e) => {
//         e.preventDefault();
//         const targetId = anchor.getAttribute('href');
//         if (!targetId || targetId === '#') return;
        
//         const targetElement = document.querySelector(targetId) as HTMLElement | null;
//         if (targetElement) {
//           window.scrollTo({
//             top: targetElement.offsetTop - 100,
//             behavior: 'smooth'
//           });
//         }
//       });
//     });
//   }, []);

//   return (
//     <main className="relative min-h-screen">
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
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute("href");
        if (!targetId || targetId === "#") return;
        const el = document.querySelector(targetId) as HTMLElement | null;
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
      });
    });
  }, []);

  return (
    <main style={{ position:"relative", minHeight:"100vh", background:"#000" }}>
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