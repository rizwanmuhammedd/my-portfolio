
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { gsap } from "@/public/lib/gsap";
// import { ScrollTrigger } from "gsap/all";
// import { Code, Database, Server, Wrench } from "lucide-react";

// const SKILLS = [
//   {
//     id: "frontend", num: "01", title: "Frontend", Icon: Code,
//     tags: ["HTML5","CSS3","JavaScript ES6+","React.js","Redux","Tailwind CSS","Responsive Design"],
//     bars: [{ name:"HTML / CSS", pct:90 },{ name:"JavaScript", pct:85 },{ name:"React.js", pct:80 }],
//   },
//   {
//     id: "backend", num: "02", title: ".NET & Backend", Icon: Server,
//     tags: ["C#","ASP.NET Core","ASP.NET","Web API","Entity Framework","ADO.NET","LINQ"],
//     bars: [{ name:"C#", pct:88 },{ name:"ASP.NET Core", pct:85 },{ name:"Web API", pct:82 }],
//   },
//   {
//     id: "database", num: "03", title: "Database & Cloud", Icon: Database,
//     tags: ["SQL Server","MySQL","Azure","Database Design","Stored Procedures","Cloud"],
//     bars: [{ name:"SQL Server", pct:87 },{ name:"Azure", pct:75 },{ name:"DB Design", pct:80 }],
//   },
//   {
//     id: "tools", num: "04", title: "Tools & DevOps", Icon: Wrench,
//     tags: ["Git & GitHub","Visual Studio","VS Code","Postman","Docker","CI/CD"],
//     bars: [{ name:"Git & GitHub", pct:90 },{ name:"Visual Studio", pct:88 },{ name:"Docker", pct:72 }],
//   },
// ];
// const FILTERS = ["all","frontend","backend","database","tools"];

// export default function Skills() {
//   const [filter, setFilter] = useState("all");
//   const [open,   setOpen]   = useState<string|null>(null);
//   const ref = useRef<HTMLElement>(null);

//   useEffect(() => {
//     if (!ref.current) return;
//     const ctx = gsap.context(() => {
//       gsap.fromTo([".sk-eye",".sk-h2"],
//         { opacity:0, y:28 },
//         { opacity:1, y:0, duration:.65, stagger:.12,
//           scrollTrigger:{ trigger:".sk-head", start:"top 82%" } });
//       gsap.fromTo(".sk-rule",
//         { scaleX:0, transformOrigin:"left" },
//         { scaleX:1, duration:.75, ease:"power3.out",
//           scrollTrigger:{ trigger:".sk-head", start:"top 82%" } });
//       gsap.fromTo(".sk-fbtn",
//         { opacity:0, y:10 },
//         { opacity:1, y:0, duration:.4, stagger:.06,
//           scrollTrigger:{ trigger:".sk-filters", start:"top 88%" } });
//       gsap.fromTo(".sk-card",
//         { opacity:0, y:44 },
//         { opacity:1, y:0, duration:.6, stagger:.1,
//           scrollTrigger:{ trigger:".sk-grid", start:"top 86%" } });
//     }, ref);
//     return () => ctx.revert();
//   }, []);

//   const visible = filter === "all" ? SKILLS : SKILLS.filter(s => s.id === filter);

//   return (
//     <>
//       <style>{`
//         .sk-sec {
//           background: #000; padding: 100px 0;
//           border-top: 1px solid #1a1a1a; position: relative; z-index: 1;
//         }
//         .sk-inner { max-width: 1280px; margin: 0 auto; padding: 0 24px; }

//         /* Filters */
//         .sk-filters { display: flex; gap: 6px; flex-wrap: wrap; margin: 36px 0 40px; }
//         .sk-fbtn {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 9px; font-weight: 800; letter-spacing: .2em; text-transform: uppercase;
//           background: #000; color: #3e3e3e; border: 1px solid #1c1c1c; cursor: pointer;
//           padding: 8px 16px; transition: all .15s;
//         }
//         .sk-fbtn:hover { border-color: #444; color: #888; }
//         .sk-fbtn.on { background: #fff; color: #000; border-color: #fff; }

