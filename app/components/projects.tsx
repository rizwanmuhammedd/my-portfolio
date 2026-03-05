
// "use client";
// import { useEffect, useRef } from "react";
// import { gsap } from "@/public/lib/gsap";
// import { ScrollTrigger } from "gsap/all";
// import { ExternalLink, Github } from "lucide-react";

// const PROJECTS = [
//   {
//     id:1, num:"01", cat:"Full Stack",
//     title:"Sport-X E-commerce",
//     desc:"A premium football gear e-commerce platform featuring product catalog, shopping cart, user authentication, and payment integration.",
//     tech:["React",".NET Core","SQL Server","AWS"],
//     live:"https://sportx-sx.vercel.app/", code:"#",
//   },
//   {
//     id:2, num:"02", cat:"Backend",
//     title:"Task Management API",
//     desc:"RESTful API for task management with user authentication, role-based access control, and real-time notifications via SignalR.",
//     tech:["ASP.NET Core","Entity Framework","JWT Auth","Swagger"],
//     live:"#", code:"https://github.com/rizwanmuhammedd/Build_a_Task_Management_API.git",
//   },
//   {
//     id:3, num:"03", cat:"Frontend",
//     title:"Portfolio Website",
//     desc:"Fully responsive portfolio with GSAP scroll animations, typing game, and modern brutalist design language.",
//     tech:["Next.js","GSAP","Tailwind CSS","TypeScript"],
//     live:"https://risvanmuhammed.vercel.app", code:"#",
//   },
// ];

// export default function Projects() {
//   const secRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     if (!secRef.current) return;
//     const ctx = gsap.context(() => {

//       /* Section header */
//       gsap.fromTo([".pr-eye",".pr-h2"],
//         { opacity:0, y:50 },
//         { opacity:1, y:0, duration:.9, stagger:.15, ease:"power4.out",
//           scrollTrigger:{ trigger:".pr-head", start:"top 82%" } });

//       gsap.fromTo(".pr-rule",
//         { scaleX:0, transformOrigin:"left" },
//         { scaleX:1, duration:1, ease:"power3.out",
//           scrollTrigger:{ trigger:".pr-head", start:"top 82%" } });

//       /* ─────────────────────────────────────────────
//          ASHARAF-STYLE: each row slides from fully
//          off-screen left or right, depending on index.
//          Row 0 → from LEFT   (x = -110vw)
//          Row 1 → from RIGHT  (x = +110vw)
//          Row 2 → from LEFT   (x = -110vw)
//          Section has overflow:hidden — nothing leaks.
//          On scroll back up the row exits the same side.
//       ───────────────────────────────────────────── */
//       document.querySelectorAll<HTMLElement>(".pr-row").forEach((row, i) => {
//         const fromX = i % 2 === 0 ? "-110vw" : "110vw";

//         // Set initial off-screen position
//         gsap.set(row, { x: fromX, opacity: 0 });

//         ScrollTrigger.create({
//           trigger: row,
//           start: "top 86%",
//           onEnter: () => gsap.to(row, {
//             x: "0vw",
//             opacity: 1,
//             duration: .95,
//             ease: "power3.out",
//           }),
//           onLeaveBack: () => gsap.to(row, {
//             x: fromX,
//             opacity: 0,
//             duration: .6,
//             ease: "power2.in",
//           }),
//         });
//       });

//       /* Footer */
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
//           background:var(--bg);
//           padding:110px 0;
//           border-top:1px solid var(--border);
//           position:relative;z-index:1;
//           /* CRITICAL — clips rows that start off-screen */
//           overflow:hidden;
//           transition:background .45s;
//         }
//         .pr-inner { max-width:1280px;margin:0 auto;padding:0 40px; }

//         /* ── Full-width row (asharaf style) ── */
//         .pr-row {
//           border-bottom:1px solid var(--border);
//           padding:56px 0;
//           display:grid;
//           grid-template-columns:80px 1fr auto;
//           gap:36px;align-items:start;
//           position:relative;
//           will-change:transform;
//           transition:background .22s;
//           cursor:default;
//         }

