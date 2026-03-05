


// "use client";
// import { useEffect, useRef } from "react";
// import { gsap } from "@/public/lib/gsap";
// import { ScrollTrigger } from "gsap/all";
// import { ExternalLink, Github } from "lucide-react";

// const PROJECTS = [
//   {
//     id: 1, num: "01", cat: "Full Stack",
//     title: "Sport-X E-commerce",
//     desc: "A premium football gear e-commerce platform featuring product catalog, shopping cart, user authentication, and payment integration.",
//     tech: ["React", ".NET Core", "SQL Server", "AWS"],
//     live: "https://sportx-sx.vercel.app/", code: "#",
//   },
//   {
//     id: 2, num: "02", cat: "Backend",
//     title: "Task Management API",
//     desc: "RESTful API for task management with user authentication, role-based access control, and real-time notifications via SignalR.",
//     tech: ["ASP.NET Core", "Entity Framework", "JWT Auth", "Swagger"],
//     live: "#", code: "https://github.com/rizwanmuhammedd/Build_a_Task_Management_API.git",
//   },
//   {
//     id: 3, num: "03", cat: "Frontend",
//     title: "Portfolio Website",
//     desc: "Fully responsive portfolio with GSAP scroll animations, typing game, and modern brutalist design language.",
//     tech: ["Next.js", "GSAP", "Tailwind CSS", "TypeScript"],
//     live: "https://risvanmuhammed.vercel.app", code: "#",
//   },
// ];

// export default function Projects() {
//   const secRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     if (!secRef.current) return;
//     const ctx = gsap.context(() => {

//       /* Section header */
//       gsap.fromTo([".pr-eye", ".pr-h2"],
//         { opacity: 0, y: 44 },
//         {
//           opacity: 1, y: 0, duration: .85, stagger: .14,
//           ease: "power4.out",
//           scrollTrigger: { trigger: ".pr-head", start: "top 82%" },
//         });
//       gsap.fromTo(".pr-rule",
//         { scaleX: 0, transformOrigin: "left" },
//         {
//           scaleX: 1, duration: .9, ease: "power3.out",
//           scrollTrigger: { trigger: ".pr-head", start: "top 82%" },
//         });

//       /* ── Per-project: slide in from outside viewport ──
//          Even index (0, 2, …) → comes from the LEFT  (x = -110vw)
//          Odd  index (1, 3, …) → comes from the RIGHT (x = +110vw)
//          On scroll back up → exits back to the same side
//          The section has overflow:hidden so nothing is visible outside
//       */
//       document.querySelectorAll<HTMLElement>(".pr-row").forEach((row, i) => {
//         const dir = i % 2 === 0 ? -1 : 1;           // -1 = left, +1 = right
//         const fromX = `${dir * 108}vw`;
//         const toX   = "0vw";

//         // Start fully off-screen
//         gsap.set(row, { x: fromX, opacity: 0 });

//         ScrollTrigger.create({
//           trigger: row,
//           start: "top 86%",
//           onEnter: () => {
//             gsap.to(row, {
//               x: toX, opacity: 1,
//               duration: .9, ease: "power3.out",
//             });
//           },
//           onLeaveBack: () => {
//             gsap.to(row, {
//               x: fromX, opacity: 0,
//               duration: .55, ease: "power2.in",
//             });
//           },
//         });
//       });

//       /* Footer */
//       gsap.fromTo(".pr-foot",
//         { opacity: 0, y: 32 },
//         {
//           opacity: 1, y: 0, duration: .7,
//           scrollTrigger: { trigger: ".pr-foot", start: "top 90%" },
//         });

//     }, secRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <style>{`
//         .pr-sec {
//           background: var(--bg);
//           padding: 100px 0;
//           border-top: 1px solid var(--border);
//           position: relative; z-index: 1;
//           /* REQUIRED: clips off-screen sliding rows */
//           overflow: hidden;
//           transition: background .45s;
//         }
//         .pr-inner { max-width: 1280px; margin: 0 auto; padding: 0 32px; }

