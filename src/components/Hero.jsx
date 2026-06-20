import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "../assets/hero.jpeg";
import heroImageMob from "../assets/hero_mob.jpeg";

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
      className="relative w-full h-[100dvh] overflow-hidden bg-forest"
    >
      <picture>
        <source media="(max-width: 768px)" srcSet={heroImageMob} />
        <source media="(min-width: 769px)" srcSet={heroImage} />
        <img
          ref={imageRef}
          src={heroImage}
          alt="Ecco Pulps Hero"
          className="w-full h-full object-cover"
        />
      </picture>
    </section>
  );
}

export default Hero;
