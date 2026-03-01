



// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "@/public/lib/gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ExternalLink, Github } from "lucide-react";

// const PROJECTS = [
//   {
//     id: 1, num: "01", cat: "Full Stack",
//     title: "Sport-X E-commerce",
//     desc: "A premium football gear e-commerce platform featuring product catalog, shopping cart, user authentication, and payment integration.",
//     tech: ["React",".NET Core","SQL Server","Azure"],
//     live: "https://sportx-sx.vercel.app/",
//     code: "#",
//   },
//   {
//     id: 2, num: "02", cat: "Backend",
//     title: "Task Management API",
//     desc: "RESTful API for task management with user authentication, role-based access control, and real-time notifications.",
//     tech: ["ASP.NET Core","Entity Framework","JWT Auth","Swagger"],
//     live: "#",
//     code: "#",
//   },
//   {
//     id: 3, num: "03", cat: "Frontend",
//     title: "Portfolio Website",
//     desc: "Fully responsive portfolio website showcasing skills, projects, and contact information with modern brutalist design.",
//     tech: ["Next.js","GSAP","Tailwind CSS","TypeScript"],
//     live: "#",
//     code: "#",
//   },
// ];

// export default function Projects() {
//   const ref = useRef<HTMLElement>(null);

//   useEffect(() => {
//     if (!ref.current) return;
//     const ctx = gsap.context(() => {
//       gsap.fromTo([".pr-eye",".pr-h2"],
//         { opacity:0, y:28 },
//         { opacity:1, y:0, duration:.65, stagger:.12,
//           scrollTrigger:{ trigger:".pr-head", start:"top 82%" } });
//       gsap.fromTo(".pr-rule",
//         { scaleX:0, transformOrigin:"left" },
//         { scaleX:1, duration:.75, ease:"power3.out",
//           scrollTrigger:{ trigger:".pr-head", start:"top 82%" } });
//       PROJECTS.forEach((_, i) => {
//         gsap.fromTo(`.pr-row-${i}`,
//           { opacity:0, y:46 },
//           { opacity:1, y:0, duration:.65, ease:"power3.out",
//             scrollTrigger:{ trigger:`.pr-row-${i}`, start:"top 87%" } });
//       });
//       gsap.fromTo(".pr-cta-wrap",
//         { opacity:0, y:28 },
//         { opacity:1, y:0, duration:.6,
//           scrollTrigger:{ trigger:".pr-cta-wrap", start:"top 90%" } });
//     }, ref);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <style>{`
//         .pr-sec {
//           background: #000; padding: 100px 0;
//           border-top: 1px solid #1a1a1a; position: relative; z-index: 1;
//         }
//         .pr-inner { max-width: 1280px; margin: 0 auto; padding: 0 24px; }

//         /* Row */
//         .pr-row {
//           border-bottom: 1px solid #1a1a1a; padding: 44px 0;
//           display: grid; grid-template-columns: 72px 1fr 190px; gap: 28px; align-items: start;
//           transition: background .18s;
//         }
//         .pr-row:hover { background: rgba(255,255,255,.014); }
//         .pr-num {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 11px; font-weight: 700; letter-spacing: .2em; color: #212121; padding-top: 6px;
//         }
//         .pr-mid {}
//         .pr-cat {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 9px; font-weight: 700; letter-spacing: .28em; text-transform: uppercase;
//           color: #2e2e2e; margin-bottom: 10px;
//         }
//         .pr-title {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: clamp(24px,3.2vw,42px); font-weight: 900; text-transform: uppercase;
//           letter-spacing: .02em; color: #fff; line-height: 1; margin-bottom: 14px;
//           transition: color .15s;
//         }
//         .pr-row:hover .pr-title { color: #bbb; }
//         .pr-desc {
//           font-size: 13px; font-weight: 300; color: #404040; line-height: 1.8;
//           max-width: 520px; margin-bottom: 18px;
//         }
//         .pr-tags { display: flex; flex-wrap: wrap; gap: 5px; }
//         .pr-tag {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 9px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
//           color: #2e2e2e; border: 1px solid #1a1a1a; padding: 5px 10px;
//         }

//         /* Actions */
//         .pr-acts { display: flex; flex-direction: column; gap: 6px; padding-top: 6px; }
//         .pr-act {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 9px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase;
//           padding: 9px 15px; display: flex; align-items: center; gap: 7px;
//           text-decoration: none; transition: all .15s; white-space: nowrap;
//         }
//         .pr-act-primary { background: #fff; color: #000; }
//         .pr-act-primary:hover { background: #d4d4d4; }
//         .pr-act-ghost { background: transparent; color: #3a3a3a; border: 1px solid #1e1e1e; }
//         .pr-act-ghost:hover { border-color: #444; color: #888; }
//         .pr-act-disabled { opacity: .22; pointer-events: none; }

