import { useEffect, useState, useRef } from "react";
import logo from "../assets/logo.jpg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    // Fast, simple entrance animation so the navbar is immediately visible
    gsap.from(navRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.from(".nav-item", {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.2
    });
  }, { scope: containerRef });

  useEffect(() => {
    const handleScroll = () => {
      // Trigger pill state earlier for a snappier feel
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none px-4 sm:px-8 pt-6 sm:pt-8"
    >
      <nav
        ref={navRef}
        id="navbar"
        className={`pointer-events-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isScrolled 
            ? "w-full max-w-4xl bg-forest/80 backdrop-blur-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border border-white/10 rounded-full py-2.5 px-3 md:px-4" 
            : "w-full max-w-7xl bg-transparent py-2 px-0"
        }`}
      >
        {/* Brand */}
        <a href="#hero" className="nav-item flex items-center gap-4 no-underline group flex-shrink-0">
          <div className="relative overflow-hidden rounded-full p-[2px] bg-gradient-to-tr from-kraft/50 via-cream/50 to-sage-light/50 transition-all duration-700 group-hover:rotate-[360deg]">
            <img 
              src={logo} 
              alt="Ecco Pulps Logo" 
              className={`rounded-full object-cover border border-forest/90 transition-all duration-700 ${
                isScrolled ? "h-9 w-9" : "h-12 w-12 md:h-14 md:w-14"
              }`}
            />
          </div>
          <span className={`font-serif font-bold tracking-wide transition-all duration-700 ${
            isScrolled ? "text-xl text-cream" : "text-2xl md:text-3xl text-[#1A3A2A] drop-shadow-lg"
          }`}>
            Ecco Pulps
          </span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-4 md:gap-10 pl-0 md:pl-8">
          {["Products", "Partner"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`nav-item relative text-[9px] md:text-xs font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase transition-colors duration-500 no-underline py-2 group overflow-hidden ${
                isScrolled ? "text-cream hover:text-kraft" : "text-[#1A3A2A]/90 hover:text-[#1A3A2A] drop-shadow-md"
              }`}
            >
              <span className="relative z-10">{item === "Partner" ? "Partner With Us" : item}</span>
              <span className={`absolute left-0 bottom-0 h-[1.5px] w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 ${
                isScrolled ? "bg-kraft" : "bg-[#1A3A2A]"
              }`}></span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
