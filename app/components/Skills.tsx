


// "use client";
// import { useEffect, useRef, useState } from "react";
// import { gsap } from "@/public/lib/gsap";
// import { ScrollTrigger } from "gsap/all";
// import { Code, Database, Server, Wrench } from "lucide-react";

// /* ── 3 marquee rows (like asharaf's ticker strips) ── */
// const ROW_A = ["React.js","Redux","TypeScript","Next.js","Tailwind CSS","HTML5","CSS3","JavaScript ES6+","Responsive Design","GSAP","Figma"];
// const ROW_B = ["C#","ASP.NET Core","Web API","Entity Framework","ADO.NET","LINQ","SQL Server","MySQL","Azure","AWS","Docker","CI/CD","JWT Auth"];
// const ROW_C = ["Git","GitHub","Visual Studio","VS Code","Postman","REST API","Swagger","SignalR","npm","Vite"];

// const SKILLS = [
//   { id:"frontend",  num:"01", title:"Frontend",         Icon:Code,
//     tags:["HTML5","CSS3","JavaScript ES6+","React.js","Redux","Tailwind CSS","Responsive Design","GSAP","Next.js","TypeScript"],
//     bars:[{name:"HTML / CSS",pct:90},{name:"JavaScript",pct:85},{name:"React.js",pct:80},{name:"Next.js",pct:78}] },
//   { id:"backend",   num:"02", title:".NET & Backend",   Icon:Server,
//     tags:["C#","ASP.NET Core","Web API","Entity Framework","ADO.NET","LINQ","JWT Auth","SignalR","REST API"],
//     bars:[{name:"C#",pct:88},{name:"ASP.NET Core",pct:85},{name:"Web API",pct:82},{name:"Entity Framework",pct:80}] },
//   { id:"database",  num:"03", title:"Database & Cloud", Icon:Database,
//     tags:["SQL Server","MySQL","Azure","AWS","Database Design","Stored Procedures","ADO.NET"],
//     bars:[{name:"SQL Server",pct:87},{name:"Azure",pct:75},{name:"MySQL",pct:80},{name:"DB Design",pct:82}] },
//   { id:"tools",     num:"04", title:"Tools & DevOps",   Icon:Wrench,
//     tags:["Git & GitHub","Visual Studio","VS Code","Postman","Docker","CI/CD","Swagger","npm","Vite"],
//     bars:[{name:"Git & GitHub",pct:90},{name:"Visual Studio",pct:88},{name:"Docker",pct:72},{name:"Postman",pct:86}] },
// ];
// const FILTERS = ["all","frontend","backend","database","tools"];

// export default function Skills() {
//   const [filter,  setFilter]  = useState("all");
//   const [flipped, setFlipped] = useState<string|null>(null);
//   const ref = useRef<HTMLElement>(null);

//   useEffect(() => {
//     if (!ref.current) return;
//     const ctx = gsap.context(() => {

//       /* Header */
//       gsap.fromTo([".sk-eye",".sk-h2"],
//         { opacity:0, y:50 },
//         { opacity:1, y:0, duration:.9, stagger:.15, ease:"power4.out",
//           scrollTrigger:{ trigger:".sk-head", start:"top 82%" } });
//       gsap.fromTo(".sk-rule",
//         { scaleX:0, transformOrigin:"left" },
//         { scaleX:1, duration:1, ease:"power3.out",
//           scrollTrigger:{ trigger:".sk-head", start:"top 82%" } });

//       /* Marquee strips fade in */
//       gsap.fromTo(".sk-mq-wrap",
//         { opacity:0, y:28 },
//         { opacity:1, y:0, duration:.85,
//           scrollTrigger:{ trigger:".sk-mq-wrap", start:"top 88%" } });

//       /* Filter buttons */
//       gsap.fromTo(".sk-fbtn",
//         { opacity:0, y:14, scale:.88 },
//         { opacity:1, y:0, scale:1, duration:.4, stagger:.06, ease:"power3.out",
//           scrollTrigger:{ trigger:".sk-filters", start:"top 90%" } });

