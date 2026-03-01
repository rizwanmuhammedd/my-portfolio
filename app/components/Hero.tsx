
// "use client";

// import { useEffect, useState } from "react";
// import { gsap } from "@/public/lib/gsap";
// import { Github, Linkedin, Code2, Download, Camera } from "lucide-react";
// import Image from "next/image";

// const TICKER = [
//   "Full Stack Developer", "C# — .NET Core", "React.js", "SQL Server",
//   "Azure", "TypeScript", "Web API", "Next.js", "Entity Framework", "GSAP",
// ];

// export default function Hero() {
//   const [profileImage, setProfileImage] = useState("/risw.jpg");

//   useEffect(() => {
//     // ── Staggered entry timeline ──
//     const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
//     tl.fromTo(".h-eye",    { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: .6 }, .25)
//       .fromTo(".h-n1",     { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: .9 }, .38)
//       .fromTo(".h-n2",     { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: .9 }, .52)
//       .fromTo(".h-rule",   { scaleX: 0, transformOrigin: "left" }, { scaleX: 1, duration: .55 }, .88)
//       .fromTo(".h-role",   { opacity: 0, x: 14 }, { opacity: 1, x: 0, duration: .5 }, .95)
//       .fromTo(".h-desc",   { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .55 }, 1.05)
//       .fromTo(".h-cta",    { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: .45, stagger: .1 }, 1.22)
//       .fromTo(".h-img",    { opacity: 0, x: 48 }, { opacity: 1, x: 0, duration: .9 }, .42)
//       .fromTo(".h-soc",    { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: .4, stagger: .09 }, 1.5);

//     // ── Ticker ──
//     gsap.to(".h-ticker-track", { x: "-50%", duration: 22, repeat: -1, ease: "linear" });

//     // ── Subtle 3-D tilt on image ──
//     const frame = document.querySelector<HTMLElement>(".h-img-inner");
//     if (!frame) return;
//     const onMove = (e: MouseEvent) => {
//       const r = frame.getBoundingClientRect();
//       const dx = (e.clientX - r.left - r.width / 2) / r.width;
//       const dy = (e.clientY - r.top  - r.height / 2) / r.height;
//       gsap.to(frame, { rotateY: dx * 5, rotateX: -dy * 5, duration: .5, ease: "power2.out", transformPerspective: 800 });
//     };
//     const onLeave = () => gsap.to(frame, { rotateY: 0, rotateX: 0, duration: .8, ease: "power3.out" });
//     frame.addEventListener("mousemove", onMove);
//     frame.addEventListener("mouseleave", onLeave);
//     return () => {
//       frame.removeEventListener("mousemove", onMove);
//       frame.removeEventListener("mouseleave", onLeave);
//     };
//   }, []);

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = ev => setProfileImage(ev.target?.result as string);
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <>
//       <style>{`
//         .hero-sec {
//           min-height: 100vh; background: #000; position: relative; z-index: 1;
//           display: flex; flex-direction: column; overflow: hidden;
//         }
//         .hero-main {
//           flex: 1; max-width: 1280px; margin: 0 auto; width: 100%;
//           padding: 116px 24px 72px;
//           display: grid; grid-template-columns: 1fr 390px; gap: 64px; align-items: center;
//         }

//         /* ── Left ── */
//         .h-eye {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 9px; font-weight: 700; letter-spacing: .38em; text-transform: uppercase;
//           color: #383838; display: flex; align-items: center; gap: 12px; margin-bottom: 20px;
//         }
//         .h-eye::after { content:''; flex: 0 0 32px; height: 1px; background: #1e1e1e; }

//         .h-name {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: clamp(60px, 9.5vw, 126px); font-weight: 900;
//           text-transform: uppercase; letter-spacing: -.02em; line-height: .87;
//           margin-bottom: 22px; overflow: hidden;
//         }
//         .h-n1 { display: block; color: #fff; }
//         .h-n2 { display: block; -webkit-text-stroke: 1px rgba(255,255,255,.17); color: transparent; }

