




// "use client";
// import { useEffect, useState } from "react";
// import { gsap } from "@/public/lib/gsap";
// import { Github, Linkedin, Code2, Download, Camera } from "lucide-react";
// import Image from "next/image";

// const ROW1 = ["Full Stack Developer","C# .NET Core","React.js","SQL Server","Azure","TypeScript","Web API","Next.js"];
// const ROW2 = ["Entity Framework","GSAP","Redux","Tailwind CSS","Docker","CI/CD","Visual Studio","Postman"];

// export default function Hero() {
//   const [img, setImg] = useState("/risw.jpg");

//   useEffect(() => {
//     /* ── Entry timeline (asharaf-style clip+skew) ── */
//     const tl = gsap.timeline({ defaults:{ ease:"power4.out" } });
//     tl.set([".h-n1",".h-n2",".h-badge",".h-role",".h-desc",".h-cta",".h-soc",".h-img-col"], { visibility:"visible" })
//       .fromTo(".h-badge",    { opacity:0, y:18 },                   { opacity:1, y:0, duration:.55 }, .15)
//       .fromTo(".h-n1",       { y:"110%", skewY:5, opacity:0 },      { y:"0%",   skewY:0, opacity:1, duration:1.1 }, .3)
//       .fromTo(".h-n2",       { y:"110%", skewY:5, opacity:0 },      { y:"0%",   skewY:0, opacity:1, duration:1.1 }, .46)
//       .fromTo(".h-role",     { opacity:0, x:-24 },                  { opacity:1, x:0, duration:.65 }, .82)
//       .fromTo(".h-desc",     { opacity:0, y:22 },                   { opacity:1, y:0, duration:.6 }, .96)
//       .fromTo(".h-cta",      { opacity:0, y:18 },                   { opacity:1, y:0, duration:.5, stagger:.1 }, 1.1)
//       .fromTo(".h-img-col",  { opacity:0, x:70, scale:.94 },        { opacity:1, x:0, scale:1, duration:1.2 }, .28)
//       .fromTo(".h-soc",      { opacity:0, y:14 },                   { opacity:1, y:0, duration:.4, stagger:.09 }, 1.4);

//     /* ── Name glow breathe ── */
//     gsap.to(".h-n1", { textShadow:"0 0 60px #c8f13565", duration:2.8, repeat:-1, yoyo:true, ease:"sine.inOut", delay:1.6 });

//     /* ── Image float ── */
//     gsap.to(".h-img-col", { y:-14, duration:3.8, repeat:-1, yoyo:true, ease:"sine.inOut", delay:.8 });

//     /* ── 3D tilt on image ── */
//     const frame = document.querySelector<HTMLElement>(".h-img-inner");
//     if (!frame) return;
//     const onMove = (e: MouseEvent) => {
//       const r = frame.getBoundingClientRect();
//       const dx = (e.clientX - r.left - r.width/2)  / r.width;
//       const dy = (e.clientY - r.top  - r.height/2) / r.height;
//       gsap.to(frame, { rotateY:dx*7, rotateX:-dy*7, duration:.45, ease:"power2.out", transformPerspective:1000 });
//     };
//     const onLeave = () => gsap.to(frame, { rotateY:0, rotateX:0, duration:.9, ease:"power3.out" });
//     frame.addEventListener("mousemove", onMove);
//     frame.addEventListener("mouseleave", onLeave);
//     return () => { frame.removeEventListener("mousemove", onMove); frame.removeEventListener("mouseleave", onLeave); };
//   }, []);

//   const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const f = e.target.files?.[0];
//     if (f) { const r = new FileReader(); r.onload = ev => setImg(ev.target?.result as string); r.readAsDataURL(f); }
//   };

//   return (
//     <>
//       <style>{`
//         /* ─ section ─ */
//         .hero { min-height:100vh; background:#000; position:relative; z-index:1; display:flex; flex-direction:column; overflow:hidden; }
//         .hero-body { flex:1; max-width:1280px; margin:0 auto; width:100%; padding:108px 24px 56px; display:grid; grid-template-columns:1fr 380px; gap:52px; align-items:center; }