//       /* ── 3-D card entrance ──
//          Each card slides + flips in from different direction.
//          Reverses on scroll back up.
//       */
//       const entrances = [
//         { x:-100, y:0,   ry:-80, rx:0   },   // card 0: flip from left
//         { x: 100, y:0,   ry: 80, rx:0   },   // card 1: flip from right
//         { x:0,    y: 80, ry:0,   rx: 70 },   // card 2: flip from bottom
//         { x:0,    y:-80, ry:0,   rx:-70 },   // card 3: flip from top
//       ];

//       document.querySelectorAll<HTMLElement>(".sk-card").forEach((el, i) => {
//         const e = entrances[i % 4];
//         gsap.set(el, {
//           opacity:0, x:e.x, y:e.y,
//           rotateY:e.ry, rotateX:e.rx,
//           scale:.6, transformPerspective:1100,
//         });
//         ScrollTrigger.create({
//           trigger: el,
//           start: "top 87%",
//           onEnter: () => gsap.to(el, {
//             opacity:1, x:0, y:0, rotateY:0, rotateX:0, scale:1,
//             duration:1.05, ease:"power3.out",
//           }),
//           onLeaveBack: () => gsap.to(el, {
//             opacity:0, x:e.x, y:e.y,
//             rotateY:e.ry, rotateX:e.rx,
//             scale:.6, duration:.65, ease:"power2.in",
//           }),
//         });
//       });

//     }, ref);
//     return () => ctx.revert();
//   }, []);

//   const visible = filter === "all" ? SKILLS : SKILLS.filter(s => s.id === filter);

//   return (<>
//     <style>{`
//       .sk-sec {
//         background:var(--bg);padding:110px 0;
//         border-top:1px solid var(--border);
//         position:relative;z-index:1;
//         transition:background .45s;overflow:hidden;
//       }
//       .sk-inner { max-width:1280px;margin:0 auto;padding:0 40px; }

//       /* ── 3 Marquee rows (left → right → left) ── */
//       .sk-mq-wrap { margin:32px 0 0; }
//       .sk-mq {
//         border-top:1px solid var(--border);
//         height:48px;display:flex;align-items:center;
//         overflow:hidden;transition:background .45s;
//       }
//       .sk-mq:nth-child(1) { background:var(--bg); }
//       .sk-mq:nth-child(2) { background:var(--bg-alt); }
//       .sk-mq:nth-child(3) { background:var(--bg);border-bottom:1px solid var(--border); }

//       .sk-mq-track {
//         display:flex;white-space:nowrap;
//         will-change:transform;flex-shrink:0;
//       }
//       /* Row 1 → left */
//       .sk-mq:nth-child(1) .sk-mq-track { animation:marquee 22s linear infinite; }
//       /* Row 2 → right (reverse) */
//       .sk-mq:nth-child(2) .sk-mq-track { animation:marquee 28s linear infinite reverse; }
//       /* Row 3 → left */
//       .sk-mq:nth-child(3) .sk-mq-track { animation:marquee 18s linear infinite; }

//       .sk-mq-chip {
//         font-family:'Barlow Condensed',sans-serif;
//         font-size:13px;font-weight:800;letter-spacing:.2em;
//         text-transform:uppercase;color:var(--td);
//         padding:0 22px;display:inline-flex;align-items:center;gap:10px;
//         white-space:nowrap;cursor:default;transition:color .2s;flex-shrink:0;
//       }
//       .sk-mq-chip:hover { color:var(--ac); }
//       .sk-mq-dot { color:var(--ac-dim);font-size:8px; }