//         .h-role-row { display: flex; align-items: center; gap: 14px; margin-bottom: 28px; }
//         .h-rule { flex: 0 0 28px; height: 1px; background: #2e2e2e; }
//         .h-role {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 11px; font-weight: 700; letter-spacing: .26em; text-transform: uppercase; color: #3e3e3e;
//         }

//         .h-desc {
//           font-size: 13px; font-weight: 300; line-height: 1.85; color: #4e4e4e;
//           max-width: 430px; margin-bottom: 38px;
//         }
//         .h-cta-row { display: flex; gap: 9px; flex-wrap: wrap; }

//         /* ── Right ── */
//         .h-img { width: 100%; }
//         .h-img-inner {
//           overflow: hidden; position: relative;
//           transform-style: preserve-3d;
//         }
//         .h-img-inner::before {
//           content: '01 — RM'; position: absolute; top: 13px; left: 15px; z-index: 3;
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 9px; font-weight: 700; letter-spacing: .22em; color: #2a2a2a;
//         }
//         .h-img-shade {
//           position: absolute; inset: 0; z-index: 2;
//           background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,.88) 100%);
//           pointer-events: none;
//         }
//         .h-img-caption {
//           position: absolute; bottom: 15px; left: 15px; z-index: 4;
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 9px; font-weight: 700; letter-spacing: .22em;
//           text-transform: uppercase; color: #444;
//         }
//         .h-upload {
//           position: absolute; bottom: 13px; right: 13px; z-index: 4;
//           width: 32px; height: 32px; background: #fff;
//           display: flex; align-items: center; justify-content: center;
//           cursor: pointer; transition: background .15s;
//         }
//         .h-upload:hover { background: #d0d0d0; }

//         /* Stats strip below image - removed */

//         /* Socials */
//         .h-soc-row { display: flex; gap: 6px; margin-top: 14px; }
//         .h-soc {
//           width: 34px; height: 34px; border: 1px solid #1a1a1a; background: #000;
//           display: flex; align-items: center; justify-content: center;
//           color: #3e3e3e; text-decoration: none; transition: all .15s;
//         }
//         .h-soc:hover { border-color: #444; color: #fff; }

//         /* Ticker */
//         .h-ticker {
//           border-top: 1px solid #1a1a1a; height: 38px;
//           display: flex; align-items: center; overflow: hidden; position: relative; z-index: 1;
//         }
//         .h-ticker-track {
//           display: flex; white-space: nowrap; will-change: transform;
//         }
//         .h-tick {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 9px; font-weight: 700; letter-spacing: .32em; text-transform: uppercase;
//           color: #272727; padding: 0 30px;
//         }
//         .h-tick-sep { color: #1e1e1e; }

//         @media(max-width:1024px) {
//           .hero-main { grid-template-columns: 1fr; padding-top: 100px; gap: 44px; }
//           .h-img { max-width: 340px; margin: 0 auto; width: 100%; }
//         }
//         @media(max-width:640px) {
//           .hero-main { padding: 88px 16px 52px; gap: 32px; }
//           .h-name { font-size: clamp(50px, 15vw, 72px); }
//           .h-cta-row { flex-direction: column; }
//           .h-cta-row .ilu-btn { justify-content: center; }
//         }
//       `}</style>

//       <section id="home" className="hero-sec">
//         <div className="hero-main">
//           {/* ── Left ── */}
//           <div>
//             <div className="h-eye">Full Stack Developer — Kozhikode, IN</div>

//             <h1 className="h-name">
//               <span className="h-n1">Risvan</span>
//               <span className="h-n2">Muhammed</span>
//             </h1>

//             <div className="h-role-row">
//               <div className="h-rule" />
//               <div className="h-role">.NET Core &amp; React Specialist</div>
//             </div>

//             <p className="h-desc">
//               Building robust, scalable web applications with .NET backend and modern
//               frontend technologies. Performance-focused, clean architecture, exceptional
//               user experiences.
//             </p>

//             <div className="h-cta-row">
//               <a href="#projects" className="ilu-btn ilu-btn-white h-cta">View Projects</a>
//               <a href="/assets/Risvan-Muhammed-Resume.pdf" download className="ilu-btn ilu-btn-outline h-cta">
//                 <Download size={11} /> Download CV
//               </a>
//             </div>
//           </div>