//         /* Each project row — full width, no card box */
//         .pr-row {
//           border-bottom: 1px solid var(--border);
//           padding: 56px 0;
//           display: grid;
//           grid-template-columns: 56px 1fr 180px;
//           gap: 28px; align-items: start;
//           position: relative;
//           will-change: transform;
//           /* Hover bg + left accent line */
//           transition: background .22s;
//         }
//         .pr-row::before {
//           content: ''; position: absolute;
//           left: 0; top: 0; bottom: 0; width: 2px;
//           background: linear-gradient(
//             to bottom, transparent, var(--ac), transparent
//           );
//           transform: scaleY(0); transform-origin: center;
//           transition: transform .5s ease;
//         }
//         .pr-row:hover::before { transform: scaleY(1); }
//         .pr-row:hover { background: var(--ac-ghost); }

//         /* Number */
//         .pr-num {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 11px; font-weight: 700;
//           letter-spacing: .22em; color: var(--tm);
//           padding-top: 5px;
//         }

//         /* Body */
//         .pr-cat {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 9px; font-weight: 700;
//           letter-spacing: .3em; text-transform: uppercase;
//           color: var(--ac-dim); margin-bottom: 10px;
//         }
//         .pr-title {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: clamp(26px, 3.4vw, 48px);
//           font-weight: 900; text-transform: uppercase;
//           letter-spacing: .02em; color: var(--tp);
//           line-height: 1; margin-bottom: 16px;
//           transition: color .22s, text-shadow .22s;
//         }
//         .pr-row:hover .pr-title {
//           color: var(--ac);
//           text-shadow: 0 0 40px rgba(200,241,53,.28);
//         }
//         html.light .pr-row:hover .pr-title {
//           text-shadow: 0 0 24px rgba(74,112,0,.22);
//         }
//         .pr-desc {
//           font-size: 14px; font-weight: 300;
//           line-height: 1.85; color: var(--ts);
//           max-width: 520px; margin-bottom: 18px;
//         }
//         .pr-tags { display: flex; flex-wrap: wrap; gap: 6px; }
//         .pr-tag {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 9px; font-weight: 700;
//           letter-spacing: .12em; text-transform: uppercase;
//           color: var(--td); border: 1px solid var(--border);
//           padding: 5px 11px; transition: all .18s;
//         }
//         .pr-row:hover .pr-tag {
//           color: var(--ac-dim); border-color: var(--border-ac);
//         }

//         /* Actions */
//         .pr-acts {
//           display: flex; flex-direction: column;
//           gap: 8px; padding-top: 5px;
//         }
//         .pr-btn {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 9px; font-weight: 800;
//           letter-spacing: .18em; text-transform: uppercase;
//           padding: 10px 15px;
//           display: inline-flex; align-items: center; gap: 7px;
//           text-decoration: none; cursor: pointer;
//           transition: all .2s; white-space: nowrap;
//         }
//         .pr-solid {
//           background: var(--ac); color: #000;
//           border: 1px solid var(--ac);
//         }
//         .pr-solid:hover {
//           background: var(--ac2);
//           transform: translateY(-2px);
//           box-shadow: 0 8px 22px rgba(200,241,53,.22);
//         }
//         .pr-ghost {
//           background: transparent; color: var(--td);
//           border: 1px solid var(--border);
//         }
//         .pr-ghost:hover {
//           border-color: var(--border-ac); color: var(--ac);
//           transform: translateY(-2px);
//         }
//         .pr-dis { opacity: .22; pointer-events: none; cursor: default; }

//         /* Footer */
//         .pr-foot {
//           margin-top: 60px; padding-top: 44px;
//           border-top: 1px solid var(--border);
//           display: flex; align-items: center;
//           justify-content: space-between; flex-wrap: wrap; gap: 16px;
//         }
//         .pr-foot-txt {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: clamp(18px, 3vw, 38px); font-weight: 900;
//           text-transform: uppercase; color: var(--td);
//           letter-spacing: .03em;
//         }

