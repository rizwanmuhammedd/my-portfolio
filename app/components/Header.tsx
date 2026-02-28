



// "use client";

// import { useEffect, useState } from "react";
// import { gsap } from "@/public/lib/gsap";
// import { Menu, X, Download } from "lucide-react";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     // Handle scroll effect
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
      
//       // Update active section
//       const sections = ['home', 'skills', 'projects', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const offsetTop = element.offsetTop;
//           const offsetHeight = element.offsetHeight;
          
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);

//     // Header animation on load
//     gsap.fromTo(
//       ".header-content",
//       { y: -50, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.5 }
//     );
//   }, []);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop - 80,
//         behavior: 'smooth'
//       });
//       setIsMenuOpen(false);
//     }
//   };

//   const navItems = [
//     { id: "home", label: "Home" },
//     { id: "skills", label: "Skills" },
//     { id: "projects", label: "Projects" },
//     { id: "contact", label: "Contact" }
//   ];

//   return (
//     <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//       scrolled 
//         ? "bg-black/90 backdrop-blur-xl border-b border-white/10 py-4" 
//         : "bg-transparent py-6"
//     }`}>
//       <div className="container mx-auto px-6 lg:px-8">
//         <nav className="flex justify-between items-center header-content">
//           {/* Logo - Left */}
//           <div 
//             className="text-2xl lg:text-3xl font-bold text-gradient cursor-pointer hover:scale-105 transition-transform duration-300"
//             onClick={() => scrollToSection("home")}
//           >
//             RM
//           </div>

//           {/* Desktop Navigation - Center */}
//           <div className="hidden md:flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
//                   activeSection === item.id 
//                     ? 'text-black bg-gradient-to-r from-primary to-primary-light shadow-lg' 
//                     : 'text-gray-300 hover:text-white hover:bg-white/10'
//                 }`}
//               >
//                 {item.label}
//                 {activeSection === item.id && (
//                   <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-light -z-10"></div>
//                 )}
//               </button>
//             ))}
//           </div>

//           {/* CTA Button - Right */}
//           <div className="hidden md:block">
//             <a
//               href="/assets/Risvan-Muhammed-Resume.pdf"
//               download
//               className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary-light text-black font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
//             >
//               <Download size={16} className="group-hover:animate-bounce" />
//               Resume
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-primary hover:text-primary-light transition-colors duration-300"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </nav>

//         {/* Mobile Navigation */}
//         <div
//           className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
//             isMenuOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0"
//           }`}
//         >
//           <div className="flex flex-col items-center gap-4">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`px-6 py-3 text-lg font-medium rounded-lg transition-all duration-300 w-48 text-center ${
//                   activeSection === item.id 
//                     ? 'text-black bg-gradient-to-r from-primary to-primary-light shadow-lg' 
//                     : 'text-white hover:text-primary hover:bg-white/10'
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//             <a
//               href="/assets/Risvan-Muhammed-Resume.pdf"
//               download
//               className="px-6 py-3 bg-gradient-to-r from-primary to-primary-light text-black font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-2"
//             >
//               <Download size={18} />
//               Download Resume
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }









"use client";

import { useEffect, useState } from "react";
import { gsap } from "@/public/lib/gsap";
import { Menu, X, Download } from "lucide-react";

