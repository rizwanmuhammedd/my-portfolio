// "use client";

// export default function FloatingShapes() {
//   return (
// <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
//       {/* Animated Shapes */}
//       <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
//       <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }}></div>
//       <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-primary/4 rounded-full blur-3xl animate-float" style={{ animationDelay: '10s' }}></div>
      
//       {/* Grid Background */}
//       <div className="absolute inset-0 grid-background opacity-30"></div>
      
//       {/* Noise Texture */}
//       <div className="absolute inset-0 noise-texture"></div>
//     </div>
//   );
// }




"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function FloatingShapes() {
  useEffect(() => {
    // More subtle animations like the reference site
    gsap.to(".floating-shape-1", {
      y: 20,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(".floating-shape-2", {
      x: 30,
      y: 15,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1
    });

    gsap.to(".floating-shape-3", {
      y: -25,
      x: -20,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* More subtle animated shapes */}
      <div className="floating-shape-1 absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-br from-primary/3 to-transparent rounded-full blur-3xl"></div>
      <div className="floating-shape-2 absolute top-1/2 right-20 w-80 h-80 bg-gradient-to-br from-primary/2 to-transparent rounded-full blur-3xl"></div>
      <div className="floating-shape-3 absolute bottom-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-primary/4 to-transparent rounded-full blur-3xl"></div>
      
      {/* Subtle grid lines like reference site */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}></div>
    </div>
  );
}