//         /* Left accent line grows on hover */
//         .pr-row::before {
//           content:'';position:absolute;
//           left:0;top:0;bottom:0;width:3px;
//           background:linear-gradient(to bottom,transparent,var(--ac),transparent);
//           transform:scaleY(0);transform-origin:center;
//           transition:transform .55s ease;
//         }
//         .pr-row:hover::before { transform:scaleY(1); }
//         .pr-row:hover { background:var(--ac-ghost); }

//         /* Number */
//         .pr-num {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:15px;font-weight:700;letter-spacing:.24em;
//           color:var(--tm);padding-top:8px;
//         }

//         /* Body */
//         .pr-cat {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:12px;font-weight:700;letter-spacing:.32em;
//           text-transform:uppercase;color:var(--ac-dim);margin-bottom:14px;
//         }
//         .pr-title {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:clamp(32px,4vw,58px);
//           font-weight:900;text-transform:uppercase;
//           letter-spacing:.02em;color:var(--tp);
//           line-height:.95;margin-bottom:20px;
//           transition:color .22s,text-shadow .25s;
//         }
//         .pr-row:hover .pr-title {
//           color:var(--ac);
//           text-shadow:0 0 50px rgba(200,241,53,.3);
//         }
//         html.light .pr-row:hover .pr-title {
//           text-shadow:0 0 30px rgba(200,21,27,.22);
//         }
//         .pr-desc {
//           font-size:16px;font-weight:300;
//           line-height:1.88;color:var(--ts);
//           max-width:540px;margin-bottom:22px;
//         }
//         .pr-tags { display:flex;flex-wrap:wrap;gap:8px; }
//         .pr-tag {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:12px;font-weight:700;letter-spacing:.14em;
//           text-transform:uppercase;color:var(--td);
//           border:1px solid var(--border);padding:7px 16px;
//           transition:all .18s;
//         }
//         .pr-row:hover .pr-tag { color:var(--ac-dim);border-color:var(--border-ac); }

//         /* Action buttons */
//         .pr-acts {
//           display:flex;flex-direction:column;
//           gap:10px;padding-top:8px;flex-shrink:0;
//         }
//         .pr-btn {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:12px;font-weight:800;letter-spacing:.18em;
//           text-transform:uppercase;padding:13px 20px;
//           display:inline-flex;align-items:center;gap:8px;
//           text-decoration:none;cursor:pointer;
//           transition:all .2s;white-space:nowrap;border:none;
//         }
//         .pr-solid { background:var(--ac);color:#000; }
//         .pr-solid:hover {
//           background:var(--ac2);transform:translateY(-2px);
//           box-shadow:0 8px 24px rgba(200,241,53,.28);
//         }
//         html.light .pr-solid:hover { box-shadow:0 8px 24px rgba(200,21,27,.22); }
//         .pr-ghost { background:transparent;color:var(--td);border:1px solid var(--border); }
//         .pr-ghost:hover { border-color:var(--border-ac);color:var(--ac);transform:translateY(-2px); }
//         .pr-dis { opacity:.22;pointer-events:none;cursor:default; }

//         /* Footer */
//         .pr-foot {
//           margin-top:68px;padding-top:52px;
//           border-top:1px solid var(--border);
//           display:flex;align-items:center;
//           justify-content:space-between;flex-wrap:wrap;gap:16px;
//         }
//         .pr-foot-txt {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:clamp(24px,3.5vw,48px);
//           font-weight:900;text-transform:uppercase;
//           color:var(--td);letter-spacing:.03em;
//         }

//         /* Responsive */
//         @media (max-width:900px) {
//           .pr-row   { grid-template-columns:60px 1fr;padding:42px 0; }
//           .pr-acts  { flex-direction:row;grid-column:1/-1;flex-wrap:wrap; }
//           .pr-inner { padding:0 24px; }
//         }
//         @media (max-width:640px) {
//           .pr-sec   { padding:80px 0; }
//           .pr-inner { padding:0 20px; }
//           .pr-row   { grid-template-columns:1fr;gap:14px;padding:32px 0; }
//           .pr-num   { display:none; }
//           .pr-desc  { font-size:15px; }
//           .pr-title { font-size:clamp(28px,8vw,44px); }
//         }
//       `}</style>

//       <section id="projects" className="pr-sec" ref={secRef}>
//         <div className="pr-inner">

