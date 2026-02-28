


// "use client";

// import { useEffect } from "react";
// import { gsap } from "@/public/lib/gsap";
// import { ExternalLink, Github } from "lucide-react";

// const projects = [
//   {
//     id: 1,
//     number: "01",
//     title: "Sport-X E-commerce",
//     description: "A premium football gear e-commerce platform featuring product catalog, shopping cart, user authentication, and payment integration.",
//     tech: ["React", ".NET Core", "SQL Server", "Azure"],
//     liveUrl: "https://sport-x-kgtm.vercel.app/",
//     githubUrl: "#",
//   },
//   {
//     id: 2,
//     number: "02",
//     title: "Task Management API",
//     description: "RESTful API for task management with user authentication, role-based access, and real-time notifications.",
//     tech: ["ASP.NET Core", "Entity Framework", "JWT Auth", "Swagger"],
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 3,
//     number: "03",
//     title: "Portfolio Website",
//     description: "Fully responsive portfolio website showcasing skills, projects, and contact information with modern design.",
//     tech: ["Next.js", "GSAP", "Tailwind CSS", "TypeScript"],
//     liveUrl: "#",
//     githubUrl: "#",
//   },
// ];

// export default function Projects() {
//   useEffect(() => {
//     // Animate section title
//     gsap.fromTo(
//       ".section-label",
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" }
//     );

//     gsap.fromTo(
//       ".section-title",
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: "power3.out" }
//     );

//     gsap.fromTo(
//       ".project-card",
//       { opacity: 0, y: 50 },
//       { 
//         opacity: 1, 
//         y: 0, 
//         duration: 0.8, 
//         stagger: 0.2, 
//         delay: 0.6, 
//         ease: "power3.out" 
//       }
//     );
//   }, []);

//   return (
//     <section id="projects" className="relative z-10 py-32">
//       <div className="container mx-auto px-6 lg:px-8">
//         <div className="mb-20">
//           <span className="section-label text-sm text-gray-500 font-medium tracking-wider mb-4 inline-block">
//             ( 02 ) — Checkpoint
//           </span>
          
//           <h2 className="section-title text-4xl lg:text-5xl font-bold mb-6">
//             Projects
//             <span className="block text-xl text-gray-400 font-normal mt-4">
//               Building responsive, high-performance applications with .NET Core and modern frontend systems.
//             </span>
//           </h2>
//         </div>

//         {/* Projects Grid */}
//         <div className="space-y-12">
//           {projects.map((project) => (
//             <div 
//               key={project.id}
//               className="project-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(0,255,136,0.1)]"
//             >
//               <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
//                 {/* Left: Project Number and Title */}
//                 <div className="lg:col-span-1">
//                   <div className="flex items-center gap-6 mb-6">
//                     <span className="text-2xl lg:text-3xl font-bold text-primary">
//                       {project.number}
//                     </span>
//                     <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent"></div>
//                   </div>
                  
//                   <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
//                     {project.title}
//                   </h3>
                  
//                   <div className="flex flex-wrap gap-3 mb-6">
//                     {project.tech.map((tech, index) => (
//                       <span
//                         key={index}
//                         className="px-4 py-2 bg-white/10 text-gray-300 text-sm rounded-lg border border-white/10 hover:bg-white/15 hover:text-primary hover:border-primary/30 transition-all duration-300"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
                
//                 {/* Right: Description and Actions */}
//                 <div className="lg:col-span-2">
//                   <p className="text-lg text-gray-300 leading-relaxed mb-8">
//                     {project.description}
//                   </p>
                  
//                   <div className="flex flex-col sm:flex-row gap-4">
//                     {project.liveUrl !== "#" && (
//                       <a
//                         href={project.liveUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-black font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all duration-300 flex items-center justify-center gap-3 group/btn"
//                       >
//                         <ExternalLink size={18} className="group-hover/btn:rotate-45 transition-transform duration-300" />
//                         <span>Live Demo</span>
//                       </a>
//                     )}
                    
//                     <a
//                       href={project.githubUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-8 py-3 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-primary/50 hover:text-primary transition-all duration-300 flex items-center justify-center gap-3"
//                     >
//                       <Github size={18} />
//                       <span>View Code</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA at bottom */}
//         <div className="mt-20 text-center">
//           <p className="text-lg text-gray-400 mb-8">
//             Have a concept? Let's build it together.
//           </p>
//           <a
//             href="#contact"
//             className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-primary-light text-black font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] transition-all duration-300 hover:scale-105"
//           >
//             Hire Me
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }









