



// "use client";
// import { useEffect, useRef, useState } from "react";
// import { gsap } from "@/public/lib/gsap";
// import { ScrollTrigger } from "gsap-trial/all";
// import { Code, Database, Server, Wrench } from "lucide-react";

// const SKILLS = [
//   { id:"frontend",  num:"01", title:"Frontend",        Icon:Code,
//     tags:["HTML5","CSS3","JavaScript ES6+","React.js","Redux","Tailwind CSS","Responsive Design"],
//     bars:[{name:"HTML / CSS",pct:90},{name:"JavaScript",pct:85},{name:"React.js",pct:80}] },
//   { id:"backend",   num:"02", title:".NET & Backend",  Icon:Server,
//     tags:["C#","ASP.NET Core","Web API","Entity Framework","ADO.NET","LINQ"],
//     bars:[{name:"C#",pct:88},{name:"ASP.NET Core",pct:85},{name:"Web API",pct:82}] },
//   { id:"database",  num:"03", title:"Database & Cloud",Icon:Database,
//     tags:["SQL Server","MySQL","Azure","AWS","Database Design","Stored Procedures"],
//     bars:[{name:"SQL Server",pct:87},{name:"Azure",pct:75},{name:"DB Design",pct:80}] },
//   { id:"tools",     num:"04", title:"Tools & DevOps",  Icon:Wrench,
//     tags:["Git & GitHub","Visual Studio","VS Code","Postman","Docker","CI/CD"],
//     bars:[{name:"Git & GitHub",pct:90},{name:"Visual Studio",pct:88},{name:"Docker",pct:72}] },
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
//         { opacity:0, y:36 },
//         { opacity:1, y:0, duration:.75, stagger:.13, scrollTrigger:{ trigger:".sk-head", start:"top 82%" } });
//       gsap.fromTo(".sk-rule",
//         { scaleX:0, transformOrigin:"left" },
//         { scaleX:1, duration:.85, ease:"power3.out", scrollTrigger:{ trigger:".sk-head", start:"top 82%" } });
//       gsap.fromTo(".sk-fbtn",
//         { opacity:0, y:14 },
//         { opacity:1, y:0, duration:.42, stagger:.07, scrollTrigger:{ trigger:".sk-filters", start:"top 88%" } });
//       gsap.fromTo(".sk-card",
//         { opacity:0, y:56, scale:.96 },
//         { opacity:1, y:0, scale:1, duration:.68, stagger:.12, scrollTrigger:{ trigger:".sk-grid", start:"top 86%" } });
//     }, ref);
//     return () => ctx.revert();
//   }, []);

//   const visible = filter === "all" ? SKILLS : SKILLS.filter(s => s.id === filter);

//   return (
//     <>
//       <style>{`
//         .sk-sec { background:#000; padding:100px 0; border-top:1px solid #161c09; position:relative; z-index:1; }
//         .sk-inner { max-width:1280px; margin:0 auto; padding:0 24px; }
//         .sk-filters { display:flex; gap:6px; flex-wrap:wrap; margin:34px 0 38px; }
//         .sk-fbtn { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:800; letter-spacing:.2em; text-transform:uppercase; background:#000; color:#283510; border:1px solid #161c09; cursor:pointer; padding:8px 16px; transition:all .18s; }
//         .sk-fbtn:hover { border-color:#c8f13530; color:#c8f13566; }
//         .sk-fbtn.on { background:#c8f135; color:#000; border-color:#c8f135; }

//         .sk-grid { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:#161c09; }

//         .sk-card { background:#000; padding:34px 30px; cursor:pointer; transition:background .25s; text-align:left; width:100%; border:none; position:relative; overflow:hidden; }
//         .sk-card::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse at 50% -20%, #c8f13510 0%, transparent 65%); opacity:0; transition:opacity .35s; pointer-events:none; }
//         .sk-card:hover { background:#040a01; }
//         .sk-card:hover::before { opacity:1; }

