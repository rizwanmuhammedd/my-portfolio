


// "use client";
// import { useEffect, useRef, useState } from "react";
// import { gsap } from "@/public/lib/gsap";
// import { Code, Database, Server, Wrench } from "lucide-react";

// const SKILLS = [
//   { id:"frontend",  num:"01", title:"Frontend",         Icon:Code,
//     tags:["HTML5","CSS3","JavaScript ES6+","React.js","Redux","Tailwind CSS","Responsive Design"],
//     bars:[{name:"HTML / CSS",pct:90},{name:"JavaScript",pct:85},{name:"React.js",pct:80}] },
//   { id:"backend",   num:"02", title:".NET & Backend",   Icon:Server,
//     tags:["C#","ASP.NET Core","Web API","Entity Framework","ADO.NET","LINQ"],
//     bars:[{name:"C#",pct:88},{name:"ASP.NET Core",pct:85},{name:"Web API",pct:82}] },
//   { id:"database",  num:"03", title:"Database & Cloud", Icon:Database,
//     tags:["SQL Server","MySQL","Azure","AWS","Database Design","Stored Procedures"],
//     bars:[{name:"SQL Server",pct:87},{name:"Azure",pct:75},{name:"DB Design",pct:80}] },
//   { id:"tools",     num:"04", title:"Tools & DevOps",   Icon:Wrench,
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
//         { opacity:1, y:0, duration:.75, stagger:.13,
//           scrollTrigger:{ trigger:".sk-head", start:"top 82%" } });
//       gsap.fromTo(".sk-rule",
//         { scaleX:0, transformOrigin:"left" },
//         { scaleX:1, duration:.85, ease:"power3.out",
//           scrollTrigger:{ trigger:".sk-head", start:"top 82%" } });
//       gsap.fromTo(".sk-fbtn",
//         { opacity:0, y:14 },
//         { opacity:1, y:0, duration:.42, stagger:.07,
//           scrollTrigger:{ trigger:".sk-filters", start:"top 88%" } });
//       // alternating side entry
//       document.querySelectorAll<HTMLElement>(".sk-card").forEach((el, i) => {
//         gsap.fromTo(el,
//           { opacity:0, x: i % 2 === 0 ? -60 : 60, y:30 },
//           { opacity:1, x:0, y:0, duration:.7, ease:"power3.out",
//             scrollTrigger:{ trigger:el, start:"top 87%", toggleActions:"play none none reverse" }
//           });
//       });
//     }, ref);
//     return () => ctx.revert();
//   }, []);

//   const visible = filter === "all" ? SKILLS : SKILLS.filter(s => s.id === filter);

//   return (
//     <>
//       <style>{`
//         .sk-sec {
//           background:var(--bg,#000); padding:100px 0;
//           border-top:1px solid rgba(200,241,53,.08);
//           position:relative; z-index:1;
//           transition:background .4s;
//         }
//         .sk-inner { max-width:1280px; margin:0 auto; padding:0 24px; }

//         .sk-filters { display:flex; gap:6px; flex-wrap:wrap; margin:34px 0 38px; }
//         .sk-fbtn {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:9px; font-weight:800; letter-spacing:.2em; text-transform:uppercase;
//           background:transparent; color:rgba(255,255,255,.3);
//           border:1px solid rgba(200,241,53,.12);
//           cursor:pointer; padding:8px 18px; transition:all .18s;
//         }
//         html.light .sk-fbtn { color:rgba(0,0,0,.38); border-color:rgba(0,0,0,.14); }
//         .sk-fbtn:hover { border-color:rgba(200,241,53,.35); color:rgba(200,241,53,.7); }
//         .sk-fbtn.on { background:#c8f135; color:#000; border-color:#c8f135; }

//         .sk-grid {
//           display:grid; grid-template-columns:1fr 1fr;
//           gap:1px; background:rgba(200,241,53,.08);
//         }
//         html.light .sk-grid { background:rgba(0,0,0,.08); }

