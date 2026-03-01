
// "use client";

// import { useEffect, useState } from "react";
// import { gsap } from "@/public/lib/gsap";
// import { Menu, X, Download } from "lucide-react";

// const NAV = [
//   { id: "home",     label: "Home" },
//   { id: "skills",   label: "Skills" },
//   { id: "projects", label: "Projects" },
//   { id: "contact",  label: "Contact" },
// ];

// export default function Header() {
//   const [open,    setOpen]    = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [active,  setActive]  = useState("home");

//   useEffect(() => {
//     // entry
//     gsap.fromTo(".hdr-inner",
//       { opacity: 0, y: -18 },
//       { opacity: 1, y: 0, duration: .7, ease: "power3.out", delay: .15 }
//     );

//     const onScroll = () => {
//       setScrolled(window.scrollY > 24);
//       const pos = window.scrollY + 110;
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
//     if (el) window.scrollTo({ top: el.offsetTop - 78, behavior: "smooth" });
//     setOpen(false);
//   };

//   return (
//     <>
//       <style>{`
//         .hdr {
//           position: fixed; top: 0; width: 100%; z-index: 100;
//           font-family: 'Barlow Condensed', sans-serif;
//           transition: background .3s, border-color .3s;
//           border-bottom: 1px solid transparent;
//         }
//         .hdr.scrolled { background: rgba(0,0,0,.97); border-bottom-color: #1a1a1a; }

//         .hdr-inner {
//           max-width: 1280px; margin: 0 auto; padding: 0 24px;
//           height: 60px; display: flex; align-items: center; justify-content: space-between;
//         }

//         /* Logo */
//         .hdr-logo {
//           font-size: 19px; font-weight: 900; letter-spacing: .1em; text-transform: uppercase;
//           color: #fff; background: none; border: none; cursor: pointer; padding: 0;
//           transition: opacity .15s;
//         }
//         .hdr-logo:hover { opacity: .65; }
//         .hdr-logo sub { font-size: 8px; color: #2e2e2e; letter-spacing: .08em; vertical-align: sub; margin-left: 2px; }

//         /* Nav */
//         .hdr-nav { display: flex; align-items: center; }
//         .hdr-nav-btn {
//           font-size: 10px; font-weight: 800; letter-spacing: .2em; text-transform: uppercase;
//           color: #3c3c3c; background: none; border: none; cursor: pointer;
//           padding: 8px 13px; position: relative; transition: color .15s;
//         }
//         .hdr-nav-btn:hover  { color: #888; }
//         .hdr-nav-btn.active { color: #fff; }
//         .hdr-nav-btn.active::after {
//           content: ''; position: absolute; bottom: 0; left: 13px; right: 13px;
//           height: 1px; background: #fff;
//         }

//         /* Right */
//         .hdr-right { display: flex; align-items: center; gap: 8px; }
//         .hdr-cv {
//           font-size: 10px; font-weight: 800; letter-spacing: .2em; text-transform: uppercase;
//           background: #fff; color: #000; padding: 8px 15px;
//           display: flex; align-items: center; gap: 7px; text-decoration: none;
//           transition: background .15s;
//         }
//         .hdr-cv:hover { background: #d4d4d4; }

//         .hdr-burger {
//           display: none; width: 36px; height: 36px; background: none;
//           border: 1px solid #1e1e1e; color: #555; cursor: pointer;
//           align-items: center; justify-content: center; transition: all .15s;
//         }
//         .hdr-burger:hover { border-color: #444; color: #fff; }