//       /* ── Filters ── */
//       .sk-filters { display:flex;gap:7px;flex-wrap:wrap;margin:40px 0 38px; }
//       .sk-fbtn {
//         font-family:'Barlow Condensed',sans-serif;
//         font-size:12px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;
//         background:transparent;color:var(--td);border:1px solid var(--border);
//         cursor:pointer;padding:10px 22px;transition:all .18s;
//       }
//       .sk-fbtn:hover { border-color:var(--border-ac);color:var(--ac-dim); }
//       .sk-fbtn.on { background:var(--ac);color:#000;border-color:var(--ac); }

//       /* ── Cards grid ── */
//       .sk-grid {
//         display:grid;grid-template-columns:repeat(2,1fr);
//         gap:18px;perspective:1300px;
//       }

//       /* Card shell — GSAP animates this on scroll entrance */
//       .sk-card {
//         position:relative;min-height:360px;
//         cursor:pointer;background:none;border:none;padding:0;
//         transform-style:preserve-3d;will-change:transform;
//       }

//       /* Inner wrapper flips on click */
//       .sk-card-inner {
//         position:absolute;inset:0;
//         transform-style:preserve-3d;
//         transition:transform .75s cubic-bezier(.4,0,.2,1);
//       }
//       .sk-card.flip .sk-card-inner { transform:rotateY(180deg); }

//       /* Both faces */
//       .sk-face {
//         position:absolute;inset:0;
//         backface-visibility:hidden;-webkit-backface-visibility:hidden;
//         border:1px solid var(--border);
//         padding:34px 30px;
//         display:flex;flex-direction:column;
//         background:var(--bg-alt);
//         transition:border-color .25s,background .25s;
//         overflow:hidden;
//       }
//       /* Radial glow on hover */
//       .sk-face::after {
//         content:'';position:absolute;inset:0;pointer-events:none;
//         background:radial-gradient(ellipse at 50% 0%,rgba(200,241,53,.065) 0%,transparent 62%);
//         opacity:0;transition:opacity .4s;
//       }
//       html.light .sk-face::after {
//         background:radial-gradient(ellipse at 50% 0%,rgba(200,21,27,.055) 0%,transparent 62%);
//       }
//       .sk-card:hover .sk-face::after { opacity:1; }
//       .sk-card:hover .sk-face { border-color:var(--border-ac); }

//       /* Back face starts rotated */
//       .sk-back { transform:rotateY(180deg);background:var(--bg-card);justify-content:space-between; }

//       /* Front content */
//       .sk-num {
//         font-family:'Barlow Condensed',sans-serif;
//         font-size:13px;font-weight:800;letter-spacing:.28em;
//         color:var(--tm);margin-bottom:20px;text-align:left;
//       }
//       .sk-hrow { display:flex;align-items:center;gap:14px;margin-bottom:18px; }
//       .sk-icon {
//         width:44px;height:44px;border:1px solid var(--border);
//         display:flex;align-items:center;justify-content:center;
//         color:var(--td);flex-shrink:0;transition:all .25s;
//       }
//       .sk-card:hover .sk-icon { border-color:var(--border-ac);color:var(--ac); }
//       .sk-title {
//         font-family:'Barlow Condensed',sans-serif;
//         font-size:26px;font-weight:900;text-transform:uppercase;
//         letter-spacing:.04em;color:var(--tp);line-height:1;
//         transition:color .25s;text-align:left;
//       }
//       .sk-card:hover .sk-title { color:var(--ac); }
//       .sk-tags { display:flex;flex-wrap:wrap;gap:7px;flex:1;align-content:flex-start; }
//       .sk-tag {
//         font-family:'Barlow Condensed',sans-serif;
//         font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
//         color:var(--td);border:1px solid var(--border);padding:6px 13px;transition:all .18s;
//       }
//       .sk-card:hover .sk-tag { color:var(--ac-dim);border-color:var(--border-ac); }
//       .sk-hint {
//         font-family:'Barlow Condensed',sans-serif;
//         font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;
//         color:var(--tm);margin-top:16px;text-align:left;transition:color .2s;
//       }
//       .sk-card:hover .sk-hint { color:var(--ac-dim); }