//         /* ─ left ─ */
//         .h-badge { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:700; letter-spacing:.38em; text-transform:uppercase; color:#c8f13548; display:flex; align-items:center; gap:11px; margin-bottom:18px; visibility:hidden; }
//         .h-badge::before { content:''; width:6px; height:6px; background:#c8f135; border-radius:50%; animation:blink 1.4s step-end infinite; flex-shrink:0; }
//         .h-badge::after  { content:''; flex:0 0 26px; height:1px; background:#161c09; }

//         .h-name { font-family:'Barlow Condensed',sans-serif; font-size:clamp(56px,10.5vw,138px); font-weight:900; text-transform:uppercase; letter-spacing:-.025em; line-height:.84; margin-bottom:20px; overflow:hidden; }
//         .h-n1 { display:block; color:#c8f135; visibility:hidden; }
//         .h-n2 { display:block; -webkit-text-stroke:1.5px rgba(200,241,53,.22); color:transparent; visibility:hidden; }

//         .h-role { font-family:'Barlow Condensed',sans-serif; display:flex; align-items:center; gap:13px; margin-bottom:24px; visibility:hidden; }
//         .h-role-line { flex:0 0 22px; height:1px; background:#c8f13530; }
//         .h-role-text { font-size:11px; font-weight:700; letter-spacing:.26em; text-transform:uppercase; color:#c8f13560; }

//         .h-desc { font-size:13px; font-weight:300; line-height:1.88; color:#3a5015; max-width:420px; margin-bottom:34px; visibility:hidden; }

//         .h-cta-row { display:flex; gap:9px; flex-wrap:wrap; }
//         .h-cta { visibility:hidden; }

//         /* ─ right ─ */
//         .h-img-col { width:100%; visibility:hidden; }
//         .h-img-inner { overflow:hidden; position:relative; transform-style:preserve-3d; }
//         .h-img-inner::before { content:'01 — RM'; position:absolute; top:12px; left:14px; z-index:3; font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:700; letter-spacing:.22em; color:#c8f13528; }
//         .h-img-shade { position:absolute; inset:0; z-index:2; background:linear-gradient(to bottom, transparent 48%, rgba(0,0,0,.92) 100%); pointer-events:none; }
//         .h-img-cap { position:absolute; bottom:14px; left:14px; z-index:4; font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:#c8f13560; }
//         .h-upload { position:absolute; bottom:12px; right:12px; z-index:4; width:30px; height:30px; background:#c8f135; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:background .15s; }
//         .h-upload:hover { background:#b3d820; }

//         .h-soc-row { display:flex; gap:6px; margin-top:12px; }
//         .h-soc { width:34px; height:34px; border:1px solid #161c09; background:#000; display:flex; align-items:center; justify-content:center; color:#c8f13530; text-decoration:none; transition:all .2s; visibility:hidden; }
//         .h-soc:hover { border-color:#c8f13548; color:#c8f135; background:#c8f13508; transform:translateY(-3px); }

//         /* ─ dual marquee ─ */
//         .h-mq { border-top:1px solid #161c09; overflow:hidden; height:38px; display:flex; align-items:center; position:relative; z-index:1; }
//         .h-mq + .h-mq { border-top:none; background:#c8f13504; }
//         .h-mq-track { display:flex; white-space:nowrap; will-change:transform; }
//         .h-mq:first-of-type .h-mq-track { animation:marquee 22s linear infinite; }
//         .h-mq:last-of-type  .h-mq-track { animation:marquee 28s linear infinite reverse; }
//         .h-mq-item { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:700; letter-spacing:.28em; text-transform:uppercase; color:#1a2309; padding:0 24px; }
//         .h-mq-sep { color:#111808; margin:0 4px; }

//         @media(max-width:1024px) { .hero-body { grid-template-columns:1fr; padding-top:100px; gap:38px; } .h-img-col { max-width:300px; margin:0 auto; width:100%; } }
//         @media(max-width:640px)  { .hero-body { padding:86px 16px 44px; } .h-name { font-size:clamp(46px,16vw,70px); } .h-cta-row { flex-direction:column; } .h-cta-row .btn { justify-content:center; } }
//       `}</style>

