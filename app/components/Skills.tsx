



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
//         delay: 0.3,
//         ease: "power3.out"
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
//         delay: 0.5,
//         ease: "power3.out"
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
//         delay: 0.7,
//         ease: "power3.out"
//       }
//     );
//   }, []);

//   const filteredSkills =
//     activeFilter === "all"
//       ? skillsData
//       : skillsData.filter((skill) => skill.id === activeFilter);

//   return (
// <section id="skills" className="relative z-10 min-h-screen flex items-center py-20 px-4">      <div className="container mx-auto max-w-6xl">
//         {/* Section Title */}
//         <div className="text-center mb-16">
//           <h2 className="skills-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
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
//                       <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
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

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/public/lib/gsap";
import { ScrollTrigger } from "gsap/all";
import { Code, Database, Server, Wrench } from "lucide-react";

const SKILLS = [
  {
    id: "frontend", num: "01", title: "Frontend", Icon: Code,
    tags: ["HTML5","CSS3","JavaScript ES6+","React.js","Redux","Tailwind CSS","Responsive Design"],
    bars: [{ name:"HTML / CSS", pct:90 },{ name:"JavaScript", pct:85 },{ name:"React.js", pct:80 }],
  },
  {
    id: "backend", num: "02", title: ".NET & Backend", Icon: Server,
    tags: ["C#","ASP.NET Core","ASP.NET","Web API","Entity Framework","ADO.NET","LINQ"],
    bars: [{ name:"C#", pct:88 },{ name:"ASP.NET Core", pct:85 },{ name:"Web API", pct:82 }],
  },
  {
    id: "database", num: "03", title: "Database & Cloud", Icon: Database,
    tags: ["SQL Server","MySQL","Azure","Database Design","Stored Procedures","Cloud"],
    bars: [{ name:"SQL Server", pct:87 },{ name:"Azure", pct:75 },{ name:"DB Design", pct:80 }],
  },
  {
    id: "tools", num: "04", title: "Tools & DevOps", Icon: Wrench,
    tags: ["Git & GitHub","Visual Studio","VS Code","Postman","Docker","CI/CD"],
    bars: [{ name:"Git & GitHub", pct:90 },{ name:"Visual Studio", pct:88 },{ name:"Docker", pct:72 }],
  },
];
const FILTERS = ["all","frontend","backend","database","tools"];

