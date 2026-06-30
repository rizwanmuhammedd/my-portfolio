


// "use client";
// import { useEffect, useRef, useState } from "react";
// import { gsap } from "@/public/lib/gsap";
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
//         { opacity:0, x:-50 },
//         { opacity:1, x:0, duration:.7, stagger:.18, scrollTrigger:{ trigger:".ct-left", start:"top 84%" } });
//       gsap.fromTo(".ct-form",
//         { opacity:0, x:50 },
//         { opacity:1, x:0, duration:.75, scrollTrigger:{ trigger:".ct-form", start:"top 84%" } });
//     }, ref);
//     return () => ctx.revert();
//   }, []);

//   const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const onSubmit = (e: React.FormEvent) => {
//     e.preventDefault(); setState("sending");
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
//         .ct-sec { background:var(--bg,#000); padding:100px 0; border-top:1px solid rgba(200,241,53,.08); position:relative; z-index:1; transition:background .4s; }
//         .ct-inner { max-width:1280px; margin:0 auto; padding:0 24px; }
//         .ct-grid { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:start; margin-top:52px; }
//         .ct-lead { font-size:15px; font-weight:300; line-height:1.9; color:var(--text-sec); margin-bottom:32px; }
//         .ct-info-item { border:1px solid rgba(200,241,53,.1); padding:18px 20px; margin-bottom:8px; display:flex; align-items:center; gap:16px; transition:border-color .2s,background .2s; }
//         html.light .ct-info-item { border-color:rgba(0,0,0,.1); }
//         .ct-info-item:hover { border-color:rgba(200,241,53,.3); background:rgba(200,241,53,.03); }
//         .ct-info-icon { width:36px; height:36px; border:1px solid rgba(200,241,53,.12); display:flex; align-items:center; justify-content:center; color:rgba(200,241,53,.35); flex-shrink:0; transition:all .22s; }
//         html.light .ct-info-icon { border-color:rgba(0,0,0,.12); color:rgba(0,0,0,.4); }
//         .ct-info-item:hover .ct-info-icon { border-color:rgba(200,241,53,.4); color:#c8f135; }
//         .ct-info-lbl { font-family:'Barlow Condensed',sans-serif; font-size:8px; font-weight:700; letter-spacing:.28em; text-transform:uppercase; color:rgba(200,241,53,.35); display:block; margin-bottom:5px; }
//         html.light .ct-info-lbl { color:rgba(0,0,0,.38); }
//         .ct-info-val { font-family:'Barlow Condensed',sans-serif; font-size:14px; font-weight:800; color:rgba(255,255,255,.75); letter-spacing:.04em; text-decoration:none; transition:color .18s; }
//         html.light .ct-info-val { color:rgba(0,0,0,.7); }
//         .ct-info-val:hover { color:#c8f135; }
//         .ct-form { border:1px solid rgba(200,241,53,.1); padding:36px 30px; transition:border-color .2s; }
//         html.light .ct-form { border-color:rgba(0,0,0,.1); }
//         .ct-form:focus-within { border-color:rgba(200,241,53,.28); }
//         .ct-fg { margin-bottom:20px; }
//         .ct-lbl { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:700; letter-spacing:.28em; text-transform:uppercase; color:rgba(200,241,53,.4); display:block; margin-bottom:8px; }
//         html.light .ct-lbl { color:rgba(0,0,0,.4); }
//         .ct-input { width:100%; padding:12px 15px; background:rgba(200,241,53,.025); border:1px solid rgba(200,241,53,.1); color:var(--text-pri,#fff); font-family:'Barlow',sans-serif; font-size:14px; font-weight:300; outline:none; transition:border-color .18s,box-shadow .18s; caret-color:#c8f135; }
//         html.light .ct-input { background:rgba(0,0,0,.03); border-color:rgba(0,0,0,.1); color:#000; caret-color:#000; }
//         .ct-input:focus { border-color:rgba(200,241,53,.35); box-shadow:0 0 0 2px rgba(200,241,53,.06); }
//         html.light .ct-input:focus { border-color:rgba(0,0,0,.3); box-shadow:none; }
//         .ct-input::placeholder { color:rgba(255,255,255,.15); }
//         html.light .ct-input::placeholder { color:rgba(0,0,0,.22); }
//         .ct-textarea { resize:vertical; min-height:130px; }
//         .ct-submit { font-family:'Barlow Condensed',sans-serif; font-size:10px; font-weight:800; letter-spacing:.22em; text-transform:uppercase; background:#c8f135; color:#000; border:none; cursor:pointer; padding:14px 0; width:100%; display:flex; align-items:center; justify-content:center; gap:9px; transition:background .18s,box-shadow .18s; }
//         .ct-submit:hover:not(:disabled) { background:#b3d820; box-shadow:0 8px 28px rgba(200,241,53,.35); }
//         .ct-submit:disabled { background:rgba(200,241,53,.08); color:rgba(200,241,53,.3); cursor:not-allowed; }
//         @media(max-width:1024px){ .ct-grid{grid-template-columns:1fr;gap:36px;} }
//         @media(max-width:640px){ .ct-sec{padding:72px 0;} .ct-form{padding:24px 18px;} }
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
//               <p className="ct-lead">Available for freelance work and full-time opportunities. Reach out for collaboration or just to say hello.</p>
//               <div className="ct-info-item">
//                 <div className="ct-info-icon"><Mail size={13} strokeWidth={1.5}/></div>
//                 <div><span className="ct-info-lbl">Email</span><a href="mailto:risvanmd172@gmail.com" className="ct-info-val">risvanmd172@gmail.com</a></div>
//               </div>
//               <div className="ct-info-item">
//                 <div className="ct-info-icon"><Phone size={13} strokeWidth={1.5}/></div>
//                 <div><span className="ct-info-lbl">Phone</span><a href="tel:+916238741289" className="ct-info-val">+91 6238741289</a></div>
//               </div>
//             </div>
//             <form onSubmit={onSubmit} className="ct-form">
//               <div className="ct-fg">
//                 <label htmlFor="ct-name" className="ct-lbl">Your Name</label>
//                 <input type="text" id="ct-name" name="name" value={form.name} onChange={onChange} required placeholder="Enter your name" className="ct-input"/>
//               </div>
//               <div className="ct-fg">
//                 <label htmlFor="ct-email" className="ct-lbl">Your Email</label>
//                 <input type="email" id="ct-email" name="email" value={form.email} onChange={onChange} required placeholder="Enter your email" className="ct-input"/>
//               </div>
//               <div className="ct-fg">
//                 <label htmlFor="ct-msg" className="ct-lbl">Message</label>
//                 <textarea id="ct-msg" name="message" value={form.message} onChange={onChange} required rows={5} placeholder="Tell me about your project…" className="ct-input ct-textarea"/>
//               </div>
//               <button type="submit" disabled={state==="sending"} className="ct-submit">
//                 <Send size={11} strokeWidth={2}/>
//                 {state==="sending"?"Sending…":state==="sent"?"✓ Sent!":"Send Message"}
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
import { Mail, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [state, setState] = useState<"idle"|"sending"|"sent">("idle");
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
    animatingOut: boolean;
  } | null>(null);

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ show: true, message, type, animatingOut: false });
  };

  useEffect(() => {
    if (!toast) return;
    if (toast.animatingOut) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 350);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setToast(prev => prev ? { ...prev, animatingOut: true } : null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo([".ct-eye",".ct-h2"],{opacity:0,y:44},{opacity:1,y:0,duration:.85,stagger:.14,ease:"power4.out",scrollTrigger:{trigger:".ct-head",start:"top 82%"}});
      gsap.fromTo(".ct-rule",{scaleX:0,transformOrigin:"left"},{scaleX:1,duration:.9,ease:"power3.out",scrollTrigger:{trigger:".ct-head",start:"top 82%"}});
      gsap.fromTo(".ct-info",{opacity:0,x:-48},{opacity:1,x:0,duration:.75,stagger:.18,scrollTrigger:{trigger:".ct-left",start:"top 84%"}});
      gsap.fromTo(".ct-form",{opacity:0,x:48},{opacity:1,x:0,duration:.8,scrollTrigger:{trigger:".ct-form",start:"top 84%"}});
    },ref);
    return ()=>ctx.revert();
  },[]);

  // TO RECEIVE EMAILS: Sign up at https://formspree.io/ (takes 30 seconds),
  // create a new form, and replace the placeholder ID below with your Formspree Form ID.
  const FORMSPREE_FORM_ID = "xbdvaygq"; // Replace this with your form ID

  const onChange=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>setForm({...form,[e.target.name]:e.target.value});
  
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setState("sent");
        showToast(`Thank you ${form.name}! Your message has been sent successfully.`, "success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setState("idle"), 2800);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setState("idle");
      showToast("Oops! There was a problem sending your message. Please try again.", "error");
    }
  };

  return (<>
    <style>{`
      .ct-sec{background:var(--bg);padding:100px 0;border-top:1px solid var(--border);position:relative;z-index:1;transition:background .45s;}
      .ct-inner{max-width:1280px;margin:0 auto;padding:0 32px;}
      .ct-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;margin-top:52px;}
      .ct-lead{font-size:15px;font-weight:300;line-height:1.9;color:var(--ts);margin-bottom:32px;}
      .ct-info{border:1px solid var(--border);padding:18px 20px;margin-bottom:8px;display:flex;align-items:center;gap:16px;transition:border-color .2s,background .2s;}
      .ct-info:hover{border-color:var(--border-ac);background:var(--ac-ghost);}
      .ct-iico{width:36px;height:36px;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;color:var(--td);flex-shrink:0;transition:all .22s;}
      .ct-info:hover .ct-iico{border-color:var(--border-ac);color:var(--ac);}
      .ct-ilbl{font-family:'Barlow Condensed',sans-serif;font-size:8px;font-weight:700;letter-spacing:.28em;text-transform:uppercase;color:var(--td);display:block;margin-bottom:5px;}
      .ct-ival{font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:800;color:var(--ts);letter-spacing:.04em;text-decoration:none;transition:color .18s;}
      .ct-ival:hover{color:var(--ac);}
      .ct-form{border:1px solid var(--border);padding:36px 30px;transition:border-color .2s;}
      .ct-form:focus-within{border-color:var(--border-ac);}
      .ct-fg{margin-bottom:20px;}
      .ct-lbl{font-family:'Barlow Condensed',sans-serif;font-size:9px;font-weight:700;letter-spacing:.28em;text-transform:uppercase;color:var(--td);display:block;margin-bottom:8px;}
      .ct-inp{width:100%;padding:12px 15px;background:var(--inp);border:1px solid var(--border);color:var(--tp);font-family:'Barlow',sans-serif;font-size:14px;font-weight:300;outline:none;transition:border-color .18s,box-shadow .18s;caret-color:var(--ac);}
      .ct-inp:focus{border-color:var(--border-ac);box-shadow:0 0 0 2px var(--ac-ghost);}
      .ct-inp::placeholder{color:var(--tm);}
      .ct-ta{resize:vertical;min-height:130px;}
      .ct-sub{font-family:'Barlow Condensed',sans-serif;font-size:10px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;background:var(--ac);color:#000;border:none;cursor:pointer;padding:14px 0;width:100%;display:flex;align-items:center;justify-content:center;gap:9px;transition:background .18s,box-shadow .18s;}
      .ct-sub:hover:not(:disabled){background:var(--ac2);box-shadow:0 8px 28px rgba(200,241,53,.22);}
      html.light .ct-sub:hover:not(:disabled){box-shadow:0 8px 28px rgba(74,112,0,.18);}
      .ct-sub:disabled{background:var(--border);color:var(--tm);cursor:not-allowed;}
      @media(max-width:1024px){.ct-grid{grid-template-columns:1fr;gap:36px;}}
      @media(max-width:640px){.ct-sec{padding:72px 0;}.ct-form{padding:24px 18px;}}

      /* Toast Styles */
      :root {
        --err: #ef4444;
      }
      html.light {
        --err: #d93838;
      }
      .toast-container {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 9999;
        pointer-events: none;
        animation: toastIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
      .toast-container.toast-out {
        animation: toastOut 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
      @keyframes toastIn {
        from { opacity: 0; transform: translateY(24px) scale(0.95); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes toastOut {
        from { opacity: 1; transform: translateY(0) scale(1); }
        to { opacity: 0; transform: translateY(24px) scale(0.95); }
      }
      .toast-body {
        pointer-events: auto;
        display: flex;
        align-items: center;
        gap: 16px;
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-left: 4px solid var(--ac);
        padding: 16px 20px;
        min-width: 320px;
        max-width: 420px;
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
        transition: all 0.3s ease;
        font-family: 'Barlow', sans-serif;
      }
      html.light .toast-body {
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
      }
      .toast-body.toast-error {
        border-left-color: var(--err);
      }
      .toast-icon {
        color: var(--ac);
        flex-shrink: 0;
      }
      .toast-body.toast-error .toast-icon {
        color: var(--err);
      }
      .toast-content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }
      .toast-title {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: var(--tp);
      }
      .toast-desc {
        font-size: 13px;
        font-weight: 300;
        color: var(--ts);
        margin-top: 2px;
        line-height: 1.4;
      }
      .toast-close {
        background: none;
        border: none;
        color: var(--td);
        font-size: 20px;
        cursor: pointer;
        padding: 4px;
        line-height: 1;
        transition: color 0.18s;
      }
      .toast-close:hover {
        color: var(--tp);
      }
      @media (max-width: 640px) {
        .toast-container {
          bottom: 16px;
          left: 16px;
          right: 16px;
        }
        .toast-body {
          min-width: 0;
          width: 100%;
        }
      }
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
            <div className="ct-info">
              <div className="ct-iico"><Mail size={13} strokeWidth={1.5}/></div>
              <div><span className="ct-ilbl">Email</span><a href="mailto:risvanmd172@gmail.com" className="ct-ival">risvanmd172@gmail.com</a></div>
            </div>
            <div className="ct-info">
              <div className="ct-iico"><Phone size={13} strokeWidth={1.5}/></div>
              <div><span className="ct-ilbl">Phone</span><a href="tel:+916238741289" className="ct-ival">+91 6238741289</a></div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="ct-form">
            <div className="ct-fg">
              <label htmlFor="ct-name" className="ct-lbl">Your Name</label>
              <input type="text" id="ct-name" name="name" value={form.name} onChange={onChange} required placeholder="Enter your name" className="ct-inp"/>
            </div>
            <div className="ct-fg">
              <label htmlFor="ct-email" className="ct-lbl">Your Email</label>
              <input type="email" id="ct-email" name="email" value={form.email} onChange={onChange} required placeholder="Enter your email" className="ct-inp"/>
            </div>
            <div className="ct-fg">
              <label htmlFor="ct-msg" className="ct-lbl">Message</label>
              <textarea id="ct-msg" name="message" value={form.message} onChange={onChange} required rows={5} placeholder="Tell me about your project…" className="ct-inp ct-ta"/>
            </div>
            <button type="submit" disabled={state==="sending"} className="ct-sub">
              <Send size={11} strokeWidth={2}/>
              {state==="sending"?"Sending…":state==="sent"?"✓ Sent!":"Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
    {toast && (
      <div className={`toast-container ${toast.animatingOut ? "toast-out" : ""}`}>
        <div className={`toast-body toast-${toast.type}`}>
          {toast.type === "success" ? (
            <CheckCircle size={18} className="toast-icon" strokeWidth={2} />
          ) : (
            <AlertCircle size={18} className="toast-icon" strokeWidth={2} />
          )}
          <div className="toast-content">
            <span className="toast-title">{toast.type === "success" ? "Success" : "Error"}</span>
            <p className="toast-desc">{toast.message}</p>
          </div>
          <button className="toast-close" onClick={() => setToast(prev => prev ? { ...prev, animatingOut: true } : null)}>&times;</button>
        </div>
      </div>
    )}
  </>);
}