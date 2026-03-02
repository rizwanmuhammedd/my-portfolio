




// "use client";
// import { useEffect } from "react";
// import { gsap } from "@/public/lib/gsap";
// import { Github, Linkedin, Code2, Download } from "lucide-react";
// import Image from "next/image";

// const ROW1 = ["Full Stack Developer","C# .NET Core","React.js","SQL Server","Azure","TypeScript","Web API","Next.js"];
// const ROW2 = ["Entity Framework","GSAP","Redux","Tailwind CSS","Docker","CI/CD","Visual Studio","Postman"];

// export default function Hero() {
//   useEffect(() => {
//     document.body.style.overflow = "hidden";

//     const tl = gsap.timeline();

//     // Count 0→100
//     let c = { n: 0 };
//     tl.to(c, {
//       n: 100, duration: 1.55, ease: "power2.inOut",
//       onUpdate() {
//         const el = document.querySelector<HTMLElement>(".ic-num");
//         if (el) el.textContent = Math.round(c.n) + "%";
//       }
//     }, 0);

//     tl.fromTo(".ic-logo", { opacity:0, y:16 }, { opacity:1, y:0, duration:.45, ease:"power3.out" }, 0.1);

//     // Curtains fly UP off-screen
//     tl.to(".ic-left",  { yPercent:-100, duration:.9, ease:"power4.inOut" }, 1.85);
//     tl.to(".ic-right", { yPercent:-100, duration:.9, ease:"power4.inOut", delay:.07 }, 1.85);
//     tl.to(".ic-center", { opacity:0, duration:.25 }, 2.05);

//     // Fully remove overlay
//     tl.call(() => {
//       document.body.style.overflow = "";
//       const ov = document.getElementById("intro-ov");
//       const cn = document.getElementById("intro-cn");
//       if (ov) ov.style.display = "none";
//       if (cn) cn.style.display = "none";
//     }, [], 2.8);

//     // Content enters
//     tl
//       .fromTo(".h-badge",   {opacity:0,y:16},          {opacity:1,y:0,duration:.5,ease:"power3.out"}, 2.85)
//       .fromTo(".h-n1",      {yPercent:110,skewY:5},     {yPercent:0,skewY:0,duration:.95,ease:"power4.out"}, 3.0)
//       .fromTo(".h-n2",      {yPercent:110,skewY:5},     {yPercent:0,skewY:0,duration:.95,ease:"power4.out"}, 3.14)
//       .fromTo(".h-role",    {opacity:0,x:-18},          {opacity:1,x:0,duration:.6}, 3.4)
//       .fromTo(".h-desc",    {opacity:0,y:18},           {opacity:1,y:0,duration:.55}, 3.54)
//       .fromTo(".h-cta",     {opacity:0,y:14},           {opacity:1,y:0,duration:.42,stagger:.1}, 3.68)
//       .fromTo(".h-img-col", {opacity:0,x:55,scale:.95}, {opacity:1,x:0,scale:1,duration:1.05,ease:"power3.out"}, 3.0)
//       .fromTo(".h-soc",     {opacity:0,y:10},           {opacity:1,y:0,duration:.38,stagger:.09}, 4.05);

//     gsap.to(".h-n1", {textShadow:"0 0 55px #c8f13565",duration:2.8,repeat:-1,yoyo:true,ease:"sine.inOut",delay:4.5});
//     gsap.to(".h-img-col", {y:-11,duration:3.9,repeat:-1,yoyo:true,ease:"sine.inOut",delay:4.0});

