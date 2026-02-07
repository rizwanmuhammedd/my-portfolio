// "use client";

// import { useEffect, useState } from "react";
// import { gsap } from "@/public/lib/gsap";
// import { Menu, X } from "lucide-react";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     // Header animation on load
//     gsap.fromTo(
//       ".header-logo",
//       { opacity: 0, x: -30 },
//       { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
//     );

//     gsap.fromTo(
//       ".nav-link",
//       { opacity: 0, y: -20 },
//       { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.3, ease: "power3.out" }
//     );

//     // Scroll effect
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-black/90 backdrop-blur-lg border-b border-primary/20"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4 lg:px-8">
//         <nav className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <a
//             href="#home"
//             className="header-logo text-2xl lg:text-3xl font-display font-bold text-gradient cursor-pointer"
//             onClick={(e) => {
//               e.preventDefault();
//               scrollToSection("home");
//             }}
//           >
//             RM
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             {["home", "skills", "projects", "contact"].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item}`}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   scrollToSection(item);
//                 }}
//                 className="nav-link text-white hover:text-primary transition-colors duration-300 text-lg font-medium relative group cursor-pointer capitalize"
//               >
//                 {item}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             ))}
//             <a
//               href="/assets/Risvan-Muhammed-Resume.pdf"
//               download
//               className="nav-link px-6 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 rounded-lg font-semibold"
//             >
//               CV
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-primary z-50"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>

//           {/* Mobile Navigation */}
//           <div
//             className={`fixed inset-0 bg-black/95 backdrop-blur-lg md:hidden transition-transform duration-500 ${
//               isMenuOpen ? "translate-x-0" : "translate-x-full"
//             }`}
//           >
//             <div className="flex flex-col items-center justify-center h-full gap-8">
//               {["home", "skills", "projects", "contact"].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     scrollToSection(item);
//                   }}
//                   className="text-white hover:text-primary transition-colors duration-300 text-3xl font-display font-semibold capitalize"
//                 >
//                   {item}
//                 </a>
//               ))}
//               <a
//                 href="/assets/Risvan-Muhammed-Resume.pdf"
//                 download
//                 className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 rounded-lg font-semibold text-xl"
//               >
//                 Download CV
//               </a>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }






"use client";

import { useEffect, useState } from "react";
import { gsap } from "@/public/lib/gsap";
import { Menu, X, Download } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

    // Header animation on load
    gsap.fromTo(
      ".header-content",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-black/90 backdrop-blur-xl border-b border-white/10 py-4" 
        : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <nav className="flex justify-between items-center header-content">
          {/* Logo - Left */}
          <div 
            className="text-2xl lg:text-3xl font-bold text-gradient cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => scrollToSection("home")}
          >
            RM
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-black bg-gradient-to-r from-primary to-primary-light shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-light -z-10"></div>
                )}
              </button>
            ))}
          </div>

          {/* CTA Button - Right */}
          <div className="hidden md:block">
            <a
              href="/assets/Risvan-Muhammed-Resume.pdf"
              download
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary-light text-black font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
            >
              <Download size={16} className="group-hover:animate-bounce" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary hover:text-primary-light transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-6 py-3 text-lg font-medium rounded-lg transition-all duration-300 w-48 text-center ${
                  activeSection === item.id 
                    ? 'text-black bg-gradient-to-r from-primary to-primary-light shadow-lg' 
                    : 'text-white hover:text-primary hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="/assets/Risvan-Muhammed-Resume.pdf"
              download
              className="px-6 py-3 bg-gradient-to-r from-primary to-primary-light text-black font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}