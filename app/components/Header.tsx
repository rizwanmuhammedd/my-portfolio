




// "use client";
// import { useEffect, useState } from "react";
// import { gsap } from "@/public/lib/gsap";
// import { Download, Sun, Moon, Menu, X } from "lucide-react";

// const NAV = [
//   { id:"home",     label:"Home" },
//   { id:"skills",   label:"Skills" },
//   { id:"projects", label:"Projects" },
//   { id:"typing",   label:"Typing" },
//   { id:"contact",  label:"Contact" },
// ];

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [active,   setActive]   = useState("home");
//   const [theme,    setTheme]    = useState<"dark"|"light">("dark");
//   const [open,     setOpen]     = useState(false);

//   useEffect(() => {
//     // Wait for intro to finish then slide header in
//     gsap.fromTo(".hdr-inner",
//       { opacity:0, y:-28 },
//       { opacity:1, y:0, duration:.85, ease:"power3.out", delay:3.1 }
//     );

//     const onScroll = () => {
//       setScrolled(window.scrollY > 24);
//       const pos = window.scrollY + 100;
//       for (const {id} of NAV) {
//         const el = document.getElementById(id);
//         if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
//           setActive(id); break;
//         }
//       }
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     if (theme === "light") {
//       document.documentElement.classList.add("light");
//     } else {
//       document.documentElement.classList.remove("light");
//     }
//   }, [theme]);

//   const goto = (id: string) => {
//     const el = document.getElementById(id);
//     if (el) window.scrollTo({ top: el.offsetTop - 72, behavior:"smooth" });
//     setOpen(false);
//   };

//   return (
//     <>
//       <style>{`
//         /* ── HEADER SHELL ── */
//         .hdr {
//           position:fixed; top:0; left:0; right:0; z-index:200;
//           font-family:'Barlow Condensed',sans-serif;
//           transition:background .35s, border-color .35s;
//           border-bottom:1px solid transparent;
//         }
//         .hdr.scrolled {
//           background:var(--hdr-bg);
//           border-bottom-color:rgba(200,241,53,.1);
//           backdrop-filter:blur(12px);
//           -webkit-backdrop-filter:blur(12px);
//         }
//         html.light .hdr.scrolled { background:rgba(255,255,255,.94); border-bottom-color:rgba(0,0,0,.08); }

//         /* ── INNER ── */
//         .hdr-inner {
//           max-width:1280px; margin:0 auto; padding:0 28px;
//           height:68px; display:flex; align-items:center;
//           justify-content:space-between; opacity:0;
//         }

//         /* ── LOGO ── */
//         .hdr-logo {
//           font-size:20px; font-weight:900; letter-spacing:.06em;
//           text-transform:uppercase; color:#c8f135;
//           background:none; border:none; cursor:pointer; padding:0;
//           transition:opacity .18s;
//           text-shadow:0 0 22px rgba(200,241,53,.35);
//           font-family:'Barlow Condensed',sans-serif;
//           flex-shrink:0;
//         }
//         .hdr-logo:hover { opacity:.72; }
//         .hdr-logo sup { font-size:8px; color:rgba(200,241,53,.28); vertical-align:super; margin-left:1px; }

//         /* ── DESKTOP NAV ── (centered) */
//         .hdr-nav {
//           position:absolute; left:50%; transform:translateX(-50%);
//           display:flex; align-items:center; gap:0;
//         }
//         .hdr-link {
//           font-size:10px; font-weight:700; letter-spacing:.2em;
//           text-transform:uppercase;
//           color:rgba(255,255,255,.38);
//           background:none; border:none; cursor:pointer;
//           padding:10px 16px; position:relative;
//           transition:color .18s;
//         }
//         .hdr-link:hover { color:rgba(255,255,255,.75); }
//         .hdr-link.on { color:#c8f135; }
//         .hdr-link.on::after {
//           content:''; position:absolute; bottom:6px;
//           left:16px; right:16px; height:1px; background:#c8f135;
//         }
//         html.light .hdr-link { color:rgba(0,0,0,.38); }
//         html.light .hdr-link:hover { color:rgba(0,0,0,.75); }
//         html.light .hdr-link.on { color:#3a6000; }
//         html.light .hdr-link.on::after { background:#3a6000; }

//         /* ── RIGHT SIDE ── */
//         .hdr-right { display:flex; align-items:center; gap:8px; flex-shrink:0; }

//         /* Theme toggle */
//         .hdr-theme {
//           width:34px; height:34px; background:none;
//           border:1px solid rgba(200,241,53,.2);
//           color:rgba(200,241,53,.45); cursor:pointer;
//           display:flex; align-items:center; justify-content:center;
//           transition:all .2s;
//         }
//         .hdr-theme:hover { border-color:rgba(200,241,53,.6); color:#c8f135; }
//         html.light .hdr-theme { border-color:rgba(0,0,0,.15); color:rgba(0,0,0,.5); }
//         html.light .hdr-theme:hover { border-color:rgba(0,0,0,.4); color:#000; }

//         /* Resume button */
//         .hdr-resume {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:10px; font-weight:800; letter-spacing:.22em;
//           text-transform:uppercase; background:#c8f135; color:#000;
//           padding:9px 18px; display:flex; align-items:center; gap:7px;
//           text-decoration:none; transition:background .18s, box-shadow .18s;
//           border:none; cursor:pointer;
//         }
//         .hdr-resume:hover { background:#b3d820; box-shadow:0 6px 24px rgba(200,241,53,.3); }

//         /* Mobile burger */
//         .hdr-burger {
//           display:none; width:34px; height:34px; background:none;
//           border:1px solid rgba(200,241,53,.18); color:rgba(200,241,53,.4);
//           cursor:pointer; align-items:center; justify-content:center;
//           transition:all .18s;
//         }
//         .hdr-burger:hover { border-color:rgba(200,241,53,.5); color:#c8f135; }

//         /* ── MOBILE MENU ── */
//         .hdr-mob {
//           position:absolute; top:68px; left:0; right:0;
//           background:var(--bg,#000); overflow:hidden;
//           max-height:0; opacity:0;
//           transition:max-height .38s ease, opacity .26s;
//           border-bottom:1px solid rgba(200,241,53,.08);
//         }
//         html.light .hdr-mob { background:#fff; }
//         .hdr-mob.open { max-height:420px; opacity:1; }
//         .hdr-mob-inner { padding:12px 28px 22px; }
//         .hdr-mob-link {
//           font-family:'Barlow Condensed',sans-serif;
//           font-size:13px; font-weight:800; letter-spacing:.2em;
//           text-transform:uppercase; color:rgba(255,255,255,.35);
//           background:none; border:none; cursor:pointer;
//           padding:13px 0; width:100%; text-align:left;
//           border-bottom:1px solid rgba(200,241,53,.06);
//           display:block; transition:color .15s;
//         }
//         .hdr-mob-link:hover, .hdr-mob-link.on { color:#c8f135; }
//         html.light .hdr-mob-link { color:rgba(0,0,0,.4); }
//         html.light .hdr-mob-link:hover,
//         html.light .hdr-mob-link.on { color:#3a6000; }

//         .hdr-mob-bottom {
//           display:flex; gap:8px; margin-top:16px;
//         }
//         .hdr-mob-resume {
//           flex:1; font-family:'Barlow Condensed',sans-serif;
//           font-size:10px; font-weight:800; letter-spacing:.2em;
//           text-transform:uppercase; background:#c8f135; color:#000;
//           padding:11px 0; display:flex; align-items:center;
//           justify-content:center; gap:8px; text-decoration:none;
//           transition:background .15s;
//         }
//         .hdr-mob-resume:hover { background:#b3d820; }

//         @media(max-width:768px) {
//           .hdr-nav, .hdr-resume { display:none; }
//           .hdr-burger { display:flex; }
//         }
//       `}</style>

//       <header className={`hdr ${scrolled ? "scrolled" : ""}`}>
//         <div className="hdr-inner">
//           {/* Logo */}
//           <button className="hdr-logo" onClick={() => goto("home")}>
//             RM<sup>©</sup>
//           </button>

//           {/* Centered nav */}
//           <nav className="hdr-nav">
//             {NAV.map(n => (
//               <button key={n.id} onClick={() => goto(n.id)}
//                 className={`hdr-link ${active === n.id ? "on" : ""}`}>
//                 {n.label}
//               </button>
//             ))}
//           </nav>

//           {/* Right: theme + resume + burger */}
//           <div className="hdr-right">
//             <button className="hdr-theme"
//               onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
//               title={theme === "dark" ? "Light mode" : "Dark mode"}>
//               {theme === "dark" ? <Sun size={13}/> : <Moon size={13}/>}
//             </button>
//             <a href="/assets/Risvan-Muhammed-Resume.pdf" download className="hdr-resume">
//               <Download size={10} strokeWidth={2.5}/> Resume
//             </a>
//             <button className="hdr-burger" onClick={() => setOpen(o => !o)}>
//               {open ? <X size={14}/> : <Menu size={14}/>}
//             </button>
//           </div>
//         </div>

//         {/* Mobile dropdown */}
//         <div className={`hdr-mob ${open ? "open" : ""}`}>
//           <div className="hdr-mob-inner">
//             {NAV.map(n => (
//               <button key={n.id} onClick={() => goto(n.id)}
//                 className={`hdr-mob-link ${active === n.id ? "on" : ""}`}>
//                 {n.label}
//               </button>
//             ))}
//             <div className="hdr-mob-bottom">
//               <button className="hdr-theme"
//                 onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}>
//                 {theme === "dark" ? <Sun size={13}/> : <Moon size={13}/>}
//               </button>
//               <a href="/assets/Risvan-Muhammed-Resume.pdf" download className="hdr-mob-resume">
//                 <Download size={11}/> Download Resume
//               </a>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }





"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/public/lib/gsap";
import { Download, Sun, Moon, Menu, X } from "lucide-react";

const NAV = [
  { id: "home",     label: "Home" },
  { id: "skills",   label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "typing",   label: "Typing" },
  { id: "contact",  label: "Contact" },
];

export default function Header() {
  const [active, setActive] = useState("home");
  const [theme,  setTheme]  = useState<"dark"|"light">("dark");
  const [open,   setOpen]   = useState(false);
  const hdrRef = useRef<HTMLDivElement>(null);

  /* Entry after intro */
  useEffect(() => {
    gsap.set(hdrRef.current, { y: -60, opacity: 0 });
    gsap.to(hdrRef.current, { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 3.1 });
  }, []);

  /* Scroll tracking */
  useEffect(() => {
    const fn = () => {
      const cy = window.scrollY + 120;
      for (const { id } of NAV) {
        const el = document.getElementById(id);
        if (el && cy >= el.offsetTop && cy < el.offsetTop + el.offsetHeight) {
          setActive(id); break;
        }
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* Theme */
  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  const goto = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      <style>{`
        /* ── Fixed top bar ── */
        .hdr {
          position: fixed; top: 0; left: 0; right: 0; z-index: 300;
          display: flex; justify-content: center;
          padding: 18px 24px;
          pointer-events: none;   /* let click-through to page */
        }

        /* ── The pill container — exact asharaf style ── */
        .hdr-pill {
          pointer-events: all;
          display: flex; align-items: center; gap: 0;
          background: var(--hdr-bg);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 0 6px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          height: 48px;
          box-shadow: 0 2px 24px rgba(0,0,0,.18);
          transition: background .35s, border-color .35s;
        }
        html.light .hdr-pill {
          box-shadow: 0 2px 24px rgba(0,0,0,.1);
        }

        /* ── Logo inside pill ── */
        .hdr-logo {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 15px; font-weight: 900;
          letter-spacing: .06em; text-transform: uppercase;
          color: var(--ac); background: none; border: none;
          cursor: pointer; padding: 0 16px 0 10px;
          white-space: nowrap; line-height: 1;
          /* Divider on right */
          border-right: 1px solid var(--border);
          height: 100%; display: flex; align-items: center;
          transition: opacity .18s;
          animation: glow-pulse 4s ease-in-out infinite;
        }
        .hdr-logo:hover { opacity: .7; }

        /* ── Nav links inside pill ── */
        .hdr-nav {
          display: flex; align-items: center;
        }
        .hdr-link {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: .18em;
          text-transform: uppercase; color: var(--td);
          background: none; border: none; cursor: pointer;
          padding: 0 14px; height: 48px;
          display: flex; align-items: center;
          position: relative; transition: color .2s;
          white-space: nowrap;
        }
        .hdr-link:hover { color: var(--ts); }
        .hdr-link.on {
          color: var(--ac);
        }
        /* Active dot under link */
        .hdr-link.on::after {
          content: '';
          position: absolute; bottom: 10px; left: 50%;
          transform: translateX(-50%);
          width: 3px; height: 3px; border-radius: 50%;
          background: var(--ac);
        }

        /* ── Divider line ── */
        .hdr-div {
          width: 1px; height: 20px;
          background: var(--border); flex-shrink: 0; margin: 0 4px;
        }

        /* ── Theme toggle inside pill ── */
        .hdr-toggle {
          width: 34px; height: 34px; border-radius: 50%;
          background: none; border: 1px solid var(--border);
          color: var(--td); cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          margin: 0 4px; flex-shrink: 0; transition: all .2s;
        }
        .hdr-toggle:hover { border-color: var(--ac-dim); color: var(--ac); }

        /* ── Resume button inside pill — filled rounded ── */
        .hdr-resume {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 800; letter-spacing: .18em;
          text-transform: uppercase;
          background: var(--ac); color: #000;
          padding: 8px 16px; border-radius: 999px;
          display: inline-flex; align-items: center; gap: 6px;
          text-decoration: none; border: none; cursor: pointer;
          margin: 0 4px; white-space: nowrap;
          transition: background .18s, box-shadow .18s;
          flex-shrink: 0;
        }
        .hdr-resume:hover {
          background: var(--ac2);
          box-shadow: 0 4px 16px rgba(200,241,53,.3);
        }
        html.light .hdr-resume:hover { box-shadow: 0 4px 16px rgba(61,98,0,.22); }

        /* ── Mobile burger ── */
        .hdr-burger {
          display: none; width: 34px; height: 34px; border-radius: 50%;
          background: none; border: 1px solid var(--border);
          color: var(--td); cursor: pointer;
          align-items: center; justify-content: center;
          margin: 0 4px; transition: all .18s; flex-shrink: 0;
        }
        .hdr-burger:hover { border-color: var(--ac-dim); color: var(--ac); }

        /* ── Mobile dropdown (below pill) ── */
        .hdr-mob {
          position: fixed; top: 78px; left: 16px; right: 16px;
          background: var(--hdr-bg); border: 1px solid var(--border);
          border-radius: 16px; z-index: 299;
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          overflow: hidden; max-height: 0; opacity: 0;
          transition: max-height .38s ease, opacity .26s;
          box-shadow: 0 8px 32px rgba(0,0,0,.2);
        }
        .hdr-mob.open { max-height: 420px; opacity: 1; }
        .hdr-mob-inner { padding: 12px 20px 20px; }
        .hdr-mob-link {
          display: flex; align-items: center; justify-content: space-between;
          width: 100%; padding: 13px 0;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 14px; font-weight: 800; letter-spacing: .14em;
          text-transform: uppercase; color: var(--td);
          background: none; border: none;
          border-bottom: 1px solid var(--border);
          cursor: pointer; transition: color .18s;
        }
        .hdr-mob-link span { opacity: 0; transition: opacity .18s; font-size: 11px; }
        .hdr-mob-link:hover, .hdr-mob-link.on { color: var(--ac); }
        .hdr-mob-link:hover span, .hdr-mob-link.on span { opacity: 1; }
        .hdr-mob-foot { display: flex; gap: 8px; margin-top: 16px; }
        .hdr-mob-resume {
          flex: 1; font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 800; letter-spacing: .2em;
          text-transform: uppercase; background: var(--ac); color: #000;
          border-radius: 999px; padding: 11px 0;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          text-decoration: none; transition: background .15s;
        }
        .hdr-mob-resume:hover { background: var(--ac2); }

        @media (max-width: 768px) {
          .hdr-nav, .hdr-resume, .hdr-div { display: none; }
          .hdr-burger { display: flex; }
        }
        @media (max-width: 480px) {
          .hdr { padding: 14px 12px; }
        }
      `}</style>

      {/* ── Pill navbar ── */}
      <header className="hdr">
        <div ref={hdrRef} className="hdr-pill">
          {/* Logo */}
          <button className="hdr-logo" onClick={() => goto("home")}>
            RISVAN.
          </button>

          {/* Nav links */}
          <nav className="hdr-nav">
            {NAV.map(n => (
              <button key={n.id} onClick={() => goto(n.id)}
                className={`hdr-link${active === n.id ? " on" : ""}`}>
                {n.label}
              </button>
            ))}
          </nav>

          {/* Divider */}
          <div className="hdr-div" />

          {/* Theme toggle */}
          <button className="hdr-toggle"
            onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
            title="Toggle theme">
            {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
          </button>

          {/* Resume */}
          <a href="/assets/Risvan-Muhammed-Resume.pdf" download className="hdr-resume">
            <Download size={10} strokeWidth={2.5} /> Resume
          </a>

          {/* Mobile burger */}
          <button className="hdr-burger" onClick={() => setOpen(o => !o)}>
            {open ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </header>

      {/* ── Mobile dropdown ── */}
      <div className={`hdr-mob${open ? " open" : ""}`}>
        <div className="hdr-mob-inner">
          {NAV.map(n => (
            <button key={n.id} onClick={() => goto(n.id)}
              className={`hdr-mob-link${active === n.id ? " on" : ""}`}>
              {n.label} <span>→</span>
            </button>
          ))}
          <div className="hdr-mob-foot">
            <button className="hdr-toggle" style={{ flexShrink: 0 }}
              onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
            </button>
            <a href="/assets/Risvan-Muhammed-Resume.pdf" download className="hdr-mob-resume">
              <Download size={11} /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}