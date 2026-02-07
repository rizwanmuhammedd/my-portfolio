// "use client";

// import { useEffect } from "react";
// import { gsap } from "@/public/lib/gsap";
// import { ExternalLink, Github } from "lucide-react";

// const projects = [
//   {
//     id: 1,
//     title: "Sport-X E-commerce",
//     description:
//       "A premium football gear e-commerce platform featuring product catalog, shopping cart, user authentication, and payment integration.",
//     tech: ["React", ".NET Core", "SQL Server", "Azure"],
//     liveUrl: "https://sport-x-kgtm.vercel.app/",
//     githubUrl: "#",
//     gradient: "from-primary/20 to-emerald-500/20",
//   },
//   {
//     id: 2,
//     title: "Task Management API",
//     description:
//       "RESTful API for task management with user authentication, role-based access, and real-time notifications.",
//     tech: ["ASP.NET Core", "Entity Framework", "JWT Auth", "Swagger"],
//     liveUrl: "#",
//     githubUrl: "#",
//     gradient: "from-emerald-500/20 to-teal-500/20",
//   },
//   {
//     id: 3,
//     title: "Portfolio Website",
//     description:
//       "Fully responsive portfolio website showcasing skills, projects, and contact information with modern design.",
//     tech: ["Next.js", "GSAP", "Tailwind CSS", "TypeScript"],
//     liveUrl: "#",
//     githubUrl: "#",
//     gradient: "from-teal-500/20 to-primary/20",
//   },
// ];

// export default function Projects() {
//   useEffect(() => {
//     // Animate section title
//     gsap.fromTo(
//       ".projects-title",
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         scrollTrigger: {
//           trigger: ".projects-title",
//           start: "top 80%",
//         },
//       }
//     );

//     // Animate project cards
//     gsap.fromTo(
//       ".project-card",
//       { opacity: 0, y: 80, rotateX: -15 },
//       {
//         opacity: 1,
//         y: 0,
//         rotateX: 0,
//         duration: 1,
//         stagger: 0.3,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".projects-grid",
//           start: "top 70%",
//         },
//       }
//     );
//   }, []);

//   return (
// <section id="projects" className="relative z-10 min-h-screen flex items-center pt-20">
//       <div className="container mx-auto px-4 lg:px-8">
//         {/* Section Title */}
//         <div className="text-center mb-16">
//           <h2 className="projects-title text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <div className="w-20 h-1 bg-primary mx-auto"></div>
//         </div>

//         {/* Projects Grid */}
//         <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={project.id}
//               className="project-card group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,255,136,0.3)] transform hover:-translate-y-2"
//             >
//               {/* Project Header with Gradient */}
//               <div className={`bg-gradient-to-br ${project.gradient} p-8 relative overflow-hidden`}>
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <div className="absolute inset-0 bg-primary/10"></div>
//                 </div>
//                 <h3 className="text-2xl font-display font-bold text-white relative z-10 group-hover:text-primary transition-colors duration-300">
//                   {project.title}
//                 </h3>
//               </div>

//               {/* Project Content */}
//               <div className="p-6 space-y-4">
//                 <p className="text-gray-300 leading-relaxed">{project.description}</p>

//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/30"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-4 pt-4">
//                   {project.liveUrl !== "#" && (
//                     <a
//                       href={project.liveUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex-1 px-4 py-2 bg-primary text-black font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 flex items-center justify-center gap-2 group/btn"
//                     >
//                       <ExternalLink size={16} className="group-hover/btn:rotate-45 transition-transform duration-300" />
//                       Live Demo
//                     </a>
//                   )}
//                   <a
//                     href={project.githubUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
//                   >
//                     <Github size={16} />
//                     Code
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { useEffect } from "react";
import { gsap } from "@/public/lib/gsap";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Sport-X E-commerce",
    description: "A premium football gear e-commerce platform featuring product catalog, shopping cart, user authentication, and payment integration.",
    tech: ["React", ".NET Core", "SQL Server", "Azure"],
    liveUrl: "https://sport-x-kgtm.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 2,
    number: "02",
    title: "Task Management API",
    description: "RESTful API for task management with user authentication, role-based access, and real-time notifications.",
    tech: ["ASP.NET Core", "Entity Framework", "JWT Auth", "Swagger"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    number: "03",
    title: "Portfolio Website",
    description: "Fully responsive portfolio website showcasing skills, projects, and contact information with modern design.",
    tech: ["Next.js", "GSAP", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  useEffect(() => {
    // Animate section title
    gsap.fromTo(
      ".section-label",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" }
    );

    gsap.fromTo(
      ".section-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: "power3.out" }
    );

    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2, 
        delay: 0.6, 
        ease: "power3.out" 
      }
    );
  }, []);

  return (
    <section id="projects" className="relative z-10 py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <span className="section-label text-sm text-gray-500 font-medium tracking-wider mb-4 inline-block">
            ( 02 ) — Checkpoint
          </span>
          
          <h2 className="section-title text-4xl lg:text-5xl font-bold mb-6">
            Projects
            <span className="block text-xl text-gray-400 font-normal mt-4">
              Building responsive, high-performance applications with .NET Core and modern frontend systems.
            </span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(0,255,136,0.1)]"
            >
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Left: Project Number and Title */}
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-6 mb-6">
                    <span className="text-2xl lg:text-3xl font-bold text-primary">
                      {project.number}
                    </span>
                    <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent"></div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white/10 text-gray-300 text-sm rounded-lg border border-white/10 hover:bg-white/15 hover:text-primary hover:border-primary/30 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Right: Description and Actions */}
                <div className="lg:col-span-2">
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-black font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all duration-300 flex items-center justify-center gap-3 group/btn"
                      >
                        <ExternalLink size={18} className="group-hover/btn:rotate-45 transition-transform duration-300" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-primary/50 hover:text-primary transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-400 mb-8">
            Have a concept? Let's build it together.
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-primary-light text-black font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] transition-all duration-300 hover:scale-105"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}