//     const frame = document.querySelector<HTMLElement>(".h-img-inner");
//     if (!frame) return;
//     const mv = (e:MouseEvent) => {
//       const r = frame.getBoundingClientRect();
//       gsap.to(frame, {rotateY:((e.clientX-r.left-r.width/2)/r.width)*6,rotateX:-(( e.clientY-r.top-r.height/2)/r.height)*6,duration:.4,ease:"power2.out",transformPerspective:1000});
//     };
//     const lv = () => gsap.to(frame,{rotateY:0,rotateX:0,duration:.9,ease:"power3.out"});
//     frame.addEventListener("mousemove",mv);
//     frame.addEventListener("mouseleave",lv);
//     return ()=>{frame.removeEventListener("mousemove",mv);frame.removeEventListener("mouseleave",lv);};
//   }, []);

//   return (
//     <>
//       <style>{`
//         /* ── INTRO ── */
//         #intro-ov {
//           position:fixed; inset:0; z-index:9999;
//           display:flex; pointer-events:all;
//         }
//         .ic-left  { flex:1; background:#000; will-change:transform; }
//         .ic-right { flex:1; background:#060d00; will-change:transform; }
//         #intro-cn {
//           position:fixed; inset:0; z-index:10000;
//           display:flex; flex-direction:column;
//           align-items:center; justify-content:center;
//           pointer-events:none; gap:14px;
//         }
//         .ic-logo {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:clamp(54px,10vw,110px);
//           font-weight:900; letter-spacing:.06em;
//           color:#c8f135; text-transform:uppercase;
//           opacity:0; animation:glow-pulse 1.6s ease-in-out infinite;
//         }
//         .ic-counter {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:11px; font-weight:700;
//           letter-spacing:.4em; text-transform:uppercase;
//           color:rgba(200,241,53,.45);
//         }
//         .ic-bar { width:150px; height:1px; background:rgba(200,241,53,.12); }
//         .ic-bar-fill {
//           height:100%; background:#c8f135;
//           animation:icbar 1.55s ease-in-out forwards .05s;
//           width:0;
//         }
//         @keyframes icbar { to { width:100%; } }

//         /* ── HERO ── */
//         .hero-sec {
//           min-height:100vh; background:var(--bg,#000);
//           position:relative; z-index:1;
//           display:flex; flex-direction:column;
//           overflow:hidden; transition:background .4s;
//         }
//         .hero-body {
//           flex:1; max-width:1280px; margin:0 auto; width:100%;
//           padding:110px 24px 56px;
//           display:grid; grid-template-columns:1fr 360px;
//           gap:52px; align-items:center;
//         }

//         .h-badge {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:9px; font-weight:700; letter-spacing:.38em;
//           text-transform:uppercase; color:rgba(200,241,53,.55);
//           display:flex; align-items:center; gap:11px;
//           margin-bottom:18px; opacity:0;
//         }
//         .h-badge::before { content:''; width:7px; height:7px; background:#c8f135; border-radius:50%; animation:blink 1.4s step-end infinite; flex-shrink:0; }
//         .h-badge::after  { content:''; flex:0 0 26px; height:1px; background:rgba(200,241,53,.2); }

//         .h-name {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:clamp(58px,11vw,142px);
//           font-weight:900; text-transform:uppercase;
//           letter-spacing:-.025em; line-height:.85;
//           margin-bottom:22px; overflow:hidden;
//         }
//         /* h-n1 and h-n2 start with overflow:hidden parent – no opacity needed, yPercent hides them */
//         .h-n1 { display:block; color:#c8f135; }
//         .h-n2 { display:block; color:transparent; -webkit-text-stroke:1.5px rgba(255,255,255,.22); }
//         html.light .h-n2 { -webkit-text-stroke:1.5px rgba(0,0,0,.14); }

//         .h-role {
//           display:flex; align-items:center; gap:13px;
//           margin-bottom:26px; opacity:0;
//         }
//         .h-role-line { flex:0 0 22px; height:1px; background:rgba(200,241,53,.3); }
//         .h-role-text {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:12px; font-weight:700;
//           letter-spacing:.26em; text-transform:uppercase;
//           color:rgba(255,255,255,.6);
//         }
//         html.light .h-role-text { color:rgba(0,0,0,.55); }

