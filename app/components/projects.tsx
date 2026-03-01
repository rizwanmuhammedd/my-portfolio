




// "use client";
// import { useEffect, useRef } from "react";
// import { gsap } from "@/public/lib/gsap";
// import { ScrollTrigger } from "gsap/all";
// import { ExternalLink, Github } from "lucide-react";

// const PROJECTS = [
//   { id:1, num:"01", cat:"Full Stack", title:"Sport-X E-commerce",
//     desc:"A premium football gear e-commerce platform featuring product catalog, shopping cart, user authentication, and payment integration.",
//     tech:["React",".NET Core","SQL Server","AWS"], live:"https://sportx-sx.vercel.app/", code:"#" },
//   { id:2, num:"02", cat:"Backend", title:"Task Management API",
//     desc:"RESTful API for task management with user authentication, role-based access control, and real-time notifications via SignalR.",
//     tech:["ASP.NET Core","Entity Framework","JWT Auth","Swagger"], live:"#", code:"#" },
//   { id:3, num:"03", cat:"Frontend", title:"Portfolio Website",
//     desc:"Fully responsive portfolio website with GSAP scroll animations, typing game, and modern brutalist design language.",
//     tech:["Next.js","GSAP","Tailwind CSS","TypeScript"], live:"#", code:"#" },
// ];

// export default function Projects() {
//   const ref = useRef<HTMLElement>(null);

//   useEffect(() => {
//     if (!ref.current) return;
//     const ctx = gsap.context(() => {
//       gsap.fromTo([".pr-eye",".pr-h2"],
//         { opacity:0, y:36 },
//         { opacity:1, y:0, duration:.75, stagger:.13, scrollTrigger:{ trigger:".pr-head", start:"top 82%" } });
//       gsap.fromTo(".pr-rule",
//         { scaleX:0, transformOrigin:"left" },
//         { scaleX:1, duration:.85, ease:"power3.out", scrollTrigger:{ trigger:".pr-head", start:"top 82%" } });
//       PROJECTS.forEach((_,i) => {
//         gsap.fromTo(`.pr-${i}`,
//           { opacity:0, y:55, x:-10 },
//           { opacity:1, y:0, x:0, duration:.75, ease:"power3.out",
//             scrollTrigger:{ trigger:`.pr-${i}`, start:"top 88%" } });
//       });
//       gsap.fromTo(".pr-foot",
//         { opacity:0, y:32 },
//         { opacity:1, y:0, duration:.7, scrollTrigger:{ trigger:".pr-foot", start:"top 90%" } });
//     }, ref);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <style>{`
//         .pr-sec { background:#000; padding:100px 0; border-top:1px solid #161c09; position:relative; z-index:1; }
//         .pr-inner { max-width:1280px; margin:0 auto; padding:0 24px; }

//         .pr-row { border-bottom:1px solid #161c09; padding:44px 0; display:grid; grid-template-columns:68px 1fr 185px; gap:26px; align-items:start; transition:background .22s; position:relative; }
//         .pr-row::after { content:''; position:absolute; left:0; top:0; bottom:0; width:2px; background:#c8f135; transform:scaleY(0); transform-origin:bottom; transition:transform .4s ease; }
//         .pr-row:hover::after { transform:scaleY(1); }
//         .pr-row:hover { background:#c8f13504; }

//         .pr-num { font-family:'Barlow Condensed',sans-serif; font-size:11px; font-weight:700; letter-spacing:.2em; color:#161c09; padding-top:4px; }
//         .pr-cat { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:700; letter-spacing:.28em; text-transform:uppercase; color:#c8f13540; margin-bottom:9px; }
//         .pr-title { font-family:'Barlow Condensed',sans-serif; font-size:clamp(22px,3vw,40px); font-weight:900; text-transform:uppercase; letter-spacing:.02em; color:#fff; line-height:1; margin-bottom:14px; transition:color .22s, text-shadow .22s; }
//         .pr-row:hover .pr-title { color:#c8f135; text-shadow:0 0 36px #c8f13540; }
//         .pr-desc { font-size:13px; font-weight:300; color:#283510; line-height:1.82; max-width:510px; margin-bottom:17px; }
//         .pr-tags { display:flex; flex-wrap:wrap; gap:5px; }
//         .pr-tag { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:#283510; border:1px solid #161c09; padding:5px 10px; transition:all .18s; }
//         .pr-row:hover .pr-tag { color:#c8f13566; border-color:#c8f13520; }