//         .sk-card {
//           background:var(--bg,#000); padding:36px 32px;
//           cursor:pointer; transition:background .25s;
//           text-align:left; width:100%; border:none;
//           position:relative; overflow:hidden;
//         }
//         .sk-card::before {
//           content:''; position:absolute; inset:0;
//           background:radial-gradient(ellipse at 50% -20%,rgba(200,241,53,.07) 0%,transparent 65%);
//           opacity:0; transition:opacity .35s; pointer-events:none;
//         }
//         .sk-card:hover { background:rgba(200,241,53,.025); }
//         .sk-card:hover::before { opacity:1; }
//         html.light .sk-card { background:var(--bg-card,#f0f0eb); }
//         html.light .sk-card:hover { background:#e8e8e0; }

//         .sk-num {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:10px; font-weight:800; letter-spacing:.24em;
//           color:rgba(200,241,53,.18); margin-bottom:18px;
//         }
//         html.light .sk-num { color:rgba(0,0,0,.2); }

//         .sk-head-row { display:flex; align-items:center; gap:12px; margin-bottom:24px; }
//         .sk-icon {
//           width:36px; height:36px; border:1px solid rgba(200,241,53,.15);
//           display:flex; align-items:center; justify-content:center;
//           color:rgba(200,241,53,.35); flex-shrink:0; transition:all .25s;
//         }
//         html.light .sk-icon { border-color:rgba(0,0,0,.14); color:rgba(0,0,0,.4); }
//         .sk-card:hover .sk-icon {
//           border-color:rgba(200,241,53,.45);
//           color:#c8f135;
//           box-shadow:0 0 14px rgba(200,241,53,.2);
//         }
//         .sk-title {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:20px; font-weight:900; text-transform:uppercase;
//           letter-spacing:.04em; color:var(--text-pri,#fff); line-height:1;
//           transition:color .25s;
//         }
//         .sk-card:hover .sk-title { color:#c8f135; }

//         .sk-tags { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:22px; }
//         .sk-tag {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:9px; font-weight:700; letter-spacing:.14em; text-transform:uppercase;
//           color:rgba(255,255,255,.35);
//           border:1px solid rgba(200,241,53,.1); padding:5px 11px; transition:all .18s;
//         }
//         html.light .sk-tag { color:rgba(0,0,0,.4); border-color:rgba(0,0,0,.12); }
//         .sk-card:hover .sk-tag {
//           color:rgba(200,241,53,.65);
//           border-color:rgba(200,241,53,.22);
//         }

//         .sk-prog { overflow:hidden; transition:max-height .42s ease, opacity .32s ease; }
//         .sk-prog.open { max-height:260px; opacity:1; }
//         .sk-prog.shut { max-height:0; opacity:0; }
//         .sk-prow { margin-bottom:16px; }
//         .sk-plbl {
//           display:flex; justify-content:space-between; margin-bottom:7px;
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:9px; font-weight:700; letter-spacing:.18em; text-transform:uppercase;
//         }
//         .sk-plbl span:first-child { color:rgba(255,255,255,.6); }
//         .sk-plbl span:last-child  { color:rgba(200,241,53,.65); }
//         html.light .sk-plbl span:first-child { color:rgba(0,0,0,.6); }

//         .sk-track { height:2px; background:rgba(200,241,53,.08); border-radius:1px; }
//         html.light .sk-track { background:rgba(0,0,0,.08); }
//         .sk-fill {
//           height:100%; background:#c8f135;
//           transition:width .95s ease;
//           box-shadow:0 0 8px rgba(200,241,53,.5);
//           border-radius:1px;
//         }

//         .sk-hint {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:8px; font-weight:700; letter-spacing:.18em; text-transform:uppercase;
//           color:rgba(200,241,53,.2); margin-top:7px; transition:color .2s;
//         }
//         html.light .sk-hint { color:rgba(0,0,0,.2); }
//         .sk-card:hover .sk-hint { color:rgba(200,241,53,.5); }