//           <div className="pr-head" style={{marginBottom:64}}>
//             <span className="sec-eye pr-eye">( 02 ) — Selected Work</span>
//             <h2 className="sec-h2 pr-h2">Pro<span className="ghost">jects</span></h2>
//             <div className="sec-rule pr-rule"/>
//           </div>

//           {PROJECTS.map((p, i) => (
//             <div key={p.id} className="pr-row">

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
//                       <ExternalLink size={12} strokeWidth={2}/> Live Demo
//                     </a>
//                   : <span className="pr-btn pr-solid pr-dis">
//                       <ExternalLink size={12}/> Live Demo
//                     </span>
//                 }
//                 {p.code !== "#"
//                   ? <a href={p.code} target="_blank" rel="noopener noreferrer" className="pr-btn pr-ghost">
//                       <Github size={12} strokeWidth={1.5}/> View Code
//                     </a>
//                   : <span className="pr-btn pr-ghost pr-dis">
//                       <Github size={12} strokeWidth={1.5}/> View Code
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
import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    id: 1, num: "01", cat: "Full Stack",
    title: "Sport-X E-commerce",
    desc: "A premium football gear e-commerce platform featuring product catalog, shopping cart, user authentication, and payment integration.",
    tech: ["React", ".NET Core", "SQL Server", "AWS"],
    live: "https://sportx-sx.vercel.app/", code: "#",
  },
  {
    id: 2, num: "02", cat: "Backend",
    title: "Task Management API",
    desc: "RESTful API for task management with user authentication, role-based access control, and real-time notifications via SignalR.",
    tech: ["ASP.NET Core", "Entity Framework", "JWT Auth", "Swagger"],
    live: "#", code: "https://github.com/rizwanmuhammedd/Build_a_Task_Management_API.git",
  },
  {
    id: 3, num: "03", cat: "Frontend",
    title: "Portfolio Website",
    desc: "Fully responsive portfolio with GSAP scroll animations, typing game, and modern brutalist design language.",
    tech: ["Next.js", "GSAP", "Tailwind CSS", "TypeScript"],
    live: "https://risvanmuhammed.vercel.app", code: "#",
  },
];