export default function Skills() {
  const [filter, setFilter] = useState("all");
  const [open,   setOpen]   = useState<string|null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo([".sk-eye",".sk-h2"],
        { opacity:0, y:28 },
        { opacity:1, y:0, duration:.65, stagger:.12,
          scrollTrigger:{ trigger:".sk-head", start:"top 82%" } });
      gsap.fromTo(".sk-rule",
        { scaleX:0, transformOrigin:"left" },
        { scaleX:1, duration:.75, ease:"power3.out",
          scrollTrigger:{ trigger:".sk-head", start:"top 82%" } });
      gsap.fromTo(".sk-fbtn",
        { opacity:0, y:10 },
        { opacity:1, y:0, duration:.4, stagger:.06,
          scrollTrigger:{ trigger:".sk-filters", start:"top 88%" } });
      gsap.fromTo(".sk-card",
        { opacity:0, y:44 },
        { opacity:1, y:0, duration:.6, stagger:.1,
          scrollTrigger:{ trigger:".sk-grid", start:"top 86%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  const visible = filter === "all" ? SKILLS : SKILLS.filter(s => s.id === filter);

  return (
    <>
      <style>{`
        .sk-sec {
          background: #000; padding: 100px 0;
          border-top: 1px solid #1a1a1a; position: relative; z-index: 1;
        }
        .sk-inner { max-width: 1280px; margin: 0 auto; padding: 0 24px; }

        /* Filters */
        .sk-filters { display: flex; gap: 6px; flex-wrap: wrap; margin: 36px 0 40px; }
        .sk-fbtn {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px; font-weight: 800; letter-spacing: .2em; text-transform: uppercase;
          background: #000; color: #3e3e3e; border: 1px solid #1c1c1c; cursor: pointer;
          padding: 8px 16px; transition: all .15s;
        }
        .sk-fbtn:hover { border-color: #444; color: #888; }
        .sk-fbtn.on { background: #fff; color: #000; border-color: #fff; }

        /* Grid */
        .sk-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1px; background: #1a1a1a;
        }
        .sk-card {
          background: #000; padding: 34px 30px; cursor: pointer;
          transition: background .2s; text-align: left; width: 100%; border: none;
          position: relative;
        }
        .sk-card:hover { background: #050505; }
        .sk-card-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 800; letter-spacing: .24em; color: #1e1e1e;
          margin-bottom: 18px;
        }
        .sk-card-head { display: flex; align-items: center; gap: 12px; margin-bottom: 22px; }
        .sk-card-icon {
          width: 34px; height: 34px; border: 1px solid #1c1c1c;
          display: flex; align-items: center; justify-content: center; color: #2e2e2e;
          flex-shrink: 0; transition: all .2s;
        }
        .sk-card:hover .sk-card-icon { border-color: #333; color: #555; }
        .sk-card-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 18px; font-weight: 900; text-transform: uppercase; letter-spacing: .04em;
          color: #fff; line-height: 1;
        }

        .sk-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 20px; }
        .sk-tag {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
          color: #3a3a3a; border: 1px solid #1a1a1a; padding: 5px 10px; transition: all .15s;
        }
        .sk-card:hover .sk-tag { color: #4e4e4e; border-color: #222; }

        /* Progress accordion */
        .sk-prog { overflow: hidden; transition: max-height .38s ease, opacity .28s ease; }
        .sk-prog.open  { max-height: 200px; opacity: 1; }
        .sk-prog.shut  { max-height: 0;     opacity: 0; }
        .sk-prog-row { margin-bottom: 13px; }
        .sk-prog-lbl {
          display: flex; justify-content: space-between; margin-bottom: 5px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #3a3a3a;
        }
        .sk-track { height: 1px; background: #111; }
        .sk-fill  { height: 100%; background: #fff; transition: width .85s ease; }

        .sk-hint {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 8px; font-weight: 700; letter-spacing: .18em;
          text-transform: uppercase; color: #2a2a2a; margin-top: 6px;
          transition: color .15s;
        }
        .sk-card:hover .sk-hint { color: #3e3e3e; }

        @media(max-width:768px) {
          .sk-grid { grid-template-columns: 1fr; }
          .sk-card { padding: 26px 20px; }
        }
        @media(max-width:640px) { .sk-sec { padding: 72px 0; } }
      `}</style>

      <section id="skills" className="sk-sec" ref={ref}>
        <div className="sk-inner">
          <div className="sk-head">
            <span className="ilu-eyebrow sk-eye">( 01 ) — Technical Skills</span>
            <h2 className="ilu-h2 sk-h2">My <span className="ghost">Toolkit</span></h2>
            <div className="ilu-rule sk-rule" />
          </div>

          <div className="sk-filters">
            {FILTERS.map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`sk-fbtn ${filter === f ? "on" : ""}`}>
                {f}
              </button>
            ))}
          </div>

          <div className="sk-grid">
            {visible.map(cat => {
              const { Icon } = cat;
              const isOpen = open === cat.id;
              return (
                <button key={cat.id} className="sk-card"
                  onClick={() => setOpen(isOpen ? null : cat.id)}>
                  <div className="sk-card-num">{cat.num} /</div>
                  <div className="sk-card-head">
                    <div className="sk-card-icon"><Icon size={14} strokeWidth={1.5} /></div>
                    <div className="sk-card-title">{cat.title}</div>
                  </div>
                  <div className="sk-tags">
                    {cat.tags.map(t => <span key={t} className="sk-tag">{t}</span>)}
                  </div>
                  <div className={`sk-prog ${isOpen ? "open" : "shut"}`}>
                    {cat.bars.map(b => (
                      <div key={b.name} className="sk-prog-row">
                        <div className="sk-prog-lbl">
                          <span>{b.name}</span><span>{b.pct}%</span>
                        </div>
                        <div className="sk-track">
                          <div className="sk-fill" style={{ width: isOpen ? `${b.pct}%` : "0" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="sk-hint">{isOpen ? "— Collapse" : "+ Proficiency"}</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}