//         .h-desc {
//           font-size:15px; font-weight:300;
//           line-height:1.9; color:rgba(255,255,255,.7);
//           max-width:430px; margin-bottom:36px; opacity:0;
//         }
//         html.light .h-desc { color:rgba(0,0,0,.65); }

//         .h-cta-row { display:flex; gap:10px; flex-wrap:wrap; }
//         .h-cta { opacity:0; }

//         .h-img-col { width:100%; opacity:0; }
//         .h-img-inner { overflow:hidden; position:relative; transform-style:preserve-3d; }
//         .h-img-inner::before {
//           content:'01 — RM'; position:absolute; top:12px; left:14px; z-index:3;
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:9px; font-weight:700; letter-spacing:.22em;
//           color:rgba(200,241,53,.28);
//         }
//         .h-img-shade {
//           position:absolute; inset:0; z-index:2;
//           background:linear-gradient(to bottom,transparent 42%,rgba(0,0,0,.95) 100%);
//           pointer-events:none;
//         }
//         html.light .h-img-shade {
//           background:linear-gradient(to bottom,transparent 38%,rgba(242,242,242,.97) 100%);
//         }
//         .h-img-cap {
//           position:absolute; bottom:14px; left:14px; z-index:4;
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:9px; font-weight:700; letter-spacing:.22em;
//           text-transform:uppercase; color:rgba(200,241,53,.6);
//         }

//         .h-soc-row { display:flex; gap:6px; margin-top:12px; }
//         .h-soc {
//           width:34px; height:34px; border:1px solid rgba(200,241,53,.15);
//           background:transparent; display:flex; align-items:center;
//           justify-content:center; color:rgba(200,241,53,.35);
//           text-decoration:none; transition:all .22s; opacity:0;
//         }
//         .h-soc:hover { border-color:rgba(200,241,53,.5); color:#c8f135; background:rgba(200,241,53,.06); transform:translateY(-3px); }

//         /* Marquee */
//         .h-mq {
//           border-top:1px solid rgba(200,241,53,.1);
//           overflow:hidden; height:38px; display:flex; align-items:center;
//           position:relative; z-index:1; background:var(--bg,#000);
//           transition:background .4s;
//         }
//         .h-mq + .h-mq { background:rgba(200,241,53,.02); }
//         .h-mq-track { display:flex; white-space:nowrap; will-change:transform; }
//         .h-mq:first-of-type .h-mq-track { animation:marquee 22s linear infinite; }
//         .h-mq:last-of-type  .h-mq-track { animation:marquee 28s linear infinite reverse; }
//         .h-mq-item {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:9px; font-weight:700; letter-spacing:.28em;
//           text-transform:uppercase; color:rgba(200,241,53,.3); padding:0 24px;
//         }
//         html.light .h-mq-item { color:rgba(0,0,0,.28); }

//         @media(max-width:1024px){
//           .hero-body{grid-template-columns:1fr;padding-top:100px;gap:38px;}
//           .h-img-col{max-width:300px;margin:0 auto;width:100%;}
//         }
//         @media(max-width:640px){
//           .hero-body{padding:86px 16px 44px;}
//           .h-name{font-size:clamp(48px,17vw,72px);}
//           .h-cta-row{flex-direction:column;}
//         }
//       `}</style>

//       {/* INTRO */}
//       <div id="intro-ov">
//         <div className="ic-left" />
//         <div className="ic-right" />
//       </div>
//       <div id="intro-cn" className="ic-center">
//         <div className="ic-logo">RM</div>
//         <div className="ic-counter">Loading&nbsp;<span className="ic-num">0%</span></div>
//         <div className="ic-bar"><div className="ic-bar-fill" /></div>
//       </div>

