
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
import { useEffect,useRef } from "react";
import { gsap } from "@/public/lib/gsap";
import { ScrollTrigger } from "gsap/all";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    id: 1, num: "01", cat: "Full Stack",
    title: "SportX E-commerce",
    desc: "A production-deployed B2C football accessories e-commerce platform architected with Domain-Driven Design and Clean Architecture. Features Razorpay payment gateway integration, secure JWT + Refresh Token auth, OTP verification, RBAC, and automated Order Lifecycle Management with status tracking.",
    tech: ["ASP.NET Core 8", "C#", "EF Core", "SQL Server", "Razorpay", "JWT", "React.js", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://sportx-sx.vercel.app/", code: "https://github.com/rizwanmuhammedd/SportX-Project",
  },
  {
    id: 2, num: "02", cat: "Full Stack",
    title: "GOMEDIC SaaS",
    desc: "A comprehensive multi-tenant SaaS hospital management system built with a decoupled microservices architecture and Ocelot API Gateway. Includes a SignalR-based real-time notification engine for instant patient alerts, Bed Management, Pharmacy Stock Tracking, and automated Billing/Invoicing.",
    tech: ["ASP.NET Core 8", "C#", "Microservices", "Ocelot Gateway", "SignalR", "SQL Server", "EF Core", "React 18", "TypeScript", "Docker"],
    live: "#", code: "https://github.com/rizwanmuhammedd/GOMEDIC-project-.git",
  },
  {
    id: 3, num: "03", cat: "Frontend",
    title: "Portfolio Website",
    desc: "Fully responsive developer portfolio featuring GSAP scroll animations, 3D vertical stacked card interactions in the skills section, and customized light/dark color themes to showcase professional work and technical expertise.",
    tech: ["Next.js", "GSAP", "Tailwind CSS", "TypeScript"],
    live: "https://risvanmuhammed.vercel.app", code: "https://github.com/rizwanmuhammedd/portfolio-v2",
  },
];

