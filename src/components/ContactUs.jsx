import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const contactChannels = [
  {
    id: "call",
    label: "Call Us",
    subtitle: "+91 95471 63587",
    href: "tel:+919547163587",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    gradient: "from-sage to-forest",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    subtitle: "Chat with us instantly",
    href: "https://wa.me/919547163587",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
    gradient: "from-[#25D366] to-[#128C7E]",
  },
  {
    id: "email",
    label: "Email Us",
    subtitle: "eccopulps.tissue@gmail.com",
    href: "mailto:eccopulps.tissue@gmail.com?subject=Wholesale%20Inquiry",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    gradient: "from-kraft to-[#a08040]",
  },
];

function ContactUs() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
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
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #faf6f0 0%, #f0e8d8 50%, #e8d5b0 100%)",
      }}
    >
      <div
        className="absolute top-10 right-10 w-72 h-72 rounded-full opacity-[0.06]"
        style={{ backgroundColor: "#4a7c59" }}
      />
      <div
        className="absolute bottom-10 left-10 w-56 h-56 rounded-full opacity-[0.04]"
        style={{ backgroundColor: "#c8a96e" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block text-xs font-sans font-semibold tracking-[0.2em] uppercase text-sage mb-4">
            How to Reach Us
          </span>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-forest mb-6 leading-tight">
            Let's Get in Touch
          </h2>

          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "#555" }}>
            Ready to place an order or have questions? Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactChannels.map((channel, index) => (
            <a
              key={channel.id}
              ref={(el) => (cardsRef.current[index] = el)}
              href={channel.href}
              target={channel.id === "whatsapp" ? "_blank" : undefined}
              rel={channel.id === "whatsapp" ? "noopener noreferrer" : undefined}
              className="group relative block rounded-2xl bg-white/80 backdrop-blur-sm p-8 text-center no-underline transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-white/50 overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${channel.gradient} opacity-60 group-hover:opacity-100 group-hover:h-2 transition-all duration-300`}
              />

              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cream mb-5 text-sage group-hover:text-forest group-hover:scale-110 transition-all duration-500">
                {channel.icon}
              </div>

              <h3 className="font-serif text-xl font-semibold text-forest mb-2">
                {channel.label}
              </h3>

              <p className="text-sm text-charcoal/70">
                {channel.subtitle}
              </p>

              <div className="mt-6 flex items-center justify-center gap-2 text-sage opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-bold tracking-widest text-[10px] uppercase">
                <span>Connect</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