//         /* Grid */
//         .sk-grid {
//           display: grid; grid-template-columns: 1fr 1fr;
//           gap: 1px; background: #1a1a1a;
//         }
//         .sk-card {
//           background: #000; padding: 34px 30px; cursor: pointer;
//           transition: background .2s; text-align: left; width: 100%; border: none;
//           position: relative;
//         }
//         .sk-card:hover { background: #050505; }
//         .sk-card-num {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 10px; font-weight: 800; letter-spacing: .24em; color: #1e1e1e;
//           margin-bottom: 18px;
//         }
//         .sk-card-head { display: flex; align-items: center; gap: 12px; margin-bottom: 22px; }
//         .sk-card-icon {
//           width: 34px; height: 34px; border: 1px solid #1c1c1c;
//           display: flex; align-items: center; justify-content: center; color: #2e2e2e;
//           flex-shrink: 0; transition: all .2s;
//         }
//         .sk-card:hover .sk-card-icon { border-color: #333; color: #555; }
//         .sk-card-title {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 18px; font-weight: 900; text-transform: uppercase; letter-spacing: .04em;
//           color: #fff; line-height: 1;
//         }

//         .sk-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 20px; }
//         .sk-tag {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 9px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
//           color: #3a3a3a; border: 1px solid #1a1a1a; padding: 5px 10px; transition: all .15s;
//         }
//         .sk-card:hover .sk-tag { color: #4e4e4e; border-color: #222; }

//         /* Progress accordion */
//         .sk-prog { overflow: hidden; transition: max-height .38s ease, opacity .28s ease; }
//         .sk-prog.open  { max-height: 200px; opacity: 1; }
//         .sk-prog.shut  { max-height: 0;     opacity: 0; }
//         .sk-prog-row { margin-bottom: 13px; }
//         .sk-prog-lbl {
//           display: flex; justify-content: space-between; margin-bottom: 5px;
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 9px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #3a3a3a;
//         }
//         .sk-track { height: 1px; background: #111; }
//         .sk-fill  { height: 100%; background: #fff; transition: width .85s ease; }

//         .sk-hint {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 8px; font-weight: 700; letter-spacing: .18em;
//           text-transform: uppercase; color: #2a2a2a; margin-top: 6px;
//           transition: color .15s;
//         }
//         .sk-card:hover .sk-hint { color: #3e3e3e; }

//         @media(max-width:768px) {
//           .sk-grid { grid-template-columns: 1fr; }
//           .sk-card { padding: 26px 20px; }
//         }
//         @media(max-width:640px) { .sk-sec { padding: 72px 0; } }
//       `}</style>

//       <section id="skills" className="sk-sec" ref={ref}>
//         <div className="sk-inner">
//           <div className="sk-head">
//             <span className="ilu-eyebrow sk-eye">( 01 ) — Technical Skills</span>
//             <h2 className="ilu-h2 sk-h2">My <span className="ghost">Toolkit</span></h2>
//             <div className="ilu-rule sk-rule" />
//           </div>

//           <div className="sk-filters">
//             {FILTERS.map(f => (
//               <button key={f} onClick={() => setFilter(f)}
//                 className={`sk-fbtn ${filter === f ? "on" : ""}`}>
//                 {f}
//               </button>
//             ))}
//           </div>

//           <div className="sk-grid">
//             {visible.map(cat => {
//               const { Icon } = cat;
//               const isOpen = open === cat.id;
//               return (
//                 <button key={cat.id} className="sk-card"
//                   onClick={() => setOpen(isOpen ? null : cat.id)}>
//                   <div className="sk-card-num">{cat.num} /</div>
//                   <div className="sk-card-head">
//                     <div className="sk-card-icon"><Icon size={14} strokeWidth={1.5} /></div>
//                     <div className="sk-card-title">{cat.title}</div>
//                   </div>
//                   <div className="sk-tags">
//                     {cat.tags.map(t => <span key={t} className="sk-tag">{t}</span>)}
//                   </div>
//                   <div className={`sk-prog ${isOpen ? "open" : "shut"}`}>
//                     {cat.bars.map(b => (
//                       <div key={b.name} className="sk-prog-row">
//                         <div className="sk-prog-lbl">
//                           <span>{b.name}</span><span>{b.pct}%</span>
//                         </div>
//                         <div className="sk-track">
//                           <div className="sk-fill" style={{ width: isOpen ? `${b.pct}%` : "0" }} />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="sk-hint">{isOpen ? "— Collapse" : "+ Proficiency"}</div>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }





