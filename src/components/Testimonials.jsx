import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ─────────────────────────────────────────────
   Real Google Reviews — All 5-star ⭐⭐⭐⭐⭐
   ───────────────────────────────────────────── */
const reviews = [
  {
    name: "Atreyi",
    text: "A wonderful service. Very prompt delivery. Good quality tissue. Designed with our co logo — Hassle free delivery.",
  },
  {
    name: "Abhishek Chakraborty",
    text: "I've been using tissue from EccoPulps for a while now, and I can confidently say they've set a new standard in quality. Whether it's their facial tissues, kitchen rolls, or pocket packs, each product delivers a perfect balance of softness and strength.",
  },
  {
    name: "Subham Singh",
    text: "Exceptional Quality & Softness — Truly a Premium Product! I've tried many tissue paper brands over the years, but this one truly stands out.",
  },
  {
    name: "Ankita Sen",
    text: "Its so soft, its never irritate my skin, its absorb lots of liquid, I mean it, highly recommended.",
  },
  {
    name: "Debnath Bhattacharjee",
    text: "Best Quality tissues, happy to get associated with this brand.",
  },
  {
    name: "Riya Mondal",
    text: "Soo much soft & very good product. I love this tissues & reasonable prices.",
  },
  {
    name: "Kuntal Sardar",
    text: "Very good product and eco-friendly.",
  },
  {
    name: "MD Asim Jabed Molla",
    text: "Good quality and good product, very very beautiful product.",
  },
  {
    name: "Sams Parvez",
    text: "Good quality product with reasonable price.",
  },
  {
    name: "Tania Bhakat",
    text: "Quality tissues at its best price!",
  },
  {
    name: "Puja Dey",
    text: "Ultra soft and good quality tissue.",
  },
  {
    name: "Arijit Bal",
    text: "Very good quality.",
  },
  {
    name: "Jayanta Mondal",
    text: "Very good & best quality.",
  },
  {
    name: "Jay Sengupta",
    text: "Premium quality tissues with great service.",
  },
  {
    name: "Dipankar Sardar",
    text: "Very soft and good quality.",
  },
  {
    name: "Piu Mondal",
    text: "Very soft. Good product.",
  },
  {
    name: "Raju Das",
    text: "Very good product, good quality.",
  },
  {
    name: "Answar Safui",
    text: "Very good quality.",
  },
  {
    name: "MD. Hasan Shaikh",
    text: "Nice product.",
  },
  {
    name: "Susmita Kar",
    text: "Good quality, 100%.",
  },
  {
    name: "Rakhibul Mondal",
    text: "Tissue quality is very good.",
  },
  {
    name: "Arnab Das",
    text: "Great quality.",
  },
  {
    name: "Soumen Das",
    text: "Nice tissues and good product.",
  },
  {
    name: "Poulami Chakraborty",
    text: "Best quality.",
  },
];

/* ─────────────────────────────────────────────
   5-Star SVG (reusable)
   ───────────────────────────────────────────── */
const FiveStars = () => (
  <div className="flex gap-0.5 text-sage-light mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

/* ─────────────────────────────────────────────
   Review Card
   ───────────────────────────────────────────── */
function ReviewCard({ review, setKey }) {
  // Generate initials for the avatar
  const initials = review.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      key={setKey}
      className="w-[300px] md:w-[350px] flex-shrink-0 mx-3 bg-white/5 border border-white/10 rounded-2xl p-7 transition-colors duration-300 hover:bg-white/10"
    >
      <FiveStars />
      <p className="text-cream/85 text-sm md:text-[15px] leading-relaxed mb-6">
        "{review.text}"
      </p>
      <div className="flex items-center gap-3">
        {/* Avatar with initials */}
        <div className="w-9 h-9 rounded-full bg-sage/30 flex items-center justify-center text-[11px] font-sans font-bold text-cream tracking-wide">
          {initials}
        </div>
        <div>
          <h4 className="font-serif font-medium text-base text-cream leading-tight">
            {review.name}
          </h4>
          <p className="text-[11px] text-sage-light/60 font-sans">
            Google Review
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Testimonials Section
   ───────────────────────────────────────────── */
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
          What Our Customers Say
        </h2>
        <p className="text-cream/60 text-base md:text-lg font-sans">
          Real reviews from real people — all 5-star ratings on Google
        </p>
      </div>

      {/* Infinite Auto-scrolling Marquee */}
      <div className="relative w-full overflow-hidden flex">
        <div className="flex w-max animate-testimonial-scroll hover:[animation-play-state:paused]">
          {/* Three copies for seamless infinite loop */}
          {[1, 2, 3].map((setNum) =>
            reviews.map((review, i) => (
              <ReviewCard
                key={`review-${setNum}-${i}`}
                review={review}
                setKey={`review-${setNum}-${i}`}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
