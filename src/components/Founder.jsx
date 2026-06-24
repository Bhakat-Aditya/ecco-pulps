import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import founderImg from "../assets/founder.jpg"; // Using a recent image as placeholder

function Founder() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="founder" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Left Side: Text */}
          <div ref={textRef} className="w-full md:w-1/2">
            <span className="inline-block text-xs font-sans font-semibold tracking-widest uppercase text-sage mb-4">
              Meet The Founder
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-forest mb-6">
              Mr. Abhishek Bhakat
            </h2>
            <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
              A Mechanical Engineer and former Merchant Navy officer, now channeling problem-solving skills into sustainable entrepreneurship. With roots in traditional manufacturing, he’s transitioned toward eco-friendly innovations inspired by a passion for sustainability. As founder of Eccopulps, he leads the charge in creating biodegradable tissue solutions for a greener tomorrow.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="text-2xl">🌿</span>
                <p className="text-forest font-serif italic text-lg leading-relaxed">
                  "Mr. Abhishek Bhakat — a visionary entrepreneur and the driving force behind Eccopulps, a brand redefining sustainability with every biodegradable tissue."
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl">💡</span>
                <p className="text-forest font-serif italic text-lg leading-relaxed">
                  "As the Founder and CEO of Eccopulps, Mr. Abhishek Bhakat is not just building a brand — he’s leading a movement towards a cleaner, greener future."
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl">🌱</span>
                <p className="text-forest font-serif italic text-lg leading-relaxed">
                  "Under the leadership of Mr. Abhishek Bhakat, Eccopulps is turning eco-consciousness into action — one biodegradable product at a time."
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl">🌏</span>
                <p className="text-forest font-serif italic text-lg leading-relaxed">
                  "With Eccopulps, Mr. Abhishek Bhakat proves that business success and environmental responsibility can go hand in hand."
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div ref={imageRef} className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto">
              <img 
                src={founderImg} 
                alt="Mr. Abhishek Bhakat - Founder of Eccopulps" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-forest/10 mix-blend-overlay"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Founder;
