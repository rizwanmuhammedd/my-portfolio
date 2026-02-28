

// "use client";

// import { useEffect, useState } from "react";
// import { gsap } from "gsap/gsap-core";
// import { Mail, Phone, Send } from "lucide-react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   useEffect(() => {
//     // Animate section title
//     gsap.fromTo(
//       ".contact-title",
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         delay: 0.3,
//         ease: "power3.out"
//       }
//     );

//     // Animate contact info
//     gsap.fromTo(
//       ".contact-info",
//       { opacity: 0, x: -60 },
//       {
//         opacity: 1,
//         x: 0,
//         duration: 1,
//         stagger: 0.2,
//         delay: 0.5,
//         ease: "power3.out"
//       }
//     );

//     // Animate form
//     gsap.fromTo(
//       ".contact-form",
//       { opacity: 0, x: 60 },
//       {
//         opacity: 1,
//         x: 0,
//         duration: 1,
//         delay: 0.7,
//         ease: "power3.out"
//       }
//     );
//   }, []);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert(`Thank you, ${formData.name}! I will get back to you at ${formData.email}`);
//     setFormData({ name: "", email: "", message: "" });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <section id="contact" className="relative z-10 min-h-screen flex items-center py-20 px-4">
//       <div className="container mx-auto max-w-6xl">
//         {/* Section Title */}
//         <div className="text-center mb-16">
//           <h2 className="contact-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
//             Get In <span className="text-gradient">Touch</span>
//           </h2>
//           <div className="w-20 h-1 bg-primary mx-auto"></div>
//         </div>

//         {/* Contact Section */}
//         <div className="contact-section grid lg:grid-cols-2 gap-12 lg:gap-16">
//           {/* Contact Info */}
//           <div className="space-y-8">
//             <div className="contact-info">
//               <h3 className="text-3xl font-bold mb-4">Let's Work Together</h3>
//               <p className="text-gray-300 text-lg leading-relaxed mb-8">
//                 I'm available for freelance work and full-time opportunities. Feel free to reach out 
//                 for collaboration or just to say hello!
//               </p>
//             </div>

//             <div className="contact-info bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]">
//               <div className="flex items-center gap-4">
//                 <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
//                   <Mail size={24} className="text-black" />
//                 </div>
//                 <div>
//                   <h4 className="text-sm uppercase tracking-wider text-primary mb-1">Email</h4>
//                   <a
//                     href="mailto:risvanmd172@gmail.com"
//                     className="text-lg font-semibold text-white hover:text-primary transition-colors"
//                   >
//                     risvanmd172@gmail.com
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="contact-info bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]">
//               <div className="flex items-center gap-4">
//                 <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
//                   <Phone size={24} className="text-black" />
//                 </div>
//                 <div>
//                   <h4 className="text-sm uppercase tracking-wider text-primary mb-1">Phone</h4>
//                   <a
//                     href="tel:+916238741289"
//                     className="text-lg font-semibold text-white hover:text-primary transition-colors"
//                   >
//                     +91 6238741289
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="contact-form bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6"
//           >
//             <div>
//               <label htmlFor="name" className="block text-white font-semibold mb-2">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
//                 placeholder="Enter your name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-white font-semibold mb-2">
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
//                 placeholder="Enter your email"
//               />
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-white font-semibold mb-2">
//                 Your Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows={5}
//                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
//                 placeholder="Tell me about your project..."
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full px-8 py-4 bg-primary text-black font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
//             >
//               <Send size={20} className="group-hover:translate-x-1 transition-transform" />
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }






