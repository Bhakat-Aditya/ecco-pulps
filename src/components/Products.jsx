import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../assets/productone.jpeg";
import img2 from "../assets/producttwo.jpeg";
import img3 from "../assets/productthree.jpeg";

// Product data — each panel in the stacking sequence
const productPanels = [
  {
    id: "premium-soft",
    name: "Premium Soft",
    description:
      "Ultra-soft, dermatologist-tested tissues made from 100% recycled fibres. Gentle enough for everyday use.",
    image: img1,
    bgColor: "#faf6f0", // cream
    amazonLink: "https://www.amazon.in/s?k=ecco+pulps+premium+soft",
    flipkartLink: "https://www.flipkart.com/search?q=ecco+pulps+premium+soft",
  },
  {
    id: "premium-hard",
    name: "Premium Hard",
    description:
      "Strong, highly absorbent tissues designed for durability and tougher cleaning tasks while remaining sustainable.",
    image: img2,
    bgColor: "#f0e8d8", // cream-dark
    amazonLink: "https://www.amazon.in/s?k=ecco+pulps+premium+hard",
    flipkartLink: "https://www.flipkart.com/search?q=ecco+pulps+premium+hard",
  },
  {
    id: "premium-bamboo-soft",
    name: "Premium Bamboo Soft",
    description:
      "Eco-friendly bamboo tissues that are exceptionally soft, strong, and highly sustainable for daily use.",
    image: img3,
    bgColor: "#e8d5b0", // kraft-light
    amazonLink: "https://www.amazon.in/s?k=ecco+pulps+bamboo+soft",
    flipkartLink: "https://www.flipkart.com/search?q=ecco+pulps+bamboo+soft",
  },
];

function Products() {
  const containerRef = useRef(null);
  const panelRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelRefs.current;

      // Create a GSAP timeline that pins the entire container
      // and slides each subsequent panel up to cover the previous one.
      //
      // How it works:
      // - Panel 1 is already visible (positioned at yPercent: 0)
      // - Panel 2 starts at yPercent: 100 (below the viewport) and slides up
      // - Panel 3 does the same, covering Panel 2
      //
      // The "end" value of "+=" controls how long the pin lasts
      // (i.e., how much scrolling it takes to go through all panels)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${panels.length * 100}%`, // total scroll distance = 300vh
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Animate panels 2 and 3 sliding up one after another
      panels.forEach((panel, index) => {
        if (index === 0) return; // first panel is already in place

        tl.fromTo(
          panel,
          { yPercent: 100 },
          {
            yPercent: 0,
            duration: 1,
            ease: "none",
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={containerRef} className="relative w-full h-[100dvh] overflow-hidden">
      {productPanels.map((product, index) => (
        <div
          key={product.id}
          ref={(el) => (panelRefs.current[index] = el)}
          className="absolute inset-0 w-full h-full flex items-center justify-center"
          style={{
            backgroundColor: product.bgColor,
            zIndex: index + 1, // later panels stack on top
          }}
        >
          {/* Panel inner layout — product image + info side by side */}
          <div className="max-w-6xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Product image */}
            <div className="flex justify-center md:mb-0 mb-2">
              <div className="relative w-full max-w-[220px] md:max-w-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                {/* Subtle shadow glow behind the image */}
                <div
                  className="absolute -inset-4 -z-10 rounded-3xl opacity-20 blur-3xl"
                  style={{ backgroundColor: "#4a7c59" }}
                />
              </div>
            </div>

            {/* Product info */}
            <div className="text-center md:text-left">
              {/* Section label */}
              <span className="inline-block text-xs font-sans font-semibold tracking-widest uppercase text-sage mb-4">
                Our Products
              </span>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-forest mb-6 leading-tight">
                {product.name}
              </h2>

              <p className="text-base md:text-lg text-charcoal/80 mb-8 max-w-md leading-relaxed">
                {product.description}
              </p>

              {/* CTA buttons — WhatsApp Order */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href={`https://wa.me/919547163587?text=${encodeURIComponent(`Hi! I'm interested in ordering the ${product.name}. Could you share more details?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#25D366] text-white text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-[#128C7E] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 no-underline"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Products;