//         .sk-num { font-family:'Barlow Condensed',sans-serif; font-size:10px; font-weight:800; letter-spacing:.24em; color:#161c09; margin-bottom:18px; }
//         .sk-head-row { display:flex; align-items:center; gap:12px; margin-bottom:22px; }
//         .sk-icon { width:34px; height:34px; border:1px solid #161c09; display:flex; align-items:center; justify-content:center; color:#283510; flex-shrink:0; transition:all .25s; }
//         .sk-card:hover .sk-icon { border-color:#c8f13530; color:#c8f13566; box-shadow:0 0 14px #c8f13518; }
//         .sk-title { font-family:'Barlow Condensed',sans-serif; font-size:18px; font-weight:900; text-transform:uppercase; letter-spacing:.04em; color:#fff; line-height:1; transition:color .25s; }
//         .sk-card:hover .sk-title { color:#c8f135; }

//         .sk-tags { display:flex; flex-wrap:wrap; gap:5px; margin-bottom:20px; }
//         .sk-tag { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:#283510; border:1px solid #161c09; padding:5px 10px; transition:all .18s; }
//         .sk-card:hover .sk-tag { color:#c8f13566; border-color:#c8f13520; }

//         .sk-prog { overflow:hidden; transition:max-height .42s ease, opacity .32s ease; }
//         .sk-prog.open { max-height:240px; opacity:1; }
//         .sk-prog.shut { max-height:0; opacity:0; }
//         .sk-prow { margin-bottom:14px; }
//         .sk-plbl { display:flex; justify-content:space-between; margin-bottom:6px; font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:#283510; }
//         .sk-plbl span:last-child { color:#c8f13568; }
//         .sk-track { height:1px; background:#0d1008; }
//         .sk-fill  { height:100%; background:#c8f135; transition:width .95s ease; box-shadow:0 0 7px #c8f13555; }

//         .sk-hint { font-family:'Barlow Condensed',sans-serif; font-size:8px; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:#161c09; margin-top:7px; transition:color .2s; }
//         .sk-card:hover .sk-hint { color:#c8f13540; }

//         @media(max-width:768px) { .sk-grid { grid-template-columns:1fr; } .sk-card { padding:26px 20px; } }
//         @media(max-width:640px) { .sk-sec { padding:72px 0; } }
//       `}</style>

//       <section id="skills" className="sk-sec" ref={ref}>
//         <div className="sk-inner">
//           <div className="sk-head">
//             <span className="sec-eye sk-eye">( 01 ) — Technical Skills</span>
//             <h2 className="sec-h2 sk-h2">My <span className="ghost">Toolkit</span></h2>
//             <div className="sec-rule sk-rule"/>
//           </div>
//           <div className="sk-filters">
//             {FILTERS.map(f => (
//               <button key={f} onClick={() => setFilter(f)}
//                 className={`sk-fbtn ${filter===f?"on":""}`}>{f}</button>
//             ))}
//           </div>
//           <div className="sk-grid">
//             {visible.map(cat => {
//               const {Icon} = cat;
//               const isOpen = open === cat.id;
//               return (
//                 <button key={cat.id} className="sk-card" onClick={() => setOpen(isOpen ? null : cat.id)}>
//                   <div className="sk-num">{cat.num} /</div>
//                   <div className="sk-head-row">
//                     <div className="sk-icon"><Icon size={14} strokeWidth={1.5}/></div>
//                     <div className="sk-title">{cat.title}</div>
//                   </div>
//                   <div className="sk-tags">{cat.tags.map(t => <span key={t} className="sk-tag">{t}</span>)}</div>
//                   <div className={`sk-prog ${isOpen?"open":"shut"}`}>
//                     {cat.bars.map(b => (
//                       <div key={b.name} className="sk-prow">
//                         <div className="sk-plbl"><span>{b.name}</span><span>{b.pct}%</span></div>
//                         <div className="sk-track"><div className="sk-fill" style={{width:isOpen?`${b.pct}%`:"0"}}/></div>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="sk-hint">{isOpen?"— Collapse":"+ Proficiency"}</div>
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
import { Code, Database, Server, Wrench } from "lucide-react";