//           {/* ── Right ── */}
//           <div className="h-img">
//             <div className="h-img-inner">
//               <div className="h-img-shade" />
//               <Image
//                 src={profileImage} alt="Risvan Muhammed"
//                 width={390} height={520}
//                 style={{ width:"100%", height:"auto", display:"block" }} priority
//               />
//               <div className="h-img-caption">Risvan Muhammed</div>
//               <label htmlFor="profile-upload" className="h-upload" title="Change photo">
//                 <Camera size={13} color="#000" />
//               </label>
//               <input id="profile-upload" type="file" accept="image/*"
//                 onChange={handleImageUpload} style={{ display:"none" }} />
//             </div>

//             <div className="h-soc-row">
//               {[
//                 { href:"https://github.com/rizwanmuhammedd",                   Icon: Github,   label:"GitHub" },
//                 { href:"https://www.linkedin.com/in/risvan-muhammed-096361375", Icon: Linkedin,  label:"LinkedIn" },
//                 { href:"https://leetcode.com/u/risvanmuhammed/",                Icon: Code2,    label:"LeetCode" },
//               ].map(({ href, Icon, label }) => (
//                 <a key={label} href={href} target="_blank" rel="noopener noreferrer"
//                   className="h-soc" title={label}>
//                   <Icon size={13} strokeWidth={1.5} />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ── Ticker ── */}
//         <div className="h-ticker">
//           <div className="h-ticker-track">
//             {[0, 1].map(s =>
//               TICKER.map((t, i) => (
//                 <span key={`${s}-${i}`} className="h-tick">
//                   {t} <span className="h-tick-sep">—</span>
//                 </span>
//               ))
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }







"use client";
import { useEffect, useState } from "react";
import { gsap } from "@/public/lib/gsap";
import { Github, Linkedin, Code2, Download, Camera } from "lucide-react";
import Image from "next/image";

const ROW1 = ["Full Stack Developer","C# .NET Core","React.js","SQL Server","Azure","TypeScript","Web API","Next.js"];
const ROW2 = ["Entity Framework","GSAP","Redux","Tailwind CSS","Docker","CI/CD","Visual Studio","Postman"];

