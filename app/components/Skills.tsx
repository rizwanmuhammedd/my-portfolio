// "use client";

// import { useEffect, useState } from "react";
// import { gsap } from "@/public/lib/gsap";
// import { Code, Database, Server, Wrench } from "lucide-react";

// const skillsData = [
//   {
//     id: "frontend",
//     title: "Frontend Development",
//     icon: Code,
//     skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Redux", "Tailwind CSS", "Responsive Design"],
//     progress: [
//       { name: "HTML/CSS", level: 90 },
//       { name: "JavaScript", level: 85 },
//       { name: "React.js", level: 80 },
//     ],
//   },
//   {
//     id: "backend",
//     title: ".NET & Backend",
//     icon: Server,
//     skills: ["C#", "ASP.NET Core", "ASP.NET", "Web API", "Entity Framework", "ADO.NET", "LINQ"],
//     progress: [
//       { name: "C#", level: 88 },
//       { name: "ASP.NET Core", level: 85 },
//       { name: "Web API", level: 82 },
//     ],
//   },
//   {
//     id: "database",
//     title: "Database & Cloud",
//     icon: Database,
//     skills: ["SQL Server", "MySQL", "Azure", "Database Design", "Stored Procedures", "Cloud Computing"],
//     progress: [
//       { name: "SQL Server", level: 87 },
//       { name: "Azure", level: 75 },
//       { name: "Database Design", level: 80 },
//     ],
//   },
//   {
//     id: "tools",
//     title: "Tools & DevOps",
//     icon: Wrench,
//     skills: ["Git & GitHub", "Visual Studio", "VS Code", "Postman", "Docker", "CI/CD"],
//     progress: [
//       { name: "Git & GitHub", level: 90 },
//       { name: "Visual Studio", level: 88 },
//       { name: "Docker", level: 72 },
//     ],
//   },
// ];

// const filters = ["all", "frontend", "backend", "database", "tools"];

// export default function Skills() {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [activeCategory, setActiveCategory] = useState<string | null>(null);

