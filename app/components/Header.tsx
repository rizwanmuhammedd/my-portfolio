




// "use client";
// import { useEffect, useState } from "react";
// import { gsap } from "@/public/lib/gsap";
// import { Menu, X, Download } from "lucide-react";

// const NAV = [
//   { id:"home", label:"Home" },
//   { id:"skills", label:"Skills" },
//   { id:"projects", label:"Projects" },
//   { id:"typing", label:"Typing" },
//   { id:"contact", label:"Contact" },
// ];

// export default function Header() {
//   const [open,     setOpen]     = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [active,   setActive]   = useState("home");

//   useEffect(() => {
//     gsap.fromTo(".hdr-wrap",
//       { opacity:0, y:-22 },
//       { opacity:1, y:0, duration:.85, ease:"power3.out", delay:.05 }
//     );
//     const onScroll = () => {
//       setScrolled(window.scrollY > 30);
//       const pos = window.scrollY + 100;
//       for (const { id } of NAV) {
//         const el = document.getElementById(id);
//         if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
//           setActive(id); break;
//         }
//       }
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const goto = (id: string) => {
//     const el = document.getElementById(id);
//     if (el) window.scrollTo({ top: el.offsetTop - 76, behavior:"smooth" });
//     setOpen(false);
//   };

//   return (
//     <>
//       <style>{`
//         .hdr { position:fixed; top:0; left:0; right:0; z-index:100; font-family:'Barlow Condensed',sans-serif; transition:background .3s,border-color .35s; border-bottom:1px solid transparent; }
//         .hdr.scrolled { background:rgba(0,0,0,.96); border-bottom-color:#0f1208; }
//         .hdr-wrap { max-width:1280px; margin:0 auto; padding:0 24px; height:64px; display:flex; align-items:center; justify-content:space-between; }

//         /* Logo */
//         .hdr-logo { font-size:18px; font-weight:900; letter-spacing:.08em; text-transform:uppercase; color:#c8f135; background:none; border:none; cursor:pointer; padding:0; transition:opacity .15s; animation:glow-pulse 4s ease-in-out infinite; }
//         .hdr-logo:hover { opacity:.65; }
//         .hdr-logo span { font-size:9px; color:#c8f13525; vertical-align:super; margin-left:1px; }

//         /* Nav */
//         .hdr-nav { display:flex; align-items:center; gap:2px; }
//         .hdr-link { font-size:10px; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:#283510; background:none; border:none; cursor:pointer; padding:8px 12px; position:relative; transition:color .15s; }
//         .hdr-link:hover { color:#c8f13566; }
//         .hdr-link.on { color:#c8f135; }
//         .hdr-link.on::after { content:''; position:absolute; bottom:2px; left:12px; right:12px; height:1px; background:#c8f135; }

//         /* Right side */
//         .hdr-right { display:flex; align-items:center; gap:8px; }
//         .hdr-resume { font-size:10px; font-weight:800; letter-spacing:.2em; text-transform:uppercase; background:#c8f135; color:#000; padding:8px 16px; display:flex; align-items:center; gap:7px; text-decoration:none; transition:background .15s; }
//         .hdr-resume:hover { background:#b3d820; }

//         /* Mobile burger */
//         .hdr-burger { display:none; width:36px; height:36px; background:none; border:1px solid #0f1208; color:#c8f13540; cursor:pointer; align-items:center; justify-content:center; transition:all .15s; }
//         .hdr-burger:hover { border-color:#c8f13530; color:#c8f135; }

//         /* Mobile menu */
//         .hdr-mob { position:absolute; top:64px; left:0; right:0; background:#000; border-bottom:1px solid #0f1208; overflow:hidden; max-height:0; opacity:0; transition:max-height .38s ease,opacity .25s; }
//         .hdr-mob.open { max-height:420px; opacity:1; }
//         .hdr-mob-inner { padding:12px 24px 20px; }
//         .hdr-mob-link { font-size:12px; font-weight:800; letter-spacing:.18em; text-transform:uppercase; color:#283510; background:none; border:none; cursor:pointer; padding:12px 0; width:100%; text-align:left; border-bottom:1px solid #080c05; display:block; transition:color .15s; }
//         .hdr-mob-link:hover,.hdr-mob-link.on { color:#c8f135; }
//         .hdr-mob-resume { font-size:10px; font-weight:800; letter-spacing:.2em; text-transform:uppercase; background:#c8f135; color:#000; padding:11px 0; margin-top:14px; display:flex; align-items:center; justify-content:center; gap:8px; text-decoration:none; width:100%; transition:background .15s; }
//         .hdr-mob-resume:hover { background:#b3d820; }

//         @media(max-width:640px) { .hdr-nav,.hdr-resume { display:none; } .hdr-burger { display:flex; } }
//       `}</style>

//       <header className={`hdr ${scrolled ? "scrolled" : ""}`}>
//         <div className="hdr-wrap">
//           <button className="hdr-logo" onClick={() => goto("home")}>RM<span>©</span></button>

//           <nav className="hdr-nav">
//             {NAV.map(n => (
//               <button key={n.id} onClick={() => goto(n.id)}
//                 className={`hdr-link ${active === n.id ? "on" : ""}`}>{n.label}</button>
//             ))}
//           </nav>

//           <div className="hdr-right">
//             <a href="/assets/Risvan-Muhammed-Resume.pdf" download className="hdr-resume">
//               <Download size={10} strokeWidth={2.5} /> Resume
//             </a>
//             <button className="hdr-burger" onClick={() => setOpen(!open)}>
//               {open ? <X size={14}/> : <Menu size={14}/>}
//             </button>
//           </div>
//         </div>

//         <div className={`hdr-mob ${open ? "open" : ""}`}>
//           <div className="hdr-mob-inner">
//             {NAV.map(n => (
//               <button key={n.id} onClick={() => goto(n.id)}
//                 className={`hdr-mob-link ${active === n.id ? "on" : ""}`}>{n.label}</button>
//             ))}
//             <a href="/assets/Risvan-Muhammed-Resume.pdf" download className="hdr-mob-resume">
//               <Download size={11}/> Download Resume
//             </a>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }





"use client";
import { useEffect, useState } from "react";
import { gsap } from "@/public/lib/gsap";
import { Download, Sun, Moon, Menu, X } from "lucide-react";

const NAV = [
  { id:"home",     label:"Home" },
  { id:"skills",   label:"Skills" },
  { id:"projects", label:"Projects" },
  { id:"typing",   label:"Typing" },
  { id:"contact",  label:"Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("home");
  const [theme,    setTheme]    = useState<"dark"|"light">("dark");
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    // Wait for intro to finish then slide header in
    gsap.fromTo(".hdr-inner",
      { opacity:0, y:-28 },
      { opacity:1, y:0, duration:.85, ease:"power3.out", delay:3.1 }
    );

    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const pos = window.scrollY + 100;
      for (const {id} of NAV) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(id); break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  const goto = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior:"smooth" });
    setOpen(false);
  };

  return (
    <>
      <style>{`
        /* ── HEADER SHELL ── */
        .hdr {
          position:fixed; top:0; left:0; right:0; z-index:200;
          font-family:'Barlow Condensed',sans-serif;
          transition:background .35s, border-color .35s;
          border-bottom:1px solid transparent;
        }
        .hdr.scrolled {
          background:var(--hdr-bg);
          border-bottom-color:rgba(200,241,53,.1);
          backdrop-filter:blur(12px);
          -webkit-backdrop-filter:blur(12px);
        }
        html.light .hdr.scrolled { background:rgba(255,255,255,.94); border-bottom-color:rgba(0,0,0,.08); }

        /* ── INNER ── */
        .hdr-inner {
          max-width:1280px; margin:0 auto; padding:0 28px;
          height:68px; display:flex; align-items:center;
          justify-content:space-between; opacity:0;
        }

        /* ── LOGO ── */
        .hdr-logo {
          font-size:20px; font-weight:900; letter-spacing:.06em;
          text-transform:uppercase; color:#c8f135;
          background:none; border:none; cursor:pointer; padding:0;
          transition:opacity .18s;
          text-shadow:0 0 22px rgba(200,241,53,.35);
          font-family:'Barlow Condensed',sans-serif;
          flex-shrink:0;
        }
        .hdr-logo:hover { opacity:.72; }
        .hdr-logo sup { font-size:8px; color:rgba(200,241,53,.28); vertical-align:super; margin-left:1px; }

        /* ── DESKTOP NAV ── (centered) */
        .hdr-nav {
          position:absolute; left:50%; transform:translateX(-50%);
          display:flex; align-items:center; gap:0;
        }
        .hdr-link {
          font-size:10px; font-weight:700; letter-spacing:.2em;
          text-transform:uppercase;
          color:rgba(255,255,255,.38);
          background:none; border:none; cursor:pointer;
          padding:10px 16px; position:relative;
          transition:color .18s;
        }
        .hdr-link:hover { color:rgba(255,255,255,.75); }
        .hdr-link.on { color:#c8f135; }
        .hdr-link.on::after {
          content:''; position:absolute; bottom:6px;
          left:16px; right:16px; height:1px; background:#c8f135;
        }
        html.light .hdr-link { color:rgba(0,0,0,.38); }
        html.light .hdr-link:hover { color:rgba(0,0,0,.75); }
        html.light .hdr-link.on { color:#3a6000; }
        html.light .hdr-link.on::after { background:#3a6000; }

        /* ── RIGHT SIDE ── */
        .hdr-right { display:flex; align-items:center; gap:8px; flex-shrink:0; }

        /* Theme toggle */
        .hdr-theme {
          width:34px; height:34px; background:none;
          border:1px solid rgba(200,241,53,.2);
          color:rgba(200,241,53,.45); cursor:pointer;
          display:flex; align-items:center; justify-content:center;
          transition:all .2s;
        }
        .hdr-theme:hover { border-color:rgba(200,241,53,.6); color:#c8f135; }
        html.light .hdr-theme { border-color:rgba(0,0,0,.15); color:rgba(0,0,0,.5); }
        html.light .hdr-theme:hover { border-color:rgba(0,0,0,.4); color:#000; }

        /* Resume button */
        .hdr-resume {
          font-family:'Barlow Condensed',sans-serif;
          font-size:10px; font-weight:800; letter-spacing:.22em;
          text-transform:uppercase; background:#c8f135; color:#000;
          padding:9px 18px; display:flex; align-items:center; gap:7px;
          text-decoration:none; transition:background .18s, box-shadow .18s;
          border:none; cursor:pointer;
        }
        .hdr-resume:hover { background:#b3d820; box-shadow:0 6px 24px rgba(200,241,53,.3); }

        /* Mobile burger */
        .hdr-burger {
          display:none; width:34px; height:34px; background:none;
          border:1px solid rgba(200,241,53,.18); color:rgba(200,241,53,.4);
          cursor:pointer; align-items:center; justify-content:center;
          transition:all .18s;
        }
        .hdr-burger:hover { border-color:rgba(200,241,53,.5); color:#c8f135; }

        /* ── MOBILE MENU ── */
        .hdr-mob {
          position:absolute; top:68px; left:0; right:0;
          background:var(--bg,#000); overflow:hidden;
          max-height:0; opacity:0;
          transition:max-height .38s ease, opacity .26s;
          border-bottom:1px solid rgba(200,241,53,.08);
        }
        html.light .hdr-mob { background:#fff; }
        .hdr-mob.open { max-height:420px; opacity:1; }
        .hdr-mob-inner { padding:12px 28px 22px; }
        .hdr-mob-link {
          font-family:'Barlow Condensed',sans-serif;
          font-size:13px; font-weight:800; letter-spacing:.2em;
          text-transform:uppercase; color:rgba(255,255,255,.35);
          background:none; border:none; cursor:pointer;
          padding:13px 0; width:100%; text-align:left;
          border-bottom:1px solid rgba(200,241,53,.06);
          display:block; transition:color .15s;
        }
        .hdr-mob-link:hover, .hdr-mob-link.on { color:#c8f135; }
        html.light .hdr-mob-link { color:rgba(0,0,0,.4); }
        html.light .hdr-mob-link:hover,
        html.light .hdr-mob-link.on { color:#3a6000; }

        .hdr-mob-bottom {
          display:flex; gap:8px; margin-top:16px;
        }
        .hdr-mob-resume {
          flex:1; font-family:'Barlow Condensed',sans-serif;
          font-size:10px; font-weight:800; letter-spacing:.2em;
          text-transform:uppercase; background:#c8f135; color:#000;
          padding:11px 0; display:flex; align-items:center;
          justify-content:center; gap:8px; text-decoration:none;
          transition:background .15s;
        }
        .hdr-mob-resume:hover { background:#b3d820; }

        @media(max-width:768px) {
          .hdr-nav, .hdr-resume { display:none; }
          .hdr-burger { display:flex; }
        }
      `}</style>

      <header className={`hdr ${scrolled ? "scrolled" : ""}`}>
        <div className="hdr-inner">
          {/* Logo */}
          <button className="hdr-logo" onClick={() => goto("home")}>
            RM<sup>©</sup>
          </button>

          {/* Centered nav */}
          <nav className="hdr-nav">
            {NAV.map(n => (
              <button key={n.id} onClick={() => goto(n.id)}
                className={`hdr-link ${active === n.id ? "on" : ""}`}>
                {n.label}
              </button>
            ))}
          </nav>

          {/* Right: theme + resume + burger */}
          <div className="hdr-right">
            <button className="hdr-theme"
              onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
              title={theme === "dark" ? "Light mode" : "Dark mode"}>
              {theme === "dark" ? <Sun size={13}/> : <Moon size={13}/>}
            </button>
            <a href="/assets/Risvan-Muhammed-Resume.pdf" download className="hdr-resume">
              <Download size={10} strokeWidth={2.5}/> Resume
            </a>
            <button className="hdr-burger" onClick={() => setOpen(o => !o)}>
              {open ? <X size={14}/> : <Menu size={14}/>}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div className={`hdr-mob ${open ? "open" : ""}`}>
          <div className="hdr-mob-inner">
            {NAV.map(n => (
              <button key={n.id} onClick={() => goto(n.id)}
                className={`hdr-mob-link ${active === n.id ? "on" : ""}`}>
                {n.label}
              </button>
            ))}
            <div className="hdr-mob-bottom">
              <button className="hdr-theme"
                onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <Sun size={13}/> : <Moon size={13}/>}
              </button>
              <a href="/assets/Risvan-Muhammed-Resume.pdf" download className="hdr-mob-resume">
                <Download size={11}/> Download Resume
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}