//       {/* HERO */}
//       <section id="home" className="hero-sec">
//         <div className="hero-body">
//           <div>
//             <div className="h-badge">Full Stack Developer — Kozhikode, IN</div>
//             <h1 className="h-name">
//               <span className="h-n1">Risvan</span>
//               <span className="h-n2">Muhammed</span>
//             </h1>
//             <div className="h-role">
//               <div className="h-role-line" />
//               <div className="h-role-text">.NET Core &amp; React Specialist</div>
//             </div>
//             <p className="h-desc">
//               Building robust, scalable web applications with .NET backend and modern
//               frontend technologies. Performance-focused, clean architecture,
//               exceptional user experiences.
//             </p>
//             <div className="h-cta-row">
//               <a href="#projects" className="btn btn-solid h-cta">View Projects</a>
//               <a href="/assets/Risvan-Muhammed-Resume.pdf" download className="btn btn-ghost h-cta">
//                 <Download size={11}/> Download CV
//               </a>
//             </div>
//           </div>

//           <div className="h-img-col">
//             <div className="h-img-inner">
//               <div className="h-img-shade" />
//               <Image src="/risw.jpg" alt="Risvan Muhammed" width={380} height={500}
//                 style={{width:"100%",height:"auto",display:"block"}} priority />
//               <div className="h-img-cap">Risvan Muhammed</div>
//             </div>
//             <div className="h-soc-row">
//               {[
//                 {href:"https://github.com/rizwanmuhammedd",                    I:Github,   l:"GitHub"},
//                 {href:"https://www.linkedin.com/in/risvan-muhammed-096361375", I:Linkedin, l:"LinkedIn"},
//                 {href:"https://leetcode.com/u/risvanmuhammed/",                I:Code2,    l:"LeetCode"},
//               ].map(({href,I,l}) => (
//                 <a key={l} href={href} target="_blank" rel="noopener noreferrer" className="h-soc" title={l}>
//                   <I size={13} strokeWidth={1.5}/>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="h-mq">
//           <div className="h-mq-track">
//             {[0,1].map(s=>ROW1.map((t,i)=>(
//               <span key={`${s}-${i}`} className="h-mq-item">{t}<span style={{margin:"0 8px",opacity:.3}}>✦</span></span>
//             )))}
//           </div>
//         </div>
//         <div className="h-mq">
//           <div className="h-mq-track">
//             {[0,1].map(s=>ROW2.map((t,i)=>(
//               <span key={`${s}-${i}`} className="h-mq-item">{t}<span style={{margin:"0 8px",opacity:.3}}>✦</span></span>
//             )))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


"use client";
import { useEffect } from "react";
import { gsap } from "@/public/lib/gsap";
import { Github, Linkedin, Code2, Download, ExternalLink } from "lucide-react";

/* Tech pills shown below the big name — like asharaf's pill row */
const PILLS = [
  "React.js","Redux","GSAP","SQL Server","Tailwind CSS",
  "ASP.NET Core","SQL Server","C#","Entity Framework","Next.js","Azure" , "AWS",
];