//       <section id="home" className="hero">
//         <div className="hero-body">
//           {/* LEFT */}
//           <div>
//             <div className="h-badge">Full Stack Developer — Kozhikode, IN</div>
//             <h1 className="h-name">
//               <span className="h-n1">Risvan</span>
//               <span className="h-n2">Muhammed</span>
//             </h1>
//             <div className="h-role">
//               <div className="h-role-line"/>
//               <div className="h-role-text">.NET Core &amp; React Specialist</div>
//             </div>
//             <p className="h-desc">
//               Building robust, scalable web applications with .NET backend and modern
//               frontend technologies. Performance-focused, clean architecture, exceptional
//               user experiences.
//             </p>
//             <div className="h-cta-row">
//               <a href="#projects" className="btn btn-solid h-cta">View Projects</a>
//               <a href="/assets/Risvan-Muhammed-Resume.pdf" download className="btn btn-ghost h-cta">
//                 <Download size={11}/> Download CV
//               </a>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="h-img-col">
//             <div className="h-img-inner">
//               <div className="h-img-shade"/>
//               <Image src={img} alt="Risvan Muhammed" width={380} height={500}
//                 style={{width:"100%",height:"auto",display:"block"}} priority/>
//               <div className="h-img-cap">Risvan Muhammed</div>
//               <label htmlFor="pu" className="h-upload" title="Change photo">
//                 <Camera size={12} color="#000"/>
//               </label>
//               <input id="pu" type="file" accept="image/*" onChange={handleUpload} style={{display:"none"}}/>
//             </div>
//             <div className="h-soc-row">
//               {[
//                 { href:"https://github.com/rizwanmuhammedd",                    I:Github,   l:"GitHub" },
//                 { href:"https://www.linkedin.com/in/risvan-muhammed-096361375", I:Linkedin, l:"LinkedIn" },
//                 { href:"https://leetcode.com/u/risvanmuhammed/",                I:Code2,    l:"LeetCode" },
//               ].map(({href,I,l}) => (
//                 <a key={l} href={href} target="_blank" rel="noopener noreferrer" className="h-soc" title={l}>
//                   <I size={13} strokeWidth={1.5}/>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* MARQUEE ROW 1 */}
//         <div className="h-mq">
//           <div className="h-mq-track">
//             {[0,1].map(s => ROW1.map((t,i) => (
//               <span key={`${s}-${i}`} className="h-mq-item">{t}<span className="h-mq-sep">✦</span></span>
//             )))}
//           </div>
//         </div>

//         {/* MARQUEE ROW 2 (reversed) */}
//         <div className="h-mq">
//           <div className="h-mq-track">
//             {[0,1].map(s => ROW2.map((t,i) => (
//               <span key={`${s}-${i}`} className="h-mq-item">{t}<span className="h-mq-sep">✦</span></span>
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
import { Github, Linkedin, Code2, Download } from "lucide-react";
import Image from "next/image";

const ROW1 = ["Full Stack Developer","C# .NET Core","React.js","SQL Server","Azure","TypeScript","Web API","Next.js"];
const ROW2 = ["Entity Framework","GSAP","Redux","Tailwind CSS","Docker","CI/CD","Visual Studio","Postman"];