"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/public/lib/gsap";
import { ScrollTrigger } from "gsap-trial/all";
import { Code, Database, Server, Wrench } from "lucide-react";

const SKILLS = [
  { id:"frontend",  num:"01", title:"Frontend",        Icon:Code,
    tags:["HTML5","CSS3","JavaScript ES6+","React.js","Redux","Tailwind CSS","Responsive Design"],
    bars:[{name:"HTML / CSS",pct:90},{name:"JavaScript",pct:85},{name:"React.js",pct:80}] },
  { id:"backend",   num:"02", title:".NET & Backend",  Icon:Server,
    tags:["C#","ASP.NET Core","Web API","Entity Framework","ADO.NET","LINQ"],
    bars:[{name:"C#",pct:88},{name:"ASP.NET Core",pct:85},{name:"Web API",pct:82}] },
  { id:"database",  num:"03", title:"Database & Cloud",Icon:Database,
    tags:["SQL Server","MySQL","Azure","AWS","Database Design","Stored Procedures"],
    bars:[{name:"SQL Server",pct:87},{name:"Azure",pct:75},{name:"DB Design",pct:80}] },
  { id:"tools",     num:"04", title:"Tools & DevOps",  Icon:Wrench,
    tags:["Git & GitHub","Visual Studio","VS Code","Postman","Docker","CI/CD"],
    bars:[{name:"Git & GitHub",pct:90},{name:"Visual Studio",pct:88},{name:"Docker",pct:72}] },
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
        { opacity:0, y:36 },
        { opacity:1, y:0, duration:.75, stagger:.13, scrollTrigger:{ trigger:".sk-head", start:"top 82%" } });
      gsap.fromTo(".sk-rule",
        { scaleX:0, transformOrigin:"left" },
        { scaleX:1, duration:.85, ease:"power3.out", scrollTrigger:{ trigger:".sk-head", start:"top 82%" } });
      gsap.fromTo(".sk-fbtn",
        { opacity:0, y:14 },
        { opacity:1, y:0, duration:.42, stagger:.07, scrollTrigger:{ trigger:".sk-filters", start:"top 88%" } });
      gsap.fromTo(".sk-card",
        { opacity:0, y:56, scale:.96 },
        { opacity:1, y:0, scale:1, duration:.68, stagger:.12, scrollTrigger:{ trigger:".sk-grid", start:"top 86%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  const visible = filter === "all" ? SKILLS : SKILLS.filter(s => s.id === filter);

  return (
    <>
      <style>{`
        .sk-sec { background:#000; padding:100px 0; border-top:1px solid #161c09; position:relative; z-index:1; }
        .sk-inner { max-width:1280px; margin:0 auto; padding:0 24px; }
        .sk-filters { display:flex; gap:6px; flex-wrap:wrap; margin:34px 0 38px; }
        .sk-fbtn { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:800; letter-spacing:.2em; text-transform:uppercase; background:#000; color:#283510; border:1px solid #161c09; cursor:pointer; padding:8px 16px; transition:all .18s; }
        .sk-fbtn:hover { border-color:#c8f13530; color:#c8f13566; }
        .sk-fbtn.on { background:#c8f135; color:#000; border-color:#c8f135; }

        .sk-grid { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:#161c09; }

        .sk-card { background:#000; padding:34px 30px; cursor:pointer; transition:background .25s; text-align:left; width:100%; border:none; position:relative; overflow:hidden; }
        .sk-card::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse at 50% -20%, #c8f13510 0%, transparent 65%); opacity:0; transition:opacity .35s; pointer-events:none; }
        .sk-card:hover { background:#040a01; }
        .sk-card:hover::before { opacity:1; }

        .sk-num { font-family:'Barlow Condensed',sans-serif; font-size:10px; font-weight:800; letter-spacing:.24em; color:#161c09; margin-bottom:18px; }
        .sk-head-row { display:flex; align-items:center; gap:12px; margin-bottom:22px; }
        .sk-icon { width:34px; height:34px; border:1px solid #161c09; display:flex; align-items:center; justify-content:center; color:#283510; flex-shrink:0; transition:all .25s; }
        .sk-card:hover .sk-icon { border-color:#c8f13530; color:#c8f13566; box-shadow:0 0 14px #c8f13518; }
        .sk-title { font-family:'Barlow Condensed',sans-serif; font-size:18px; font-weight:900; text-transform:uppercase; letter-spacing:.04em; color:#fff; line-height:1; transition:color .25s; }
        .sk-card:hover .sk-title { color:#c8f135; }

        .sk-tags { display:flex; flex-wrap:wrap; gap:5px; margin-bottom:20px; }
        .sk-tag { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:#283510; border:1px solid #161c09; padding:5px 10px; transition:all .18s; }
        .sk-card:hover .sk-tag { color:#c8f13566; border-color:#c8f13520; }

        .sk-prog { overflow:hidden; transition:max-height .42s ease, opacity .32s ease; }
        .sk-prog.open { max-height:240px; opacity:1; }
        .sk-prog.shut { max-height:0; opacity:0; }
        .sk-prow { margin-bottom:14px; }
        .sk-plbl { display:flex; justify-content:space-between; margin-bottom:6px; font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:#283510; }
        .sk-plbl span:last-child { color:#c8f13568; }
        .sk-track { height:1px; background:#0d1008; }
        .sk-fill  { height:100%; background:#c8f135; transition:width .95s ease; box-shadow:0 0 7px #c8f13555; }

        .sk-hint { font-family:'Barlow Condensed',sans-serif; font-size:8px; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:#161c09; margin-top:7px; transition:color .2s; }
        .sk-card:hover .sk-hint { color:#c8f13540; }

        @media(max-width:768px) { .sk-grid { grid-template-columns:1fr; } .sk-card { padding:26px 20px; } }
        @media(max-width:640px) { .sk-sec { padding:72px 0; } }
      `}</style>

      <section id="skills" className="sk-sec" ref={ref}>
        <div className="sk-inner">
          <div className="sk-head">
            <span className="sec-eye sk-eye">( 01 ) — Technical Skills</span>
            <h2 className="sec-h2 sk-h2">My <span className="ghost">Toolkit</span></h2>
            <div className="sec-rule sk-rule"/>
          </div>
          <div className="sk-filters">
            {FILTERS.map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`sk-fbtn ${filter===f?"on":""}`}>{f}</button>
            ))}
          </div>
          <div className="sk-grid">
            {visible.map(cat => {
              const {Icon} = cat;
              const isOpen = open === cat.id;
              return (
                <button key={cat.id} className="sk-card" onClick={() => setOpen(isOpen ? null : cat.id)}>
                  <div className="sk-num">{cat.num} /</div>
                  <div className="sk-head-row">
                    <div className="sk-icon"><Icon size={14} strokeWidth={1.5}/></div>
                    <div className="sk-title">{cat.title}</div>
                  </div>
                  <div className="sk-tags">{cat.tags.map(t => <span key={t} className="sk-tag">{t}</span>)}</div>
                  <div className={`sk-prog ${isOpen?"open":"shut"}`}>
                    {cat.bars.map(b => (
                      <div key={b.name} className="sk-prow">
                        <div className="sk-plbl"><span>{b.name}</span><span>{b.pct}%</span></div>
                        <div className="sk-track"><div className="sk-fill" style={{width:isOpen?`${b.pct}%`:"0"}}/></div>
                      </div>
                    ))}
                  </div>
                  <div className="sk-hint">{isOpen?"— Collapse":"+ Proficiency"}</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}