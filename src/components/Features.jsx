import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const featuresData = [
  {
    emoji: "🏪",
    title: "Tissue paper Store",
    description: "Locally manufactured with care, supporting eco-conscious communities and businesses.",
  },
  {
    emoji: "♻️",
    title: "Recycled Materials",
    description: "Crafted from 100% recycled and biodegradable paper – good for you, better for the planet.",
  },
  {
    emoji: "☁️",
    title: "Soft & Skin-Friendly",
    description: "Gentle on skin, free from harsh chemicals, perfect for daily use for the whole family.",
  },
  {
    emoji: "🌱",
    title: "Sustainably Made for people",
    description: "Our production process minimizes waste and conserves resources every step of the way.",
  },
];

function Features() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white/50 backdrop-blur-sm border border-forest/10 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-6">{feature.emoji}</div>
              <h3 className="font-serif text-2xl font-semibold text-forest mb-4">
                {feature.title}
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
