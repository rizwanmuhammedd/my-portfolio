


// "use client";
// import { useEffect, useRef, useState } from "react";
// import { gsap } from "@/public/lib/gsap";
// import { ScrollTrigger } from "gsap/all";
// import { Mail, Phone, Send } from "lucide-react";

// export default function Contact() {
//   const ref = useRef<HTMLElement>(null);
//   const [form, setForm]   = useState({ name:"", email:"", message:"" });
//   const [state, setState] = useState<"idle"|"sending"|"sent">("idle");

//   useEffect(() => {
//     if (!ref.current) return;
//     const ctx = gsap.context(() => {
//       gsap.fromTo([".ct-eye",".ct-h2"],
//         { opacity:0, y:36 },
//         { opacity:1, y:0, duration:.75, stagger:.13, scrollTrigger:{ trigger:".ct-head", start:"top 82%" } });
//       gsap.fromTo(".ct-rule",
//         { scaleX:0, transformOrigin:"left" },
//         { scaleX:1, duration:.85, ease:"power3.out", scrollTrigger:{ trigger:".ct-head", start:"top 82%" } });
//       gsap.fromTo(".ct-info-item",
//         { opacity:0, x:-34 },
//         { opacity:1, x:0, duration:.65, stagger:.16, scrollTrigger:{ trigger:".ct-left", start:"top 84%" } });
//       gsap.fromTo(".ct-form",
//         { opacity:0, x:38 },
//         { opacity:1, x:0, duration:.72, scrollTrigger:{ trigger:".ct-form", start:"top 84%" } });
//     }, ref);
//     return () => ctx.revert();
//   }, []);

//   const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const onSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setState("sending");
//     setTimeout(() => {
//       setState("sent");
//       alert(`Thank you ${form.name}! I'll get back to you at ${form.email}.`);
//       setForm({ name:"", email:"", message:"" });
//       setTimeout(() => setState("idle"), 2800);
//     }, 750);
//   };

//   return (
//     <>
//       <style>{`
//         .ct-sec { background:#000; padding:100px 0; border-top:1px solid #161c09; position:relative; z-index:1; }
//         .ct-inner { max-width:1280px; margin:0 auto; padding:0 24px; }
//         .ct-grid { display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:start; margin-top:50px; }

//         /* Left */
//         .ct-lead { font-size:13px; font-weight:300; line-height:1.88; color:#283510; margin-bottom:28px; }
//         .ct-info-item { border:1px solid #161c09; padding:16px 18px; margin-bottom:8px; display:flex; align-items:center; gap:14px; transition:border-color .2s,background .2s; }
//         .ct-info-item:hover { border-color:#c8f13528; background:#c8f13504; }
//         .ct-info-icon { width:34px; height:34px; border:1px solid #161c09; display:flex; align-items:center; justify-content:center; color:#283510; flex-shrink:0; transition:all .2s; }
//         .ct-info-item:hover .ct-info-icon { border-color:#c8f13530; color:#c8f13566; }
//         .ct-info-lbl { font-family:'Barlow Condensed',sans-serif; font-size:8px; font-weight:700; letter-spacing:.28em; text-transform:uppercase; color:#161c09; display:block; margin-bottom:4px; }
//         .ct-info-val { font-family:'Barlow Condensed',sans-serif; font-size:13px; font-weight:800; color:#c8f13580; letter-spacing:.04em; text-decoration:none; transition:color .18s; }
//         .ct-info-val:hover { color:#c8f135; }

//         /* Form */
//         .ct-form { border:1px solid #161c09; padding:32px 28px; }
//         .ct-fg { margin-bottom:17px; }
//         .ct-lbl { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:700; letter-spacing:.28em; text-transform:uppercase; color:#283510; display:block; margin-bottom:7px; }
//         .ct-input { width:100%; padding:11px 14px; background:#040a01; border:1px solid #161c09; color:#c8f135; font-family:'Barlow',sans-serif; font-size:13px; font-weight:300; outline:none; transition:border-color .18s,box-shadow .18s; caret-color:#c8f135; }
//         .ct-input:focus { border-color:#c8f13538; box-shadow:0 0 0 2px #c8f13510; }
//         .ct-input::placeholder { color:#1a2309; }
//         .ct-textarea { resize:vertical; min-height:126px; }
//         .ct-submit { font-family:'Barlow Condensed',sans-serif; font-size:10px; font-weight:800; letter-spacing:.22em; text-transform:uppercase; background:#c8f135; color:#000; border:none; cursor:pointer; padding:13px 0; width:100%; display:flex; align-items:center; justify-content:center; gap:9px; transition:background .18s; }
//         .ct-submit:hover:not(:disabled) { background:#b3d820; }
//         .ct-submit:disabled { background:#0d1008; color:#283510; cursor:not-allowed; }

//         @media(max-width:1024px) { .ct-grid { grid-template-columns:1fr; gap:34px; } }
//         @media(max-width:640px)  { .ct-sec { padding:72px 0; } .ct-form { padding:22px 16px; } }
//       `}</style>