//         .pr-acts { display:flex; flex-direction:column; gap:6px; padding-top:4px; }
//         .pr-btn { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:800; letter-spacing:.18em; text-transform:uppercase; padding:9px 14px; display:flex; align-items:center; gap:7px; text-decoration:none; transition:all .18s; white-space:nowrap; }
//         .pr-solid { background:#c8f135; color:#000; }
//         .pr-solid:hover { background:#b3d820; transform:translateY(-2px); }
//         .pr-ghost { background:transparent; color:#283510; border:1px solid #161c09; }
//         .pr-ghost:hover { border-color:#c8f13530; color:#c8f13566; transform:translateY(-2px); }
//         .pr-dis { opacity:.2; pointer-events:none; }

//         .pr-foot { margin-top:56px; padding-top:42px; border-top:1px solid #161c09; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px; }
//         .pr-foot-txt { font-family:'Barlow Condensed',sans-serif; font-size:clamp(17px,2.8vw,32px); font-weight:900; text-transform:uppercase; letter-spacing:.03em; color:#283510; }

//         @media(max-width:900px) { .pr-row { grid-template-columns:50px 1fr; } .pr-acts { flex-direction:row; grid-column:1/-1; } }
//         @media(max-width:640px) { .pr-sec { padding:72px 0; } .pr-row { padding:28px 0; } .pr-acts { flex-wrap:wrap; } }
//       `}</style>

//       <section id="projects" className="pr-sec" ref={ref}>
//         <div className="pr-inner">
//           <div className="pr-head" style={{marginBottom:50}}>
//             <span className="sec-eye pr-eye">( 02 ) — Selected Work</span>
//             <h2 className="sec-h2 pr-h2">Pro<span className="ghost">jects</span></h2>
//             <div className="sec-rule pr-rule"/>
//           </div>

//           {PROJECTS.map((p,i) => (
//             <div key={p.id} className={`pr-row pr-${i}`}>
//               <div className="pr-num">{p.num}</div>
//               <div>
//                 <div className="pr-cat">{p.cat}</div>
//                 <div className="pr-title">{p.title}</div>
//                 <p className="pr-desc">{p.desc}</p>
//                 <div className="pr-tags">{p.tech.map(t => <span key={t} className="pr-tag">{t}</span>)}</div>
//               </div>
//               <div className="pr-acts">
//                 {p.live !== "#"
//                   ? <a href={p.live} target="_blank" rel="noopener noreferrer" className="pr-btn pr-solid"><ExternalLink size={10} strokeWidth={2}/> Live Demo</a>
//                   : <span className="pr-btn pr-solid pr-dis"><ExternalLink size={10}/> Live Demo</span>}
//                 <a href={p.code} target="_blank" rel="noopener noreferrer"
//                   className={`pr-btn pr-ghost ${p.code==="#"?"pr-dis":""}`}>
//                   <Github size={10} strokeWidth={1.5}/> View Code
//                 </a>
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
    id:1, num:"01", cat:"Full Stack", title:"Sport-X E-commerce",
    desc:"A premium football gear e-commerce platform featuring product catalog, shopping cart, user authentication, and payment integration.",
    tech:["React",".NET Core","SQL Server","AWS"],
    live:"https://sportx-sx.vercel.app/", code:"#",
  },
  {
    id:2, num:"02", cat:"Backend", title:"Task Management API",
    desc:"RESTful API for task management with user authentication, role-based access control, and real-time notifications via SignalR.",
    tech:["ASP.NET Core","Entity Framework","JWT Auth","Swagger"],
    live:"#", code:"https://github.com/rizwanmuhammedd/Build_a_Task_Management_API.git",
  },
  {
    id:3, num:"03", cat:"Frontend", title:"Portfolio Website",
    desc:"Fully responsive portfolio website with GSAP scroll animations, typing game, and modern brutalist design language.",
    tech:["Next.js","GSAP","Tailwind CSS","TypeScript"],
    live:"https://risvanmuhammed.vercel.app", code:"#",
  },
];

