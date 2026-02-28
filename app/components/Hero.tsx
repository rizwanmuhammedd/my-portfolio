





// "use client";

// import { useEffect, useState } from "react";
// import { gsap } from "gsap/gsap-core";
// import { Github, Linkedin, Code2, Download, Camera } from "lucide-react";
// import Image from "next/image";

// export default function Hero() {
//   const [profileImage, setProfileImage] = useState("/risw.jpg");

//   useEffect(() => {
//     // Hero text animations
//     gsap.fromTo(
//       ".hero-name",
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
//     );

//     gsap.fromTo(
//       ".hero-title",
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power3.out" }
//     );

//     gsap.fromTo(
//       ".hero-description",
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 1, delay: 1.1, ease: "power3.out" }
//     );

//     gsap.fromTo(
//       ".hero-buttons",
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 1, delay: 1.4, ease: "power3.out" }
//     );

//     // Profile image animation
//     gsap.fromTo(
//       ".profile-wrapper",
//       { opacity: 0, scale: 0.8, rotate: -10 },
//       { opacity: 1, scale: 1, rotate: 0, duration: 1.2, delay: 0.7, ease: "back.out(1.4)" }
//     );

//     gsap.fromTo(
//       ".social-icon",
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 1.7, ease: "power3.out" }
//     );
//   }, []);

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setProfileImage(event.target?.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <section id="home" className="relative z-10 min-h-screen flex items-center py-20 px-4">
//       <div className="container mx-auto max-w-6xl">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//           {/* Text Content */}
//           <div className="space-y-6 text-center lg:text-left">
//             <h1 className="hero-name text-5xl md:text-6xl lg:text-7xl font-bold">
//               Risvan <span className="text-gradient">Muhammed</span>
//             </h1>
            
//             <h2 className="hero-title text-3xl md:text-4xl lg:text-5xl text-primary">
//               Full Stack .NET Developer
//             </h2>
            
//             <p className="hero-description text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
//               Passionate developer specializing in .NET backend development and modern frontend 
//               technologies. Creating robust, scalable web applications with exceptional user experiences.
//             </p>
            
//             <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <a
//                 href="#projects"
//                 className="px-8 py-4 bg-primary text-black font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transform hover:-translate-y-1"
//               >
//                 View Projects
//               </a>
//               <a
//                 href="/assets/Risvan-Muhammed-Resume.pdf"
//                 download
//                 className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group"
//               >
//                 <Download size={20} className="group-hover:animate-bounce" />
//                 Download CV
//               </a>
//             </div>
//           </div>

//           {/* Profile Image */}
//           <div className="flex flex-col items-center gap-8">
//             <div className="profile-wrapper relative">
//               <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_50px_rgba(0,255,136,0.3)] group">
//                <Image
//                   src={profileImage}
//                   alt="Risvan Muhammed"
//                   fill
//                   sizes="(max-width: 768px) 80vw, 400px"
//                   className="object-cover"
//                   priority
//                 />

//                 <label
//                   htmlFor="profile-upload"
//                   className="absolute bottom-4 right-4 w-14 h-14 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-dark transition-all duration-300 hover:scale-110 shadow-lg"
//                 >
//                   <Camera size={24} className="text-black" />
//                 </label>
//                 <input
//                   id="profile-upload"
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="hidden"
//                 />
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="flex gap-4">
//               <a
//                 href="https://github.com/rizwanmuhammedd"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="social-icon w-14 h-14 rounded-full border-2 border-white hover:border-primary flex items-center justify-center text-white hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-2"
//               >
//                 <Github size={24} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/risvan-muhammed-096361375"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="social-icon w-14 h-14 rounded-full border-2 border-white hover:border-primary flex items-center justify-center text-white hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-2"
//               >
//                 <Linkedin size={24} />
//               </a>
//               <a
//                 href="https://leetcode.com/u/risvanmuhammed/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="social-icon w-14 h-14 rounded-full border-2 border-white hover:border-primary flex items-center justify-center text-white hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-2"
//               >
//                 <Code2 size={24} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import { gsap } from "@/public/lib/gsap";
import { Github, Linkedin, Code2, Download, Camera } from "lucide-react";
import Image from "next/image";

const TICKER = [
  "Full Stack Developer", "C# — .NET Core", "React.js", "SQL Server",
  "Azure", "TypeScript", "Web API", "Next.js", "Entity Framework", "GSAP",
];

export default function Hero() {
  const [profileImage, setProfileImage] = useState("/risw.jpg");

  useEffect(() => {
    // ── Staggered entry timeline ──
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(".h-eye",    { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: .6 }, .25)
      .fromTo(".h-n1",     { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: .9 }, .38)
      .fromTo(".h-n2",     { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: .9 }, .52)
      .fromTo(".h-rule",   { scaleX: 0, transformOrigin: "left" }, { scaleX: 1, duration: .55 }, .88)
      .fromTo(".h-role",   { opacity: 0, x: 14 }, { opacity: 1, x: 0, duration: .5 }, .95)
      .fromTo(".h-desc",   { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .55 }, 1.05)
      .fromTo(".h-cta",    { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: .45, stagger: .1 }, 1.22)
      .fromTo(".h-img",    { opacity: 0, x: 48 }, { opacity: 1, x: 0, duration: .9 }, .42)
      .fromTo(".h-soc",    { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: .4, stagger: .09 }, 1.5);

    // ── Ticker ──
    gsap.to(".h-ticker-track", { x: "-50%", duration: 22, repeat: -1, ease: "linear" });

    // ── Subtle 3-D tilt on image ──
    const frame = document.querySelector<HTMLElement>(".h-img-inner");
    if (!frame) return;
    const onMove = (e: MouseEvent) => {
      const r = frame.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width / 2) / r.width;
      const dy = (e.clientY - r.top  - r.height / 2) / r.height;
      gsap.to(frame, { rotateY: dx * 5, rotateX: -dy * 5, duration: .5, ease: "power2.out", transformPerspective: 800 });
    };
    const onLeave = () => gsap.to(frame, { rotateY: 0, rotateX: 0, duration: .8, ease: "power3.out" });
    frame.addEventListener("mousemove", onMove);
    frame.addEventListener("mouseleave", onLeave);
    return () => {
      frame.removeEventListener("mousemove", onMove);
      frame.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = ev => setProfileImage(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <style>{`
        .hero-sec {
          min-height: 100vh; background: #000; position: relative; z-index: 1;
          display: flex; flex-direction: column; overflow: hidden;
        }
        .hero-main {
          flex: 1; max-width: 1280px; margin: 0 auto; width: 100%;
          padding: 116px 24px 72px;
          display: grid; grid-template-columns: 1fr 390px; gap: 64px; align-items: center;
        }

        /* ── Left ── */
        .h-eye {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px; font-weight: 700; letter-spacing: .38em; text-transform: uppercase;
          color: #383838; display: flex; align-items: center; gap: 12px; margin-bottom: 20px;
        }
        .h-eye::after { content:''; flex: 0 0 32px; height: 1px; background: #1e1e1e; }

        .h-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(60px, 9.5vw, 126px); font-weight: 900;
          text-transform: uppercase; letter-spacing: -.02em; line-height: .87;
          margin-bottom: 22px; overflow: hidden;
        }
        .h-n1 { display: block; color: #fff; }
        .h-n2 { display: block; -webkit-text-stroke: 1px rgba(255,255,255,.17); color: transparent; }

        .h-role-row { display: flex; align-items: center; gap: 14px; margin-bottom: 28px; }
        .h-rule { flex: 0 0 28px; height: 1px; background: #2e2e2e; }
        .h-role {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: .26em; text-transform: uppercase; color: #3e3e3e;
        }

        .h-desc {
          font-size: 13px; font-weight: 300; line-height: 1.85; color: #4e4e4e;
          max-width: 430px; margin-bottom: 38px;
        }
        .h-cta-row { display: flex; gap: 9px; flex-wrap: wrap; }

        /* ── Right ── */
        .h-img { width: 100%; }
        .h-img-inner {
          overflow: hidden; position: relative;
          transform-style: preserve-3d;
        }
        .h-img-inner::before {
          content: '01 — RM'; position: absolute; top: 13px; left: 15px; z-index: 3;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px; font-weight: 700; letter-spacing: .22em; color: #2a2a2a;
        }
        .h-img-shade {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,.88) 100%);
          pointer-events: none;
        }
        .h-img-caption {
          position: absolute; bottom: 15px; left: 15px; z-index: 4;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px; font-weight: 700; letter-spacing: .22em;
          text-transform: uppercase; color: #444;
        }
        .h-upload {
          position: absolute; bottom: 13px; right: 13px; z-index: 4;
          width: 32px; height: 32px; background: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background .15s;
        }
        .h-upload:hover { background: #d0d0d0; }

        /* Stats strip below image - removed */

        /* Socials */
        .h-soc-row { display: flex; gap: 6px; margin-top: 14px; }
        .h-soc {
          width: 34px; height: 34px; border: 1px solid #1a1a1a; background: #000;
          display: flex; align-items: center; justify-content: center;
          color: #3e3e3e; text-decoration: none; transition: all .15s;
        }
        .h-soc:hover { border-color: #444; color: #fff; }

        /* Ticker */
        .h-ticker {
          border-top: 1px solid #1a1a1a; height: 38px;
          display: flex; align-items: center; overflow: hidden; position: relative; z-index: 1;
        }
        .h-ticker-track {
          display: flex; white-space: nowrap; will-change: transform;
        }
        .h-tick {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px; font-weight: 700; letter-spacing: .32em; text-transform: uppercase;
          color: #272727; padding: 0 30px;
        }
        .h-tick-sep { color: #1e1e1e; }

        @media(max-width:1024px) {
          .hero-main { grid-template-columns: 1fr; padding-top: 100px; gap: 44px; }
          .h-img { max-width: 340px; margin: 0 auto; width: 100%; }
        }
        @media(max-width:640px) {
          .hero-main { padding: 88px 16px 52px; gap: 32px; }
          .h-name { font-size: clamp(50px, 15vw, 72px); }
          .h-cta-row { flex-direction: column; }
          .h-cta-row .ilu-btn { justify-content: center; }
        }
      `}</style>

      <section id="home" className="hero-sec">
        <div className="hero-main">
          {/* ── Left ── */}
          <div>
            <div className="h-eye">Full Stack Developer — Kozhikode, IN</div>

            <h1 className="h-name">
              <span className="h-n1">Risvan</span>
              <span className="h-n2">Muhammed</span>
            </h1>

            <div className="h-role-row">
              <div className="h-rule" />
              <div className="h-role">.NET Core &amp; React Specialist</div>
            </div>

            <p className="h-desc">
              Building robust, scalable web applications with .NET backend and modern
              frontend technologies. Performance-focused, clean architecture, exceptional
              user experiences.
            </p>

            <div className="h-cta-row">
              <a href="#projects" className="ilu-btn ilu-btn-white h-cta">View Projects</a>
              <a href="/assets/Risvan-Muhammed-Resume.pdf" download className="ilu-btn ilu-btn-outline h-cta">
                <Download size={11} /> Download CV
              </a>
            </div>
          </div>

          {/* ── Right ── */}
          <div className="h-img">
            <div className="h-img-inner">
              <div className="h-img-shade" />
              <Image
                src={profileImage} alt="Risvan Muhammed"
                width={390} height={520}
                style={{ width:"100%", height:"auto", display:"block" }} priority
              />
              <div className="h-img-caption">Risvan Muhammed</div>
              <label htmlFor="profile-upload" className="h-upload" title="Change photo">
                <Camera size={13} color="#000" />
              </label>
              <input id="profile-upload" type="file" accept="image/*"
                onChange={handleImageUpload} style={{ display:"none" }} />
            </div>

            <div className="h-soc-row">
              {[
                { href:"https://github.com/rizwanmuhammedd",                   Icon: Github,   label:"GitHub" },
                { href:"https://www.linkedin.com/in/risvan-muhammed-096361375", Icon: Linkedin,  label:"LinkedIn" },
                { href:"https://leetcode.com/u/risvanmuhammed/",                Icon: Code2,    label:"LeetCode" },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="h-soc" title={label}>
                  <Icon size={13} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Ticker ── */}
        <div className="h-ticker">
          <div className="h-ticker-track">
            {[0, 1].map(s =>
              TICKER.map((t, i) => (
                <span key={`${s}-${i}`} className="h-tick">
                  {t} <span className="h-tick-sep">—</span>
                </span>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}