export default function Projects() {
  const outerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const isMobile = window.innerWidth <= 768;
    const tiltListeners: { el: HTMLElement; mv: (e: MouseEvent) => void; lv: () => void }[] = [];

    if (!isMobile) {
      /* ══════════════════════════════════════
         DESKTOP — Skew-on-Scroll & Parallax Fade
      ══════════════════════════════════════ */
      const wrappers = gsap.utils.toArray<HTMLElement>(".pr-desk .pr-card-wrapper");
      
      // 1. Parallax fade and scale as cards scroll into viewport
      wrappers.forEach((wrapper) => {
        const cardBox = wrapper.querySelector(".pr-card-box");
        if (cardBox) {
          gsap.fromTo(cardBox,
            { opacity: 0.3, y: 100, scale: 0.95 },
            {
              opacity: 1, y: 0, scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: wrapper,
                start: "top 98%",
                end: "top 68%",
                scrub: true,
              }
            }
          );
        }
      });

      // 2. Skew-on-Scroll based on scroll velocity
      const cardBoxes = document.querySelectorAll<HTMLElement>(".pr-desk .pr-card-box");
      
      let proxy = { skew: 0 };
      const skewSetter = gsap.quickTo(cardBoxes, "skewY", { duration: 0.4, ease: "power3" });
      const clamp = gsap.utils.clamp(-8, 8); // Limit skew to max -8 to 8 degrees

      ScrollTrigger.create({
        onUpdate: (self) => {
          const skew = clamp(self.getVelocity() / -400);
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {
              skew: 0,
              duration: 0.8,
              ease: "power3",
              overwrite: "auto",
              onUpdate: () => { skewSetter(proxy.skew); },
            });
          }
        },
      });

      // 3. 3D Tilt interactive hover effect
      cardBoxes.forEach((card) => {
        const mv = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const xc = rect.width / 2;
          const yc = rect.height / 2;
          const rotateY = ((x - xc) / xc) * 6; // max 6 deg
          const rotateX = -((y - yc) / yc) * 6; // max 6 deg

          gsap.to(card, {
            rotateY,
            rotateX,
            scale: 1.015,
            duration: 0.35,
            ease: "power2.out",
            transformPerspective: 1000,
          });
        };

        const lv = () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
          });
        };

        card.addEventListener("mousemove", mv);
        card.addEventListener("mouseleave", lv);
        tiltListeners.push({ el: card, mv, lv });
      });

    } else {
      /* ══════════════════════════════════════
         MOBILE — cards slide from left/right
      ══════════════════════════════════════ */
      const cards = document.querySelectorAll<HTMLElement>(".pr-mob-card");
      const vw = window.innerWidth;

      cards.forEach((card, i) => {
        const dir    = i % 2 === 0 ? 1 : -1;
        const startX = dir * vw;

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
      });
    }

    return () => {
      tiltListeners.forEach(({ el, mv, lv }) => {
        el.removeEventListener("mousemove", mv);
        el.removeEventListener("mouseleave", lv);
      });
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <style>{`
        /* ════════════════════════════
           SHARED
        ════════════════════════════ */
        .pr-card-box {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          border: 1px solid var(--border);
          background: var(--bg-card);
          position: relative; overflow: hidden;
          transition: border-color .3s, background .45s, transform .35s, box-shadow .35s;
        }
        .pr-card-box::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(to right, var(--ac), var(--ac-dim));
          transform: scaleX(0); transform-origin: left;
          transition: transform .55s ease;
        }
        .pr-card-box:hover::before  { transform: scaleX(1); }
        .pr-card-box:hover          { border-color: var(--border-ac); }

        .pr-card-grid {
          padding: 48px 52px;
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 44px; align-items: center;
        }

        .pr-big-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 80px; font-weight: 900;
          letter-spacing: -.03em; line-height: 1;
          color: var(--tm); margin-bottom: 10px; transition: color .3s;
        }
        .pr-card-box:hover .pr-big-num { color: var(--ac-dim); }
        .pr-cat {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: .32em;
          text-transform: uppercase; color: var(--ac-dim); margin-bottom: 10px;
        }
        .pr-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(24px, 3.2vw, 48px);
          font-weight: 900; text-transform: uppercase;
          letter-spacing: .01em; line-height: .92;
          color: var(--tp); transition: color .25s;
        }
        .pr-card-box:hover .pr-title { color: var(--ac); }
        .pr-desc {
          font-size: 16px; font-weight: 300;
          line-height: 1.88; color: var(--ts); margin-bottom: 22px;
        }
        .pr-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
        .pr-tag {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: .14em;
          text-transform: uppercase; color: var(--td);
          border: 1px solid var(--border); padding: 6px 14px; transition: all .2s;
        }
        .pr-card-box:hover .pr-tag { color: var(--ac-dim); border-color: var(--border-ac); }
        .pr-acts { display: flex; gap: 10px; flex-wrap: wrap; }
        .pr-btn {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: .18em;
          text-transform: uppercase; padding: 12px 20px;
          display: inline-flex; align-items: center; gap: 8px;
          text-decoration: none; cursor: pointer;
          transition: all .2s; white-space: nowrap; border: none;
        }
        .pr-solid { background: var(--ac); color: #000; }
        .pr-solid:hover { background: var(--ac2); transform: translateY(-2px); }
        .pr-ghost { background: transparent; color: var(--td); border: 1px solid var(--border); }
        .pr-ghost:hover { border-color: var(--border-ac); color: var(--ac); transform: translateY(-2px); }
        .pr-dis { opacity: .22; pointer-events: none; }

        /* ════════════════════════════
           DESKTOP
        ════════════════════════════ */
        .pr-outer {
          position: relative; background: var(--bg);
          border-top: 1px solid var(--border);
          transition: background .45s;
          padding-bottom: 100px;
        }
        .pr-inner-vertical {
          width: 100%; display: flex; flex-direction: column;
        }
        .pr-hdr {
          flex-shrink: 0; padding: 44px 52px 22px;
          display: flex; align-items: flex-end;
          justify-content: space-between; gap: 20px;
          border-bottom: 1px solid var(--border);
        }
        .pr-hint-txt {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: .26em;
          text-transform: uppercase; color: var(--td);
          display: flex; align-items: center; gap: 10px;
        }
        .pr-hint-arrow {
          color: var(--ac);
          animation: pr-arr-v 1.8s ease-in-out infinite;
        }
        @keyframes pr-arr-v {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(8px); }
        }
        
        .pr-list-container {
          max-width: 1080px;
          margin: 64px auto 0;
          padding: 0 48px;
          display: flex;
          flex-direction: column;
          gap: 60px;
        }
        .pr-card-wrapper {
          width: 100%;
          perspective: 1200px;
        }

        /* ════════════════════════════
           MOBILE
        ════════════════════════════ */
        .pr-mob-sec {
          background: var(--bg);
          border-top: 1px solid var(--border);
          padding: 56px 0 48px;
          overflow-x: hidden;
          transition: background .45s;
        }
        .pr-mob-inner { padding: 0 18px; }
        .pr-mob-hdr   { margin-bottom: 32px; }

        .pr-mob-card {
          margin-bottom: 20px;
          will-change: transform;
        }

        /* Mobile card layout — single column */
        .pr-mob-card .pr-card-grid {
          grid-template-columns: 1fr;
          gap: 18px; padding: 26px 22px;
        }
        .pr-mob-card .pr-big-num { font-size: 52px; }
        .pr-mob-card .pr-desc    { font-size: 15px; margin-bottom: 18px; }
        .pr-mob-card .pr-tags    { margin-bottom: 18px; }

        @media (max-width: 480px) {
          .pr-mob-card .pr-card-grid { padding: 20px 16px; gap: 14px; }
          .pr-mob-card .pr-big-num   { font-size: 42px; }
          .pr-mob-inner              { padding: 0 14px; }
          .pr-mob-sec                { padding: 44px 0 36px; }
        }

        /* Show/hide */
        .pr-desk { display: block; }
        .pr-mob  { display: none; }
        @media (max-width: 768px) {
          .pr-desk { display: none !important; }
          .pr-mob  { display: block !important; }
        }
      `}</style>

      {/* ════════ DESKTOP ════════ */}
      <div className="pr-desk">
        <div ref={outerRef} className="pr-outer" id="projects">
          <section className="pr-inner-vertical">

            <div className="pr-hdr">
              <div>
                <span className="sec-eye">( 02 ) — Selected Work</span>
                <h2 className="sec-h2" style={{ marginBottom: 0 }}>
                  Pro<span className="ghost">jects</span>
                </h2>
              </div>
              <div className="pr-hint-txt">
                Scroll to explore
                <span className="pr-hint-arrow">↓</span>
              </div>
            </div>

            <div className="pr-list-container">
              {PROJECTS.map(p => (
                <div key={p.id} className="pr-card-wrapper">
                  <div className="pr-card-box">
                    <div className="pr-card-grid">
                      <div>
                        <div className="pr-big-num">{p.num}</div>
                        <div className="pr-cat">{p.cat}</div>
                        <div className="pr-title">{p.title}</div>
                      </div>
                      <div>
                        <p className="pr-desc">{p.desc}</p>
                        <div className="pr-tags">
                          {p.tech.map(t => <span key={t} className="pr-tag">{t}</span>)}
                        </div>
                        <div className="pr-acts">
                          {p.live !== "#"
                            ? <a href={p.live} target="_blank" rel="noopener noreferrer" className="pr-btn pr-solid">
                                <ExternalLink size={12} strokeWidth={2} /> Live Demo
                              </a>
                            : <span className="pr-btn pr-solid pr-dis"><ExternalLink size={12} /> Live</span>
                          }
                          {p.code !== "#"
                            ? <a href={p.code} target="_blank" rel="noopener noreferrer" className="pr-btn pr-ghost">
                                <Github size={12} strokeWidth={1.5} /> View Code
                              </a>
                            : <span className="pr-btn pr-ghost pr-dis"><Github size={12} strokeWidth={1.5} /> Code</span>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </section>
        </div>
      </div>

      {/* ════════ MOBILE ════════ */}
      <section ref={sectionRef} className="pr-mob pr-mob-sec" id="projects">
        <div className="pr-mob-inner">

          <div className="pr-mob-hdr">
            <span className="sec-eye">( 02 ) — Selected Work</span>
            <h2 className="sec-h2" style={{ marginBottom: 0 }}>
              Pro<span className="ghost">jects</span>
            </h2>
          </div>

          {PROJECTS.map(p => (
            <div key={p.id} className="pr-mob-card">
              <div className="pr-card-box">
                <div className="pr-card-grid">
                  <div>
                    <div className="pr-big-num">{p.num}</div>
                    <div className="pr-cat">{p.cat}</div>
                    <div className="pr-title">{p.title}</div>
                  </div>
                  <div>
                    <p className="pr-desc">{p.desc}</p>
                    <div className="pr-tags">
                      {p.tech.map(t => <span key={t} className="pr-tag">{t}</span>)}
                    </div>
                    <div className="pr-acts">
                      {p.live !== "#"
                        ? <a href={p.live} target="_blank" rel="noopener noreferrer" className="pr-btn pr-solid">
                            <ExternalLink size={12} strokeWidth={2} /> Live Demo
                          </a>
                        : <span className="pr-btn pr-solid pr-dis"><ExternalLink size={12} /> Live</span>
                      }
                      {p.code !== "#"
                        ? <a href={p.code} target="_blank" rel="noopener noreferrer" className="pr-btn pr-ghost">
                            <Github size={12} strokeWidth={1.5} /> View Code
                          </a>
                        : <span className="pr-btn pr-ghost pr-dis"><Github size={12} strokeWidth={1.5} /> Code</span>
                        }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}