export default function Projects() {
  const outerRef = useRef<HTMLDivElement>(null); // tall wrapper — provides scroll space
  const innerRef = useRef<HTMLDivElement>(null); // pinned to viewport
  const trackRef = useRef<HTMLDivElement>(null); // horizontal strip that moves

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const outer = outerRef.current;
    const inner = innerRef.current;
    const track = trackRef.current;
    if (!outer || !inner || !track) return;

    /* How many pixels the track must travel horizontally.
       Each panel = 100vw, so total = 100vw × (panels - 1)
       (the first panel starts in view, so we only need N-1 more moves) */
    const getX = () => -(track.scrollWidth - window.innerWidth);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      /* ─── DESKTOP: pin + horizontal scrub ─── */
      const st = ScrollTrigger.create({
        trigger: outer,
        start: "top top",
        end: () => `+=${track.scrollWidth - window.innerWidth}`,
        pin: inner,
        anticipatePin: 1,
        scrub: 1.2,           // slightly lagged scrub feels smooth & weighty
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Move the track left proportionally to scroll progress
          gsap.set(track, { x: getX() * self.progress });
        },
      });
      return () => st.kill();
    });

    mm.add("(max-width: 768px)", () => {
      /* ── MOBILE: each card slides in from alternating sides, scrubbed to scroll ──
         Card 0 → from RIGHT  (+110vw)
         Card 1 → from LEFT   (-110vw)
         Card 2 → from RIGHT  (+110vw)
         scrub: true = tied directly to scroll position (slow = slow, fast = fast)
         toggleActions reverse so card exits back the same side when scrolling up
      */
      const panels = document.querySelectorAll<HTMLElement>(".pr-panel");
      panels.forEach((panel, i) => {
        const fromX = i % 2 === 0 ? "110vw" : "-110vw";
        gsap.set(panel, { x: fromX, opacity: 0 });
        ScrollTrigger.create({
          trigger: panel,
          start: "top 92%",
          end: "top 18%",
          scrub: 1.2,
          onUpdate: (self) => {
            // Slide from offscreen → center (progress 0→0.5) then center → other side (0.5→1)
            // We only want in → center (stop at center), so clamp at 0.5
            const p = Math.min(self.progress * 2, 1);
            const sign = i % 2 === 0 ? 1 : -1;
            const vw = window.innerWidth;
            gsap.set(panel, {
              x: sign * vw * 1.1 * (1 - p),
              opacity: p,
            });
          },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════
           OUTER — gives the browser scroll room
           Height = sum of all panel widths
           which equals 100vw × N panels
        ═══════════════════════════════════ */
        .pr-outer {
          /* N panels × 100vw converted to height via aspect trick.
             We use a JS-driven height set by the track width.
             CSS fallback for initial render: */
          position: relative;
          background: var(--bg);
          border-top: 1px solid var(--border);
          transition: background .45s;
        }

        /* ═══════════════════════════════════
           INNER — viewport-sized, gets pinned
        ═══════════════════════════════════ */
        .pr-inner {
          width: 100%;
          height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        /* ── Top header bar ── */
        .pr-header {
          flex-shrink: 0;
          padding: 52px 52px 28px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          border-bottom: 1px solid var(--border);
        }
        .pr-scroll-hint {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: .26em;
          text-transform: uppercase; color: var(--td);
          display: flex; align-items: center; gap: 12px;
        }
        .pr-scroll-arrow {
          animation: pr-bounce 1.8s ease-in-out infinite;
          color: var(--ac);
        }
        @keyframes pr-bounce {
          0%,100% { transform: translateX(0); }
          50%      { transform: translateX(10px); }
        }

        /* ═══════════════════════════════════
           TRACK — all panels side-by-side
           Width auto-expands with content
        ═══════════════════════════════════ */
        .pr-track {
          display: flex;
          flex: 1;
          will-change: transform;
          align-items: stretch;
        }

        /* ═══════════════════════════════════
           PANEL — one project, exactly 100vw
        ═══════════════════════════════════ */
        .pr-panel {
          flex-shrink: 0;
          width: 100vw;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 80px;
        }

        /* ── Project card ── */
        .pr-card {
          width: 100%;
          max-width: 960px;
          border: 1px solid var(--border);
          background: var(--bg-card);
          padding: 56px 60px;
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 52px;
          align-items: center;
          transition: border-color .3s, background .45s;
        }
        /* Top accent line grows on hover */
        .pr-card::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(to right, var(--ac), var(--ac-dim));
          transform: scaleX(0); transform-origin: left;
          transition: transform .6s ease;
        }
        .pr-card:hover::before { transform: scaleX(1); }
        .pr-card:hover { border-color: var(--border-ac); }

        /* Left side */
        .pr-card-l {}
        .pr-big-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 100px; font-weight: 900;
          letter-spacing: -.03em; line-height: 1;
          color: var(--tm);
          transition: color .3s;
          margin-bottom: 8px;
        }
        .pr-card:hover .pr-big-num { color: var(--ac-dim); }
        .pr-cat {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: .32em;
          text-transform: uppercase; color: var(--ac-dim);
          margin-bottom: 14px;
        }
        .pr-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(30px, 3.8vw, 54px);
          font-weight: 900; text-transform: uppercase;
          letter-spacing: .01em; line-height: .9;
          color: var(--tp); margin-bottom: 0;
          transition: color .25s;
        }
        .pr-card:hover .pr-title { color: var(--ac); }

        /* Right side */
        .pr-card-r {}
        .pr-desc {
          font-size: 17px; font-weight: 300;
          line-height: 1.88; color: var(--ts);
          margin-bottom: 28px;
        }
        .pr-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px; }
        .pr-tag {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: .14em;
          text-transform: uppercase; color: var(--td);
          border: 1px solid var(--border); padding: 7px 16px;
          transition: all .2s;
        }
        .pr-card:hover .pr-tag { color: var(--ac-dim); border-color: var(--border-ac); }
        .pr-acts { display: flex; gap: 10px; flex-wrap: wrap; }
        .pr-btn {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: .18em;
          text-transform: uppercase; padding: 13px 22px;
          display: inline-flex; align-items: center; gap: 9px;
          text-decoration: none; cursor: pointer;
          transition: all .2s; white-space: nowrap; border: none;
        }
        .pr-solid { background: var(--ac); color: #000; }
        .pr-solid:hover { background: var(--ac2); transform: translateY(-2px); box-shadow: 0 8px 26px rgba(200,241,53,.28); }
        html.light .pr-solid:hover { box-shadow: 0 8px 26px rgba(200,21,27,.22); }
        .pr-ghost { background: transparent; color: var(--td); border: 1px solid var(--border); }
        .pr-ghost:hover { border-color: var(--border-ac); color: var(--ac); transform: translateY(-2px); }
        .pr-dis { opacity: .22; pointer-events: none; }

        /* Progress bar at bottom */
        .pr-progress-bar {
          flex-shrink: 0;
          height: 2px;
          background: var(--border);
          position: relative;
        }
        .pr-progress-fill {
          position: absolute; top: 0; left: 0; bottom: 0;
          background: var(--ac);
          width: 0%;
          transition: width .05s linear;
        }
        .pr-footer {
          flex-shrink: 0;
          padding: 12px 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border);
        }
        .pr-footer-txt {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: .26em;
          text-transform: uppercase; color: var(--tm);
        }
        .pr-counter {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: .18em;
          text-transform: uppercase; color: var(--td);
        }
        .pr-counter-ac { color: var(--ac); }

        /* ── MOBILE: vertical stack ── */
        @media (max-width: 768px) {
          .pr-inner   { height: auto; overflow: visible; }
          .pr-track   { flex-direction: column; align-items: stretch; }
          .pr-panel   { width: 100%; padding: 24px 20px; height: auto; overflow: hidden; }
          .pr-card    { grid-template-columns: 1fr; gap: 28px; padding: 32px 28px; }
          .pr-header  { padding: 48px 20px 24px; }
          .pr-footer  { padding: 12px 20px; }
          .pr-big-num { font-size: 64px; }
          .pr-desc    { font-size: 16px; }
        }
        @media (max-width: 480px) {
          .pr-card    { padding: 24px 20px; }
          .pr-panel   { padding: 16px 16px; }
        }
      `}</style>

      {/* ── OUTER: tall scroll container ── */}
      <div ref={outerRef} className="pr-outer" id="projects">

        {/* ── INNER: pinned viewport ── */}
        <div ref={innerRef} className="pr-inner">

          {/* Header */}
          <div className="pr-header">
            <div>
              <span className="sec-eye">( 02 ) — Selected Work</span>
              <h2 className="sec-h2" style={{marginBottom:0}}>Pro<span className="ghost">jects</span></h2>
            </div>
            <div className="pr-scroll-hint">
              Scroll to explore
              <span className="pr-scroll-arrow">→</span>
            </div>
          </div>

          {/* Progress */}
          <div className="pr-progress-bar">
            <div className="pr-progress-fill" id="pr-prog" />
          </div>

          {/* ── TRACK: moves left as you scroll ── */}
          <div ref={trackRef} className="pr-track">
            {PROJECTS.map((p) => (
              <div key={p.id} className="pr-panel">
                <div className="pr-card">

                  {/* Left */}
                  <div className="pr-card-l">
                    <div className="pr-big-num">{p.num}</div>
                    <div className="pr-cat">{p.cat}</div>
                    <div className="pr-title">{p.title}</div>
                  </div>

                  {/* Right */}
                  <div className="pr-card-r">
                    <p className="pr-desc">{p.desc}</p>
                    <div className="pr-tags">
                      {p.tech.map(t => <span key={t} className="pr-tag">{t}</span>)}
                    </div>
                    <div className="pr-acts">
                      {p.live !== "#"
                        ? <a href={p.live} target="_blank" rel="noopener noreferrer" className="pr-btn pr-solid">
                            <ExternalLink size={12} strokeWidth={2} /> Live Demo
                          </a>
                        : <span className="pr-btn pr-solid pr-dis"><ExternalLink size={12} /> Live Demo</span>
                      }
                      {p.code !== "#"
                        ? <a href={p.code} target="_blank" rel="noopener noreferrer" className="pr-btn pr-ghost">
                            <Github size={12} strokeWidth={1.5} /> View Code
                          </a>
                        : <span className="pr-btn pr-ghost pr-dis"><Github size={12} strokeWidth={1.5} /> View Code</span>
                      }
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="pr-footer">
            <div className="pr-footer-txt">Slow scroll = slow slide</div>
            <div className="pr-counter" id="pr-count">
              <span className="pr-counter-ac" id="pr-cur">1</span>
              &nbsp;/&nbsp;{PROJECTS.length}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}