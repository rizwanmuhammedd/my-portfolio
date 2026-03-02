

// "use client";
// import { useEffect, useRef } from "react";
// import { gsap } from "@/public/lib/gsap";
// import { ScrollTrigger } from "gsap/all";
// import { ExternalLink, Github } from "lucide-react";

// const PROJECTS = [
//   {
//     id:1, num:"01", cat:"Full Stack", title:"Sport-X E-commerce",
//     desc:"A premium football gear e-commerce platform featuring product catalog, shopping cart, user authentication, and payment integration.",
//     tech:["React",".NET Core","SQL Server","AWS"],
//     live:"https://sportx-sx.vercel.app/", code:"#",
//   },
//   {
//     id:2, num:"02", cat:"Backend", title:"Task Management API",
//     desc:"RESTful API for task management with user authentication, role-based access control, and real-time notifications via SignalR.",
//     tech:["ASP.NET Core","Entity Framework","JWT Auth","Swagger"],
//     live:"#", code:"https://github.com/rizwanmuhammedd/Build_a_Task_Management_API.git",
//   },
//   {
//     id:3, num:"03", cat:"Frontend", title:"Portfolio Website",
//     desc:"Fully responsive portfolio website with GSAP scroll animations, typing game, and modern brutalist design language.",
//     tech:["Next.js","GSAP","Tailwind CSS","TypeScript"],
//     live:"https://risvanmuhammed.vercel.app", code:"#",
//   },
// ];

// export default function Projects() {
//   const secRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     if (!secRef.current) return;

//     const ctx = gsap.context(() => {
//       // Section header
//       gsap.fromTo([".pr-eye",".pr-h2"],
//         { opacity:0, y:36 },
//         { opacity:1, y:0, duration:.75, stagger:.13,
//           scrollTrigger:{ trigger:".pr-head", start:"top 82%" } });
//       gsap.fromTo(".pr-rule",
//         { scaleX:0, transformOrigin:"left" },
//         { scaleX:1, duration:.85, ease:"power3.out",
//           scrollTrigger:{ trigger:".pr-head", start:"top 82%" } });

//       // Each project row slides in from alternating sides
//       // odd  → from right (+120vw), even → from left (-120vw)
//       document.querySelectorAll<HTMLElement>(".pr-item").forEach((el, i) => {
//         const fromX = i % 2 === 0 ? -100 : 100; // vw equivalent in px relative to viewport
//         gsap.set(el, { x: fromX + "vw", opacity:0 });

//         ScrollTrigger.create({
//           trigger: el,
//           start: "top 88%",
//           onEnter: () => {
//             gsap.to(el, {
//               x: 0, opacity:1,
//               duration: .85,
//               ease: "power3.out",
//             });
//           },
//           onLeaveBack: () => {
//             gsap.to(el, {
//               x: fromX + "vw", opacity:0,
//               duration: .55,
//               ease: "power2.in",
//             });
//           },
//         });
//       });

//       // Footer
//       gsap.fromTo(".pr-foot",
//         { opacity:0, y:32 },
//         { opacity:1, y:0, duration:.7,
//           scrollTrigger:{ trigger:".pr-foot", start:"top 90%" } });

//     }, secRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <style>{`
//         .pr-sec {
//           background:var(--bg,#000); padding:100px 0;
//           border-top:1px solid rgba(200,241,53,.08);
//           position:relative; z-index:1;
//           overflow:hidden;          /* clip the sliding items */
//           transition:background .4s;
//         }
//         .pr-inner { max-width:1280px; margin:0 auto; padding:0 24px; }

//         /* Individual project item — full-width row */
//         .pr-item {
//           border-bottom:1px solid rgba(200,241,53,.08);
//           padding:52px 0;
//           display:grid;
//           grid-template-columns:72px 1fr 200px;
//           gap:28px; align-items:start;
//           position:relative;
//           transition:background .22s;
//           will-change:transform;
//         }
//         .pr-item::before {
//           content:''; position:absolute; left:0; top:0; bottom:0;
//           width:2px;
//           background:linear-gradient(to bottom,transparent,#c8f135,transparent);
//           transform:scaleY(0); transform-origin:center;
//           transition:transform .5s ease;
//         }
//         .pr-item:hover::before { transform:scaleY(1); }
//         .pr-item:hover { background:rgba(200,241,53,.03); }

//         .pr-num {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:11px; font-weight:700; letter-spacing:.22em;
//           color:rgba(200,241,53,.2); padding-top:5px;
//         }