//       /* Back content */
//       .sk-back-title {
//         font-family:'Barlow Condensed',sans-serif;
//         font-size:14px;font-weight:800;letter-spacing:.24em;text-transform:uppercase;
//         color:var(--ac-dim);margin-bottom:22px;
//       }
//       .sk-prow { margin-bottom:20px; }
//       .sk-plbl {
//         display:flex;justify-content:space-between;margin-bottom:9px;
//         font-family:'Barlow Condensed',sans-serif;
//         font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;
//       }
//       .sk-plbl span:first-child { color:var(--ts); }
//       .sk-plbl span:last-child  { color:var(--ac-dim); }
//       .sk-track { height:3px;background:var(--border); }
//       .sk-fill {
//         height:100%;background:var(--ac);
//         box-shadow:0 0 10px rgba(200,241,53,.4);
//         transition:width 1.2s ease .4s;
//       }
//       html.light .sk-fill { box-shadow:0 0 8px rgba(200,21,27,.3); }
//       .sk-back-hint {
//         font-family:'Barlow Condensed',sans-serif;
//         font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;
//         color:var(--tm);
//       }

//       /* Responsive */
//       @media (max-width:900px) {
//         .sk-grid { grid-template-columns:1fr; }
//         .sk-card { min-height:320px; }
//         .sk-inner { padding:0 24px; }
//       }
//       @media (max-width:640px) {
//         .sk-sec  { padding:80px 0; }
//         .sk-inner{ padding:0 20px; }
//         .sk-face { padding:26px 22px; }
//         .sk-card { min-height:300px; }
//       }
//     `}</style>

//     <section id="skills" className="sk-sec" ref={ref}>
//       <div className="sk-inner">

//         {/* Header */}
//         <div className="sk-head">
//           <span className="sec-eye sk-eye">( 01 ) — Technical Skills</span>
//           <h2 className="sec-h2 sk-h2">My <span className="ghost">Toolkit</span></h2>
//           <div className="sec-rule sk-rule"/>
//         </div>

//         {/* ── 3 Marquee strips ── */}
//         <div className="sk-mq-wrap">
//           {[ROW_A, ROW_B, ROW_C].map((row, ri) => (
//             <div key={ri} className="sk-mq">
//               <div className="sk-mq-track">
//                 {/* Duplicate the row twice so the loop is seamless */}
//                 {[0,1].map(s => row.map((t, i) => (
//                   <span key={`${s}-${i}`} className="sk-mq-chip">
//                     {t}<span className="sk-mq-dot">✦</span>
//                   </span>
//                 )))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Filters */}
//         <div className="sk-filters">
//           {FILTERS.map(f => (
//             <button key={f} onClick={() => setFilter(f)}
//               className={"sk-fbtn" + (filter===f ? " on" : "")}>{f}</button>
//           ))}
//         </div>

//         {/* Cards */}
//         <div className="sk-grid">
//           {visible.map(cat => {
//             const { Icon } = cat;
//             const isFlip = flipped === cat.id;
//             return (
//               <div key={cat.id}
//                 className={"sk-card" + (isFlip ? " flip" : "")}
//                 onClick={() => setFlipped(isFlip ? null : cat.id)}>
//                 <div className="sk-card-inner">

//                   {/* FRONT */}
//                   <div className="sk-face sk-front">
//                     <div className="sk-num">{cat.num} /</div>
//                     <div className="sk-hrow">
//                       <div className="sk-icon"><Icon size={18} strokeWidth={1.5}/></div>
//                       <div className="sk-title">{cat.title}</div>
//                     </div>
//                     <div className="sk-tags">
//                       {cat.tags.map(t => <span key={t} className="sk-tag">{t}</span>)}
//                     </div>
//                     <div className="sk-hint">Click → See Proficiency</div>
//                   </div>

