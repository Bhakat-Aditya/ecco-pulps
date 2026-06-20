import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const reviews = [
  {
    name: "Rahul Gupta",
    role: "User",
    text: "Being in the food industry, I’ve been looking for sustainable packaging solutions. Ecco Pulps’ biodegradable packaging is both practical and environmentally friendly, helping my business go green while maintaining quality.",
  },
  {
    name: "Priya Desai",
    role: "User",
    text: "As a conscious consumer, I’ve been looking for eco-friendly alternatives, and I’m so glad I found Ecco Pulps. Their biodegradable tissues and packaging are of top quality, and it feels great knowing I'm using products that are kind to the Earth!",
  },
  {
    name: "Aarav Sharma",
    role: "User",
    text: "I recently switched to biodegradable packaging from Ecco Pulps, and I must say, it’s a game-changer! Not only are the tissues soft and strong, but I also feel proud that I’m doing my part for the environment.",
  },
];

function Testimonials() {
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-forest text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center" ref={headingRef}>
        <span className="inline-block text-xs font-sans font-semibold tracking-widest uppercase text-sage-light mb-4">
          Testimonials
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">
          What they say about us
        </h2>
        <p className="text-cream/70 text-lg">
          Checkout our latest reviews
        </p>
      </div>

      {/* Infinite Auto-scrolling Marquee */}
      <div className="relative w-full overflow-hidden flex">
        {/* We use a standard CSS animation for continuous sliding */}
        <div className="flex w-max animate-testimonial-scroll hover:[animation-play-state:paused]">
          {/* First set of cards */}
          {reviews.map((review, i) => (
            <div key={`review-1-${i}`} className="w-[350px] md:w-[400px] flex-shrink-0 mx-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-colors hover:bg-white/10">
              <div className="text-sage-light mb-4">
                {/* 5 Stars */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <p className="text-cream/90 text-lg leading-relaxed mb-8">"{review.text}"</p>
              <div>
                <h4 className="font-serif font-medium text-xl text-cream">{review.name}</h4>
                <p className="text-sm text-sage-light">{review.role}</p>
              </div>
            </div>
          ))}
          
          {/* Second set of cards (duplicate for infinite loop) */}
          {reviews.map((review, i) => (
            <div key={`review-2-${i}`} className="w-[350px] md:w-[400px] flex-shrink-0 mx-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-colors hover:bg-white/10">
              <div className="text-sage-light mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <p className="text-cream/90 text-lg leading-relaxed mb-8">"{review.text}"</p>
              <div>
                <h4 className="font-serif font-medium text-xl text-cream">{review.name}</h4>
                <p className="text-sm text-sage-light">{review.role}</p>
              </div>
            </div>
          ))}
          {/* Third set of cards (duplicate for infinite loop to ensure no empty space on large screens) */}
          {reviews.map((review, i) => (
            <div key={`review-3-${i}`} className="w-[350px] md:w-[400px] flex-shrink-0 mx-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-colors hover:bg-white/10">
              <div className="text-sage-light mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <p className="text-cream/90 text-lg leading-relaxed mb-8">"{review.text}"</p>
              <div>
                <h4 className="font-serif font-medium text-xl text-cream">{review.name}</h4>
                <p className="text-sm text-sage-light">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