//         @media(max-width:768px){ .sk-grid{grid-template-columns:1fr;} .sk-card{padding:26px 20px;} }
//         @media(max-width:640px){ .sk-sec{padding:72px 0;} }
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
//                 <button key={cat.id} className="sk-card"
//                   onClick={() => setOpen(isOpen ? null : cat.id)}>
//                   <div className="sk-num">{cat.num} /</div>
//                   <div className="sk-head-row">
//                     <div className="sk-icon"><Icon size={15} strokeWidth={1.5}/></div>
//                     <div className="sk-title">{cat.title}</div>
//                   </div>
//                   <div className="sk-tags">
//                     {cat.tags.map(t => <span key={t} className="sk-tag">{t}</span>)}
//                   </div>
//                   <div className={`sk-prog ${isOpen?"open":"shut"}`}>
//                     {cat.bars.map(b => (
//                       <div key={b.name} className="sk-prow">
//                         <div className="sk-plbl">
//                           <span>{b.name}</span>
//                           <span>{b.pct}%</span>
//                         </div>
//                         <div className="sk-track">
//                           <div className="sk-fill" style={{width:isOpen?`${b.pct}%`:"0"}}/>
//                         </div>
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
import { ScrollTrigger } from "gsap/all";
import { Code, Database, Server, Wrench } from "lucide-react";

const ROW_A = ["React.js","Redux","TypeScript","Next.js","Tailwind CSS","HTML5","CSS3","JavaScript ES6+","Responsive Design","GSAP"];
const ROW_B = ["C#","ASP.NET Core","Web API","Entity Framework","ADO.NET","LINQ","SQL Server","MySQL","Azure","AWS","Docker","CI/CD"];
const ROW_C = ["Git","GitHub","Visual Studio","VS Code","Postman","Figma","REST API","JWT Auth","Swagger","SignalR"];

const SKILLS = [
  { id:"frontend",  num:"01", title:"Frontend",         Icon:Code,
    tags:["HTML5","CSS3","JavaScript ES6+","React.js","Redux","Tailwind CSS","Responsive Design","GSAP","Next.js"],
    bars:[{name:"HTML / CSS",pct:90},{name:"JavaScript",pct:85},{name:"React.js",pct:80}] },
  { id:"backend",   num:"02", title:".NET & Backend",   Icon:Server,
    tags:["C#","ASP.NET Core","Web API","Entity Framework","ADO.NET","LINQ","JWT Auth","SignalR"],
    bars:[{name:"C#",pct:88},{name:"ASP.NET Core",pct:85},{name:"Web API",pct:82}] },
  { id:"database",  num:"03", title:"Database & Cloud", Icon:Database,
    tags:["SQL Server","MySQL","Azure","AWS","Database Design","Stored Procedures"],
    bars:[{name:"SQL Server",pct:87},{name:"Azure",pct:75},{name:"DB Design",pct:80}] },
  { id:"tools",     num:"04", title:"Tools & DevOps",   Icon:Wrench,
    tags:["Git & GitHub","Visual Studio","VS Code","Postman","Docker","CI/CD","Swagger","Figma"],
    bars:[{name:"Git & GitHub",pct:90},{name:"Visual Studio",pct:88},{name:"Docker",pct:72}] },
];
const FILTERS = ["all","frontend","backend","database","tools"];