//   useEffect(() => {
//     // Animate section title
//     gsap.fromTo(
//       ".skills-title",
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         scrollTrigger: {
//           trigger: ".skills-title",
//           start: "top 80%",
//         },
//       }
//     );

//     // Animate filter buttons
//     gsap.fromTo(
//       ".filter-btn",
//       { opacity: 0, y: 20 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         stagger: 0.1,
//         scrollTrigger: {
//           trigger: ".skill-filters",
//           start: "top 80%",
//         },
//       }
//     );

//     // Animate skill cards
//     gsap.fromTo(
//       ".skill-card",
//       { opacity: 0, y: 60, scale: 0.9 },
//       {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".skills-grid",
//           start: "top 70%",
//         },
//       }
//     );
//   }, []);

//   const filteredSkills =
//     activeFilter === "all"
//       ? skillsData
//       : skillsData.filter((skill) => skill.id === activeFilter);

//   return (
// <section id="skills" className="relative z-10 min-h-screen flex items-center pt-20">
//       <div className="container mx-auto px-4 lg:px-8">
//         {/* Section Title */}
//         <div className="text-center mb-16">
//           <h2 className="skills-title text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
//             Technical <span className="text-gradient">Skills</span>
//           </h2>
//           <div className="w-20 h-1 bg-primary mx-auto"></div>
//         </div>

//         {/* Filter Buttons */}
//         <div className="skill-filters flex flex-wrap justify-center gap-4 mb-12">
//           {filters.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setActiveFilter(filter)}
//               className={`filter-btn px-6 py-2 rounded-full font-semibold capitalize transition-all duration-300 ${
//                 activeFilter === filter
//                   ? "bg-primary text-black shadow-[0_0_20px_rgba(0,255,136,0.5)]"
//                   : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
//               }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>

//         {/* Skills Grid */}
//         <div className="skills-grid grid md:grid-cols-2 gap-6 lg:gap-8">
//           {filteredSkills.map((category) => {
//             const Icon = category.icon;
//             const isActive = activeCategory === category.id;

//             return (
//               <div
//                 key={category.id}
//                 onClick={() => setActiveCategory(isActive ? null : category.id)}
//                 className="skill-card group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 cursor-pointer transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(0,255,136,0.2)] relative overflow-hidden"
//               >
//                 {/* Glow effect on hover */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>

//                 {/* Content */}
//                 <div className="relative z-10">
//                   {/* Header */}
//                   <div className="flex items-center justify-between mb-6">
//                     <div className="flex items-center gap-4">
//                       <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
//                         <Icon className="text-primary" size={24} />
//                       </div>
//                       <h3 className="text-xl lg:text-2xl font-display font-semibold text-white group-hover:text-primary transition-colors duration-300">
//                         {category.title}
//                       </h3>
//                     </div>
//                     <span className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center text-sm font-bold">
//                       {category.skills.length}
//                     </span>
//                   </div>

//                   {/* Skills Tags */}
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {category.skills.map((skill) => (
//                       <span
//                         key={skill}
//                         className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/30 hover:bg-primary hover:text-black transition-all duration-300 hover:scale-105"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Progress Bars - Show on active */}
//                   <div
//                     className={`space-y-4 transition-all duration-500 ${
//                       isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
//                     }`}
//                   >
//                     {category.progress.map((item) => (
//                       <div key={item.name}>
//                         <div className="flex justify-between text-sm mb-2">
//                           <span className="text-gray-300">{item.name}</span>
//                           <span className="text-primary font-semibold">{item.level}%</span>
//                         </div>
//                         <div className="h-2 bg-white/10 rounded-full overflow-hidden">
//                           <div
//                             className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-1000"
//                             style={{ width: isActive ? `${item.level}%` : "0%" }}
//                           ></div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }






"use client";

import { useEffect, useState } from "react";
import { gsap } from "@/public/lib/gsap";
import { Code, Database, Server, Wrench } from "lucide-react";

const skillsData = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Code,
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Redux", "Tailwind CSS", "Responsive Design"],
    progress: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
    ],
  },
  {
    id: "backend",
    title: ".NET & Backend",
    icon: Server,
    skills: ["C#", "ASP.NET Core", "ASP.NET", "Web API", "Entity Framework", "ADO.NET", "LINQ"],
    progress: [
      { name: "C#", level: 88 },
      { name: "ASP.NET Core", level: 85 },
      { name: "Web API", level: 82 },
    ],
  },
  {
    id: "database",
    title: "Database & Cloud",
    icon: Database,
    skills: ["SQL Server", "MySQL", "Azure", "Database Design", "Stored Procedures", "Cloud Computing"],
    progress: [
      { name: "SQL Server", level: 87 },
      { name: "Azure", level: 75 },
      { name: "Database Design", level: 80 },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git & GitHub", "Visual Studio", "VS Code", "Postman", "Docker", "CI/CD"],
    progress: [
      { name: "Git & GitHub", level: 90 },
      { name: "Visual Studio", level: 88 },
      { name: "Docker", level: 72 },
    ],
  },
];

const filters = ["all", "frontend", "backend", "database", "tools"];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    // Animate section title
    gsap.fromTo(
      ".skills-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
      }
    );

    // Animate filter buttons
    gsap.fromTo(
      ".filter-btn",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.5,
        ease: "power3.out"
      }
    );

    // Animate skill cards
    gsap.fromTo(
      ".skill-card",
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.7,
        ease: "power3.out"
      }
    );
  }, []);

  const filteredSkills =
    activeFilter === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.id === activeFilter);

  return (
<section id="skills" className="relative z-10 min-h-screen flex items-center py-20 px-4">      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="skills-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Filter Buttons */}
        <div className="skill-filters flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-btn px-6 py-2 rounded-full font-semibold capitalize transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-black shadow-[0_0_20px_rgba(0,255,136,0.5)]"
                  : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid grid md:grid-cols-2 gap-6 lg:gap-8">
          {filteredSkills.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <div
                key={category.id}
                onClick={() => setActiveCategory(isActive ? null : category.id)}
                className="skill-card group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 cursor-pointer transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(0,255,136,0.2)] relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center text-sm font-bold">
                      {category.skills.length}
                    </span>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/30 hover:bg-primary hover:text-black transition-all duration-300 hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Progress Bars - Show on active */}
                  <div
                    className={`space-y-4 transition-all duration-500 ${
                      isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    {category.progress.map((item) => (
                      <div key={item.name}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-300">{item.name}</span>
                          <span className="text-primary font-semibold">{item.level}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-1000"
                            style={{ width: isActive ? `${item.level}%` : "0%" }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}