//       <section id="contact" className="ct-sec" ref={ref}>
//         <div className="ct-inner">
//           <div className="ct-head">
//             <span className="sec-eye ct-eye">( 04 ) — Get in Touch</span>
//             <h2 className="sec-h2 ct-h2">Con<span className="ghost">tact</span></h2>
//             <div className="sec-rule ct-rule"/>
//           </div>

//           <div className="ct-grid">
//             <div className="ct-left">
//               <p className="ct-lead">
//                 Available for freelance work and full-time opportunities.
//                 Reach out for collaboration or just to say hello.
//               </p>
//               <div className="ct-info-item">
//                 <div className="ct-info-icon"><Mail size={13} strokeWidth={1.5}/></div>
//                 <div>
//                   <span className="ct-info-lbl">Email</span>
//                   <a href="mailto:risvanmd172@gmail.com" className="ct-info-val">risvanmd172@gmail.com</a>
//                 </div>
//               </div>
//               <div className="ct-info-item">
//                 <div className="ct-info-icon"><Phone size={13} strokeWidth={1.5}/></div>
//                 <div>
//                   <span className="ct-info-lbl">Phone</span>
//                   <a href="tel:+916238741289" className="ct-info-val">+91 6238741289</a>
//                 </div>
//               </div>
//             </div>

//             <form onSubmit={onSubmit} className="ct-form">
//               <div className="ct-fg">
//                 <label htmlFor="name" className="ct-lbl">Your Name</label>
//                 <input type="text" id="name" name="name" value={form.name}
//                   onChange={onChange} required placeholder="Enter your name" className="ct-input"/>
//               </div>
//               <div className="ct-fg">
//                 <label htmlFor="email" className="ct-lbl">Your Email</label>
//                 <input type="email" id="email" name="email" value={form.email}
//                   onChange={onChange} required placeholder="Enter your email" className="ct-input"/>
//               </div>
//               <div className="ct-fg">
//                 <label htmlFor="message" className="ct-lbl">Message</label>
//                 <textarea id="message" name="message" value={form.message}
//                   onChange={onChange} required rows={5}
//                   placeholder="Tell me about your project…" className="ct-input ct-textarea"/>
//               </div>
//               <button type="submit" disabled={state==="sending"} className="ct-submit">
//                 <Send size={11} strokeWidth={2}/>
//                 {state==="sending" ? "Sending…" : state==="sent" ? "✓ Sent!" : "Send Message"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }







"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/public/lib/gsap";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm]   = useState({ name:"", email:"", message:"" });
  const [state, setState] = useState<"idle"|"sending"|"sent">("idle");

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo([".ct-eye",".ct-h2"],
        { opacity:0, y:36 },
        { opacity:1, y:0, duration:.75, stagger:.13, scrollTrigger:{ trigger:".ct-head", start:"top 82%" } });
      gsap.fromTo(".ct-rule",
        { scaleX:0, transformOrigin:"left" },
        { scaleX:1, duration:.85, ease:"power3.out", scrollTrigger:{ trigger:".ct-head", start:"top 82%" } });
      gsap.fromTo(".ct-info-item",
        { opacity:0, x:-50 },
        { opacity:1, x:0, duration:.7, stagger:.18, scrollTrigger:{ trigger:".ct-left", start:"top 84%" } });
      gsap.fromTo(".ct-form",
        { opacity:0, x:50 },
        { opacity:1, x:0, duration:.75, scrollTrigger:{ trigger:".ct-form", start:"top 84%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setState("sending");
    setTimeout(() => {
      setState("sent");
      alert(`Thank you ${form.name}! I'll get back to you at ${form.email}.`);
      setForm({ name:"", email:"", message:"" });
      setTimeout(() => setState("idle"), 2800);
    }, 750);
  };

  return (
    <>
      <style>{`
        .ct-sec { background:var(--bg,#000); padding:100px 0; border-top:1px solid rgba(200,241,53,.08); position:relative; z-index:1; transition:background .4s; }
        .ct-inner { max-width:1280px; margin:0 auto; padding:0 24px; }
        .ct-grid { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:start; margin-top:52px; }
        .ct-lead { font-size:15px; font-weight:300; line-height:1.9; color:var(--text-sec); margin-bottom:32px; }
        .ct-info-item { border:1px solid rgba(200,241,53,.1); padding:18px 20px; margin-bottom:8px; display:flex; align-items:center; gap:16px; transition:border-color .2s,background .2s; }
        html.light .ct-info-item { border-color:rgba(0,0,0,.1); }
        .ct-info-item:hover { border-color:rgba(200,241,53,.3); background:rgba(200,241,53,.03); }
        .ct-info-icon { width:36px; height:36px; border:1px solid rgba(200,241,53,.12); display:flex; align-items:center; justify-content:center; color:rgba(200,241,53,.35); flex-shrink:0; transition:all .22s; }
        html.light .ct-info-icon { border-color:rgba(0,0,0,.12); color:rgba(0,0,0,.4); }
        .ct-info-item:hover .ct-info-icon { border-color:rgba(200,241,53,.4); color:#c8f135; }
        .ct-info-lbl { font-family:'Barlow Condensed',sans-serif; font-size:8px; font-weight:700; letter-spacing:.28em; text-transform:uppercase; color:rgba(200,241,53,.35); display:block; margin-bottom:5px; }
        html.light .ct-info-lbl { color:rgba(0,0,0,.38); }
        .ct-info-val { font-family:'Barlow Condensed',sans-serif; font-size:14px; font-weight:800; color:rgba(255,255,255,.75); letter-spacing:.04em; text-decoration:none; transition:color .18s; }
        html.light .ct-info-val { color:rgba(0,0,0,.7); }
        .ct-info-val:hover { color:#c8f135; }
        .ct-form { border:1px solid rgba(200,241,53,.1); padding:36px 30px; transition:border-color .2s; }
        html.light .ct-form { border-color:rgba(0,0,0,.1); }
        .ct-form:focus-within { border-color:rgba(200,241,53,.28); }
        .ct-fg { margin-bottom:20px; }
        .ct-lbl { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:700; letter-spacing:.28em; text-transform:uppercase; color:rgba(200,241,53,.4); display:block; margin-bottom:8px; }
        html.light .ct-lbl { color:rgba(0,0,0,.4); }
        .ct-input { width:100%; padding:12px 15px; background:rgba(200,241,53,.025); border:1px solid rgba(200,241,53,.1); color:var(--text-pri,#fff); font-family:'Barlow',sans-serif; font-size:14px; font-weight:300; outline:none; transition:border-color .18s,box-shadow .18s; caret-color:#c8f135; }
        html.light .ct-input { background:rgba(0,0,0,.03); border-color:rgba(0,0,0,.1); color:#000; caret-color:#000; }
        .ct-input:focus { border-color:rgba(200,241,53,.35); box-shadow:0 0 0 2px rgba(200,241,53,.06); }
        html.light .ct-input:focus { border-color:rgba(0,0,0,.3); box-shadow:none; }
        .ct-input::placeholder { color:rgba(255,255,255,.15); }
        html.light .ct-input::placeholder { color:rgba(0,0,0,.22); }
        .ct-textarea { resize:vertical; min-height:130px; }
        .ct-submit { font-family:'Barlow Condensed',sans-serif; font-size:10px; font-weight:800; letter-spacing:.22em; text-transform:uppercase; background:#c8f135; color:#000; border:none; cursor:pointer; padding:14px 0; width:100%; display:flex; align-items:center; justify-content:center; gap:9px; transition:background .18s,box-shadow .18s; }
        .ct-submit:hover:not(:disabled) { background:#b3d820; box-shadow:0 8px 28px rgba(200,241,53,.35); }
        .ct-submit:disabled { background:rgba(200,241,53,.08); color:rgba(200,241,53,.3); cursor:not-allowed; }
        @media(max-width:1024px){ .ct-grid{grid-template-columns:1fr;gap:36px;} }
        @media(max-width:640px){ .ct-sec{padding:72px 0;} .ct-form{padding:24px 18px;} }
      `}</style>

      <section id="contact" className="ct-sec" ref={ref}>
        <div className="ct-inner">
          <div className="ct-head">
            <span className="sec-eye ct-eye">( 04 ) — Get in Touch</span>
            <h2 className="sec-h2 ct-h2">Con<span className="ghost">tact</span></h2>
            <div className="sec-rule ct-rule"/>
          </div>
          <div className="ct-grid">
            <div className="ct-left">
              <p className="ct-lead">Available for freelance work and full-time opportunities. Reach out for collaboration or just to say hello.</p>
              <div className="ct-info-item">
                <div className="ct-info-icon"><Mail size={13} strokeWidth={1.5}/></div>
                <div><span className="ct-info-lbl">Email</span><a href="mailto:risvanmd172@gmail.com" className="ct-info-val">risvanmd172@gmail.com</a></div>
              </div>
              <div className="ct-info-item">
                <div className="ct-info-icon"><Phone size={13} strokeWidth={1.5}/></div>
                <div><span className="ct-info-lbl">Phone</span><a href="tel:+916238741289" className="ct-info-val">+91 6238741289</a></div>
              </div>
            </div>
            <form onSubmit={onSubmit} className="ct-form">
              <div className="ct-fg">
                <label htmlFor="ct-name" className="ct-lbl">Your Name</label>
                <input type="text" id="ct-name" name="name" value={form.name} onChange={onChange} required placeholder="Enter your name" className="ct-input"/>
              </div>
              <div className="ct-fg">
                <label htmlFor="ct-email" className="ct-lbl">Your Email</label>
                <input type="email" id="ct-email" name="email" value={form.email} onChange={onChange} required placeholder="Enter your email" className="ct-input"/>
              </div>
              <div className="ct-fg">
                <label htmlFor="ct-msg" className="ct-lbl">Message</label>
                <textarea id="ct-msg" name="message" value={form.message} onChange={onChange} required rows={5} placeholder="Tell me about your project…" className="ct-input ct-textarea"/>
              </div>
              <button type="submit" disabled={state==="sending"} className="ct-submit">
                <Send size={11} strokeWidth={2}/>
                {state==="sending"?"Sending…":state==="sent"?"✓ Sent!":"Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}