//         /* CTA footer */
//         .pr-cta-wrap {
//           margin-top: 60px; padding-top: 44px; border-top: 1px solid #1a1a1a;
//           display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 18px;
//         }
//         .pr-cta-copy {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: clamp(18px,3vw,34px); font-weight: 900; text-transform: uppercase;
//           letter-spacing: .03em; color: #2e2e2e;
//         }

//         @media(max-width:900px) {
//           .pr-row { grid-template-columns: 50px 1fr; }
//           .pr-acts { flex-direction: row; grid-column: 1/-1; }
//         }
//         @media(max-width:640px) {
//           .pr-sec { padding: 72px 0; }
//           .pr-row { padding: 30px 0; }
//           .pr-acts { flex-wrap: wrap; }
//         }
//       `}</style>

//       <section id="projects" className="pr-sec" ref={ref}>
//         <div className="pr-inner">
//           <div className="pr-head" style={{ marginBottom: 52 }}>
//             <span className="ilu-eyebrow pr-eye">( 02 ) — Selected Work</span>
//             <h2 className="ilu-h2 pr-h2">Pro<span className="ghost">jects</span></h2>
//             <div className="ilu-rule pr-rule" />
//           </div>

//           {PROJECTS.map((p, i) => (
//             <div key={p.id} className={`pr-row pr-row-${i}`}>
//               <div className="pr-num">{p.num}</div>
//               <div className="pr-mid">
//                 <div className="pr-cat">{p.cat}</div>
//                 <div className="pr-title">{p.title}</div>
//                 <p className="pr-desc">{p.desc}</p>
//                 <div className="pr-tags">
//                   {p.tech.map(t => <span key={t} className="pr-tag">{t}</span>)}
//                 </div>
//               </div>
//               <div className="pr-acts">
//                 {p.live !== "#"
//                   ? <a href={p.live} target="_blank" rel="noopener noreferrer" className="pr-act pr-act-primary">
//                       <ExternalLink size={10} strokeWidth={2} /> Live Demo
//                     </a>
//                   : <span className="pr-act pr-act-primary pr-act-disabled">
//                       <ExternalLink size={10} /> Live Demo
//                     </span>
//                 }
//                 <a href={p.code} target="_blank" rel="noopener noreferrer"
//                   className={`pr-act pr-act-ghost ${p.code === "#" ? "pr-act-disabled" : ""}`}>
//                   <Github size={10} strokeWidth={1.5} /> View Code
//                 </a>
//               </div>
//             </div>
//           ))}