//         @media (max-width: 900px) {
//           .pr-row { grid-template-columns: 48px 1fr; }
//           .pr-acts { flex-direction: row; grid-column: 1 / -1; }
//         }
//         @media (max-width: 640px) {
//           .pr-sec { padding: 72px 0; }
//           .pr-row { padding: 36px 0; }
//           .pr-acts { flex-wrap: wrap; }
//         }
//       `}</style>

//       <section id="projects" className="pr-sec" ref={secRef}>
//         <div className="pr-inner">

//           <div className="pr-head" style={{ marginBottom: 56 }}>
//             <span className="sec-eye pr-eye">( 02 ) — Selected Work</span>
//             <h2 className="sec-h2 pr-h2">Pro<span className="ghost">jects</span></h2>
//             <div className="sec-rule pr-rule" />
//           </div>

//           {PROJECTS.map((p) => (
//             <div key={p.id} className="pr-row">

//               {/* Number */}
//               <div className="pr-num">{p.num}</div>

//               {/* Details */}
//               <div>
//                 <div className="pr-cat">{p.cat}</div>
//                 <div className="pr-title">{p.title}</div>
//                 <p className="pr-desc">{p.desc}</p>
//                 <div className="pr-tags">
//                   {p.tech.map(t => (
//                     <span key={t} className="pr-tag">{t}</span>
//                   ))}
//                 </div>
//               </div>

//               {/* Buttons */}
//               <div className="pr-acts">
//                 {p.live !== "#" ? (
//                   <a href={p.live} target="_blank" rel="noopener noreferrer"
//                     className="pr-btn pr-solid">
//                     <ExternalLink size={10} strokeWidth={2} /> Live Demo
//                   </a>
//                 ) : (
//                   <span className="pr-btn pr-solid pr-dis">
//                     <ExternalLink size={10} /> Live Demo
//                   </span>
//                 )}
//                 {p.code !== "#" ? (
//                   <a href={p.code} target="_blank" rel="noopener noreferrer"
//                     className="pr-btn pr-ghost">
//                     <Github size={10} strokeWidth={1.5} /> View Code
//                   </a>
//                 ) : (
//                   <span className="pr-btn pr-ghost pr-dis">
//                     <Github size={10} strokeWidth={1.5} /> View Code
//                   </span>
//                 )}
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
import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    id:1, num:"01", cat:"Full Stack",
    title:"Sport-X E-commerce",
    desc:"A premium football gear e-commerce platform featuring product catalog, shopping cart, user authentication, and payment integration.",
    tech:["React",".NET Core","SQL Server","AWS"],
    live:"https://sportx-sx.vercel.app/", code:"#",
  },
  {
    id:2, num:"02", cat:"Backend",
    title:"Task Management API",
    desc:"RESTful API for task management with user authentication, role-based access control, and real-time notifications via SignalR.",
    tech:["ASP.NET Core","Entity Framework","JWT Auth","Swagger"],
    live:"#", code:"https://github.com/rizwanmuhammedd/Build_a_Task_Management_API.git",
  },
  {
    id:3, num:"03", cat:"Frontend",
    title:"Portfolio Website",
    desc:"Fully responsive portfolio with GSAP scroll animations, typing game, and modern brutalist design language.",
    tech:["Next.js","GSAP","Tailwind CSS","TypeScript"],
    live:"https://risvanmuhammed.vercel.app", code:"#",
  },
];