//         .pr-cat {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:9px; font-weight:700; letter-spacing:.3em;
//           text-transform:uppercase; color:rgba(200,241,53,.45);
//           margin-bottom:10px;
//         }
//         .pr-title {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:clamp(24px,3.2vw,44px); font-weight:900;
//           text-transform:uppercase; letter-spacing:.02em;
//           color:#fff; line-height:1; margin-bottom:16px;
//           transition:color .22s, text-shadow .22s;
//         }
//         html.light .pr-title { color:#000; }
//         .pr-item:hover .pr-title {
//           color:#c8f135;
//           text-shadow:0 0 40px rgba(200,241,53,.35);
//         }
//         .pr-desc {
//           font-size:14px; font-weight:300; line-height:1.85;
//           color:rgba(255,255,255,.55);
//           max-width:520px; margin-bottom:18px;
//         }
//         html.light .pr-desc { color:rgba(0,0,0,.58); }

//         .pr-tags { display:flex; flex-wrap:wrap; gap:6px; }
//         .pr-tag {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:9px; font-weight:700; letter-spacing:.14em;
//           text-transform:uppercase;
//           color:rgba(255,255,255,.3);
//           border:1px solid rgba(200,241,53,.12);
//           padding:5px 11px; transition:all .18s;
//         }
//         html.light .pr-tag { color:rgba(0,0,0,.4); }
//         .pr-item:hover .pr-tag {
//           color:rgba(200,241,53,.65);
//           border-color:rgba(200,241,53,.25);
//         }

//         /* Action buttons */
//         .pr-acts { display:flex; flex-direction:column; gap:8px; padding-top:5px; }
//         .pr-btn {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:9px; font-weight:800; letter-spacing:.18em;
//           text-transform:uppercase; padding:10px 16px;
//           display:flex; align-items:center; gap:7px;
//           text-decoration:none; transition:all .2s;
//           white-space:nowrap; cursor:pointer;
//         }
//         .pr-solid { background:#c8f135; color:#000; border:1px solid #c8f135; }
//         .pr-solid:hover {
//           background:#b3d820;
//           transform:translateY(-2px);
//           box-shadow:0 8px 24px rgba(200,241,53,.3);
//         }
//         .pr-ghost {
//           background:transparent;
//           color:rgba(255,255,255,.4);
//           border:1px solid rgba(200,241,53,.15);
//         }
//         .pr-ghost:hover {
//           border-color:rgba(200,241,53,.45);
//           color:rgba(200,241,53,.8);
//           transform:translateY(-2px);
//         }
//         html.light .pr-ghost { color:rgba(0,0,0,.45); border-color:rgba(0,0,0,.15); }
//         html.light .pr-ghost:hover { color:#3a6000; border-color:#3a6000; }
//         .pr-dis { opacity:.2; pointer-events:none; }

//         /* Footer */
//         .pr-foot {
//           margin-top:58px; padding-top:44px;
//           border-top:1px solid rgba(200,241,53,.08);
//           display:flex; align-items:center;
//           justify-content:space-between; flex-wrap:wrap; gap:16px;
//         }
//         .pr-foot-txt {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:clamp(18px,3vw,36px); font-weight:900;
//           text-transform:uppercase; letter-spacing:.03em;
//           color:rgba(255,255,255,.18);
//         }
//         html.light .pr-foot-txt { color:rgba(0,0,0,.2); }

//         @media(max-width:900px){
//           .pr-item{grid-template-columns:50px 1fr;}
//           .pr-acts{flex-direction:row;grid-column:1/-1;}
//         }
//         @media(max-width:640px){
//           .pr-sec{padding:72px 0;}
//           .pr-item{padding:32px 0;}
//           .pr-acts{flex-wrap:wrap;}
//         }
//       `}</style>

//       <section id="projects" className="pr-sec" ref={secRef}>
//         <div className="pr-inner">
//           <div className="pr-head" style={{marginBottom:54}}>
//             <span className="sec-eye pr-eye">( 02 ) — Selected Work</span>
//             <h2 className="sec-h2 pr-h2">Pro<span className="ghost">jects</span></h2>
//             <div className="sec-rule pr-rule"/>
//           </div>