export default function Hero() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline();

    // Count 0→100
    let c = { n: 0 };
    tl.to(c, {
      n: 100, duration: 1.55, ease: "power2.inOut",
      onUpdate() {
        const el = document.querySelector<HTMLElement>(".ic-num");
        if (el) el.textContent = Math.round(c.n) + "%";
      }
    }, 0);

    tl.fromTo(".ic-logo", { opacity:0, y:16 }, { opacity:1, y:0, duration:.45, ease:"power3.out" }, 0.1);

    // Curtains fly UP off-screen
    tl.to(".ic-left",  { yPercent:-100, duration:.9, ease:"power4.inOut" }, 1.85);
    tl.to(".ic-right", { yPercent:-100, duration:.9, ease:"power4.inOut", delay:.07 }, 1.85);
    tl.to(".ic-center", { opacity:0, duration:.25 }, 2.05);

    // Fully remove overlay
    tl.call(() => {
      document.body.style.overflow = "";
      const ov = document.getElementById("intro-ov");
      const cn = document.getElementById("intro-cn");
      if (ov) ov.style.display = "none";
      if (cn) cn.style.display = "none";
    }, [], 2.8);

    // Content enters
    tl
      .fromTo(".h-badge",   {opacity:0,y:16},          {opacity:1,y:0,duration:.5,ease:"power3.out"}, 2.85)
      .fromTo(".h-n1",      {yPercent:110,skewY:5},     {yPercent:0,skewY:0,duration:.95,ease:"power4.out"}, 3.0)
      .fromTo(".h-n2",      {yPercent:110,skewY:5},     {yPercent:0,skewY:0,duration:.95,ease:"power4.out"}, 3.14)
      .fromTo(".h-role",    {opacity:0,x:-18},          {opacity:1,x:0,duration:.6}, 3.4)
      .fromTo(".h-desc",    {opacity:0,y:18},           {opacity:1,y:0,duration:.55}, 3.54)
      .fromTo(".h-cta",     {opacity:0,y:14},           {opacity:1,y:0,duration:.42,stagger:.1}, 3.68)
      .fromTo(".h-img-col", {opacity:0,x:55,scale:.95}, {opacity:1,x:0,scale:1,duration:1.05,ease:"power3.out"}, 3.0)
      .fromTo(".h-soc",     {opacity:0,y:10},           {opacity:1,y:0,duration:.38,stagger:.09}, 4.05);

    gsap.to(".h-n1", {textShadow:"0 0 55px #c8f13565",duration:2.8,repeat:-1,yoyo:true,ease:"sine.inOut",delay:4.5});
    gsap.to(".h-img-col", {y:-11,duration:3.9,repeat:-1,yoyo:true,ease:"sine.inOut",delay:4.0});

    const frame = document.querySelector<HTMLElement>(".h-img-inner");
    if (!frame) return;
    const mv = (e:MouseEvent) => {
      const r = frame.getBoundingClientRect();
      gsap.to(frame, {rotateY:((e.clientX-r.left-r.width/2)/r.width)*6,rotateX:-(( e.clientY-r.top-r.height/2)/r.height)*6,duration:.4,ease:"power2.out",transformPerspective:1000});
    };
    const lv = () => gsap.to(frame,{rotateY:0,rotateX:0,duration:.9,ease:"power3.out"});
    frame.addEventListener("mousemove",mv);
    frame.addEventListener("mouseleave",lv);
    return ()=>{frame.removeEventListener("mousemove",mv);frame.removeEventListener("mouseleave",lv);};
  }, []);

  return (
    <>
      <style>{`
        /* ── INTRO ── */
        #intro-ov {
          position:fixed; inset:0; z-index:9999;
          display:flex; pointer-events:all;
        }
        .ic-left  { flex:1; background:#000; will-change:transform; }
        .ic-right { flex:1; background:#060d00; will-change:transform; }
        #intro-cn {
          position:fixed; inset:0; z-index:10000;
          display:flex; flex-direction:column;
          align-items:center; justify-content:center;
          pointer-events:none; gap:14px;
        }
        .ic-logo {
          font-family:'Barlow Condensed',sans-serif;
          font-size:clamp(54px,10vw,110px);
          font-weight:900; letter-spacing:.06em;
          color:#c8f135; text-transform:uppercase;
          opacity:0; animation:glow-pulse 1.6s ease-in-out infinite;
        }
        .ic-counter {
          font-family:'Barlow Condensed',sans-serif;
          font-size:11px; font-weight:700;
          letter-spacing:.4em; text-transform:uppercase;
          color:rgba(200,241,53,.45);
        }
        .ic-bar { width:150px; height:1px; background:rgba(200,241,53,.12); }
        .ic-bar-fill {
          height:100%; background:#c8f135;
          animation:icbar 1.55s ease-in-out forwards .05s;
          width:0;
        }
        @keyframes icbar { to { width:100%; } }

        /* ── HERO ── */
        .hero-sec {
          min-height:100vh; background:var(--bg,#000);
          position:relative; z-index:1;
          display:flex; flex-direction:column;
          overflow:hidden; transition:background .4s;
        }
        .hero-body {
          flex:1; max-width:1280px; margin:0 auto; width:100%;
          padding:110px 24px 56px;
          display:grid; grid-template-columns:1fr 360px;
          gap:52px; align-items:center;
        }

        .h-badge {
          font-family:'Barlow Condensed',sans-serif;
          font-size:9px; font-weight:700; letter-spacing:.38em;
          text-transform:uppercase; color:rgba(200,241,53,.55);
          display:flex; align-items:center; gap:11px;
          margin-bottom:18px; opacity:0;
        }
        .h-badge::before { content:''; width:7px; height:7px; background:#c8f135; border-radius:50%; animation:blink 1.4s step-end infinite; flex-shrink:0; }
        .h-badge::after  { content:''; flex:0 0 26px; height:1px; background:rgba(200,241,53,.2); }

        .h-name {
          font-family:'Barlow Condensed',sans-serif;
          font-size:clamp(58px,11vw,142px);
          font-weight:900; text-transform:uppercase;
          letter-spacing:-.025em; line-height:.85;
          margin-bottom:22px; overflow:hidden;
        }
        /* h-n1 and h-n2 start with overflow:hidden parent – no opacity needed, yPercent hides them */
        .h-n1 { display:block; color:#c8f135; }
        .h-n2 { display:block; color:transparent; -webkit-text-stroke:1.5px rgba(255,255,255,.22); }
        html.light .h-n2 { -webkit-text-stroke:1.5px rgba(0,0,0,.14); }

        .h-role {
          display:flex; align-items:center; gap:13px;
          margin-bottom:26px; opacity:0;
        }
        .h-role-line { flex:0 0 22px; height:1px; background:rgba(200,241,53,.3); }
        .h-role-text {
          font-family:'Barlow Condensed',sans-serif;
          font-size:12px; font-weight:700;
          letter-spacing:.26em; text-transform:uppercase;
          color:rgba(255,255,255,.6);
        }
        html.light .h-role-text { color:rgba(0,0,0,.55); }

        .h-desc {
          font-size:15px; font-weight:300;
          line-height:1.9; color:rgba(255,255,255,.7);
          max-width:430px; margin-bottom:36px; opacity:0;
        }
        html.light .h-desc { color:rgba(0,0,0,.65); }

        .h-cta-row { display:flex; gap:10px; flex-wrap:wrap; }
        .h-cta { opacity:0; }

        .h-img-col { width:100%; opacity:0; }
        .h-img-inner { overflow:hidden; position:relative; transform-style:preserve-3d; }
        .h-img-inner::before {
          content:'01 — RM'; position:absolute; top:12px; left:14px; z-index:3;
          font-family:'Barlow Condensed',sans-serif;
          font-size:9px; font-weight:700; letter-spacing:.22em;
          color:rgba(200,241,53,.28);
        }
        .h-img-shade {
          position:absolute; inset:0; z-index:2;
          background:linear-gradient(to bottom,transparent 42%,rgba(0,0,0,.95) 100%);
          pointer-events:none;
        }
        html.light .h-img-shade {
          background:linear-gradient(to bottom,transparent 38%,rgba(242,242,242,.97) 100%);
        }
        .h-img-cap {
          position:absolute; bottom:14px; left:14px; z-index:4;
          font-family:'Barlow Condensed',sans-serif;
          font-size:9px; font-weight:700; letter-spacing:.22em;
          text-transform:uppercase; color:rgba(200,241,53,.6);
        }

        .h-soc-row { display:flex; gap:6px; margin-top:12px; }
        .h-soc {
          width:34px; height:34px; border:1px solid rgba(200,241,53,.15);
          background:transparent; display:flex; align-items:center;
          justify-content:center; color:rgba(200,241,53,.35);
          text-decoration:none; transition:all .22s; opacity:0;
        }
        .h-soc:hover { border-color:rgba(200,241,53,.5); color:#c8f135; background:rgba(200,241,53,.06); transform:translateY(-3px); }

        /* Marquee */
        .h-mq {
          border-top:1px solid rgba(200,241,53,.1);
          overflow:hidden; height:38px; display:flex; align-items:center;
          position:relative; z-index:1; background:var(--bg,#000);
          transition:background .4s;
        }
        .h-mq + .h-mq { background:rgba(200,241,53,.02); }
        .h-mq-track { display:flex; white-space:nowrap; will-change:transform; }
        .h-mq:first-of-type .h-mq-track { animation:marquee 22s linear infinite; }
        .h-mq:last-of-type  .h-mq-track { animation:marquee 28s linear infinite reverse; }
        .h-mq-item {
          font-family:'Barlow Condensed',sans-serif;
          font-size:9px; font-weight:700; letter-spacing:.28em;
          text-transform:uppercase; color:rgba(200,241,53,.3); padding:0 24px;
        }
        html.light .h-mq-item { color:rgba(0,0,0,.28); }

        @media(max-width:1024px){
          .hero-body{grid-template-columns:1fr;padding-top:100px;gap:38px;}
          .h-img-col{max-width:300px;margin:0 auto;width:100%;}
        }
        @media(max-width:640px){
          .hero-body{padding:86px 16px 44px;}
          .h-name{font-size:clamp(48px,17vw,72px);}
          .h-cta-row{flex-direction:column;}
        }
      `}</style>

      {/* INTRO */}
      <div id="intro-ov">
        <div className="ic-left" />
        <div className="ic-right" />
      </div>
      <div id="intro-cn" className="ic-center">
        <div className="ic-logo">RM</div>
        <div className="ic-counter">Loading&nbsp;<span className="ic-num">0%</span></div>
        <div className="ic-bar"><div className="ic-bar-fill" /></div>
      </div>

      {/* HERO */}
      <section id="home" className="hero-sec">
        <div className="hero-body">
          <div>
            <div className="h-badge">Full Stack Developer — Kozhikode, IN</div>
            <h1 className="h-name">
              <span className="h-n1">Risvan</span>
              <span className="h-n2">Muhammed</span>
            </h1>
            <div className="h-role">
              <div className="h-role-line" />
              <div className="h-role-text">.NET Core &amp; React Specialist</div>
            </div>
            <p className="h-desc">
              Building robust, scalable web applications with .NET backend and modern
              frontend technologies. Performance-focused, clean architecture,
              exceptional user experiences.
            </p>
            <div className="h-cta-row">
              <a href="#projects" className="btn btn-solid h-cta">View Projects</a>
              <a href="/assets/Risvan-Muhammed-Resume.pdf" download className="btn btn-ghost h-cta">
                <Download size={11}/> Download CV
              </a>
            </div>
          </div>

          <div className="h-img-col">
            <div className="h-img-inner">
              <div className="h-img-shade" />
              <Image src="/risw.jpg" alt="Risvan Muhammed" width={380} height={500}
                style={{width:"100%",height:"auto",display:"block"}} priority />
              <div className="h-img-cap">Risvan Muhammed</div>
            </div>
            <div className="h-soc-row">
              {[
                {href:"https://github.com/rizwanmuhammedd",                    I:Github,   l:"GitHub"},
                {href:"https://www.linkedin.com/in/risvan-muhammed-096361375", I:Linkedin, l:"LinkedIn"},
                {href:"https://leetcode.com/u/risvanmuhammed/",                I:Code2,    l:"LeetCode"},
              ].map(({href,I,l}) => (
                <a key={l} href={href} target="_blank" rel="noopener noreferrer" className="h-soc" title={l}>
                  <I size={13} strokeWidth={1.5}/>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-mq">
          <div className="h-mq-track">
            {[0,1].map(s=>ROW1.map((t,i)=>(
              <span key={`${s}-${i}`} className="h-mq-item">{t}<span style={{margin:"0 8px",opacity:.3}}>✦</span></span>
            )))}
          </div>
        </div>
        <div className="h-mq">
          <div className="h-mq-track">
            {[0,1].map(s=>ROW2.map((t,i)=>(
              <span key={`${s}-${i}`} className="h-mq-item">{t}<span style={{margin:"0 8px",opacity:.3}}>✦</span></span>
            )))}
          </div>
        </div>
      </section>
    </>
  );
}