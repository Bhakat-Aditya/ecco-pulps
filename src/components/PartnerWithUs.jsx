import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import partnerImg from "../assets/partner.jpeg";

function PartnerWithUs() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        contentRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
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
    <section ref={sectionRef} id="partner" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Image */}
        <div ref={imageRef} className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] lg:h-[700px] group">
          <div className="absolute inset-0 bg-forest/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <img src={partnerImg} alt="Custom Printed Tissues" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          
          <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50">
            <h4 className="font-serif text-xl font-bold text-forest mb-2">Perfect For</h4>
            <p className="text-sm text-forest/80 font-medium tracking-wide">
              Hotels • Cafes • Restaurants • Corporate Places • Events
            </p>
          </div>
        </div>

        {/* Right Side: Content */}
        <div ref={contentRef} className="flex flex-col justify-center">
          <span className="inline-block text-xs font-sans font-bold tracking-[0.2em] uppercase text-sage mb-4">
            B2B Partnership
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-forest mb-6 leading-tight">
            Custom Printed Tissue for Your Brand
          </h2>
          <p className="text-lg text-charcoal/80 mb-10 leading-relaxed">
            Elevate your customer's experience. We print the logo of your hotel, restaurant, or cafe directly onto our premium tissues, providing a bespoke touch that leaves a lasting impression.
          </p>

          <h3 className="font-serif text-2xl font-semibold text-forest mb-6">Our Services</h3>
          <ul className="space-y-4 mb-12">
            {[
              "High quality single and multicolor printing",
              "Fine and highly detailed printing",
              "Different folding styles (Triangular, square, etc.)",
              "Multiple tissue types of premium hard bamboo"
            ].map((service, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-1 bg-sage-light/20 p-1.5 rounded-full text-sage flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-charcoal/80 text-lg font-medium">{service}</span>
              </li>
            ))}
          </ul>

          <div className="bg-forest/5 border border-forest/10 p-8 rounded-3xl">
            <h3 className="font-serif text-2xl font-semibold text-forest mb-6">How To Order</h3>
            <div className="space-y-6">
              {[
                { title: "Select your napkin", desc: "Choose the perfect size, fold, and bamboo quality." },
                { title: "Submit your logo", desc: "Send us your design with a weaver's proof for precision." },
                { title: "Wait for verification", desc: "Our team will verify the details and weights." },
                { title: "Delivery", desc: "We manufacture and deliver straight to your doorstep." }
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-kraft text-white flex items-center justify-center font-bold font-serif text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-forest text-lg">{step.title}</h4>
                    <p className="text-sm text-charcoal/70">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PartnerWithUs;
