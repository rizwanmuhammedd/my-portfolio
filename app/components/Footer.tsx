


// "use client";

// export default function Footer() {
//   return (
//     <>
//       <style>{`
//         .ft {
//           background: #000; border-top: 1px solid #1a1a1a;
//           padding: 32px 0; position: relative; z-index: 1;
//           font-family: 'Barlow Condensed', sans-serif;
//         }
//         .ft-inner {
//           max-width: 1280px; margin: 0 auto; padding: 0 24px;
//           display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px;
//         }
//         .ft-logo {
//           font-size: 17px; font-weight: 900; letter-spacing: .1em;
//           text-transform: uppercase; color: #fff;
//         }
//         .ft-logo sub { font-size: 8px; color: #2a2a2a; vertical-align: sub; margin-left: 2px; }
//         .ft-copy {
//           font-size: 9px; font-weight: 700; letter-spacing: .22em;
//           text-transform: uppercase; color: #2a2a2a;
//         }
//         .ft-links { display: flex; gap: 18px; }
//         .ft-link {
//           font-size: 9px; font-weight: 700; letter-spacing: .18em;
//           text-transform: uppercase; color: #2e2e2e; text-decoration: none;
//           transition: color .15s;
//         }
//         .ft-link:hover { color: #888; }
//         @media(max-width:600px) {
//           .ft-inner { flex-direction: column; align-items: flex-start; gap: 10px; }
//         }
//       `}</style>
//       <footer className="ft">
//         <div className="ft-inner">
//           <div className="ft-logo">RM<sub>©</sub></div>
//           <div className="ft-copy">© {new Date().getFullYear()} Risvan Muhammed — Full Stack .NET Developer</div>
//           <div className="ft-links">
//             <a href="mailto:risvanmd172@gmail.com" className="ft-link">Email</a>
//             <a href="tel:+916238741289" className="ft-link">Phone</a>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }




"use client";

export default function Footer() {
  return (
    <>
      <style>{`
        .ft { background:#000; border-top:1px solid #161c09; padding:28px 0; position:relative; z-index:1; font-family:'Barlow Condensed',sans-serif; }
        .ft-inner { max-width:1280px; margin:0 auto; padding:0 24px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; }
        .ft-logo { font-size:16px; font-weight:900; letter-spacing:.08em; text-transform:uppercase; color:#c8f135; animation:glow-pulse 4s ease-in-out infinite; }
        .ft-logo span { font-size:8px; color:#c8f13520; vertical-align:super; margin-left:1px; }
        .ft-copy { font-size:9px; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:#283510; }
        .ft-links { display:flex; gap:18px; }
        .ft-link { font-size:9px; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:#283510; text-decoration:none; transition:color .18s; }
        .ft-link:hover { color:#c8f135; }
        @media(max-width:580px) { .ft-inner { flex-direction:column; align-items:flex-start; gap:8px; } }
      `}</style>
      <footer className="ft">
        <div className="ft-inner">
          <div className="ft-logo">RM<span>©</span></div>
          <div className="ft-copy">© {new Date().getFullYear()} Risvan Muhammed — Full Stack .NET Developer</div>
          <div className="ft-links">
            <a href="mailto:risvanmd172@gmail.com" className="ft-link">Email</a>
            <a href="tel:+916238741289" className="ft-link">Phone</a>
          </div>
        </div>
      </footer>
    </>
  );
}