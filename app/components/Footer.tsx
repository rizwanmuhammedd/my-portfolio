







// "use client";
// export default function Footer() {
//   return (
//     <>
//       <style>{`
//         .ft { background:var(--bg,#000); border-top:1px solid rgba(200,241,53,.08); padding:28px 0; position:relative; z-index:1; font-family:'Barlow Condensed',sans-serif; transition:background .4s; }
//         .ft-inner { max-width:1280px; margin:0 auto; padding:0 24px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; }
//         .ft-logo { font-size:16px; font-weight:900; letter-spacing:.06em; text-transform:uppercase; color:#c8f135; animation:glow-pulse 4s ease-in-out infinite; }
//         .ft-logo sup { font-size:8px; color:rgba(200,241,53,.22); vertical-align:super; margin-left:1px; }
//         .ft-copy { font-size:9px; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:var(--text-dim); }
//         .ft-links { display:flex; gap:18px; }
//         .ft-link { font-size:9px; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:var(--text-dim); text-decoration:none; transition:color .18s; }
//         .ft-link:hover { color:#c8f135; }
//         @media(max-width:580px){ .ft-inner{flex-direction:column;align-items:flex-start;gap:8px;} }
//       `}</style>
//       <footer className="ft">
//         <div className="ft-inner">
//           <div className="ft-logo">RM<sup>©</sup></div>
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
  return (<>
    <style>{`
      .ft{background:var(--bg-alt);border-top:1px solid var(--border);padding:28px 0;position:relative;z-index:1;font-family:'Barlow Condensed',sans-serif;transition:background .45s;}
      .ft-inner{max-width:1280px;margin:0 auto;padding:0 32px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;}
      .ft-logo{font-size:17px;font-weight:900;letter-spacing:.06em;text-transform:uppercase;color:var(--ac);animation:glow-pulse 4s ease-in-out infinite;}
      .ft-copy{font-size:9px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--tm);}
      .ft-links{display:flex;gap:18px;}
      .ft-link{font-size:9px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--td);text-decoration:none;transition:color .18s;}
      .ft-link:hover{color:var(--ac);}
      @media(max-width:580px){.ft-inner{flex-direction:column;align-items:flex-start;gap:8px;}}
    `}</style>
    <footer className="ft">
      <div className="ft-inner">
        <div className="ft-logo">RM.</div>
        <div className="ft-copy">© {new Date().getFullYear()} Risvan Muhammed — Full Stack .NET Developer</div>
        <div className="ft-links">
          <a href="mailto:risvanmd172@gmail.com" className="ft-link">Email</a>
          <a href="tel:+916238741289" className="ft-link">Phone</a>
        </div>
      </div>
    </footer>
  </>);
}