export default function Hero() {
  useEffect(() => {
    /* ── Lock scroll during intro ── */
    document.body.style.overflow = "hidden";

    /* Counter */
    const numEl = document.querySelector<HTMLElement>(".ic-num");
    const obj = { v: 0 };
    gsap.to(obj, {
      v: 100, duration: 1.65, ease: "power2.inOut",
      onUpdate() { if (numEl) numEl.textContent = `${Math.round(obj.v)}%`; },
    });

    /* Logo fade-in */
    gsap.fromTo(".ic-logo", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: .5, ease: "power3.out", delay: .1 });

    /* Curtains slide up */
    gsap.to(".ic-l", { yPercent: -100, duration: 1.0, ease: "power4.inOut", delay: 1.9 });
    gsap.to(".ic-r", { yPercent: -100, duration: 1.0, ease: "power4.inOut", delay: 2.04 });
    gsap.to("#ic-cn", { opacity: 0, duration: .25, delay: 2.1 });

    /* Remove overlay entirely */
    gsap.delayedCall(3.0, () => {
      document.body.style.overflow = "";
      ["ic-ov","ic-cn"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "none";
      });
    });

    /* ── Page content reveals ── */
    const D = 3.05;

    /* Badge */
    gsap.fromTo(".h-badge",
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: .55, ease: "power3.out", delay: D });

    /* Name lines — clip-path slide up (asharaf style) */
    gsap.fromTo(".h-n1",
      { clipPath: "inset(0 0 100% 0)" },
      { clipPath: "inset(0 0 0% 0)", duration: 1.1, ease: "power4.out", delay: D + .1 });
    gsap.fromTo(".h-n2",
      { clipPath: "inset(0 0 100% 0)" },
      { clipPath: "inset(0 0 0% 0)", duration: 1.1, ease: "power4.out", delay: D + .24 });

    /* Pills stagger in */
    gsap.fromTo(".h-pill",
      { opacity: 0, y: 22, scale: .9 },
      { opacity: 1, y: 0, scale: 1, duration: .45, stagger: .06, ease: "power3.out", delay: D + .55 });

    /* Bottom row */
    gsap.fromTo(".h-role",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: .6, ease: "power3.out", delay: D + .75 });
    gsap.fromTo(".h-desc",
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: .55, delay: D + .88 });
    gsap.fromTo(".h-cta",
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: .42, stagger: .1, delay: D + 1.0 });
    gsap.fromTo(".h-soc",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: .38, stagger: .08, delay: D + 1.18 });

    /* Photo slides in from right */
    gsap.fromTo(".h-photo",
      { opacity: 0, x: 40, scale: .94 },
      { opacity: 1, x: 0, scale: 1, duration: 1.1, ease: "power3.out", delay: D + .18 });

    /* Floating */
    gsap.to(".h-photo", {
      y: -12, duration: 4.2, repeat: -1, yoyo: true,
      ease: "sine.inOut", delay: D + 1.0,
    });

    /* 3-D tilt */
    const frame = document.querySelector<HTMLElement>(".h-photo-inner");
    if (frame) {
      const mv = (e: MouseEvent) => {
        const r = frame.getBoundingClientRect();
        gsap.to(frame, {
          rotateY: ((e.clientX - r.left - r.width/2) / r.width) * 8,
          rotateX: -((e.clientY - r.top - r.height/2) / r.height) * 8,
          duration: .4, ease: "power2.out", transformPerspective: 800,
        });
      };
      const lv = () => gsap.to(frame, { rotateY: 0, rotateX: 0, duration: .9, ease: "power3.out" });
      frame.addEventListener("mousemove", mv);
      frame.addEventListener("mouseleave", lv);
    }

  }, []);

  return (
    <>
      <style>{`
        /* ════════ INTRO OVERLAY ════════ */
        #ic-ov {
          position: fixed; inset: 0; z-index: 9000;
          display: flex; pointer-events: all;
        }
        .ic-l { flex: 1; background: #0c0c0c; }
        .ic-r { flex: 1; background: #0e1000; }

        #ic-cn {
          position: fixed; inset: 0; z-index: 9100; pointer-events: none;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 20px;
        }
        .ic-logo {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(64px, 12vw, 128px); font-weight: 900;
          letter-spacing: .05em; text-transform: uppercase;
          color: #c8f135; opacity: 0;
          text-shadow: 0 0 40px rgba(200,241,53,.5);
          animation: glow-pulse 1.8s ease-in-out infinite;
        }
        .ic-meta { display: flex; flex-direction: column; align-items: center; gap: 12px; }
        .ic-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: .42em;
          text-transform: uppercase; color: rgba(200,241,53,.38);
        }
        .ic-bar { width: 160px; height: 1px; background: rgba(200,241,53,.1); overflow: hidden; }
        .ic-fill { height: 100%; background: #c8f135; width: 0; animation: bar-fill 1.65s ease-in-out forwards .05s; }
        @keyframes bar-fill { to { width: 100%; } }

        /* ════════ HERO ════════ */
        .hero-sec {
          min-height: 100vh; background: var(--bg);
          display: flex; flex-direction: column;
          position: relative; z-index: 1;
          overflow: hidden; transition: background .4s;
        }
        .hero-body {
          flex: 1; max-width: 1400px; margin: 0 auto; width: 100%;
          padding: 120px 40px 60px;
          display: flex; flex-direction: column; justify-content: center;
        }

        /* Badge eyebrow */
        .h-badge {
          opacity: 0;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: .38em;
          text-transform: uppercase; color: var(--ac);
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 24px;
        }
        .h-badge::before {
          content: ''; width: 7px; height: 7px;
          background: var(--ac); border-radius: 50%;
          flex-shrink: 0; animation: blink 1.4s step-end infinite;
        }

        /* ── NAME + IMAGE row ── */
        .h-name-row {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 32px; align-items: flex-end;
          margin-bottom: 32px;
        }

        /* ── GIANT NAME — fills full width ── */
        .h-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900; text-transform: uppercase;
          line-height: .86; letter-spacing: -.02em;
          font-size: clamp(76px, 14.5vw, 200px);
        }
        .h-n1, .h-n2 {
          display: block;
          clip-path: inset(0 0 100% 0);
        }
        .h-n1 { color: var(--tp); }
        .h-n2 { color: var(--tp); padding-left: .04em; }

        /* ── Photo beside name ── */
        .h-photo {
          opacity: 0;
          width: clamp(140px, 18vw, 260px);
          flex-shrink: 0; position: relative;
          align-self: flex-end;
        }
        .h-photo-inner {
          position: relative; overflow: hidden;
          transform-style: preserve-3d;
        }
        .h-photo-inner img {
          width: 100%; height: auto; display: block;
          object-fit: cover;
        }
        /* Gradient fade into bg — fixes light/dark both */
        .h-photo-shade {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(
            to bottom, transparent 30%, var(--bg) 100%
          );
        }
        /* Left vignette so photo bleeds into name */
        .h-photo-inner::before {
          content: ''; position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            to right, var(--bg) 0%, transparent 30%
          );
          pointer-events: none;
        }
        .h-photo-label {
          position: absolute; bottom: 10px; right: 10px; z-index: 3;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px; font-weight: 700; letter-spacing: .22em;
          text-transform: uppercase; color: var(--ac-dim);
        }

        /* ── Tech pills row ── */
        .h-pills {
          display: flex; flex-wrap: wrap; gap: 8px;
          margin-bottom: 40px;
        }
        .h-pill {
          opacity: 0;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: .14em;
          text-transform: uppercase;
          border: 1px solid var(--border);
          color: var(--td); padding: 9px 20px;
          border-radius: 999px;
          background: transparent;
          transition: border-color .22s, color .22s, background .22s;
          white-space: nowrap;
        }
        .h-pill:hover {
          border-color: var(--border-ac); color: var(--ac);
          background: var(--ac-ghost);
        }

        /* ── Bottom row ── */
        .h-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px; align-items: start;
          border-top: 1px solid var(--border);
          padding-top: 32px;
        }
        .h-role {
          opacity: 0;
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 18px;
        }
        .h-role-bar { flex: 0 0 22px; height: 1px; background: var(--border-ac); }
        .h-role-txt {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: .26em;
          text-transform: uppercase; color: var(--ts);
        }
        .h-desc {
          opacity: 0; font-size: 16px; font-weight: 300;
          line-height: 1.9; color: var(--ts); max-width: 480px;
        }
        .h-right { display: flex; flex-direction: column; gap: 18px; }
        .h-cta-row { display: flex; gap: 10px; flex-wrap: wrap; }
        .h-cta { opacity: 0; }
        .h-soc-row { display: flex; gap: 6px; }
        .h-soc {
          opacity: 0; width: 38px; height: 38px;
          border: 1px solid var(--border); background: transparent;
          color: var(--td); display: flex; align-items: center;
          justify-content: center; text-decoration: none;
          transition: all .22s;
        }
        .h-soc:hover {
          border-color: var(--border-ac); color: var(--ac);
          background: var(--ac-ghost); transform: translateY(-3px);
        }

        @media (max-width: 1024px) {
          .hero-body   { padding: 108px 28px 52px; }
          .h-name      { font-size: clamp(60px, 13vw, 160px); }
          .h-bottom    { grid-template-columns: 1fr; gap: 24px; }
          .h-photo     { width: clamp(110px, 16vw, 200px); }
        }
        @media (max-width: 640px) {
          .hero-body   { padding: 96px 20px 44px; }
          .h-name      { font-size: clamp(52px, 15vw, 100px); }
          .h-name-row  { grid-template-columns: 1fr; }
          .h-photo     { display: none; }
          .h-cta-row   { flex-direction: column; }
          .h-pills     { gap: 6px; }
          .h-pill      { font-size: 11px; padding: 8px 15px; }
        }
      `}</style>

      {/* INTRO */}
      <div id="ic-ov"><div className="ic-l" /><div className="ic-r" /></div>
      <div id="ic-cn">
        <div className="ic-logo">RM</div>
        <div className="ic-meta">
          <div className="ic-label">Loading&nbsp;<span className="ic-num">0%</span></div>
          <div className="ic-bar"><div className="ic-fill" /></div>
        </div>
      </div>

      {/* HERO */}
      <section id="home" className="hero-sec">
        <div className="hero-body">

          {/* Eyebrow */}
          <div className="h-badge">Full Stack Developer — Kozhikode, IN</div>

          {/* ── NAME + PHOTO row ── */}
          <div className="h-name-row">
            <h1 className="h-name">
              <span className="h-n1">Risvan</span>
              <span className="h-n2">Muhammed.</span>
            </h1>
            <div className="h-photo">
              <div className="h-photo-inner">
                <img src="/risw.jpg" alt="Risvan Muhammed" />
                <div className="h-photo-shade" />
                <div className="h-photo-label">RM</div>
              </div>
            </div>
          </div>

          {/* ── Tech pills ── */}
          <div className="h-pills">
            {PILLS.map(p => (
              <span key={p} className="h-pill">{p}</span>
            ))}
          </div>

          {/* ── Bottom row ── */}
          <div className="h-bottom">
            <div>
              <div className="h-role">
                <div className="h-role-bar" />
                <div className="h-role-txt">.NET Core &amp; React Specialist</div>
              </div>
              <p className="h-desc">
                Building robust, scalable web applications with .NET backend and modern
                frontend technologies. Performance-focused, clean architecture,
                exceptional user experiences.
              </p>
            </div>
            <div className="h-right">
              <div className="h-cta-row">
                <a href="#projects" className="btn btn-solid h-cta">View Projects</a>
                <a href="/assets/Risvan-Muhammed-Resume.pdf" download className="btn btn-ghost h-cta">
                  <Download size={11} /> Download CV
                </a>
              </div>
              <div className="h-soc-row">
                {[
                  { href: "https://github.com/rizwanmuhammedd",                    I: Github,      l: "GitHub" },
                  { href: "https://www.linkedin.com/in/risvan-muhammed-096361375", I: Linkedin,    l: "LinkedIn" },
                  { href: "https://leetcode.com/u/risvanmuhammed/",                I: Code2,       l: "LeetCode" },
                  { href: "https://risvanmuhammed.vercel.app",                     I: ExternalLink,l: "Portfolio" },
                ].map(({ href, I, l }) => (
                  <a key={l} href={href} target="_blank" rel="noopener noreferrer"
                    className="h-soc" title={l}>
                    <I size={13} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}