//         /* Mobile */
//         .hdr-mob {
//           position: absolute; top: 60px; left: 0; right: 0;
//           background: #000; border-bottom: 1px solid #1a1a1a;
//           max-height: 0; opacity: 0; overflow: hidden;
//           transition: max-height .35s ease, opacity .25s ease;
//         }
//         .hdr-mob.open { max-height: 380px; opacity: 1; }
//         .hdr-mob-inner { padding: 14px 24px 22px; }
//         .hdr-mob-btn {
//           font-size: 12px; font-weight: 800; letter-spacing: .2em; text-transform: uppercase;
//           color: #3c3c3c; background: none; border: none; cursor: pointer;
//           padding: 13px 0; text-align: left; width: 100%;
//           border-bottom: 1px solid #0e0e0e; display: block; transition: color .15s;
//         }
//         .hdr-mob-btn:hover, .hdr-mob-btn.active { color: #fff; }
//         .hdr-mob-cv {
//           font-size: 10px; font-weight: 800; letter-spacing: .2em; text-transform: uppercase;
//           background: #fff; color: #000; padding: 12px 0; margin-top: 14px;
//           display: flex; align-items: center; justify-content: center; gap: 8px;
//           text-decoration: none; width: 100%; transition: background .15s;
//         }
//         .hdr-mob-cv:hover { background: #d4d4d4; }

//         @media(max-width: 640px) {
//           .hdr-nav, .hdr-cv { display: none; }
//           .hdr-burger { display: flex; }
//         }
//       `}</style>

//       <header className={`hdr ${scrolled ? "scrolled" : ""}`}>
//         <div className="hdr-inner">
//           <button className="hdr-logo" onClick={() => goto("home")}>
//             RM<sub>©</sub>
//           </button>

//           <nav className="hdr-nav">
//             {NAV.map(n => (
//               <button key={n.id} onClick={() => goto(n.id)}
//                 className={`hdr-nav-btn ${active === n.id ? "active" : ""}`}>
//                 {n.label}
//               </button>
//             ))}
//           </nav>

//           <div className="hdr-right">
//             <a href="/assets/Risvan-Muhammed-Resume.pdf" download className="hdr-cv">
//               <Download size={10} strokeWidth={2.5} /> Resume
//             </a>
//             <button className="hdr-burger" onClick={() => setOpen(!open)}>
//               {open ? <X size={14} /> : <Menu size={14} />}
//             </button>
//           </div>
//         </div>

//         <div className={`hdr-mob ${open ? "open" : ""}`}>
//           <div className="hdr-mob-inner">
//             {NAV.map(n => (
//               <button key={n.id} onClick={() => goto(n.id)}
//                 className={`hdr-mob-btn ${active === n.id ? "active" : ""}`}>
//                 {n.label}
//               </button>
//             ))}
//             <a href="/assets/Risvan-Muhammed-Resume.pdf" download className="hdr-mob-cv">
//               <Download size={11} /> Download Resume
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
import { Menu, X, Download } from "lucide-react";

const NAV = [
  { id:"home", label:"Home" },
  { id:"skills", label:"Skills" },
  { id:"projects", label:"Projects" },
  { id:"typing", label:"Typing" },
  { id:"contact", label:"Contact" },
];

