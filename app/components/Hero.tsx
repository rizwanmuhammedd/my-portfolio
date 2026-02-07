


// "use client";

// import { useEffect, useState } from "react";
// import { gsap } from "gsap/gsap-core";
// import { Github, Linkedin, Code2, Download, Camera } from "lucide-react";
// import Image from "next/image";

// export default function Hero() {
//   const [profileImage, setProfileImage] = useState("/risw.jpg");

//   useEffect(() => {
//     // Hero text animations
//     gsap.fromTo(
//       ".hero-name",
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
//     );

//     gsap.fromTo(
//       ".hero-title",
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power3.out" }
//     );

//     gsap.fromTo(
//       ".hero-description",
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 1, delay: 1.1, ease: "power3.out" }
//     );

//     gsap.fromTo(
//       ".hero-buttons",
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 1, delay: 1.4, ease: "power3.out" }
//     );

//     // Profile image animation
//     gsap.fromTo(
//       ".profile-wrapper",
//       { opacity: 0, scale: 0.8, rotate: -10 },
//       { opacity: 1, scale: 1, rotate: 0, duration: 1.2, delay: 0.7, ease: "back.out(1.4)" }
//     );

//     gsap.fromTo(
//       ".social-icon",
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 1.7, ease: "power3.out" }
//     );
//   }, []);

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setProfileImage(event.target?.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
// <section id="home" className="relative z-10 min-h-screen flex items-center pt-20">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//           {/* Text Content */}
//           <div className="space-y-6 text-center lg:text-left">
//             <h1 className="hero-name text-5xl md:text-6xl lg:text-7xl font-display font-bold">
//               Risvan <span className="text-gradient">Muhammed</span>
//             </h1>
            
//             <h2 className="hero-title text-3xl md:text-4xl lg:text-5xl font-display text-primary">
//               Full Stack .NET Developer
//             </h2>
            
//             <p className="hero-description text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
//               Passionate developer specializing in .NET backend development and modern frontend 
//               technologies. Creating robust, scalable web applications with exceptional user experiences.
//             </p>
            
//             <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <a
//                 href="#projects"
//                 className="px-8 py-4 bg-primary text-black font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transform hover:-translate-y-1"
//               >
//                 View Projects
//               </a>
//               <a
//                 href="/assets/Risvan-Muhammed-Resume.pdf"
//                 download
//                 className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group"
//               >
//                 <Download size={20} className="group-hover:animate-bounce" />
//                 Download CV
//               </a>
//             </div>
//           </div>

//           {/* Profile Image */}
//           <div className="flex flex-col items-center gap-8">
//             <div className="profile-wrapper relative">
//               <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_50px_rgba(0,255,136,0.3)] group">
//                <Image
//   src={profileImage}
//   alt="Risvan Muhammed"
//   fill
//   sizes="(max-width: 768px) 80vw, 400px"
//   className="object-cover"
//   priority
// />

//                 <label
//                   htmlFor="profile-upload"
//                   className="absolute bottom-4 right-4 w-14 h-14 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-dark transition-all duration-300 hover:scale-110 shadow-lg"
//                 >
//                   <Camera size={24} className="text-black" />
//                 </label>
//                 <input
//                   id="profile-upload"
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="hidden"
//                 />
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="flex gap-4">
//               <a
//                 href="https://github.com/rizwanmuhammedd"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="social-icon w-14 h-14 rounded-full border-2 border-white hover:border-primary flex items-center justify-center text-white hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-2"
//               >
//                 <Github size={24} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/risvan-muhammed-096361375"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="social-icon w-14 h-14 rounded-full border-2 border-white hover:border-primary flex items-center justify-center text-white hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-2"
//               >
//                 <Linkedin size={24} />
//               </a>
//               <a
//                 href="https://leetcode.com/u/risvanmuhammed/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="social-icon w-14 h-14 rounded-full border-2 border-white hover:border-primary flex items-center justify-center text-white hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-2"
//               >
//                 <Code2 size={24} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap/gsap-core";
import { Github, Linkedin, Code2, Download, Camera } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [profileImage, setProfileImage] = useState("/risw.jpg");

  useEffect(() => {
    // Hero text animations
    gsap.fromTo(
      ".hero-name",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );

    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power3.out" }
    );

    gsap.fromTo(
      ".hero-description",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 1.1, ease: "power3.out" }
    );

    gsap.fromTo(
      ".hero-buttons",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 1.4, ease: "power3.out" }
    );

    // Profile image animation
    gsap.fromTo(
      ".profile-wrapper",
      { opacity: 0, scale: 0.8, rotate: -10 },
      { opacity: 1, scale: 1, rotate: 0, duration: 1.2, delay: 0.7, ease: "back.out(1.4)" }
    );

    gsap.fromTo(
      ".social-icon",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 1.7, ease: "power3.out" }
    );
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="relative z-10 min-h-screen flex items-center py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="hero-name text-5xl md:text-6xl lg:text-7xl font-bold">
              Risvan <span className="text-gradient">Muhammed</span>
            </h1>
            
            <h2 className="hero-title text-3xl md:text-4xl lg:text-5xl text-primary">
              Full Stack .NET Developer
            </h2>
            
            <p className="hero-description text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Passionate developer specializing in .NET backend development and modern frontend 
              technologies. Creating robust, scalable web applications with exceptional user experiences.
            </p>
            
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-4 bg-primary text-black font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transform hover:-translate-y-1"
              >
                View Projects
              </a>
              <a
                href="/assets/Risvan-Muhammed-Resume.pdf"
                download
                className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download CV
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex flex-col items-center gap-8">
            <div className="profile-wrapper relative">
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_50px_rgba(0,255,136,0.3)] group">
               <Image
                  src={profileImage}
                  alt="Risvan Muhammed"
                  fill
                  sizes="(max-width: 768px) 80vw, 400px"
                  className="object-cover"
                  priority
                />

                <label
                  htmlFor="profile-upload"
                  className="absolute bottom-4 right-4 w-14 h-14 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-dark transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <Camera size={24} className="text-black" />
                </label>
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/rizwanmuhammedd"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-14 h-14 rounded-full border-2 border-white hover:border-primary flex items-center justify-center text-white hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-2"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/risvan-muhammed-096361375"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-14 h-14 rounded-full border-2 border-white hover:border-primary flex items-center justify-center text-white hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-2"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://leetcode.com/u/risvanmuhammed/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-14 h-14 rounded-full border-2 border-white hover:border-primary flex items-center justify-center text-white hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-2"
              >
                <Code2 size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}