//                   {/* BACK */}
//                   <div className="sk-face sk-back">
//                     <div>
//                       <div className="sk-back-title">{cat.title} — Proficiency</div>
//                       {cat.bars.map(b => (
//                         <div key={b.name} className="sk-prow">
//                           <div className="sk-plbl">
//                             <span>{b.name}</span><span>{b.pct}%</span>
//                           </div>
//                           <div className="sk-track">
//                             <div className="sk-fill" style={{width: isFlip ? `${b.pct}%` : "0"}}/>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                     <div className="sk-back-hint">← Click to Flip Back</div>
//                   </div>

//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   </>);
// }





"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/public/lib/gsap";
import { ScrollTrigger } from "gsap/all";
import { Code, Database, Server, Wrench } from "lucide-react";

const ROW_A = ["React.js","Redux","TypeScript","Next.js","Tailwind CSS","HTML5","CSS3","JavaScript ES6+","Responsive Design","GSAP"];
const ROW_B = ["C#","ASP.NET Core","Web API","Entity Framework","ADO.NET","LINQ","SQL Server","MySQL","Azure","AWS","Docker","CI/CD"];
const ROW_C = ["Git","GitHub","Visual Studio","VS Code","Postman","REST API","Swagger","SignalR","npm","JWT Auth"];

const SKILLS = [
  {
    id:"frontend", num:"01", title:"Frontend", Icon:Code,
    tags:["HTML5","CSS3","JavaScript ES6+","React.js","Redux","Tailwind CSS","GSAP","Next.js","TypeScript"],
    bars:[{n:"HTML / CSS",p:90},{n:"JavaScript",p:85},{n:"React.js",p:80},{n:"Next.js",p:78}],
  },
  {
    id:"backend", num:"02", title:".NET & Backend", Icon:Server,
    tags:["C#","ASP.NET Core","Web API","Entity Framework","ADO.NET","LINQ","JWT Auth","SignalR"],
    bars:[{n:"C#",p:88},{n:"ASP.NET Core",p:85},{n:"Web API",p:82},{n:"Entity Framework",p:80}],
  },
  {
    id:"database", num:"03", title:"Database & Cloud", Icon:Database,
    tags:["SQL Server","MySQL","Azure","AWS","Database Design","Stored Procedures"],
    bars:[{n:"SQL Server",p:87},{n:"Azure",p:75},{n:"MySQL",p:80},{n:"DB Design",p:82}],
  },
  {
    id:"tools", num:"04", title:"Tools & DevOps", Icon:Wrench,
    tags:["Git & GitHub","Visual Studio","VS Code","Postman","Docker","CI/CD","Swagger"],
    bars:[{n:"Git & GitHub",p:90},{n:"Visual Studio",p:88},{n:"Docker",p:72},{n:"Postman",p:86}],
  },
];