export default function Hero() {
  const [img, setImg] = useState("/risw.jpg");

  useEffect(() => {
    /* ── Entry timeline (asharaf-style clip+skew) ── */
    const tl = gsap.timeline({ defaults:{ ease:"power4.out" } });
    tl.set([".h-n1",".h-n2",".h-badge",".h-role",".h-desc",".h-cta",".h-soc",".h-img-col"], { visibility:"visible" })
      .fromTo(".h-badge",    { opacity:0, y:18 },                   { opacity:1, y:0, duration:.55 }, .15)
      .fromTo(".h-n1",       { y:"110%", skewY:5, opacity:0 },      { y:"0%",   skewY:0, opacity:1, duration:1.1 }, .3)
      .fromTo(".h-n2",       { y:"110%", skewY:5, opacity:0 },      { y:"0%",   skewY:0, opacity:1, duration:1.1 }, .46)
      .fromTo(".h-role",     { opacity:0, x:-24 },                  { opacity:1, x:0, duration:.65 }, .82)
      .fromTo(".h-desc",     { opacity:0, y:22 },                   { opacity:1, y:0, duration:.6 }, .96)
      .fromTo(".h-cta",      { opacity:0, y:18 },                   { opacity:1, y:0, duration:.5, stagger:.1 }, 1.1)
      .fromTo(".h-img-col",  { opacity:0, x:70, scale:.94 },        { opacity:1, x:0, scale:1, duration:1.2 }, .28)
      .fromTo(".h-soc",      { opacity:0, y:14 },                   { opacity:1, y:0, duration:.4, stagger:.09 }, 1.4);

    /* ── Name glow breathe ── */
    gsap.to(".h-n1", { textShadow:"0 0 60px #c8f13565", duration:2.8, repeat:-1, yoyo:true, ease:"sine.inOut", delay:1.6 });

    /* ── Image float ── */
    gsap.to(".h-img-col", { y:-14, duration:3.8, repeat:-1, yoyo:true, ease:"sine.inOut", delay:.8 });

    /* ── 3D tilt on image ── */
    const frame = document.querySelector<HTMLElement>(".h-img-inner");
    if (!frame) return;
    const onMove = (e: MouseEvent) => {
      const r = frame.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width/2)  / r.width;
      const dy = (e.clientY - r.top  - r.height/2) / r.height;
      gsap.to(frame, { rotateY:dx*7, rotateX:-dy*7, duration:.45, ease:"power2.out", transformPerspective:1000 });
    };
    const onLeave = () => gsap.to(frame, { rotateY:0, rotateX:0, duration:.9, ease:"power3.out" });
    frame.addEventListener("mousemove", onMove);
    frame.addEventListener("mouseleave", onLeave);
    return () => { frame.removeEventListener("mousemove", onMove); frame.removeEventListener("mouseleave", onLeave); };
  }, []);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) { const r = new FileReader(); r.onload = ev => setImg(ev.target?.result as string); r.readAsDataURL(f); }
  };

  return (
    <>
      <style>{`
        /* ─ section ─ */
        .hero { min-height:100vh; background:#000; position:relative; z-index:1; display:flex; flex-direction:column; overflow:hidden; }
        .hero-body { flex:1; max-width:1280px; margin:0 auto; width:100%; padding:108px 24px 56px; display:grid; grid-template-columns:1fr 380px; gap:52px; align-items:center; }

        /* ─ left ─ */
        .h-badge { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:700; letter-spacing:.38em; text-transform:uppercase; color:#c8f13548; display:flex; align-items:center; gap:11px; margin-bottom:18px; visibility:hidden; }
        .h-badge::before { content:''; width:6px; height:6px; background:#c8f135; border-radius:50%; animation:blink 1.4s step-end infinite; flex-shrink:0; }
        .h-badge::after  { content:''; flex:0 0 26px; height:1px; background:#161c09; }

        .h-name { font-family:'Barlow Condensed',sans-serif; font-size:clamp(56px,10.5vw,138px); font-weight:900; text-transform:uppercase; letter-spacing:-.025em; line-height:.84; margin-bottom:20px; overflow:hidden; }
        .h-n1 { display:block; color:#c8f135; visibility:hidden; }
        .h-n2 { display:block; -webkit-text-stroke:1.5px rgba(200,241,53,.22); color:transparent; visibility:hidden; }

        .h-role { font-family:'Barlow Condensed',sans-serif; display:flex; align-items:center; gap:13px; margin-bottom:24px; visibility:hidden; }
        .h-role-line { flex:0 0 22px; height:1px; background:#c8f13530; }
        .h-role-text { font-size:11px; font-weight:700; letter-spacing:.26em; text-transform:uppercase; color:#c8f13560; }

        .h-desc { font-size:13px; font-weight:300; line-height:1.88; color:#3a5015; max-width:420px; margin-bottom:34px; visibility:hidden; }

        .h-cta-row { display:flex; gap:9px; flex-wrap:wrap; }
        .h-cta { visibility:hidden; }

        /* ─ right ─ */
        .h-img-col { width:100%; visibility:hidden; }
        .h-img-inner { overflow:hidden; position:relative; transform-style:preserve-3d; }
        .h-img-inner::before { content:'01 — RM'; position:absolute; top:12px; left:14px; z-index:3; font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:700; letter-spacing:.22em; color:#c8f13528; }
        .h-img-shade { position:absolute; inset:0; z-index:2; background:linear-gradient(to bottom, transparent 48%, rgba(0,0,0,.92) 100%); pointer-events:none; }
        .h-img-cap { position:absolute; bottom:14px; left:14px; z-index:4; font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:#c8f13560; }
        .h-upload { position:absolute; bottom:12px; right:12px; z-index:4; width:30px; height:30px; background:#c8f135; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:background .15s; }
        .h-upload:hover { background:#b3d820; }

        .h-soc-row { display:flex; gap:6px; margin-top:12px; }
        .h-soc { width:34px; height:34px; border:1px solid #161c09; background:#000; display:flex; align-items:center; justify-content:center; color:#c8f13530; text-decoration:none; transition:all .2s; visibility:hidden; }
        .h-soc:hover { border-color:#c8f13548; color:#c8f135; background:#c8f13508; transform:translateY(-3px); }

        /* ─ dual marquee ─ */
        .h-mq { border-top:1px solid #161c09; overflow:hidden; height:38px; display:flex; align-items:center; position:relative; z-index:1; }
        .h-mq + .h-mq { border-top:none; background:#c8f13504; }
        .h-mq-track { display:flex; white-space:nowrap; will-change:transform; }
        .h-mq:first-of-type .h-mq-track { animation:marquee 22s linear infinite; }
        .h-mq:last-of-type  .h-mq-track { animation:marquee 28s linear infinite reverse; }
        .h-mq-item { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:700; letter-spacing:.28em; text-transform:uppercase; color:#1a2309; padding:0 24px; }
        .h-mq-sep { color:#111808; margin:0 4px; }

        @media(max-width:1024px) { .hero-body { grid-template-columns:1fr; padding-top:100px; gap:38px; } .h-img-col { max-width:300px; margin:0 auto; width:100%; } }
        @media(max-width:640px)  { .hero-body { padding:86px 16px 44px; } .h-name { font-size:clamp(46px,16vw,70px); } .h-cta-row { flex-direction:column; } .h-cta-row .btn { justify-content:center; } }
      `}</style>

      <section id="home" className="hero">
        <div className="hero-body">
          {/* LEFT */}
          <div>
            <div className="h-badge">Full Stack Developer — Kozhikode, IN</div>
            <h1 className="h-name">
              <span className="h-n1">Risvan</span>
              <span className="h-n2">Muhammed</span>
            </h1>
            <div className="h-role">
              <div className="h-role-line"/>
              <div className="h-role-text">.NET Core &amp; React Specialist</div>
            </div>
            <p className="h-desc">
              Building robust, scalable web applications with .NET backend and modern
              frontend technologies. Performance-focused, clean architecture, exceptional
              user experiences.
            </p>
            <div className="h-cta-row">
              <a href="#projects" className="btn btn-solid h-cta">View Projects</a>
              <a href="/assets/Risvan-Muhammed-Resume.pdf" download className="btn btn-ghost h-cta">
                <Download size={11}/> Download CV
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="h-img-col">
            <div className="h-img-inner">
              <div className="h-img-shade"/>
              <Image src={img} alt="Risvan Muhammed" width={380} height={500}
                style={{width:"100%",height:"auto",display:"block"}} priority/>
              <div className="h-img-cap">Risvan Muhammed</div>
              <label htmlFor="pu" className="h-upload" title="Change photo">
                <Camera size={12} color="#000"/>
              </label>
              <input id="pu" type="file" accept="image/*" onChange={handleUpload} style={{display:"none"}}/>
            </div>
            <div className="h-soc-row">
              {[
                { href:"https://github.com/rizwanmuhammedd",                    I:Github,   l:"GitHub" },
                { href:"https://www.linkedin.com/in/risvan-muhammed-096361375", I:Linkedin, l:"LinkedIn" },
                { href:"https://leetcode.com/u/risvanmuhammed/",                I:Code2,    l:"LeetCode" },
              ].map(({href,I,l}) => (
                <a key={l} href={href} target="_blank" rel="noopener noreferrer" className="h-soc" title={l}>
                  <I size={13} strokeWidth={1.5}/>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* MARQUEE ROW 1 */}
        <div className="h-mq">
          <div className="h-mq-track">
            {[0,1].map(s => ROW1.map((t,i) => (
              <span key={`${s}-${i}`} className="h-mq-item">{t}<span className="h-mq-sep">✦</span></span>
            )))}
          </div>
        </div>

        {/* MARQUEE ROW 2 (reversed) */}
        <div className="h-mq">
          <div className="h-mq-track">
            {[0,1].map(s => ROW2.map((t,i) => (
              <span key={`${s}-${i}`} className="h-mq-item">{t}<span className="h-mq-sep">✦</span></span>
            )))}
          </div>
        </div>
      </section>
    </>
  );
}