"use client";

import { useEffect } from "react";
import { gsap } from "@/public/lib/gsap";

export default function Profile() {
  useEffect(() => {
    // Animate profile section
    gsap.fromTo(
      ".profile-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" }
    );

    gsap.fromTo(
      ".profile-description",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: "power3.out" }
    );

    gsap.fromTo(
      ".tech-category",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, delay: 0.6, ease: "power3.out" }
    );
  }, []);

  const coreTech = [
    "C#", ".NET Core", "ASP.NET", "Entity Framework", "Web API", "ADO.NET", "LINQ", "SQL Server"
  ];

  const frontendTools = [
    "React.js", "TypeScript", "Tailwind CSS", "Next.js", "GSAP", 
    "Redux", "JavaScript (ES6+)", "HTML5/CSS3"
  ];

  const devopsTools = [
    "Azure", "Docker", "Git & GitHub", "Visual Studio", "VS Code", 
    "Postman", "CI/CD", "Database Design"
  ];

  return (
    <section id="profile" className="relative z-10 py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Title and description */}
          <div>
            <span className="text-sm text-gray-500 font-medium tracking-wider mb-6 inline-block profile-title">
              ( 01 ) Profile
            </span>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 profile-title">
              Full Stack .NET Developer
              <span className="block text-xl text-gray-400 font-normal mt-4">
                Building scalable applications with precision
              </span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed profile-description">
                I specialize in building robust, scalable web applications using .NET Core 
                and modern frontend technologies. Focused on performance, clean architecture, 
                and exceptional user experiences.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed profile-description">
                I craft responsive, interactive applications with clean component architecture, 
                smooth animations, and optimized performance, ensuring polished interfaces 
                from backend to frontend.
              </p>
            </div>
          </div>
          
          {/* Right: Technical specifications in a grid */}
          <div>
            <div className="mb-10">
              <h3 className="text-sm text-gray-500 font-medium tracking-wider mb-6">
                // Technical Specifications
              </h3>
              
              <div className="space-y-10">
                {/* Core Technologies */}
                <div className="tech-category">
                  <h4 className="text-lg font-semibold text-white mb-4">Core Technologies</h4>
                  <div className="flex flex-wrap gap-3">
                    {coreTech.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm hover:bg-white/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Frontend & Tools */}
                <div className="tech-category">
                  <h4 className="text-lg font-semibold text-white mb-4">Frontend & Styling</h4>
                  <div className="flex flex-wrap gap-3">
                    {frontendTools.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm hover:bg-white/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* DevOps & Tools */}
                <div className="tech-category">
                  <h4 className="text-lg font-semibold text-white mb-4">DevOps & Tools</h4>
                  <div className="flex flex-wrap gap-3">
                    {devopsTools.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm hover:bg-white/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}