export default function Projects() {
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!secRef.current) return;

    const ctx = gsap.context(() => {
      // Section header
      gsap.fromTo([".pr-eye",".pr-h2"],
        { opacity:0, y:36 },
        { opacity:1, y:0, duration:.75, stagger:.13,
          scrollTrigger:{ trigger:".pr-head", start:"top 82%" } });
      gsap.fromTo(".pr-rule",
        { scaleX:0, transformOrigin:"left" },
        { scaleX:1, duration:.85, ease:"power3.out",
          scrollTrigger:{ trigger:".pr-head", start:"top 82%" } });

      // Each project row slides in from alternating sides
      // odd  → from right (+120vw), even → from left (-120vw)
      document.querySelectorAll<HTMLElement>(".pr-item").forEach((el, i) => {
        const fromX = i % 2 === 0 ? -100 : 100; // vw equivalent in px relative to viewport
        gsap.set(el, { x: fromX + "vw", opacity:0 });

        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          onEnter: () => {
            gsap.to(el, {
              x: 0, opacity:1,
              duration: .85,
              ease: "power3.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(el, {
              x: fromX + "vw", opacity:0,
              duration: .55,
              ease: "power2.in",
            });
          },
        });
      });

      // Footer
      gsap.fromTo(".pr-foot",
        { opacity:0, y:32 },
        { opacity:1, y:0, duration:.7,
          scrollTrigger:{ trigger:".pr-foot", start:"top 90%" } });

    }, secRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .pr-sec {
          background:var(--bg,#000); padding:100px 0;
          border-top:1px solid rgba(200,241,53,.08);
          position:relative; z-index:1;
          overflow:hidden;          /* clip the sliding items */
          transition:background .4s;
        }
        .pr-inner { max-width:1280px; margin:0 auto; padding:0 24px; }

        /* Individual project item — full-width row */
        .pr-item {
          border-bottom:1px solid rgba(200,241,53,.08);
          padding:52px 0;
          display:grid;
          grid-template-columns:72px 1fr 200px;
          gap:28px; align-items:start;
          position:relative;
          transition:background .22s;
          will-change:transform;
        }
        .pr-item::before {
          content:''; position:absolute; left:0; top:0; bottom:0;
          width:2px;
          background:linear-gradient(to bottom,transparent,#c8f135,transparent);
          transform:scaleY(0); transform-origin:center;
          transition:transform .5s ease;
        }
        .pr-item:hover::before { transform:scaleY(1); }
        .pr-item:hover { background:rgba(200,241,53,.03); }

        .pr-num {
          font-family:'Barlow Condensed',sans-serif;
          font-size:11px; font-weight:700; letter-spacing:.22em;
          color:rgba(200,241,53,.2); padding-top:5px;
        }

        .pr-cat {
          font-family:'Barlow Condensed',sans-serif;
          font-size:9px; font-weight:700; letter-spacing:.3em;
          text-transform:uppercase; color:rgba(200,241,53,.45);
          margin-bottom:10px;
        }
        .pr-title {
          font-family:'Barlow Condensed',sans-serif;
          font-size:clamp(24px,3.2vw,44px); font-weight:900;
          text-transform:uppercase; letter-spacing:.02em;
          color:#fff; line-height:1; margin-bottom:16px;
          transition:color .22s, text-shadow .22s;
        }
        html.light .pr-title { color:#000; }
        .pr-item:hover .pr-title {
          color:#c8f135;
          text-shadow:0 0 40px rgba(200,241,53,.35);
        }
        .pr-desc {
          font-size:14px; font-weight:300; line-height:1.85;
          color:rgba(255,255,255,.55);
          max-width:520px; margin-bottom:18px;
        }
        html.light .pr-desc { color:rgba(0,0,0,.58); }

        .pr-tags { display:flex; flex-wrap:wrap; gap:6px; }
        .pr-tag {
          font-family:'Barlow Condensed',sans-serif;
          font-size:9px; font-weight:700; letter-spacing:.14em;
          text-transform:uppercase;
          color:rgba(255,255,255,.3);
          border:1px solid rgba(200,241,53,.12);
          padding:5px 11px; transition:all .18s;
        }
        html.light .pr-tag { color:rgba(0,0,0,.4); }
        .pr-item:hover .pr-tag {
          color:rgba(200,241,53,.65);
          border-color:rgba(200,241,53,.25);
        }

        /* Action buttons */
        .pr-acts { display:flex; flex-direction:column; gap:8px; padding-top:5px; }
        .pr-btn {
          font-family:'Barlow Condensed',sans-serif;
          font-size:9px; font-weight:800; letter-spacing:.18em;
          text-transform:uppercase; padding:10px 16px;
          display:flex; align-items:center; gap:7px;
          text-decoration:none; transition:all .2s;
          white-space:nowrap; cursor:pointer;
        }
        .pr-solid { background:#c8f135; color:#000; border:1px solid #c8f135; }
        .pr-solid:hover {
          background:#b3d820;
          transform:translateY(-2px);
          box-shadow:0 8px 24px rgba(200,241,53,.3);
        }
        .pr-ghost {
          background:transparent;
          color:rgba(255,255,255,.4);
          border:1px solid rgba(200,241,53,.15);
        }
        .pr-ghost:hover {
          border-color:rgba(200,241,53,.45);
          color:rgba(200,241,53,.8);
          transform:translateY(-2px);
        }
        html.light .pr-ghost { color:rgba(0,0,0,.45); border-color:rgba(0,0,0,.15); }
        html.light .pr-ghost:hover { color:#3a6000; border-color:#3a6000; }
        .pr-dis { opacity:.2; pointer-events:none; }

        /* Footer */
        .pr-foot {
          margin-top:58px; padding-top:44px;
          border-top:1px solid rgba(200,241,53,.08);
          display:flex; align-items:center;
          justify-content:space-between; flex-wrap:wrap; gap:16px;
        }
        .pr-foot-txt {
          font-family:'Barlow Condensed',sans-serif;
          font-size:clamp(18px,3vw,36px); font-weight:900;
          text-transform:uppercase; letter-spacing:.03em;
          color:rgba(255,255,255,.18);
        }
        html.light .pr-foot-txt { color:rgba(0,0,0,.2); }

        @media(max-width:900px){
          .pr-item{grid-template-columns:50px 1fr;}
          .pr-acts{flex-direction:row;grid-column:1/-1;}
        }
        @media(max-width:640px){
          .pr-sec{padding:72px 0;}
          .pr-item{padding:32px 0;}
          .pr-acts{flex-wrap:wrap;}
        }
      `}</style>

      <section id="projects" className="pr-sec" ref={secRef}>
        <div className="pr-inner">
          <div className="pr-head" style={{marginBottom:54}}>
            <span className="sec-eye pr-eye">( 02 ) — Selected Work</span>
            <h2 className="sec-h2 pr-h2">Pro<span className="ghost">jects</span></h2>
            <div className="sec-rule pr-rule"/>
          </div>

          {PROJECTS.map((p, i) => (
            <div key={p.id} className="pr-item">
              <div className="pr-num">{p.num}</div>
              <div>
                <div className="pr-cat">{p.cat}</div>
                <div className="pr-title">{p.title}</div>
                <p className="pr-desc">{p.desc}</p>
                <div className="pr-tags">
                  {p.tech.map(t => <span key={t} className="pr-tag">{t}</span>)}
                </div>
              </div>
              <div className="pr-acts">
                {p.live !== "#"
                  ? <a href={p.live} target="_blank" rel="noopener noreferrer" className="pr-btn pr-solid">
                      <ExternalLink size={10} strokeWidth={2}/> Live Demo
                    </a>
                  : <span className="pr-btn pr-solid pr-dis">
                      <ExternalLink size={10}/> Live Demo
                    </span>
                }
                {p.code !== "#"
                  ? <a href={p.code} target="_blank" rel="noopener noreferrer" className="pr-btn pr-ghost">
                      <Github size={10} strokeWidth={1.5}/> View Code
                    </a>
                  : <span className="pr-btn pr-ghost pr-dis">
                      <Github size={10} strokeWidth={1.5}/> View Code
                    </span>
                }
              </div>
            </div>
          ))}

          <div className="pr-foot">
            <div className="pr-foot-txt">Have a concept? Let's build it.</div>
            <a href="#contact" className="btn btn-solid">Hire Me →</a>
          </div>
        </div>
      </section>
    </>
  );
}