//           {PROJECTS.map((p, i) => (
//             <div key={p.id} className="pr-item">
//               <div className="pr-num">{p.num}</div>
//               <div>
//                 <div className="pr-cat">{p.cat}</div>
//                 <div className="pr-title">{p.title}</div>
//                 <p className="pr-desc">{p.desc}</p>
//                 <div className="pr-tags">
//                   {p.tech.map(t => <span key={t} className="pr-tag">{t}</span>)}
//                 </div>
//               </div>
//               <div className="pr-acts">
//                 {p.live !== "#"
//                   ? <a href={p.live} target="_blank" rel="noopener noreferrer" className="pr-btn pr-solid">
//                       <ExternalLink size={10} strokeWidth={2}/> Live Demo
//                     </a>
//                   : <span className="pr-btn pr-solid pr-dis">
//                       <ExternalLink size={10}/> Live Demo
//                     </span>
//                 }
//                 {p.code !== "#"
//                   ? <a href={p.code} target="_blank" rel="noopener noreferrer" className="pr-btn pr-ghost">
//                       <Github size={10} strokeWidth={1.5}/> View Code
//                     </a>
//                   : <span className="pr-btn pr-ghost pr-dis">
//                       <Github size={10} strokeWidth={1.5}/> View Code
//                     </span>
//                 }
//               </div>
//             </div>
//           ))}

//           <div className="pr-foot">
//             <div className="pr-foot-txt">Have a concept? Let's build it.</div>
//             <a href="#contact" className="btn btn-solid">Hire Me →</a>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }






"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/public/lib/gsap";
import { ScrollTrigger } from "gsap/all";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id:1, num:"01", cat:"Full Stack",
    title:"Sport-X E-commerce",
    desc:"A premium football gear e-commerce platform featuring product catalog, shopping cart, user authentication, and payment integration.",
    tech:["React",".NET Core","SQL Server","AWS"],
    live:"https://sportx-sx.vercel.app/", code:"#",
    year:"2024",
  },
  {
    id:2, num:"02", cat:"Backend",
    title:"Task Management API",
    desc:"RESTful API for task management with user authentication, role-based access control, and real-time notifications via SignalR.",
    tech:["ASP.NET Core","Entity Framework","JWT Auth","Swagger"],
    live:"#", code:"https://github.com/rizwanmuhammedd/Build_a_Task_Management_API.git",
    year:"2024",
  },
  {
    id:3, num:"03", cat:"Frontend",
    title:"Portfolio Website",
    desc:"Fully responsive portfolio with GSAP scroll animations, typing game, and modern brutalist design language.",
    tech:["Next.js","GSAP","Tailwind CSS","TypeScript"],
    live:"https://risvanmuhammed.vercel.app", code:"#",
    year:"2025",
  },
];