const NAV = [
  { id: "home",     label: "Home" },
  { id: "skills",   label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact",  label: "Contact" },
];

export default function Header() {
  const [open,    setOpen]    = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,  setActive]  = useState("home");

  useEffect(() => {
    // entry
    gsap.fromTo(".hdr-inner",
      { opacity: 0, y: -18 },
      { opacity: 1, y: 0, duration: .7, ease: "power3.out", delay: .15 }
    );

    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const pos = window.scrollY + 110;
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
    if (el) window.scrollTo({ top: el.offsetTop - 78, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <style>{`
        .hdr {
          position: fixed; top: 0; width: 100%; z-index: 100;
          font-family: 'Barlow Condensed', sans-serif;
          transition: background .3s, border-color .3s;
          border-bottom: 1px solid transparent;
        }
        .hdr.scrolled { background: rgba(0,0,0,.97); border-bottom-color: #1a1a1a; }

        .hdr-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 24px;
          height: 60px; display: flex; align-items: center; justify-content: space-between;
        }

        /* Logo */
        .hdr-logo {
          font-size: 19px; font-weight: 900; letter-spacing: .1em; text-transform: uppercase;
          color: #fff; background: none; border: none; cursor: pointer; padding: 0;
          transition: opacity .15s;
        }
        .hdr-logo:hover { opacity: .65; }
        .hdr-logo sub { font-size: 8px; color: #2e2e2e; letter-spacing: .08em; vertical-align: sub; margin-left: 2px; }

        /* Nav */
        .hdr-nav { display: flex; align-items: center; }
        .hdr-nav-btn {
          font-size: 10px; font-weight: 800; letter-spacing: .2em; text-transform: uppercase;
          color: #3c3c3c; background: none; border: none; cursor: pointer;
          padding: 8px 13px; position: relative; transition: color .15s;
        }
        .hdr-nav-btn:hover  { color: #888; }
        .hdr-nav-btn.active { color: #fff; }
        .hdr-nav-btn.active::after {
          content: ''; position: absolute; bottom: 0; left: 13px; right: 13px;
          height: 1px; background: #fff;
        }

        /* Right */
        .hdr-right { display: flex; align-items: center; gap: 8px; }
        .hdr-cv {
          font-size: 10px; font-weight: 800; letter-spacing: .2em; text-transform: uppercase;
          background: #fff; color: #000; padding: 8px 15px;
          display: flex; align-items: center; gap: 7px; text-decoration: none;
          transition: background .15s;
        }
        .hdr-cv:hover { background: #d4d4d4; }

        .hdr-burger {
          display: none; width: 36px; height: 36px; background: none;
          border: 1px solid #1e1e1e; color: #555; cursor: pointer;
          align-items: center; justify-content: center; transition: all .15s;
        }
        .hdr-burger:hover { border-color: #444; color: #fff; }

        /* Mobile */
        .hdr-mob {
          position: absolute; top: 60px; left: 0; right: 0;
          background: #000; border-bottom: 1px solid #1a1a1a;
          max-height: 0; opacity: 0; overflow: hidden;
          transition: max-height .35s ease, opacity .25s ease;
        }
        .hdr-mob.open { max-height: 380px; opacity: 1; }
        .hdr-mob-inner { padding: 14px 24px 22px; }
        .hdr-mob-btn {
          font-size: 12px; font-weight: 800; letter-spacing: .2em; text-transform: uppercase;
          color: #3c3c3c; background: none; border: none; cursor: pointer;
          padding: 13px 0; text-align: left; width: 100%;
          border-bottom: 1px solid #0e0e0e; display: block; transition: color .15s;
        }
        .hdr-mob-btn:hover, .hdr-mob-btn.active { color: #fff; }
        .hdr-mob-cv {
          font-size: 10px; font-weight: 800; letter-spacing: .2em; text-transform: uppercase;
          background: #fff; color: #000; padding: 12px 0; margin-top: 14px;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          text-decoration: none; width: 100%; transition: background .15s;
        }
        .hdr-mob-cv:hover { background: #d4d4d4; }

        @media(max-width: 640px) {
          .hdr-nav, .hdr-cv { display: none; }
          .hdr-burger { display: flex; }
        }
      `}</style>

      <header className={`hdr ${scrolled ? "scrolled" : ""}`}>
        <div className="hdr-inner">
          <button className="hdr-logo" onClick={() => goto("home")}>
            RM<sub>©</sub>
          </button>

          <nav className="hdr-nav">
            {NAV.map(n => (
              <button key={n.id} onClick={() => goto(n.id)}
                className={`hdr-nav-btn ${active === n.id ? "active" : ""}`}>
                {n.label}
              </button>
            ))}
          </nav>

          <div className="hdr-right">
            <a href="/assets/Risvan-Muhammed-Resume.pdf" download className="hdr-cv">
              <Download size={10} strokeWidth={2.5} /> Resume
            </a>
            <button className="hdr-burger" onClick={() => setOpen(!open)}>
              {open ? <X size={14} /> : <Menu size={14} />}
            </button>
          </div>
        </div>

        <div className={`hdr-mob ${open ? "open" : ""}`}>
          <div className="hdr-mob-inner">
            {NAV.map(n => (
              <button key={n.id} onClick={() => goto(n.id)}
                className={`hdr-mob-btn ${active === n.id ? "active" : ""}`}>
                {n.label}
              </button>
            ))}
            <a href="/assets/Risvan-Muhammed-Resume.pdf" download className="hdr-mob-cv">
              <Download size={11} /> Download Resume
            </a>
          </div>
        </div>
      </header>
    </>
  );
}