"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/public/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    id: 1, num: "01", cat: "Full Stack",
    title: "Sport-X E-commerce",
    desc: "A premium football gear e-commerce platform featuring product catalog, shopping cart, user authentication, and payment integration.",
    tech: ["React",".NET Core","SQL Server","Azure"],
    live: "https://sportx-sx.vercel.app/",
    code: "#",
  },
  {
    id: 2, num: "02", cat: "Backend",
    title: "Task Management API",
    desc: "RESTful API for task management with user authentication, role-based access control, and real-time notifications.",
    tech: ["ASP.NET Core","Entity Framework","JWT Auth","Swagger"],
    live: "#",
    code: "#",
  },
  {
    id: 3, num: "03", cat: "Frontend",
    title: "Portfolio Website",
    desc: "Fully responsive portfolio website showcasing skills, projects, and contact information with modern brutalist design.",
    tech: ["Next.js","GSAP","Tailwind CSS","TypeScript"],
    live: "#",
    code: "#",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo([".pr-eye",".pr-h2"],
        { opacity:0, y:28 },
        { opacity:1, y:0, duration:.65, stagger:.12,
          scrollTrigger:{ trigger:".pr-head", start:"top 82%" } });
      gsap.fromTo(".pr-rule",
        { scaleX:0, transformOrigin:"left" },
        { scaleX:1, duration:.75, ease:"power3.out",
          scrollTrigger:{ trigger:".pr-head", start:"top 82%" } });
      PROJECTS.forEach((_, i) => {
        gsap.fromTo(`.pr-row-${i}`,
          { opacity:0, y:46 },
          { opacity:1, y:0, duration:.65, ease:"power3.out",
            scrollTrigger:{ trigger:`.pr-row-${i}`, start:"top 87%" } });
      });
      gsap.fromTo(".pr-cta-wrap",
        { opacity:0, y:28 },
        { opacity:1, y:0, duration:.6,
          scrollTrigger:{ trigger:".pr-cta-wrap", start:"top 90%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .pr-sec {
          background: #000; padding: 100px 0;
          border-top: 1px solid #1a1a1a; position: relative; z-index: 1;
        }
        .pr-inner { max-width: 1280px; margin: 0 auto; padding: 0 24px; }

        /* Row */
        .pr-row {
          border-bottom: 1px solid #1a1a1a; padding: 44px 0;
          display: grid; grid-template-columns: 72px 1fr 190px; gap: 28px; align-items: start;
          transition: background .18s;
        }
        .pr-row:hover { background: rgba(255,255,255,.014); }
        .pr-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: .2em; color: #212121; padding-top: 6px;
        }
        .pr-mid {}
        .pr-cat {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px; font-weight: 700; letter-spacing: .28em; text-transform: uppercase;
          color: #2e2e2e; margin-bottom: 10px;
        }
        .pr-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(24px,3.2vw,42px); font-weight: 900; text-transform: uppercase;
          letter-spacing: .02em; color: #fff; line-height: 1; margin-bottom: 14px;
          transition: color .15s;
        }
        .pr-row:hover .pr-title { color: #bbb; }
        .pr-desc {
          font-size: 13px; font-weight: 300; color: #404040; line-height: 1.8;
          max-width: 520px; margin-bottom: 18px;
        }
        .pr-tags { display: flex; flex-wrap: wrap; gap: 5px; }
        .pr-tag {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
          color: #2e2e2e; border: 1px solid #1a1a1a; padding: 5px 10px;
        }

        /* Actions */
        .pr-acts { display: flex; flex-direction: column; gap: 6px; padding-top: 6px; }
        .pr-act {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase;
          padding: 9px 15px; display: flex; align-items: center; gap: 7px;
          text-decoration: none; transition: all .15s; white-space: nowrap;
        }
        .pr-act-primary { background: #fff; color: #000; }
        .pr-act-primary:hover { background: #d4d4d4; }
        .pr-act-ghost { background: transparent; color: #3a3a3a; border: 1px solid #1e1e1e; }
        .pr-act-ghost:hover { border-color: #444; color: #888; }
        .pr-act-disabled { opacity: .22; pointer-events: none; }

        /* CTA footer */
        .pr-cta-wrap {
          margin-top: 60px; padding-top: 44px; border-top: 1px solid #1a1a1a;
          display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 18px;
        }
        .pr-cta-copy {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(18px,3vw,34px); font-weight: 900; text-transform: uppercase;
          letter-spacing: .03em; color: #2e2e2e;
        }

        @media(max-width:900px) {
          .pr-row { grid-template-columns: 50px 1fr; }
          .pr-acts { flex-direction: row; grid-column: 1/-1; }
        }
        @media(max-width:640px) {
          .pr-sec { padding: 72px 0; }
          .pr-row { padding: 30px 0; }
          .pr-acts { flex-wrap: wrap; }
        }
      `}</style>

      <section id="projects" className="pr-sec" ref={ref}>
        <div className="pr-inner">
          <div className="pr-head" style={{ marginBottom: 52 }}>
            <span className="ilu-eyebrow pr-eye">( 02 ) — Selected Work</span>
            <h2 className="ilu-h2 pr-h2">Pro<span className="ghost">jects</span></h2>
            <div className="ilu-rule pr-rule" />
          </div>

          {PROJECTS.map((p, i) => (
            <div key={p.id} className={`pr-row pr-row-${i}`}>
              <div className="pr-num">{p.num}</div>
              <div className="pr-mid">
                <div className="pr-cat">{p.cat}</div>
                <div className="pr-title">{p.title}</div>
                <p className="pr-desc">{p.desc}</p>
                <div className="pr-tags">
                  {p.tech.map(t => <span key={t} className="pr-tag">{t}</span>)}
                </div>
              </div>
              <div className="pr-acts">
                {p.live !== "#"
                  ? <a href={p.live} target="_blank" rel="noopener noreferrer" className="pr-act pr-act-primary">
                      <ExternalLink size={10} strokeWidth={2} /> Live Demo
                    </a>
                  : <span className="pr-act pr-act-primary pr-act-disabled">
                      <ExternalLink size={10} /> Live Demo
                    </span>
                }
                <a href={p.code} target="_blank" rel="noopener noreferrer"
                  className={`pr-act pr-act-ghost ${p.code === "#" ? "pr-act-disabled" : ""}`}>
                  <Github size={10} strokeWidth={1.5} /> View Code
                </a>
              </div>
            </div>
          ))}

          <div className="pr-cta-wrap">
            <div className="pr-cta-copy">Have a concept? Let's build it.</div>
            <a href="#contact" className="ilu-btn ilu-btn-white">Hire Me →</a>
          </div>
        </div>
      </section>
    </>
  );
}