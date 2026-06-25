import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Marquee() {
  const sectionRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Top row moves right to left (scrubbed with scroll)
      gsap.fromTo(
        row1Ref.current,
        { xPercent: 10 },
        {
          xPercent: -30,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      // Bottom row moves left to right (scrubbed with scroll)
      gsap.fromTo(
        row2Ref.current,
        { xPercent: -30 },
        {
          xPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const marqueeText =
    "100% RECYCLED · SKIN-FRIENDLY · LOCALLY MANUFACTURED · BIODEGRADABLE · ";
  const repeatedText = marqueeText.repeat(5);

  return (
    <section
      ref={sectionRef}
      id="marquee"
      className="py-16 md:py-24 overflow-hidden bg-forest flex flex-col justify-center gap-6"
    >
      {/* Top Row: Large, solid cream text */}
      <div
        ref={row1Ref}
        className="whitespace-nowrap font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-charcoal select-none"
        style={{ willChange: "transform", display: "inline-block" }}
      >
        {repeatedText}
      </div>

      {/* Bottom Row: Smaller, slightly faded text */}
      <div
        ref={row2Ref}
        className="whitespace-nowrap font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-sage select-none"
        style={{ willChange: "transform", display: "inline-block" }}
      >
        {repeatedText}
      </div>
    </section>
  );
}

export default Marquee;