export default function Projects() {
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!secRef.current) return;
    const ctx = gsap.context(() => {

      /* Section header */
      gsap.fromTo([".pr-eye",".pr-h2"],
        { opacity:0, y:50 },
        { opacity:1, y:0, duration:.9, stagger:.15, ease:"power4.out",
          scrollTrigger:{ trigger:".pr-head", start:"top 82%" } });

      gsap.fromTo(".pr-rule",
        { scaleX:0, transformOrigin:"left" },
        { scaleX:1, duration:1, ease:"power3.out",
          scrollTrigger:{ trigger:".pr-head", start:"top 82%" } });

      /* ─────────────────────────────────────────────
         ASHARAF-STYLE: each row slides from fully
         off-screen left or right, depending on index.
         Row 0 → from LEFT   (x = -110vw)
         Row 1 → from RIGHT  (x = +110vw)
         Row 2 → from LEFT   (x = -110vw)
         Section has overflow:hidden — nothing leaks.
         On scroll back up the row exits the same side.
      ───────────────────────────────────────────── */
      document.querySelectorAll<HTMLElement>(".pr-row").forEach((row, i) => {
        const fromX = i % 2 === 0 ? "-110vw" : "110vw";

        // Set initial off-screen position
        gsap.set(row, { x: fromX, opacity: 0 });

        ScrollTrigger.create({
          trigger: row,
          start: "top 86%",
          onEnter: () => gsap.to(row, {
            x: "0vw",
            opacity: 1,
            duration: .95,
            ease: "power3.out",
          }),
          onLeaveBack: () => gsap.to(row, {
            x: fromX,
            opacity: 0,
            duration: .6,
            ease: "power2.in",
          }),
        });
      });

      /* Footer */
      gsap.fromTo(".pr-foot",
        { opacity:0, y:32 },
        { opacity:1, y:0, duration:.7,
          scrollTrigger:{ trigger:".pr-foot", start:"top 90%" } });

    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .pr-sec {
          background:var(--bg);
          padding:110px 0;
          border-top:1px solid var(--border);
          position:relative;z-index:1;
          /* CRITICAL — clips rows that start off-screen */
          overflow:hidden;
          transition:background .45s;
        }
        .pr-inner { max-width:1280px;margin:0 auto;padding:0 40px; }

        /* ── Full-width row (asharaf style) ── */
        .pr-row {
          border-bottom:1px solid var(--border);
          padding:56px 0;
          display:grid;
          grid-template-columns:80px 1fr auto;
          gap:36px;align-items:start;
          position:relative;
          will-change:transform;
          transition:background .22s;
          cursor:default;
        }

        /* Left accent line grows on hover */
        .pr-row::before {
          content:'';position:absolute;
          left:0;top:0;bottom:0;width:3px;
          background:linear-gradient(to bottom,transparent,var(--ac),transparent);
          transform:scaleY(0);transform-origin:center;
          transition:transform .55s ease;
        }
        .pr-row:hover::before { transform:scaleY(1); }
        .pr-row:hover { background:var(--ac-ghost); }

        /* Number */
        .pr-num {
          font-family:'Barlow Condensed',sans-serif;
          font-size:15px;font-weight:700;letter-spacing:.24em;
          color:var(--tm);padding-top:8px;
        }

        /* Body */
        .pr-cat {
          font-family:'Barlow Condensed',sans-serif;
          font-size:12px;font-weight:700;letter-spacing:.32em;
          text-transform:uppercase;color:var(--ac-dim);margin-bottom:14px;
        }
        .pr-title {
          font-family:'Barlow Condensed',sans-serif;
          font-size:clamp(32px,4vw,58px);
          font-weight:900;text-transform:uppercase;
          letter-spacing:.02em;color:var(--tp);
          line-height:.95;margin-bottom:20px;
          transition:color .22s,text-shadow .25s;
        }
        .pr-row:hover .pr-title {
          color:var(--ac);
          text-shadow:0 0 50px rgba(200,241,53,.3);
        }
        html.light .pr-row:hover .pr-title {
          text-shadow:0 0 30px rgba(200,21,27,.22);
        }
        .pr-desc {
          font-size:16px;font-weight:300;
          line-height:1.88;color:var(--ts);
          max-width:540px;margin-bottom:22px;
        }
        .pr-tags { display:flex;flex-wrap:wrap;gap:8px; }
        .pr-tag {
          font-family:'Barlow Condensed',sans-serif;
          font-size:12px;font-weight:700;letter-spacing:.14em;
          text-transform:uppercase;color:var(--td);
          border:1px solid var(--border);padding:7px 16px;
          transition:all .18s;
        }
        .pr-row:hover .pr-tag { color:var(--ac-dim);border-color:var(--border-ac); }

        /* Action buttons */
        .pr-acts {
          display:flex;flex-direction:column;
          gap:10px;padding-top:8px;flex-shrink:0;
        }
        .pr-btn {
          font-family:'Barlow Condensed',sans-serif;
          font-size:12px;font-weight:800;letter-spacing:.18em;
          text-transform:uppercase;padding:13px 20px;
          display:inline-flex;align-items:center;gap:8px;
          text-decoration:none;cursor:pointer;
          transition:all .2s;white-space:nowrap;border:none;
        }
        .pr-solid { background:var(--ac);color:#000; }
        .pr-solid:hover {
          background:var(--ac2);transform:translateY(-2px);
          box-shadow:0 8px 24px rgba(200,241,53,.28);
        }
        html.light .pr-solid:hover { box-shadow:0 8px 24px rgba(200,21,27,.22); }
        .pr-ghost { background:transparent;color:var(--td);border:1px solid var(--border); }
        .pr-ghost:hover { border-color:var(--border-ac);color:var(--ac);transform:translateY(-2px); }
        .pr-dis { opacity:.22;pointer-events:none;cursor:default; }

        /* Footer */
        .pr-foot {
          margin-top:68px;padding-top:52px;
          border-top:1px solid var(--border);
          display:flex;align-items:center;
          justify-content:space-between;flex-wrap:wrap;gap:16px;
        }
        .pr-foot-txt {
          font-family:'Barlow Condensed',sans-serif;
          font-size:clamp(24px,3.5vw,48px);
          font-weight:900;text-transform:uppercase;
          color:var(--td);letter-spacing:.03em;
        }

        /* Responsive */
        @media (max-width:900px) {
          .pr-row   { grid-template-columns:60px 1fr;padding:42px 0; }
          .pr-acts  { flex-direction:row;grid-column:1/-1;flex-wrap:wrap; }
          .pr-inner { padding:0 24px; }
        }
        @media (max-width:640px) {
          .pr-sec   { padding:80px 0; }
          .pr-inner { padding:0 20px; }
          .pr-row   { grid-template-columns:1fr;gap:14px;padding:32px 0; }
          .pr-num   { display:none; }
          .pr-desc  { font-size:15px; }
          .pr-title { font-size:clamp(28px,8vw,44px); }
        }
      `}</style>

      <section id="projects" className="pr-sec" ref={secRef}>
        <div className="pr-inner">

          <div className="pr-head" style={{marginBottom:64}}>
            <span className="sec-eye pr-eye">( 02 ) — Selected Work</span>
            <h2 className="sec-h2 pr-h2">Pro<span className="ghost">jects</span></h2>
            <div className="sec-rule pr-rule"/>
          </div>

          {PROJECTS.map((p, i) => (
            <div key={p.id} className="pr-row">

              <div className="pr-num">{p.num}</div>

              <div>
                <div className="pr-cat">{p.cat}</div>
                <div className="pr-title">{p.title}</div>
                <p className="pr-desc">{p.desc}</p>
                <div className="pr-tags">
                  {p.tech.map(t => <span key={t} className="pr-tag">{t}</span>)}
                </div>
              </div>

              <div className="pr-acts">
                {p.live !== "#"
                  ? <a href={p.live} target="_blank" rel="noopener noreferrer" className="pr-btn pr-solid">
                      <ExternalLink size={12} strokeWidth={2}/> Live Demo
                    </a>
                  : <span className="pr-btn pr-solid pr-dis">
                      <ExternalLink size={12}/> Live Demo
                    </span>
                }
                {p.code !== "#"
                  ? <a href={p.code} target="_blank" rel="noopener noreferrer" className="pr-btn pr-ghost">
                      <Github size={12} strokeWidth={1.5}/> View Code
                    </a>
                  : <span className="pr-btn pr-ghost pr-dis">
                      <Github size={12} strokeWidth={1.5}/> View Code
                    </span>
                }
              </div>

            </div>
          ))}

          <div className="pr-foot">
            <div className="pr-foot-txt">Have a concept? Let's build it.</div>
            <a href="#contact" className="btn btn-solid">Hire Me →</a>
          </div>

        </div>
      </section>
    </>
  );
}