"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/public/lib/gsap";
import { ScrollTrigger } from "gsap/all";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [state, setState] = useState<"idle"|"sending"|"sent">("idle");

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo([".ct-eye",".ct-h2"],
        { opacity:0, y:28 },
        { opacity:1, y:0, duration:.65, stagger:.12,
          scrollTrigger:{ trigger:".ct-head", start:"top 82%" } });
      gsap.fromTo(".ct-rule",
        { scaleX:0, transformOrigin:"left" },
        { scaleX:1, duration:.75, ease:"power3.out",
          scrollTrigger:{ trigger:".ct-head", start:"top 82%" } });
      gsap.fromTo(".ct-info",
        { opacity:0, x:-30 },
        { opacity:1, x:0, duration:.6, stagger:.15,
          scrollTrigger:{ trigger:".ct-grid", start:"top 85%" } });
      gsap.fromTo(".ct-form",
        { opacity:0, x:30 },
        { opacity:1, x:0, duration:.65,
          scrollTrigger:{ trigger:".ct-form", start:"top 85%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    setTimeout(() => {
      setState("sent");
      alert(`Thank you, ${form.name}! I will get back to you at ${form.email}`);
      setForm({ name:"", email:"", message:"" });
      setTimeout(() => setState("idle"), 2500);
    }, 700);
  };

  return (
    <>
      <style>{`
        .ct-sec {
          background: #000; padding: 100px 0;
          border-top: 1px solid #1a1a1a; position: relative; z-index: 1;
        }
        .ct-inner { max-width: 1280px; margin: 0 auto; padding: 0 24px; }

        .ct-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start;
          margin-top: 52px;
        }

        /* ── Left ── */
        .ct-lead {
          font-size: 13px; font-weight: 300; line-height: 1.85; color: #424242;
          margin-bottom: 32px;
        }
        .ct-info {
          border: 1px solid #1a1a1a; padding: 18px 20px; margin-bottom: 8px;
          display: flex; align-items: center; gap: 16px; transition: border-color .18s;
        }
        .ct-info:hover { border-color: #2e2e2e; }
        .ct-info-icon {
          width: 34px; height: 34px; border: 1px solid #1e1e1e;
          display: flex; align-items: center; justify-content: center; color: #3e3e3e; flex-shrink: 0;
        }
        .ct-info-lbl {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 8px; font-weight: 700; letter-spacing: .28em; text-transform: uppercase;
          color: #2e2e2e; display: block; margin-bottom: 4px;
        }
        .ct-info-val {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 800; color: #fff; letter-spacing: .04em;
          text-decoration: none; transition: color .15s;
        }
        .ct-info-val:hover { color: #aaa; }

        /* ── Form ── */
        .ct-form { border: 1px solid #1a1a1a; padding: 34px 30px; }
        .ct-fg { margin-bottom: 18px; }
        .ct-lbl {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px; font-weight: 700; letter-spacing: .28em; text-transform: uppercase;
          color: #383838; display: block; margin-bottom: 8px;
        }
        .ct-input {
          width: 100%; padding: 11px 14px;
          background: #050505; border: 1px solid #1a1a1a; color: #fff;
          font-family: 'Barlow', sans-serif; font-size: 13px; font-weight: 300;
          outline: none; transition: border-color .15s;
        }
        .ct-input:focus { border-color: #2e2e2e; }
        .ct-input::placeholder { color: #222; }
        .ct-textarea { resize: vertical; min-height: 128px; }
        .ct-submit {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 800; letter-spacing: .22em; text-transform: uppercase;
          background: #fff; color: #000; border: none; cursor: pointer;
          padding: 13px 0; width: 100%;
          display: flex; align-items: center; justify-content: center; gap: 9px;
          transition: background .15s;
        }
        .ct-submit:hover:not(:disabled) { background: #d4d4d4; }
        .ct-submit:disabled { background: #0c0c0c; color: #2a2a2a; border: 1px solid #1a1a1a; cursor: not-allowed; }

        @media(max-width:1024px) { .ct-grid { grid-template-columns: 1fr; gap: 36px; } }
        @media(max-width:640px) {
          .ct-sec { padding: 72px 0; }
          .ct-form { padding: 24px 18px; }
        }
      `}</style>

      <section id="contact" className="ct-sec" ref={ref}>
        <div className="ct-inner">
          <div className="ct-head">
            <span className="ilu-eyebrow ct-eye">( 03 ) — Get in Touch</span>
            <h2 className="ilu-h2 ct-h2">Con<span className="ghost">tact</span></h2>
            <div className="ilu-rule ct-rule" />
          </div>

          <div className="ct-grid">
            {/* Left */}
            <div>
              <p className="ct-lead ct-info" style={{ border:"none", padding:0, marginBottom:28, display:"block" }}>
                Available for freelance work and full-time opportunities. Reach out for
                collaboration or just to say hello.
              </p>
              <div className="ct-info">
                <div className="ct-info-icon"><Mail size={13} strokeWidth={1.5} /></div>
                <div>
                  <span className="ct-info-lbl">Email</span>
                  <a href="mailto:risvanmd172@gmail.com" className="ct-info-val">risvanmd172@gmail.com</a>
                </div>
              </div>
              <div className="ct-info">
                <div className="ct-info-icon"><Phone size={13} strokeWidth={1.5} /></div>
                <div>
                  <span className="ct-info-lbl">Phone</span>
                  <a href="tel:+916238741289" className="ct-info-val">+91 6238741289</a>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="ct-form">
              <div className="ct-fg">
                <label htmlFor="name" className="ct-lbl">Your Name</label>
                <input type="text" id="name" name="name" value={form.name}
                  onChange={handleChange} required placeholder="Enter your name" className="ct-input" />
              </div>
              <div className="ct-fg">
                <label htmlFor="email" className="ct-lbl">Your Email</label>
                <input type="email" id="email" name="email" value={form.email}
                  onChange={handleChange} required placeholder="Enter your email" className="ct-input" />
              </div>
              <div className="ct-fg">
                <label htmlFor="message" className="ct-lbl">Message</label>
                <textarea id="message" name="message" value={form.message}
                  onChange={handleChange} required rows={5}
                  placeholder="Tell me about your project..." className="ct-input ct-textarea" />
              </div>
              <button type="submit" disabled={state === "sending"} className="ct-submit">
                <Send size={11} strokeWidth={2} />
                {state === "sending" ? "Sending…" : state === "sent" ? "✓ Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}