const SKILLS = [
  { id:"frontend",  num:"01", title:"Frontend",         Icon:Code,
    tags:["HTML5","CSS3","JavaScript ES6+","React.js","Redux","Tailwind CSS","Responsive Design"],
    bars:[{name:"HTML / CSS",pct:90},{name:"JavaScript",pct:85},{name:"React.js",pct:80}] },
  { id:"backend",   num:"02", title:".NET & Backend",   Icon:Server,
    tags:["C#","ASP.NET Core","Web API","Entity Framework","ADO.NET","LINQ"],
    bars:[{name:"C#",pct:88},{name:"ASP.NET Core",pct:85},{name:"Web API",pct:82}] },
  { id:"database",  num:"03", title:"Database & Cloud", Icon:Database,
    tags:["SQL Server","MySQL","Azure","AWS","Database Design","Stored Procedures"],
    bars:[{name:"SQL Server",pct:87},{name:"Azure",pct:75},{name:"DB Design",pct:80}] },
  { id:"tools",     num:"04", title:"Tools & DevOps",   Icon:Wrench,
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
        { opacity:1, y:0, duration:.75, stagger:.13,
          scrollTrigger:{ trigger:".sk-head", start:"top 82%" } });
      gsap.fromTo(".sk-rule",
        { scaleX:0, transformOrigin:"left" },
        { scaleX:1, duration:.85, ease:"power3.out",
          scrollTrigger:{ trigger:".sk-head", start:"top 82%" } });
      gsap.fromTo(".sk-fbtn",
        { opacity:0, y:14 },
        { opacity:1, y:0, duration:.42, stagger:.07,
          scrollTrigger:{ trigger:".sk-filters", start:"top 88%" } });
      // alternating side entry
      document.querySelectorAll<HTMLElement>(".sk-card").forEach((el, i) => {
        gsap.fromTo(el,
          { opacity:0, x: i % 2 === 0 ? -60 : 60, y:30 },
          { opacity:1, x:0, y:0, duration:.7, ease:"power3.out",
            scrollTrigger:{ trigger:el, start:"top 87%", toggleActions:"play none none reverse" }
          });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const visible = filter === "all" ? SKILLS : SKILLS.filter(s => s.id === filter);

  return (
    <>
      <style>{`
        .sk-sec {
          background:var(--bg,#000); padding:100px 0;
          border-top:1px solid rgba(200,241,53,.08);
          position:relative; z-index:1;
          transition:background .4s;
        }
        .sk-inner { max-width:1280px; margin:0 auto; padding:0 24px; }

        .sk-filters { display:flex; gap:6px; flex-wrap:wrap; margin:34px 0 38px; }
        .sk-fbtn {
          font-family:'Barlow Condensed',sans-serif;
          font-size:9px; font-weight:800; letter-spacing:.2em; text-transform:uppercase;
          background:transparent; color:rgba(255,255,255,.3);
          border:1px solid rgba(200,241,53,.12);
          cursor:pointer; padding:8px 18px; transition:all .18s;
        }
        html.light .sk-fbtn { color:rgba(0,0,0,.38); border-color:rgba(0,0,0,.14); }
        .sk-fbtn:hover { border-color:rgba(200,241,53,.35); color:rgba(200,241,53,.7); }
        .sk-fbtn.on { background:#c8f135; color:#000; border-color:#c8f135; }

        .sk-grid {
          display:grid; grid-template-columns:1fr 1fr;
          gap:1px; background:rgba(200,241,53,.08);
        }
        html.light .sk-grid { background:rgba(0,0,0,.08); }

        .sk-card {
          background:var(--bg,#000); padding:36px 32px;
          cursor:pointer; transition:background .25s;
          text-align:left; width:100%; border:none;
          position:relative; overflow:hidden;
        }
        .sk-card::before {
          content:''; position:absolute; inset:0;
          background:radial-gradient(ellipse at 50% -20%,rgba(200,241,53,.07) 0%,transparent 65%);
          opacity:0; transition:opacity .35s; pointer-events:none;
        }
        .sk-card:hover { background:rgba(200,241,53,.025); }
        .sk-card:hover::before { opacity:1; }
        html.light .sk-card { background:var(--bg-card,#f0f0eb); }
        html.light .sk-card:hover { background:#e8e8e0; }

        .sk-num {
          font-family:'Barlow Condensed',sans-serif;
          font-size:10px; font-weight:800; letter-spacing:.24em;
          color:rgba(200,241,53,.18); margin-bottom:18px;
        }
        html.light .sk-num { color:rgba(0,0,0,.2); }

        .sk-head-row { display:flex; align-items:center; gap:12px; margin-bottom:24px; }
        .sk-icon {
          width:36px; height:36px; border:1px solid rgba(200,241,53,.15);
          display:flex; align-items:center; justify-content:center;
          color:rgba(200,241,53,.35); flex-shrink:0; transition:all .25s;
        }
        html.light .sk-icon { border-color:rgba(0,0,0,.14); color:rgba(0,0,0,.4); }
        .sk-card:hover .sk-icon {
          border-color:rgba(200,241,53,.45);
          color:#c8f135;
          box-shadow:0 0 14px rgba(200,241,53,.2);
        }
        .sk-title {
          font-family:'Barlow Condensed',sans-serif;
          font-size:20px; font-weight:900; text-transform:uppercase;
          letter-spacing:.04em; color:var(--text-pri,#fff); line-height:1;
          transition:color .25s;
        }
        .sk-card:hover .sk-title { color:#c8f135; }

        .sk-tags { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:22px; }
        .sk-tag {
          font-family:'Barlow Condensed',sans-serif;
          font-size:9px; font-weight:700; letter-spacing:.14em; text-transform:uppercase;
          color:rgba(255,255,255,.35);
          border:1px solid rgba(200,241,53,.1); padding:5px 11px; transition:all .18s;
        }
        html.light .sk-tag { color:rgba(0,0,0,.4); border-color:rgba(0,0,0,.12); }
        .sk-card:hover .sk-tag {
          color:rgba(200,241,53,.65);
          border-color:rgba(200,241,53,.22);
        }

        .sk-prog { overflow:hidden; transition:max-height .42s ease, opacity .32s ease; }
        .sk-prog.open { max-height:260px; opacity:1; }
        .sk-prog.shut { max-height:0; opacity:0; }
        .sk-prow { margin-bottom:16px; }
        .sk-plbl {
          display:flex; justify-content:space-between; margin-bottom:7px;
          font-family:'Barlow Condensed',sans-serif;
          font-size:9px; font-weight:700; letter-spacing:.18em; text-transform:uppercase;
        }
        .sk-plbl span:first-child { color:rgba(255,255,255,.6); }
        .sk-plbl span:last-child  { color:rgba(200,241,53,.65); }
        html.light .sk-plbl span:first-child { color:rgba(0,0,0,.6); }

        .sk-track { height:2px; background:rgba(200,241,53,.08); border-radius:1px; }
        html.light .sk-track { background:rgba(0,0,0,.08); }
        .sk-fill {
          height:100%; background:#c8f135;
          transition:width .95s ease;
          box-shadow:0 0 8px rgba(200,241,53,.5);
          border-radius:1px;
        }

        .sk-hint {
          font-family:'Barlow Condensed',sans-serif;
          font-size:8px; font-weight:700; letter-spacing:.18em; text-transform:uppercase;
          color:rgba(200,241,53,.2); margin-top:7px; transition:color .2s;
        }
        html.light .sk-hint { color:rgba(0,0,0,.2); }
        .sk-card:hover .sk-hint { color:rgba(200,241,53,.5); }

        @media(max-width:768px){ .sk-grid{grid-template-columns:1fr;} .sk-card{padding:26px 20px;} }
        @media(max-width:640px){ .sk-sec{padding:72px 0;} }
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
                <button key={cat.id} className="sk-card"
                  onClick={() => setOpen(isOpen ? null : cat.id)}>
                  <div className="sk-num">{cat.num} /</div>
                  <div className="sk-head-row">
                    <div className="sk-icon"><Icon size={15} strokeWidth={1.5}/></div>
                    <div className="sk-title">{cat.title}</div>
                  </div>
                  <div className="sk-tags">
                    {cat.tags.map(t => <span key={t} className="sk-tag">{t}</span>)}
                  </div>
                  <div className={`sk-prog ${isOpen?"open":"shut"}`}>
                    {cat.bars.map(b => (
                      <div key={b.name} className="sk-prow">
                        <div className="sk-plbl">
                          <span>{b.name}</span>
                          <span>{b.pct}%</span>
                        </div>
                        <div className="sk-track">
                          <div className="sk-fill" style={{width:isOpen?`${b.pct}%`:"0"}}/>
                        </div>
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