export default function Skills() {
  const [filter,  setFilter]  = useState("all");
  const [flipped, setFlipped] = useState<string|null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {

      /* Header */
      gsap.fromTo([".sk-eye",".sk-h2"],
        { opacity:0, y:50 },
        { opacity:1, y:0, duration:.9, stagger:.15, ease:"power4.out",
          scrollTrigger:{ trigger:".sk-head", start:"top 82%" }});
      gsap.fromTo(".sk-rule",
        { scaleX:0, transformOrigin:"left" },
        { scaleX:1, duration:1, ease:"power3.out",
          scrollTrigger:{ trigger:".sk-head", start:"top 82%" }});

      /* Marquee strips fade in */
      gsap.fromTo(".sk-mq-wrap",
        { opacity:0, y:30 },
        { opacity:1, y:0, duration:.85,
          scrollTrigger:{ trigger:".sk-mq-wrap", start:"top 88%" }});

      /* Filters */
      gsap.fromTo(".sk-fbtn",
        { opacity:0, y:14, scale:.88 },
        { opacity:1, y:0, scale:1, duration:.4, stagger:.06, ease:"power3.out",
          scrollTrigger:{ trigger:".sk-filters", start:"top 90%" }});

      /* ── EXTREME 3-D card entrance ──
         Each card flips in from a different axis/direction,
         then reverse-exits when scrolling back up
      */
      const entrances = [
        { ry:-90, rx:0,   x:-80, y:0   },   // 0: flip in from left
        { ry: 90, rx:0,   x: 80, y:0   },   // 1: flip in from right
        { ry:0,   rx: 80, x:0,   y: 80 },   // 2: flip in from bottom
        { ry:0,   rx:-80, x:0,   y:-80 },   // 3: flip in from top
      ];
      document.querySelectorAll<HTMLElement>(".sk-card").forEach((el, i) => {
        const e = entrances[i % 4];
        gsap.set(el, {
          opacity:0, rotateY:e.ry, rotateX:e.rx,
          x:e.x, y:e.y, scale:.55,
          transformPerspective:1000,
        });
        ScrollTrigger.create({
          trigger: el,
          start: "top 87%",
          onEnter: () => gsap.to(el, {
            opacity:1, rotateY:0, rotateX:0, x:0, y:0, scale:1,
            duration:1.05, ease:"power3.out",
          }),
          onLeaveBack: () => gsap.to(el, {
            opacity:0, rotateY:e.ry, rotateX:e.rx,
            x:e.x, y:e.y, scale:.55,
            duration:.65, ease:"power2.in",
          }),
        });
      });

    }, ref);
    return () => ctx.revert();
  }, []);

  const visible = filter === "all" ? SKILLS : SKILLS.filter(s => s.id === filter);

  return (<>
    <style>{`
      .sk-sec {
        background:var(--bg); padding:100px 0;
        border-top:1px solid var(--border);
        position:relative; z-index:1;
        transition:background .45s; overflow:hidden;
      }
      .sk-inner { max-width:1280px; margin:0 auto; padding:0 32px; }

      /* ── 3 Marquee rows ── */
      .sk-mq-wrap { margin:32px 0 0; }
      .sk-mq {
        border-top:1px solid var(--border);
        height:46px; display:flex; align-items:center;
        overflow:hidden; transition:background .45s;
      }
      .sk-mq:nth-child(1) { background:var(--bg); }
      .sk-mq:nth-child(2) { background:var(--bg-alt); }
      .sk-mq:nth-child(3) { background:var(--bg); border-bottom:1px solid var(--border); }
      .sk-mq-track {
        display:flex; white-space:nowrap; will-change:transform; flex-shrink:0;
      }
      .sk-mq:nth-child(1) .sk-mq-track { animation:marquee 22s linear infinite; }
      .sk-mq:nth-child(2) .sk-mq-track { animation:marquee 28s linear infinite reverse; }
      .sk-mq:nth-child(3) .sk-mq-track { animation:marquee 18s linear infinite; }
      .sk-mq-chip {
        font-family:'Barlow Condensed',sans-serif;
        font-size:12px; font-weight:800; letter-spacing:.2em;
        text-transform:uppercase; color:var(--td);
        padding:0 20px; display:inline-flex; align-items:center; gap:10px;
        white-space:nowrap; cursor:default; transition:color .2s;
        flex-shrink:0;
      }
      .sk-mq-chip:hover { color:var(--ac); }
      .sk-mq-dot { color:var(--ac-dim); font-size:7px; }

      /* ── Filters ── */
      .sk-filters { display:flex; gap:6px; flex-wrap:wrap; margin:38px 0 36px; }
      .sk-fbtn {
        font-family:'Barlow Condensed',sans-serif;
        font-size:11px; font-weight:800; letter-spacing:.2em; text-transform:uppercase;
        background:transparent; color:var(--td); border:1px solid var(--border);
        cursor:pointer; padding:10px 22px; transition:all .18s;
      }
      .sk-fbtn:hover { border-color:var(--border-ac); color:var(--ac-dim); }
      .sk-fbtn.on { background:var(--ac); color:#000; border-color:var(--ac); }

      /* ── Card grid ── */
      .sk-grid {
        display:grid; grid-template-columns:repeat(2,1fr);
        gap:16px;
        /* 3-D context */
        perspective:1400px;
      }

      /* ── Flip card shell ──
         The .sk-card itself is what GSAP animates on entrance.
         The .sk-card-inner flips on click.
      */
      .sk-card {
        position:relative; min-height:340px;
        cursor:pointer; background:none; border:none; padding:0;
        transform-style:preserve-3d; will-change:transform;
      }
      .sk-card-inner {
        position:absolute; inset:0;
        transform-style:preserve-3d;
        transition:transform .75s cubic-bezier(.4,0,.2,1);
      }
      .sk-card.flip .sk-card-inner { transform:rotateY(180deg); }

      .sk-face {
        position:absolute; inset:0;
        backface-visibility:hidden; -webkit-backface-visibility:hidden;
        border:1px solid var(--border);
        padding:32px 28px;
        display:flex; flex-direction:column;
        background:var(--bg-alt);
        transition:border-color .25s, background .25s;
        overflow:hidden;
      }
      /* Radial glow on hover */
      .sk-face::after {
        content:''; position:absolute; inset:0; pointer-events:none;
        background:radial-gradient(ellipse at 50% 0%,
          rgba(200,241,53,.06) 0%, transparent 65%);
        opacity:0; transition:opacity .4s;
      }
      html.light .sk-face::after {
        background:radial-gradient(ellipse at 50% 0%,
          rgba(200,21,27,.05) 0%, transparent 65%);
      }
      .sk-card:hover .sk-face::after { opacity:1; }
      .sk-card:hover .sk-face { border-color:var(--border-ac); }

      /* Back rotated 180deg */
      .sk-back {
        transform:rotateY(180deg);
        background:var(--bg-card);
        justify-content:space-between;
      }

      /* Front */
      .sk-num {
        font-family:'Barlow Condensed',sans-serif;
        font-size:11px; font-weight:800; letter-spacing:.28em;
        color:var(--tm); margin-bottom:18px; text-align:left;
      }
      .sk-hrow { display:flex; align-items:center; gap:13px; margin-bottom:18px; }
      .sk-icon {
        width:42px; height:42px; border:1px solid var(--border);
        display:flex; align-items:center; justify-content:center;
        color:var(--td); flex-shrink:0; transition:all .25s;
      }
      .sk-card:hover .sk-icon {
        border-color:var(--border-ac); color:var(--ac);
        box-shadow:0 0 16px rgba(200,241,53,.12);
      }
      html.light .sk-card:hover .sk-icon {
        box-shadow:0 0 12px rgba(200,21,27,.1);
      }
      .sk-title {
        font-family:'Barlow Condensed',sans-serif;
        font-size:24px; font-weight:900; text-transform:uppercase;
        letter-spacing:.04em; color:var(--tp); line-height:1;
        transition:color .25s; text-align:left;
      }
      .sk-card:hover .sk-title { color:var(--ac); }
      .sk-tags { display:flex; flex-wrap:wrap; gap:6px; flex:1; align-content:flex-start; }
      .sk-tag {
        font-family:'Barlow Condensed',sans-serif;
        font-size:10px; font-weight:700; letter-spacing:.12em; text-transform:uppercase;
        color:var(--td); border:1px solid var(--border); padding:5px 12px;
        transition:all .18s;
      }
      .sk-card:hover .sk-tag { color:var(--ac-dim); border-color:var(--border-ac); }
      .sk-hint {
        font-family:'Barlow Condensed',sans-serif;
        font-size:9px; font-weight:700; letter-spacing:.2em; text-transform:uppercase;
        color:var(--tm); margin-top:14px; text-align:left; transition:color .2s;
      }
      .sk-card:hover .sk-hint { color:var(--ac-dim); }

      /* Back */
      .sk-back-title {
        font-family:'Barlow Condensed',sans-serif;
        font-size:13px; font-weight:800; letter-spacing:.24em; text-transform:uppercase;
        color:var(--ac-dim); margin-bottom:20px;
      }
      .sk-prow { margin-bottom:20px; }
      .sk-plbl {
        display:flex; justify-content:space-between; margin-bottom:8px;
        font-family:'Barlow Condensed',sans-serif;
        font-size:12px; font-weight:700; letter-spacing:.16em; text-transform:uppercase;
      }
      .sk-plbl span:first-child { color:var(--ts); }
      .sk-plbl span:last-child  { color:var(--ac-dim); }
      .sk-track { height:3px; background:var(--border); }
      .sk-fill {
        height:100%; background:var(--ac);
        box-shadow:0 0 10px rgba(200,241,53,.4);
        transition:width 1.2s ease .4s;
      }
      html.light .sk-fill { box-shadow:0 0 8px rgba(200,21,27,.28); }
      .sk-back-hint {
        font-family:'Barlow Condensed',sans-serif;
        font-size:9px; font-weight:700; letter-spacing:.2em; text-transform:uppercase;
        color:var(--tm);
      }

      @media(max-width:900px)  { .sk-grid{grid-template-columns:1fr;} }
      @media(max-width:640px)  { .sk-sec{padding:72px 0;} .sk-face{padding:24px 20px;} .sk-card{min-height:300px;} }
    `}</style>

    <section id="skills" className="sk-sec" ref={ref}>
      <div className="sk-inner">

        {/* Header */}
        <div className="sk-head">
          <span className="sec-eye sk-eye">( 01 ) — Technical Skills</span>
          <h2 className="sec-h2 sk-h2">My <span className="ghost">Toolkit</span></h2>
          <div className="sec-rule sk-rule"/>
        </div>

        {/* ── 3 Marquee strips ── */}
        <div className="sk-mq-wrap">
          {[ROW_A, ROW_B, ROW_C].map((row, ri) => (
            <div key={ri} className="sk-mq">
              <div className="sk-mq-track">
                {[0,1].map(s => row.map((t,i) => (
                  <span key={`${s}-${i}`} className="sk-mq-chip">
                    {t}<span className="sk-mq-dot">✦</span>
                  </span>
                )))}
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="sk-filters">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={"sk-fbtn" + (filter===f ? " on" : "")}>{f}</button>
          ))}
        </div>

        {/* ── Cards: click to flip and see proficiency bars ── */}
        <div className="sk-grid">
          {visible.map(cat => {
            const { Icon } = cat;
            const isFlip = flipped === cat.id;
            return (
              <div key={cat.id}
                className={"sk-card" + (isFlip ? " flip" : "")}
                onClick={() => setFlipped(isFlip ? null : cat.id)}>
                <div className="sk-card-inner">

                  {/* FRONT */}
                  <div className="sk-face sk-front">
                    <div className="sk-num">{cat.num} /</div>
                    <div className="sk-hrow">
                      <div className="sk-icon"><Icon size={17} strokeWidth={1.5}/></div>
                      <div className="sk-title">{cat.title}</div>
                    </div>
                    <div className="sk-tags">
                      {cat.tags.map(t => <span key={t} className="sk-tag">{t}</span>)}
                    </div>
                    <div className="sk-hint">Click → See Proficiency</div>
                  </div>

                  {/* BACK */}
                  <div className="sk-face sk-back">
                    <div>
                      <div className="sk-back-title">{cat.title} Proficiency</div>
                      {cat.bars.map(b => (
                        <div key={b.name} className="sk-prow">
                          <div className="sk-plbl">
                            <span>{b.name}</span><span>{b.pct}%</span>
                          </div>
                          <div className="sk-track">
                            <div className="sk-fill" style={{width: isFlip ? `${b.pct}%` : "0"}}/>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="sk-back-hint">← Click to Flip Back</div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  </>);
}