export default function Projects() {
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!secRef.current) return;
    const ctx = gsap.context(() => {

      /* Header */
      gsap.fromTo([".pr-eye",".pr-h2"],
        { opacity:0, y:50 },
        { opacity:1, y:0, duration:.9, stagger:.15, ease:"power4.out",
          scrollTrigger:{ trigger:".pr-head", start:"top 82%" }});
      gsap.fromTo(".pr-rule",
        { scaleX:0, transformOrigin:"left" },
        { scaleX:1, duration:1, ease:"power3.out",
          scrollTrigger:{ trigger:".pr-head", start:"top 82%" }});

      /* ── EXTREME card entrance ──
         Card 0: clip from left  + rotate CW  + scale up
         Card 1: clip from right + rotate CCW + scale up
         Card 2: clip from bottom + skew + scale up
         Each reverses when scrolling back past it
      */
      document.querySelectorAll<HTMLElement>(".pr-card").forEach((card, i) => {
        const variants = [
          { clipPath:"inset(0 100% 0 0)", rotate: 4,  x:-40, y:0  },
          { clipPath:"inset(0 0 0 100%)", rotate:-4,  x: 40, y:0  },
          { clipPath:"inset(100% 0 0 0)", rotate: 0,  x:0,   y:60 },
        ];
        const v = variants[i % 3];

        gsap.set(card, {
          clipPath:v.clipPath,
          rotation:v.rotate,
          x:v.x, y:v.y,
          opacity:0, scale:.88,
          transformOrigin:"center center",
        });

        ScrollTrigger.create({
          trigger: card,
          start: "top 84%",
          onEnter: () => gsap.to(card, {
            clipPath:"inset(0% 0% 0% 0%)",
            rotation:0, x:0, y:0,
            opacity:1, scale:1,
            duration:1.0, ease:"power3.out",
          }),
          onLeaveBack: () => gsap.to(card, {
            clipPath:v.clipPath,
            rotation:v.rotate, x:v.x, y:v.y,
            opacity:0, scale:.88,
            duration:.6, ease:"power2.in",
          }),
        });
      });

      /* Magnetic hover on cards */
      document.querySelectorAll<HTMLElement>(".pr-card").forEach(card => {
        card.addEventListener("mousemove", (e) => {
          const r  = card.getBoundingClientRect();
          const dx = (e.clientX - r.left - r.width  / 2) / r.width;
          const dy = (e.clientY - r.top  - r.height / 2) / r.height;
          gsap.to(card, {
            rotateY: dx * 6,
            rotateX: -dy * 4,
            duration:.3, ease:"power2.out",
            transformPerspective:900,
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { rotateY:0, rotateX:0, duration:.6, ease:"power3.out" });
        });
      });

      /* Footer */
      gsap.fromTo(".pr-foot",
        { opacity:0, y:32 },
        { opacity:1, y:0, duration:.7,
          scrollTrigger:{ trigger:".pr-foot", start:"top 90%" }});

    }, secRef);
    return () => ctx.revert();
  }, []);

  return (<>
    <style>{`
      .pr-sec {
        background:var(--bg); padding:100px 0;
        border-top:1px solid var(--border);
        position:relative; z-index:1; overflow:hidden;
        transition:background .45s;
      }
      .pr-inner { max-width:1280px; margin:0 auto; padding:0 32px; }
      .pr-grid  { display:grid; grid-template-columns:1fr; gap:20px; }

      /* ── Card ── */
      .pr-card {
        border:1px solid var(--border);
        position:relative; overflow:hidden;
        cursor:default; background:var(--bg-alt);
        transform-style:preserve-3d; will-change:transform;
        transition:border-color .3s, background .3s;
      }
      .pr-card:hover { border-color:var(--border-ac); background:var(--bg-card); }

      /* Accent corner — grows on hover */
      .pr-card::before {
        content:''; position:absolute;
        top:0; left:0; width:0; height:3px;
        background:var(--ac);
        transition:width .5s ease;
        z-index:2;
      }
      .pr-card:hover::before { width:100%; }
      /* Bottom corner line */
      .pr-card::after {
        content:''; position:absolute;
        bottom:0; right:0; width:3px; height:0;
        background:var(--ac-dim);
        transition:height .5s ease .1s;
        z-index:2;
      }
      .pr-card:hover::after { height:100%; }

      .pr-card-inner {
        display:grid;
        grid-template-columns:80px 1fr 200px;
        gap:0; align-items:stretch;
      }

      /* Left num column */
      .pr-left {
        padding:40px 24px;
        border-right:1px solid var(--border);
        display:flex; flex-direction:column;
        justify-content:space-between; align-items:flex-start;
        transition:border-color .3s;
      }
      .pr-card:hover .pr-left { border-color:var(--border-ac); }
      .pr-num {
        font-family:'Barlow Condensed',sans-serif;
        font-size:36px; font-weight:900; letter-spacing:-.02em;
        color:var(--tm); line-height:1;
        transition:color .3s;
      }
      .pr-card:hover .pr-num { color:var(--ac-dim); }
      .pr-year {
        font-family:'Barlow Condensed',sans-serif;
        font-size:10px; font-weight:700; letter-spacing:.22em;
        text-transform:uppercase; color:var(--tm); writing-mode:vertical-lr;
        rotate:180deg;
      }

      /* Center body */
      .pr-body { padding:40px 36px; }
      .pr-cat {
        font-family:'Barlow Condensed',sans-serif;
        font-size:10px; font-weight:700; letter-spacing:.3em;
        text-transform:uppercase; color:var(--ac-dim); margin-bottom:12px;
      }
      .pr-title {
        font-family:'Barlow Condensed',sans-serif;
        font-size:clamp(28px,3.6vw,52px); font-weight:900;
        text-transform:uppercase; letter-spacing:.01em;
        color:var(--tp); line-height:.95; margin-bottom:18px;
        transition:color .25s;
      }
      .pr-card:hover .pr-title { color:var(--ac); }
      .pr-desc {
        font-size:15px; font-weight:300; line-height:1.85;
        color:var(--ts); max-width:540px; margin-bottom:22px;
      }
      .pr-tags { display:flex; flex-wrap:wrap; gap:7px; }
      .pr-tag {
        font-family:'Barlow Condensed',sans-serif;
        font-size:10px; font-weight:700; letter-spacing:.14em;
        text-transform:uppercase; color:var(--td);
        border:1px solid var(--border); padding:6px 13px;
        transition:all .18s;
      }
      .pr-card:hover .pr-tag { color:var(--ac-dim); border-color:var(--border-ac); }

      /* Right actions column */
      .pr-right {
        padding:40px 24px;
        border-left:1px solid var(--border);
        display:flex; flex-direction:column;
        justify-content:space-between;
        transition:border-color .3s;
      }
      .pr-card:hover .pr-right { border-color:var(--border-ac); }

      .pr-arrow {
        width:48px; height:48px; border:1px solid var(--border);
        display:flex; align-items:center; justify-content:center;
        color:var(--td); align-self:flex-end;
        transition:all .3s;
      }
      .pr-card:hover .pr-arrow {
        border-color:var(--ac); color:var(--ac);
        background:var(--ac-ghost);
        transform:rotate(45deg) scale(1.1);
        box-shadow:0 0 20px rgba(200,241,53,.2);
      }
      html.light .pr-card:hover .pr-arrow {
        box-shadow:0 0 16px rgba(200,21,27,.18);
      }

      .pr-acts { display:flex; flex-direction:column; gap:8px; }
      .pr-btn {
        font-family:'Barlow Condensed',sans-serif;
        font-size:10px; font-weight:800; letter-spacing:.18em;
        text-transform:uppercase; padding:11px 16px;
        display:inline-flex; align-items:center; gap:7px;
        text-decoration:none; cursor:pointer; transition:all .2s;
        white-space:nowrap; border:none;
      }
      .pr-solid { background:var(--ac); color:#000; }
      .pr-solid:hover {
        background:var(--ac2); transform:translateY(-2px);
        box-shadow:0 8px 22px rgba(200,241,53,.25);
      }
      html.light .pr-solid:hover { box-shadow:0 8px 22px rgba(200,21,27,.2); }
      .pr-ghost { background:transparent; color:var(--td); border:1px solid var(--border); }
      .pr-ghost:hover { border-color:var(--border-ac); color:var(--ac); transform:translateY(-2px); }
      .pr-dis { opacity:.22; pointer-events:none; cursor:default; }

      /* Footer */
      .pr-foot {
        margin-top:60px; padding-top:44px;
        border-top:1px solid var(--border);
        display:flex; align-items:center;
        justify-content:space-between; flex-wrap:wrap; gap:16px;
      }
      .pr-foot-txt {
        font-family:'Barlow Condensed',sans-serif;
        font-size:clamp(20px,3vw,42px); font-weight:900;
        text-transform:uppercase; color:var(--td); letter-spacing:.03em;
      }

      @media(max-width:900px) {
        .pr-card-inner { grid-template-columns:60px 1fr; }
        .pr-right { display:none; }
        .pr-body { padding:28px 24px; }
      }
      @media(max-width:640px) {
        .pr-sec { padding:72px 0; }
        .pr-card-inner { grid-template-columns:1fr; }
        .pr-left { display:none; }
      }
    `}</style>

    <section id="projects" className="pr-sec" ref={secRef}>
      <div className="pr-inner">

        <div className="pr-head" style={{marginBottom:56}}>
          <span className="sec-eye pr-eye">( 02 ) — Selected Work</span>
          <h2 className="sec-h2 pr-h2">Pro<span className="ghost">jects</span></h2>
          <div className="sec-rule pr-rule"/>
        </div>

        <div className="pr-grid">
          {PROJECTS.map(p => (
            <div key={p.id} className="pr-card">
              <div className="pr-card-inner">

                {/* Left: big number */}
                <div className="pr-left">
                  <div className="pr-num">{p.num}</div>
                  <div className="pr-year">{p.year}</div>
                </div>

                {/* Center: content */}
                <div className="pr-body">
                  <div className="pr-cat">{p.cat}</div>
                  <div className="pr-title">{p.title}</div>
                  <p className="pr-desc">{p.desc}</p>
                  <div className="pr-tags">
                    {p.tech.map(t => <span key={t} className="pr-tag">{t}</span>)}
                  </div>
                </div>

                {/* Right: arrow + buttons */}
                <div className="pr-right">
                  <div className="pr-arrow">
                    <ArrowUpRight size={20} strokeWidth={1.5}/>
                  </div>
                  <div className="pr-acts">
                    {p.live !== "#"
                      ? <a href={p.live} target="_blank" rel="noopener noreferrer" className="pr-btn pr-solid">
                          <ExternalLink size={10} strokeWidth={2}/> Live Demo
                        </a>
                      : <span className="pr-btn pr-solid pr-dis">
                          <ExternalLink size={10}/> Live Demo
                        </span>
                    }
                    {p.code !== "#"
                      ? <a href={p.code} target="_blank" rel="noopener noreferrer" className="pr-btn pr-ghost">
                          <Github size={10} strokeWidth={1.5}/> View Code
                        </a>
                      : <span className="pr-btn pr-ghost pr-dis">
                          <Github size={10} strokeWidth={1.5}/> View Code
                        </span>
                    }
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="pr-foot">
          <div className="pr-foot-txt">Have a concept? Let's build it.</div>
          <a href="#contact" className="btn btn-solid">Hire Me →</a>
        </div>

      </div>
    </section>
  </>);
}