//           <div className="pr-cta-wrap">
//             <div className="pr-cta-copy">Have a concept? Let's build it.</div>
//             <a href="#contact" className="ilu-btn ilu-btn-white">Hire Me →</a>
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
  { id:1, num:"01", cat:"Full Stack", title:"Sport-X E-commerce",
    desc:"A premium football gear e-commerce platform featuring product catalog, shopping cart, user authentication, and payment integration.",
    tech:["React",".NET Core","SQL Server","AWS"], live:"https://sportx-sx.vercel.app/", code:"#" },
  { id:2, num:"02", cat:"Backend", title:"Task Management API",
    desc:"RESTful API for task management with user authentication, role-based access control, and real-time notifications via SignalR.",
    tech:["ASP.NET Core","Entity Framework","JWT Auth","Swagger"], live:"#", code:"#" },
  { id:3, num:"03", cat:"Frontend", title:"Portfolio Website",
    desc:"Fully responsive portfolio website with GSAP scroll animations, typing game, and modern brutalist design language.",
    tech:["Next.js","GSAP","Tailwind CSS","TypeScript"], live:"#", code:"#" },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo([".pr-eye",".pr-h2"],
        { opacity:0, y:36 },
        { opacity:1, y:0, duration:.75, stagger:.13, scrollTrigger:{ trigger:".pr-head", start:"top 82%" } });
      gsap.fromTo(".pr-rule",
        { scaleX:0, transformOrigin:"left" },
        { scaleX:1, duration:.85, ease:"power3.out", scrollTrigger:{ trigger:".pr-head", start:"top 82%" } });
      PROJECTS.forEach((_,i) => {
        gsap.fromTo(`.pr-${i}`,
          { opacity:0, y:55, x:-10 },
          { opacity:1, y:0, x:0, duration:.75, ease:"power3.out",
            scrollTrigger:{ trigger:`.pr-${i}`, start:"top 88%" } });
      });
      gsap.fromTo(".pr-foot",
        { opacity:0, y:32 },
        { opacity:1, y:0, duration:.7, scrollTrigger:{ trigger:".pr-foot", start:"top 90%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .pr-sec { background:#000; padding:100px 0; border-top:1px solid #161c09; position:relative; z-index:1; }
        .pr-inner { max-width:1280px; margin:0 auto; padding:0 24px; }

        .pr-row { border-bottom:1px solid #161c09; padding:44px 0; display:grid; grid-template-columns:68px 1fr 185px; gap:26px; align-items:start; transition:background .22s; position:relative; }
        .pr-row::after { content:''; position:absolute; left:0; top:0; bottom:0; width:2px; background:#c8f135; transform:scaleY(0); transform-origin:bottom; transition:transform .4s ease; }
        .pr-row:hover::after { transform:scaleY(1); }
        .pr-row:hover { background:#c8f13504; }

        .pr-num { font-family:'Barlow Condensed',sans-serif; font-size:11px; font-weight:700; letter-spacing:.2em; color:#161c09; padding-top:4px; }
        .pr-cat { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:700; letter-spacing:.28em; text-transform:uppercase; color:#c8f13540; margin-bottom:9px; }
        .pr-title { font-family:'Barlow Condensed',sans-serif; font-size:clamp(22px,3vw,40px); font-weight:900; text-transform:uppercase; letter-spacing:.02em; color:#fff; line-height:1; margin-bottom:14px; transition:color .22s, text-shadow .22s; }
        .pr-row:hover .pr-title { color:#c8f135; text-shadow:0 0 36px #c8f13540; }
        .pr-desc { font-size:13px; font-weight:300; color:#283510; line-height:1.82; max-width:510px; margin-bottom:17px; }
        .pr-tags { display:flex; flex-wrap:wrap; gap:5px; }
        .pr-tag { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:#283510; border:1px solid #161c09; padding:5px 10px; transition:all .18s; }
        .pr-row:hover .pr-tag { color:#c8f13566; border-color:#c8f13520; }

        .pr-acts { display:flex; flex-direction:column; gap:6px; padding-top:4px; }
        .pr-btn { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:800; letter-spacing:.18em; text-transform:uppercase; padding:9px 14px; display:flex; align-items:center; gap:7px; text-decoration:none; transition:all .18s; white-space:nowrap; }
        .pr-solid { background:#c8f135; color:#000; }
        .pr-solid:hover { background:#b3d820; transform:translateY(-2px); }
        .pr-ghost { background:transparent; color:#283510; border:1px solid #161c09; }
        .pr-ghost:hover { border-color:#c8f13530; color:#c8f13566; transform:translateY(-2px); }
        .pr-dis { opacity:.2; pointer-events:none; }

        .pr-foot { margin-top:56px; padding-top:42px; border-top:1px solid #161c09; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px; }
        .pr-foot-txt { font-family:'Barlow Condensed',sans-serif; font-size:clamp(17px,2.8vw,32px); font-weight:900; text-transform:uppercase; letter-spacing:.03em; color:#283510; }

        @media(max-width:900px) { .pr-row { grid-template-columns:50px 1fr; } .pr-acts { flex-direction:row; grid-column:1/-1; } }
        @media(max-width:640px) { .pr-sec { padding:72px 0; } .pr-row { padding:28px 0; } .pr-acts { flex-wrap:wrap; } }
      `}</style>

      <section id="projects" className="pr-sec" ref={ref}>
        <div className="pr-inner">
          <div className="pr-head" style={{marginBottom:50}}>
            <span className="sec-eye pr-eye">( 02 ) — Selected Work</span>
            <h2 className="sec-h2 pr-h2">Pro<span className="ghost">jects</span></h2>
            <div className="sec-rule pr-rule"/>
          </div>

          {PROJECTS.map((p,i) => (
            <div key={p.id} className={`pr-row pr-${i}`}>
              <div className="pr-num">{p.num}</div>
              <div>
                <div className="pr-cat">{p.cat}</div>
                <div className="pr-title">{p.title}</div>
                <p className="pr-desc">{p.desc}</p>
                <div className="pr-tags">{p.tech.map(t => <span key={t} className="pr-tag">{t}</span>)}</div>
              </div>
              <div className="pr-acts">
                {p.live !== "#"
                  ? <a href={p.live} target="_blank" rel="noopener noreferrer" className="pr-btn pr-solid"><ExternalLink size={10} strokeWidth={2}/> Live Demo</a>
                  : <span className="pr-btn pr-solid pr-dis"><ExternalLink size={10}/> Live Demo</span>}
                <a href={p.code} target="_blank" rel="noopener noreferrer"
                  className={`pr-btn pr-ghost ${p.code==="#"?"pr-dis":""}`}>
                  <Github size={10} strokeWidth={1.5}/> View Code
                </a>
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