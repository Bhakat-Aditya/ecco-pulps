import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import partnerImg from "../assets/partner.jpeg";

/* ─────────────────────────────────────────────
   Partner Media Carousel (16:9 format)
   ───────────────────────────────────────────── */
function PartnerMediaCarousel({ image, video }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    if (activeIdx === 0 && isInView) {
      // Video is the first slide
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [activeIdx, isInView]);

  return (
    <div ref={containerRef} className="relative w-full shadow-lg md:shadow-2xl rounded-3xl overflow-hidden group aspect-video">
      {/* Media container */}
      <div
        className="flex h-full w-full"
        style={{
          transform: `translateX(-${activeIdx * 100}%) translateZ(0)`,
          transition: "transform 0.45s cubic-bezier(.4,0,.2,1)",
          willChange: "transform",
        }}
      >
        {/* Slide 1 — Video */}
        {video && (
          <div className="flex-shrink-0 w-full h-full bg-[#1a3a2a]">
            <video
              ref={videoRef}
              src={video}
              muted
              playsInline
              loop
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Slide 2 — Image */}
        <div className="flex-shrink-0 w-full h-full">
          <img
            src={image}
            alt="Partner Custom Printed Tissues"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Tap zones */}
      <button
        aria-label="View video"
        onClick={() => {
          setActiveIdx(0);
          if (videoRef.current) videoRef.current.currentTime = 0;
        }}
        className="absolute inset-y-0 left-0 w-1/3 z-10 cursor-pointer bg-transparent border-none"
      />
      <button
        aria-label="View image"
        onClick={() => setActiveIdx(1)}
        className="absolute inset-y-0 right-0 w-1/3 z-10 cursor-pointer bg-transparent border-none"
      />

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 z-20">
        {[0, 1].map((i) => (
          <button
            key={i}
            aria-label={i === 0 ? "Video" : "Image"}
            onClick={() => {
              setActiveIdx(i);
              if (i === 0 && videoRef.current) videoRef.current.currentTime = 0;
            }}
            className={`
              rounded-full border-none cursor-pointer transition-all duration-300 shadow-md
              ${activeIdx === i
                ? "w-6 h-2.5 bg-sage-light"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
              }
            `}
          />
        ))}
        <span className="ml-1.5 text-[10px] tracking-wider uppercase text-white/80 font-sans font-bold select-none drop-shadow-md">
          {activeIdx === 0 ? "▶ Video" : ""}
        </span>
      </div>
      
      {/* Floating Info Card */}
      <div className="absolute top-4 left-4 z-20 bg-black/80 md:bg-black/50 md:backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/20">
        <p className="text-[10px] text-charcoal font-bold tracking-widest uppercase">
          Hotels • Cafes • Events
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   WhatsApp SVG Icon
   ───────────────────────────────────────────── */
const WhatsAppIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

/* ─────────────────────────────────────────────
   Partner With Us Component
   ───────────────────────────────────────────── */
function PartnerWithUs() {
  const sectionRef = useRef(null);
  const mediaRef = useRef(null);
  const formRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    tissueType: "Premium Soft",
    foldType: "Square",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();
    if (!formData.businessName || !formData.ownerName) {
      alert("Please enter the Business Name and Owner Name.");
      return;
    }

    const message = `Hi! I would like to partner with Ecco Pulps for custom printed tissues.

*Business Details:*
🏢 Business Name: ${formData.businessName}
👤 Owner Name: ${formData.ownerName}

*Order Preferences:*
🧻 Tissue Type: ${formData.tissueType}
📐 Fold Type: ${formData.foldType}

Could you please share more details about the process and pricing?`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919547163587?text=${encodedMessage}`, "_blank");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        mediaRef.current,
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
        formRef.current,
        { x: 50, opacity: 0 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="partner" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* ── Left Side: Media & Services ── */}
        <div className="flex flex-col gap-8">
          <div ref={mediaRef}>
            <span className="inline-block text-xs font-sans font-bold tracking-[0.2em] uppercase text-sage mb-4">
              B2B Partnership
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-6 leading-tight">
              Custom Printed Tissue for Your Brand
            </h2>
            <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
              Elevate your customer's experience. We print the logo of your hotel, restaurant, or cafe directly onto our premium tissues, providing a bespoke touch that leaves a lasting impression.
            </p>

            <PartnerMediaCarousel image={partnerImg} video={'https://res.cloudinary.com/adityabhakat/video/upload/v1782353798/partner_l4xibc.webm'} />
          </div>

          <div>
            <h3 className="font-serif text-2xl font-semibold text-sage mb-5 mt-4">Our Services</h3>
            <ul className="space-y-4">
              {[
                "High quality single and multicolor printing",
                "Fine and highly detailed logo replication",
                "Multiple fold styles to fit your dispensers",
                "Premium sustainable bamboo or soft tissues"
              ].map((service, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-sage-light/20 p-1.5 rounded-full text-sage flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-charcoal/80 text-[15px] md:text-base font-medium">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Right Side: Order Form ── */}
        <div ref={formRef} className="flex flex-col justify-center lg:mt-12">
          <div className="bg-forest-light border border-kraft/15 p-8 md:p-10 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]">
            <h3 className="font-serif text-3xl font-medium text-sage mb-2">
              Start Your Order
            </h3>
            <p className="text-sm text-charcoal/60 font-sans mb-8">
              Fill out the details below and continue to WhatsApp to finalize your custom branding order.
            </p>

            <form onSubmit={handleWhatsAppOrder} className="space-y-6">
              
              {/* Business Name */}
              <div className="space-y-2">
                <label htmlFor="businessName" className="block text-xs font-bold tracking-widest uppercase text-charcoal font-sans">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="e.g. The Grand Hotel"
                  className="w-full bg-black/20 border border-kraft/30 rounded-xl px-4 py-3.5 text-charcoal focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors font-sans placeholder-charcoal/30"
                  required
                />
              </div>

              {/* Owner Name */}
              <div className="space-y-2">
                <label htmlFor="ownerName" className="block text-xs font-bold tracking-widest uppercase text-charcoal font-sans">
                  Owner / Contact Name *
                </label>
                <input
                  type="text"
                  id="ownerName"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full bg-black/20 border border-kraft/30 rounded-xl px-4 py-3.5 text-charcoal focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors font-sans placeholder-charcoal/30"
                  required
                />
              </div>

              {/* Tissue Type Dropdown */}
              <div className="space-y-2">
                <label htmlFor="tissueType" className="block text-xs font-bold tracking-widest uppercase text-charcoal font-sans">
                  Select Tissue Type
                </label>
                <div className="relative">
                  <select
                    id="tissueType"
                    name="tissueType"
                    value={formData.tissueType}
                    onChange={handleChange}
                    className="w-full appearance-none bg-black/20 border border-kraft/30 rounded-xl px-4 py-3.5 pr-10 text-charcoal focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors font-sans cursor-pointer"
                  >
                    <option value="Premium Soft" className="bg-forest text-charcoal">Premium Soft</option>
                    <option value="Premium Hard" className="bg-forest text-charcoal">Premium Hard</option>
                    <option value="Bamboo Soft" className="bg-forest text-charcoal">Premium Bamboo Soft</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-sage">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Fold Type Dropdown */}
              <div className="space-y-2">
                <label htmlFor="foldType" className="block text-xs font-bold tracking-widest uppercase text-charcoal font-sans">
                  Select Fold Type
                </label>
                <div className="relative">
                  <select
                    id="foldType"
                    name="foldType"
                    value={formData.foldType}
                    onChange={handleChange}
                    className="w-full appearance-none bg-black/20 border border-kraft/30 rounded-xl px-4 py-3.5 pr-10 text-charcoal focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors font-sans cursor-pointer"
                  >
                    <option value="Square" className="bg-forest text-charcoal">Square Fold</option>
                    <option value="Triangular" className="bg-forest text-charcoal">Triangular Fold</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-sage">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 mt-4 px-8 py-4 rounded-xl bg-[#25D366] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#128C7E] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border-none cursor-pointer"
              >
                <WhatsAppIcon size={22} />
                Continue to WhatsApp
              </button>
              
              <p className="text-center text-[11px] text-charcoal/40 font-sans mt-3">
                No payment required now. We will verify your logo and requirements first.
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default PartnerWithUs;
