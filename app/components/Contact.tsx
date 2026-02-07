
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
//         scrollTrigger: {
//           trigger: ".contact-title",
//           start: "top 80%",
//         },
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
//         scrollTrigger: {
//           trigger: ".contact-section",
//           start: "top 70%",
//         },
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
//         scrollTrigger: {
//           trigger: ".contact-section",
//           start: "top 70%",
//         },
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
// <section id="contact" className="relative z-10 min-h-screen flex items-center pt-20">
//       <div className="container mx-auto px-4 lg:px-8">
//         {/* Section Title */}
//         <div className="text-center mb-16">
//           <h2 className="contact-title text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
//             Get In <span className="text-gradient">Touch</span>
//           </h2>
//           <div className="w-20 h-1 bg-primary mx-auto"></div>
//         </div>

//         {/* Contact Section */}
//         <div className="contact-section grid lg:grid-cols-2 gap-12 lg:gap-16">
//           {/* Contact Info */}
//           <div className="space-y-8">
//             <div className="contact-info">
//               <h3 className="text-3xl font-display font-bold mb-4">Let's Work Together</h3>
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

import { useEffect, useState } from "react";
import { gsap } from "gsap/gsap-core";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Animate section title
    gsap.fromTo(
      ".contact-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
      }
    );

    // Animate contact info
    gsap.fromTo(
      ".contact-info",
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.5,
        ease: "power3.out"
      }
    );

    // Animate form
    gsap.fromTo(
      ".contact-form",
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.7,
        ease: "power3.out"
      }
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! I will get back to you at ${formData.email}`);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative z-10 min-h-screen flex items-center py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="contact-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Contact Section */}
        <div className="contact-section grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="contact-info">
              <h3 className="text-3xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm available for freelance work and full-time opportunities. Feel free to reach out 
                for collaboration or just to say hello!
              </p>
            </div>

            <div className="contact-info bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                  <Mail size={24} className="text-black" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-primary mb-1">Email</h4>
                  <a
                    href="mailto:risvanmd172@gmail.com"
                    className="text-lg font-semibold text-white hover:text-primary transition-colors"
                  >
                    risvanmd172@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-info bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                  <Phone size={24} className="text-black" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-primary mb-1">Phone</h4>
                  <a
                    href="tel:+916238741289"
                    className="text-lg font-semibold text-white hover:text-primary transition-colors"
                  >
                    +91 6238741289
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="contact-form bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-black font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}