export default function Skills() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      /* ══════════════════════════════
         DESKTOP — pinned horizontal
      ══════════════════════════════ */
      const outer = outerRef.current;
      const inner = innerRef.current;
      const track = trackRef.current;
      if (!outer || !inner || !track) return;

      ScrollTrigger.create({
        trigger: outer,
        start: "top top",
        end: () => `+=${track.scrollWidth - window.innerWidth}`,
        pin: inner,
        anticipatePin: 1,
        scrub: 1.2,
        invalidateOnRefresh: true,
        onUpdate(self) {
          gsap.set(track, {
            x: -(track.scrollWidth - window.innerWidth) * self.progress,
          });
          const f = document.getElementById("sk-fill");
          if (f) f.style.width = `${self.progress * 100}%`;
        },
      });

    } else {
      /* ══════════════════════════════
         MOBILE — slide from sides
         Uses actual pixel vw so cards
         start fully off-screen.
      ══════════════════════════════ */
      const cards = document.querySelectorAll<HTMLElement>(".sk-mob-card");
      const vw = window.innerWidth;

      cards.forEach((card, i) => {
        const dir    = i % 2 === 0 ? 1 : -1;
        const startX = dir * vw;   // full viewport width in pixels

        gsap.set(card, { x: startX, opacity: 0 });

        ScrollTrigger.create({
          trigger: card,
          start: "top 88%",
          end:   "top 20%",
          onEnter: () =>
            gsap.to(card, {
              x: 0, opacity: 1,
              duration: 0.8, ease: "power3.out",
            }),
          onLeaveBack: () =>
            gsap.to(card, {
              x: startX, opacity: 0,
              duration: 0.45, ease: "power2.in",
            }),
        });

        // Animate bars when card enters
        ScrollTrigger.create({
          trigger: card,
          start: "top 75%",
          onEnter: () => {
            card.querySelectorAll<HTMLElement>(".sk-bar-fill").forEach(b => {
              b.style.width = (b.dataset.p || "80") + "%";
            });
          },
        });
      });
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const Marquees = () => (
    <div className="sk-marquees">
      {[ROW_A, ROW_B, ROW_C].map((row, ri) => (
        <div key={ri} className="sk-mq">
          <div className="sk-mq-track">
            {[0,1].map(s => row.map((t,i) => (
              <span key={`${s}-${i}`} className="sk-chip">
                {t}<span className="sk-dot">✦</span>
              </span>
            )))}
          </div>
        </div>
      ))}
    </div>
  );

  const SkillCard = ({ cat }: { cat: typeof SKILLS[0] }) => {
    const { Icon } = cat;
    return (
      <div className="sk-card">
        <div className="sk-card-l">
          <div className="sk-big-num">{cat.num}</div>
          <div className="sk-hrow">
            <div className="sk-icon"><Icon size={20} strokeWidth={1.5}/></div>
            <div className="sk-title">{cat.title}</div>
          </div>
          <div className="sk-tags">
            {cat.tags.map(t => <span key={t} className="sk-tag">{t}</span>)}
          </div>
        </div>
        <div className="sk-card-r">
          <div className="sk-bars-lbl">Proficiency</div>
          {cat.bars.map(b => (
            <div key={b.n} className="sk-prow">
              <div className="sk-plbl"><span>{b.n}</span><span>{b.p}%</span></div>
              <div className="sk-bar-track">
                <div className="sk-bar-fill" data-p={b.p}
                  ref={el => {
                    if (el && window.innerWidth > 768)
                      setTimeout(() => { el.style.width = b.p + "%"; }, 800);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (<>
    <style>{`
      /* ════════════════ SHARED CARD ════════════════ */
      .sk-card {
        width: 100%; border: 1px solid var(--border);
        background: var(--bg-card); position: relative; overflow: hidden;
        display: grid; grid-template-columns: 1fr 1fr;
        gap: 40px; align-items: start; padding: 36px 44px;
        transition: border-color .3s, background .45s;
      }
      .sk-card::before {
        content: ''; position: absolute;
        top: 0; left: 0; right: 0; height: 3px;
        background: linear-gradient(to right, var(--ac), var(--ac-dim));
        transform: scaleX(0); transform-origin: left;
        transition: transform .55s ease;
      }
      .sk-card:hover::before { transform: scaleX(1); }
      .sk-card:hover { border-color: var(--border-ac); }

      .sk-big-num {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 72px; font-weight: 900;
        letter-spacing: -.03em; line-height: 1;
        color: var(--tm); margin-bottom: 8px; transition: color .3s;
      }
      .sk-card:hover .sk-big-num { color: var(--ac-dim); }
      .sk-hrow { display: flex; align-items: center; gap: 13px; margin-bottom: 14px; }
      .sk-icon {
        width: 40px; height: 40px; border: 1px solid var(--border);
        display: flex; align-items: center; justify-content: center;
        color: var(--td); flex-shrink: 0; transition: all .25s;
      }
      .sk-card:hover .sk-icon { border-color: var(--border-ac); color: var(--ac); }
      .sk-title {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 24px; font-weight: 900; text-transform: uppercase;
        letter-spacing: .04em; color: var(--tp); transition: color .25s;
      }
      .sk-card:hover .sk-title { color: var(--ac); }
      .sk-tags { display: flex; flex-wrap: wrap; gap: 6px; }
      .sk-tag {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 11px; font-weight: 700; letter-spacing: .13em;
        text-transform: uppercase; color: var(--td);
        border: 1px solid var(--border); padding: 5px 10px; transition: all .18s;
      }
      .sk-card:hover .sk-tag { color: var(--ac-dim); border-color: var(--border-ac); }
      .sk-bars-lbl {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 12px; font-weight: 700; letter-spacing: .28em;
        text-transform: uppercase; color: var(--ac-dim); margin-bottom: 18px;
      }
      .sk-prow { margin-bottom: 16px; }
      .sk-plbl {
        display: flex; justify-content: space-between; margin-bottom: 7px;
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 13px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase;
      }
      .sk-plbl span:first-child { color: var(--ts); }
      .sk-plbl span:last-child  { color: var(--ac-dim); }
      .sk-bar-track { height: 3px; background: var(--border); overflow: hidden; }
      .sk-bar-fill {
        height: 100%; background: var(--ac);
        box-shadow: 0 0 10px rgba(200,241,53,.35);
        width: 0%; transition: width 1.3s cubic-bezier(.25,.46,.45,.94) .2s;
      }
      html.light .sk-bar-fill { box-shadow: 0 0 8px rgba(200,21,27,.28); }

      /* ════════════════ MARQUEE ════════════════ */
      .sk-marquees {}
      .sk-mq {
        height: 40px; display: flex; align-items: center;
        overflow: hidden; border-top: 1px solid var(--border);
        transition: background .45s;
      }
      .sk-mq:last-child { border-bottom: 1px solid var(--border); }
      .sk-mq:nth-child(1) { background: var(--bg); }
      .sk-mq:nth-child(2) { background: var(--bg-alt); }
      .sk-mq:nth-child(3) { background: var(--bg); }
      .sk-mq-track {
        display: flex; white-space: nowrap;
        will-change: transform; flex-shrink: 0;
      }
      .sk-mq:nth-child(1) .sk-mq-track { animation: marquee 22s linear infinite; }
      .sk-mq:nth-child(2) .sk-mq-track { animation: marquee 28s linear infinite reverse; }
      .sk-mq:nth-child(3) .sk-mq-track { animation: marquee 18s linear infinite; }
      .sk-chip {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 13px; font-weight: 800; letter-spacing: .2em;
        text-transform: uppercase; color: var(--td);
        padding: 0 18px; display: inline-flex; align-items: center;
        gap: 10px; white-space: nowrap; flex-shrink: 0; transition: color .2s;
      }
      .sk-chip:hover { color: var(--ac); }
      .sk-dot { color: var(--ac-dim); font-size: 7px; }

      /* ════════════════ DESKTOP ════════════════ */
      .sk-outer {
        position: relative; background: var(--bg);
        border-top: 1px solid var(--border); transition: background .45s;
      }
      .sk-inner {
        width: 100%; height: 100vh; overflow: hidden;
        display: flex; flex-direction: column;
      }
      /* Compact header — less wasted space */
      .sk-hdr {
        flex-shrink: 0;
        padding: 24px 52px 12px;
        border-bottom: 1px solid var(--border);
      }
      .sk-hdr .sec-eye { display: block; margin-bottom: 2px; }
      .sk-hdr .sec-h2  { font-size: clamp(32px, 4vw, 52px); }

      .sk-prog { flex-shrink: 0; height: 2px; background: var(--border); }
      #sk-fill { height: 100%; background: var(--ac); width: 0%; }
      .sk-track {
        flex: 1; display: flex;
        will-change: transform; align-items: stretch;
        min-height: 0; /* allow flex child to shrink */
      }
      .sk-slide {
        flex-shrink: 0; width: 100vw; height: 100%;
        display: flex; align-items: center;
        justify-content: center;
        padding: 14px 60px; /* reduced vertical padding so card fits */
      }
      .sk-ftr {
        flex-shrink: 0; padding: 10px 52px;
        display: flex; align-items: center;
        justify-content: space-between;
        border-top: 1px solid var(--border);
      }
      .sk-ftr-l {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 11px; font-weight: 700; letter-spacing: .26em;
        text-transform: uppercase; color: var(--tm);
        display: flex; align-items: center; gap: 10px;
      }
      .sk-arr { color: var(--ac-dim); animation: sk-b 1.8s ease-in-out infinite; }
      @keyframes sk-b { 0%,100%{transform:translateX(0)} 50%{transform:translateX(10px)} }
      .sk-ftr-r {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 13px; font-weight: 800; letter-spacing: .18em;
        text-transform: uppercase; color: var(--td);
      }
      .sk-ftr-ac { color: var(--ac); }

      /* ════════════════ MOBILE ════════════════ */
      .sk-mob-sec {
        background: var(--bg);
        border-top: 1px solid var(--border);
        padding: 52px 0 44px;
        overflow-x: hidden;
        transition: background .45s;
      }
      .sk-mob-inner { padding: 0 18px; }
      .sk-mob-hdr   { margin-bottom: 22px; }

      .sk-mob-card {
        margin-bottom: 18px;
        will-change: transform;
      }
      /* Mobile card — single column */
      .sk-mob-card .sk-card {
        grid-template-columns: 1fr;
        gap: 20px; padding: 26px 22px;
      }
      .sk-mob-card .sk-big-num { font-size: 48px; }

      @media (max-width: 480px) {
        .sk-mob-card .sk-card    { padding: 20px 16px; gap: 16px; }
        .sk-mob-card .sk-big-num { font-size: 40px; }
        .sk-mob-inner            { padding: 0 14px; }
        .sk-mob-sec              { padding: 44px 0 36px; }
      }

      /* Show/hide */
      .sk-desk { display: block; }
      .sk-mob  { display: none; }
      @media (max-width: 768px) {
        .sk-desk { display: none !important; }
        .sk-mob  { display: block !important; }
      }
    `}</style>

    {/* ════ DESKTOP ════ */}
    <div className="sk-desk">
      <div ref={outerRef} className="sk-outer" id="skills">
        <section ref={innerRef} className="sk-inner">
          <div className="sk-hdr">
            <span className="sec-eye">( 01 ) — Technical Skills</span>
            <h2 className="sec-h2" style={{marginBottom:0}}>My <span className="ghost">Toolkit</span></h2>
          </div>
          <Marquees />
          <div className="sk-prog"><div id="sk-fill"/></div>
          <div ref={trackRef} className="sk-track">
            {SKILLS.map(cat => (
              <div key={cat.id} className="sk-slide">
                <SkillCard cat={cat}/>
              </div>
            ))}
          </div>
          <div className="sk-ftr">
            <div className="sk-ftr-l">
              Scroll slowly — each category slides in
              <span className="sk-arr">→</span>
            </div>
            <div className="sk-ftr-r">
              <span className="sk-ftr-ac">{SKILLS.length}</span> Categories
            </div>
          </div>
        </section>
      </div>
    </div>

    {/* ════ MOBILE ════ */}
    <div className="sk-mob sk-mob-sec" id="skills">
      <div className="sk-mob-inner">
        <div className="sk-mob-hdr">
          <span className="sec-eye">( 01 ) — Technical Skills</span>
          <h2 className="sec-h2" style={{marginBottom:0}}>My <span className="ghost">Toolkit</span></h2>
        </div>
        <Marquees />
        <div style={{marginTop:"22px"}}>
          {SKILLS.map(cat => (
            <div key={cat.id} className="sk-mob-card">
              <SkillCard cat={cat}/>
            </div>
          ))}
        </div>
      </div>
    </div>

  </>);
}