import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "../assets/hero.jpeg";

function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth parallax and slight scale out on scroll
      gsap.to(imageRef.current, {
        yPercent: 30,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      
      // Subtle entrance animation on load
      gsap.from(imageRef.current, {
        scale: 1.05,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-forest"
    >
      <img
        ref={imageRef}
        src={heroImage}
        alt="Ecco Pulps Hero"
        className="w-full h-full object-cover"
      />
    </section>
  );
}

export default Hero;
