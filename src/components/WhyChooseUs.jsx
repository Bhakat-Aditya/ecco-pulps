import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const reasonsData = [
  {
    title: "Quality Assurance",
    description: "We ensure every product meets the highest standards of softness, safety, and reliability — because you deserve the best.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    )
  },
  {
    title: "Sustainable Practices",
    description: "Our eco-friendly production process reduces waste and conserves natural resources, leaving a lighter footprint on the planet.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ) // Using a leaf/cycle style icon, or simply an eco one
  },
  {
    title: "24/7 Premium Support",
    description: "Have a question or concern? Our dedicated team is here for you anytime, day or night.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
      </svg>
    )
  }
];

function WhyChooseUs() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-forest text-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-sans font-semibold tracking-widest uppercase text-sage-light mb-4">
            Why Choose Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
            Because Every Choice Matters
          </h2>
          <p className="text-lg text-charcoal/80 leading-relaxed">
            Ecco Pulps offers eco-friendly tissue products made from 100% recycled materials. They’re soft, skin-safe, chemical-free, and sustainably produced — proudly made in India for a cleaner tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasonsData.map((reason, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white/10 md:bg-white/5 md:backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage/20 text-sage-light mb-6">
                {reason.icon}
              </div>
              <h3 className="font-serif text-2xl font-medium text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