export default function Header() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("home");

  useEffect(() => {
    gsap.fromTo(".hdr-wrap",
      { opacity:0, y:-22 },
      { opacity:1, y:0, duration:.85, ease:"power3.out", delay:.05 }
    );
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const pos = window.scrollY + 100;
      for (const { id } of NAV) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(id); break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goto = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 76, behavior:"smooth" });
    setOpen(false);
  };

  return (
    <>
      <style>{`
        .hdr { position:fixed; top:0; left:0; right:0; z-index:100; font-family:'Barlow Condensed',sans-serif; transition:background .3s,border-color .35s; border-bottom:1px solid transparent; }
        .hdr.scrolled { background:rgba(0,0,0,.96); border-bottom-color:#0f1208; }
        .hdr-wrap { max-width:1280px; margin:0 auto; padding:0 24px; height:64px; display:flex; align-items:center; justify-content:space-between; }

        /* Logo */
        .hdr-logo { font-size:18px; font-weight:900; letter-spacing:.08em; text-transform:uppercase; color:#c8f135; background:none; border:none; cursor:pointer; padding:0; transition:opacity .15s; animation:glow-pulse 4s ease-in-out infinite; }
        .hdr-logo:hover { opacity:.65; }
        .hdr-logo span { font-size:9px; color:#c8f13525; vertical-align:super; margin-left:1px; }

        /* Nav */
        .hdr-nav { display:flex; align-items:center; gap:2px; }
        .hdr-link { font-size:10px; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:#283510; background:none; border:none; cursor:pointer; padding:8px 12px; position:relative; transition:color .15s; }
        .hdr-link:hover { color:#c8f13566; }
        .hdr-link.on { color:#c8f135; }
        .hdr-link.on::after { content:''; position:absolute; bottom:2px; left:12px; right:12px; height:1px; background:#c8f135; }

        /* Right side */
        .hdr-right { display:flex; align-items:center; gap:8px; }
        .hdr-resume { font-size:10px; font-weight:800; letter-spacing:.2em; text-transform:uppercase; background:#c8f135; color:#000; padding:8px 16px; display:flex; align-items:center; gap:7px; text-decoration:none; transition:background .15s; }
        .hdr-resume:hover { background:#b3d820; }

        /* Mobile burger */
        .hdr-burger { display:none; width:36px; height:36px; background:none; border:1px solid #0f1208; color:#c8f13540; cursor:pointer; align-items:center; justify-content:center; transition:all .15s; }
        .hdr-burger:hover { border-color:#c8f13530; color:#c8f135; }

        /* Mobile menu */
        .hdr-mob { position:absolute; top:64px; left:0; right:0; background:#000; border-bottom:1px solid #0f1208; overflow:hidden; max-height:0; opacity:0; transition:max-height .38s ease,opacity .25s; }
        .hdr-mob.open { max-height:420px; opacity:1; }
        .hdr-mob-inner { padding:12px 24px 20px; }
        .hdr-mob-link { font-size:12px; font-weight:800; letter-spacing:.18em; text-transform:uppercase; color:#283510; background:none; border:none; cursor:pointer; padding:12px 0; width:100%; text-align:left; border-bottom:1px solid #080c05; display:block; transition:color .15s; }
        .hdr-mob-link:hover,.hdr-mob-link.on { color:#c8f135; }
        .hdr-mob-resume { font-size:10px; font-weight:800; letter-spacing:.2em; text-transform:uppercase; background:#c8f135; color:#000; padding:11px 0; margin-top:14px; display:flex; align-items:center; justify-content:center; gap:8px; text-decoration:none; width:100%; transition:background .15s; }
        .hdr-mob-resume:hover { background:#b3d820; }

        @media(max-width:640px) { .hdr-nav,.hdr-resume { display:none; } .hdr-burger { display:flex; } }
      `}</style>

      <header className={`hdr ${scrolled ? "scrolled" : ""}`}>
        <div className="hdr-wrap">
          <button className="hdr-logo" onClick={() => goto("home")}>RM<span>©</span></button>

          <nav className="hdr-nav">
            {NAV.map(n => (
              <button key={n.id} onClick={() => goto(n.id)}
                className={`hdr-link ${active === n.id ? "on" : ""}`}>{n.label}</button>
            ))}
          </nav>

          <div className="hdr-right">
            <a href="/assets/Risvan-Muhammed-Resume.pdf" download className="hdr-resume">
              <Download size={10} strokeWidth={2.5} /> Resume
            </a>
            <button className="hdr-burger" onClick={() => setOpen(!open)}>
              {open ? <X size={14}/> : <Menu size={14}/>}
            </button>
          </div>
        </div>

        <div className={`hdr-mob ${open ? "open" : ""}`}>
          <div className="hdr-mob-inner">
            {NAV.map(n => (
              <button key={n.id} onClick={() => goto(n.id)}
                className={`hdr-mob-link ${active === n.id ? "on" : ""}`}>{n.label}</button>
            ))}
            <a href="/assets/Risvan-Muhammed-Resume.pdf" download className="hdr-mob-resume">
              <Download size={11}/> Download Resume
            </a>
          </div>
        </div>
      </header>
    </>
  );
}