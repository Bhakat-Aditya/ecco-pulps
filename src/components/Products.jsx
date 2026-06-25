import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../assets/productone.jpeg";
import img2 from "../assets/producttwo.jpeg";
import img3 from "../assets/productthree.jpeg";
import { Leaf, FlaskConical, Droplet, Baby, Cross, ShieldCheck } from "lucide-react";

/* ─────────────────────────────────────────────
   Product Media Carousel
   — Amazon / Flipkart–style image + video swipe
   ───────────────────────────────────────────── */
function ProductMediaCarousel({ image, video, name, bgColor }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const mediaCount = video ? 2 : 1;

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
    if (activeIdx === 0 && video && isInView) {
      videoRef.current.play().catch(() => { });
    } else {
      videoRef.current.pause();
    }
  }, [activeIdx, video, isInView]);

  return (
    <div ref={containerRef} className="relative w-full max-w-[220px] md:max-w-md group">
      {/* Glow */}
      <div
        className="absolute -inset-4 -z-10 rounded-3xl opacity-15 hidden md:block"
        style={{
          backgroundColor: "#4a7c59",
          boxShadow: "0 0 60px 20px rgba(74, 124, 89, 0.15)",
        }}
      />

      {/* Media viewport — 1:1 square frame */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg md:shadow-2xl aspect-square">
        <div
          className="flex h-full"
          style={{
            transform: `translateX(-${activeIdx * 100}%) translateZ(0)`,
            transition: "transform 0.45s cubic-bezier(.4,0,.2,1)",
            willChange: "transform",
          }}
        >
          {/* Slide 1 — Video */}
          {video && (
            <div
              className="flex-shrink-0 w-full h-full flex items-center justify-center"
              style={{ backgroundColor: bgColor || "#f0e8d8" }}
            >
              <video
                ref={videoRef}
                src={video}
                muted
                playsInline
                onEnded={() => setActiveIdx(1)}
                preload="metadata"
                className="w-full h-full object-contain"
              />
            </div>
          )}

          {/* Slide 2 — Image */}
          <div className="flex-shrink-0 w-full h-full">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Tap zones */}
        {mediaCount > 1 && (
          <>
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
          </>
        )}
      </div>

      {/* Dot indicators */}
      {mediaCount > 1 && (
        <div className="flex items-center justify-center gap-2 mt-3">
          {[...Array(mediaCount)].map((_, i) => (
            <button
              key={i}
              aria-label={i === 0 ? "Video" : "Image"}
              onClick={() => {
                setActiveIdx(i);
                if (i === 0 && videoRef.current) videoRef.current.currentTime = 0;
              }}
              className={`
                relative rounded-full border-none cursor-pointer transition-all duration-300
                ${activeIdx === i
                  ? "w-6 h-2.5 bg-forest"
                  : "w-2.5 h-2.5 bg-charcoal/30 hover:bg-charcoal/50"
                }
              `}
            />
          ))}
          <span className="ml-1.5 text-[10px] tracking-wider uppercase text-charcoal/50 font-sans font-medium select-none">
            {activeIdx === 0 ? "▶ Video" : ""}
          </span>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Hero Media Carousel (for Bamboo — dark theme)
   ───────────────────────────────────────────── */
function HeroMediaCarousel({ image, video, name }) {
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
    if (activeIdx === 0 && video && isInView) {
      videoRef.current.play().catch(() => { });
    } else {
      videoRef.current.pause();
    }
  }, [activeIdx, video, isInView]);

  return (
    <div ref={containerRef} className="relative w-full max-w-[280px] md:max-w-[380px]">
      {/* Radial glow */}
      <div
        className="absolute inset-0 -m-10 rounded-full opacity-25 pointer-events-none hidden md:block"
        style={{
          background: "radial-gradient(circle, rgba(127,176,105,0.4) 0%, transparent 70%)",
        }}
      />

      {/* Media frame */}
      <div
        className="relative overflow-hidden rounded-3xl aspect-square"
        style={{ boxShadow: "0 15px 40px rgba(0,0,0,0.3)" }}
      >
        <div
          className="flex h-full"
          style={{
            transform: `translateX(-${activeIdx * 100}%) translateZ(0)`,
            transition: "transform 0.45s cubic-bezier(.4,0,.2,1)",
            willChange: "transform",
          }}
        >
          {/* Slide 1 — Video */}
          {video && (
            <div
              className="flex-shrink-0 w-full h-full flex items-center justify-center"
              style={{ backgroundColor: "#1a3a2a" }}
            >
              <video
                ref={videoRef}
                src={video}
                muted
                playsInline
                onEnded={() => setActiveIdx(1)}
                preload="metadata"
                className="w-full h-full object-contain"
              />
            </div>
          )}

          {/* Slide 2 — Image */}
          <div className="flex-shrink-0 w-full h-full">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Tap zones */}
        {video && (
          <>
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
          </>
        )}
      </div>

      {/* Dot indicators (white for dark bg) */}
      {video && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {[0, 1].map((i) => (
            <button
              key={i}
              aria-label={i === 0 ? "Video" : "Image"}
              onClick={() => {
                setActiveIdx(i);
                if (i === 0 && videoRef.current) videoRef.current.currentTime = 0;
              }}
              className={`
                rounded-full border-none cursor-pointer transition-all duration-300
                ${activeIdx === i
                  ? "w-6 h-2.5 bg-sage-light"
                  : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
                }
              `}
            />
          ))}
          <span className="ml-1.5 text-[10px] tracking-wider uppercase text-white/40 font-sans font-medium select-none">
            {activeIdx === 0 ? "▶ Video" : ""}
          </span>
        </div>
      )}

      {/* Floating badge */}
      <div className="absolute -bottom-3 -right-3 md:-bottom-5 md:-right-5 bg-white rounded-2xl px-4 py-2.5 shadow-xl z-20">
        <div className="text-[9px] font-sans font-bold tracking-widest uppercase text-sage mb-0.5">40 Pulls</div>
        <div className="text-[11px] font-sans font-bold text-charcoal">4 Packs Combo</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   WhatsApp SVG Icon (shared)
   ───────────────────────────────────────────── */
const WhatsAppIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

/* ─────────────────────────────────────────────
   Product data
   ───────────────────────────────────────────── */
const productPanels = [
  {
    id: "premium-soft",
    name: "Premium Soft",
    description:
      "Ultra-soft, dermatologist-tested tissues made from 100% recycled fibres. Gentle enough for everyday use.",
    image: img1,
    video: "https://res.cloudinary.com/adityabhakat/video/upload/v1782353798/premium_soft_ztm6hk.webm",
    bgColor: "var(--color-forest-light)",
    isHero: false,
  },
  {
    id: "premium-hard",
    name: "Premium Hard",
    description:
      "Strong, highly absorbent tissues designed for durability and tougher cleaning tasks while remaining sustainable.",
    image: img2,
    video: null,
    bgColor: "var(--color-forest)",
    isHero: false,
  },
  {
    id: "premium-bamboo-soft",
    name: "Premium Bamboo Soft",
    description:
      "Eco-friendly bamboo tissues that are exceptionally soft, strong, and highly sustainable for daily use.",
    image: img3,
    video: "https://res.cloudinary.com/adityabhakat/video/upload/v1782353799/bamboo_ffnbls.webm",
    bgColor: "var(--color-forest-light)",
    isHero: true,
  },
];

/* ─────────────────────────────────────────────
   Main Products Section
   ───────────────────────────────────────────── */
function Products() {
  const containerRef = useRef(null);
  const panelRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelRefs.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${panels.length * 100}%`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          fastScrollEnd: true,
          preventOverlaps: true,
        },
      });

      panels.forEach((panel, index) => {
        if (index === 0) return;

        tl.fromTo(
          panel,
          { yPercent: 100 },
          {
            yPercent: 0,
            duration: 1,
            ease: "none",
            force3D: true,
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="products"
        ref={containerRef}
        className="relative w-full h-[100dvh] overflow-hidden"
        style={{ willChange: "transform" }}
      >
        {productPanels.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => (panelRefs.current[index] = el)}
            className="absolute inset-0 w-full h-full"
            style={{
              zIndex: index + 1,
              willChange: "transform",
              transform: "translateZ(0)",
            }}
          >
            {/* ─── HERO PANEL (Bamboo) ─── */}
            {product.isHero ? (
              <div
                className="w-full h-full flex items-center justify-center relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, var(--color-forest) 0%, var(--color-forest-light) 40%, var(--color-forest) 100%)",
                }}
              >
                {/* Subtle floating bamboo leaf pattern (Original) */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 800 600" fill="currentColor">
                    <ellipse cx="80" cy="80" rx="22" ry="70" transform="rotate(-20 80 80)" />
                    <ellipse cx="140" cy="140" rx="18" ry="60" transform="rotate(15 140 140)" />
                    <ellipse cx="720" cy="70" rx="20" ry="65" transform="rotate(-25 720 70)" />
                    <ellipse cx="680" cy="520" rx="18" ry="55" transform="rotate(10 680 520)" />
                    <ellipse cx="400" cy="560" rx="16" ry="50" transform="rotate(-10 400 560)" />
                  </svg>
                </div>

                <div className="max-w-6xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center relative z-10">
                  {/* Left — Hero Image */}
                  <div className="flex justify-center order-2 md:order-1">
                    <HeroMediaCarousel
                      image={product.image}
                      video={product.video}
                      name={product.name}
                    />
                  </div>

                  {/* Right — Hero Content */}
                  <div className="order-1 md:order-2 text-center md:text-left">
                    {/* Premium Badge */}
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full text-[10px] md:text-[11px] font-sans font-bold tracking-widest uppercase bg-white/5 text-sage-light border border-white/10">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-sage-light animate-pulse" />
                      Our Hero Product
                    </span>

                    {/* Title */}
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-3 md:mb-4 leading-[1.1]">
                      Bamboo
                      <br />
                      <span style={{ color: "var(--color-sage)" }}>Facial Tissue</span>
                    </h2>

                    {/* Tagline */}
                    <p className="text-xs md:text-sm text-white/40 font-sans font-medium tracking-[0.2em] uppercase mb-5 md:mb-6">
                      Safe · Pure · Natural
                    </p>

                    {/* Description */}
                    <p className="text-sm md:text-base text-white/70 leading-relaxed mb-6 md:mb-8 max-w-md font-sans mx-auto md:mx-0">
                      Crafted from 100% natural bamboo pulp — unbleached, chemical-free,
                      and hypoallergenic. Gentle on skin, kind to nature.
                    </p>

                    {/* Elegant Benefit Tags */}
                    <div className="flex flex-wrap gap-2 md:gap-2.5 mb-8 md:mb-10 justify-center md:justify-start">
                      {[
                        { icon: <Leaf size={12} strokeWidth={2} />, text: "Eco-Friendly" },
                        { icon: <FlaskConical size={12} strokeWidth={2} />, text: "Chemical Free" },
                        { icon: <Droplet size={12} strokeWidth={2} />, text: "Unbleached" },
                        { icon: <Baby size={12} strokeWidth={2} />, text: "Ultra Soft" },
                        { icon: <Cross size={12} strokeWidth={2} />, text: "Medical Safe" },
                        { icon: <ShieldCheck size={12} strokeWidth={2} />, text: "Hypoallergenic" },
                      ].map((pill) => (
                        <span
                          key={pill.text}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-sans font-semibold tracking-wide bg-white/5 text-white/80 border border-white/10 hover:bg-white/10 hover:border-sage/30 hover:text-white transition-all duration-300"
                        >
                          <span className="text-sage">{pill.icon}</span>
                          {pill.text}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <a
                        href={`https://wa.me/919547163587?text=${encodeURIComponent("Hi! I'm interested in ordering the Premium Bamboo Soft tissues. Could you share more details?")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-kraft text-forest text-xs font-bold tracking-[0.1em] uppercase hover:bg-sage-light transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 no-underline"
                      >
                        <WhatsAppIcon size={20} />
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* ─── REGULAR PANEL (Products 1 & 2) ─── */
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ backgroundColor: product.bgColor }}
              >
                <div className="max-w-6xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                  {/* Product media */}
                  <div className="flex justify-center md:mb-0 mb-2">
                    <ProductMediaCarousel
                      image={product.image}
                      video={product.video}
                      name={product.name}
                      bgColor={product.bgColor}
                    />
                  </div>

                  {/* Product info */}
                  <div className="text-center md:text-left">
                    <span className="inline-block text-xs font-sans font-semibold tracking-widest uppercase text-sage mb-4">
                      Our Products
                    </span>

                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-charcoal mb-4 leading-tight">
                      {product.name}
                    </h2>

                    <p className="text-base md:text-lg text-charcoal/80 mb-8 max-w-md leading-relaxed">
                      {product.description}
                    </p>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <a
                        href={`https://wa.me/919547163587?text=${encodeURIComponent(`Hi! I'm interested in ordering the ${product.name}. Could you share more details?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#25D366] text-white text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-[#128C7E] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 no-underline"
                      >
                        <WhatsAppIcon />
                        Order on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* ═══════════════════════════════════════════════════════════
          BAMBOO TISSUE — "Masterchef Plating" Detail Section
          Premium, clean, deliberate — every element earns its space
          ═══════════════════════════════════════════════════════════ */}
      <section id="bamboo-details" className="relative w-full overflow-hidden">

        {/* ── PLATE 1: Hero Benefits Strip ──
            Six icon badges on a dark surface */}
        <div style={{ backgroundColor: "var(--color-forest)" }}>
          {/* Top accent line */}
          <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent 10%, #c8a96e 50%, transparent 90%)" }} />

          <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
            {/* Section intro */}
            <div className="text-center mb-14 md:mb-20">
              <p className="text-[11px] md:text-xs font-sans font-bold tracking-[0.3em] uppercase text-kraft mb-3">
                Why Choose Bamboo
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-medium text-charcoal leading-tight">
                Safe · Pure · Natural
              </h2>
            </div>

            {/* 6 benefit icons — clean grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6">
              {[
                { icon: Leaf, line1: "100%", line2: "ECO-FRIENDLY" },
                { icon: FlaskConical, line1: "CHEMICAL", line2: "FREE" },
                { icon: Droplet, line1: "BLEACH", line2: "FREE" },
                { icon: Baby, line1: "ULTRA", line2: "SOFT" },
                { icon: Cross, line1: "BEST FOR", line2: "MEDICAL & KIDS" },
                { icon: ShieldCheck, line1: "HYPOALLERGENIC", line2: "TESTED" },
              ].map((item) => (
                <div
                  key={item.line2}
                  className="group flex flex-col items-center text-center py-8 px-4 rounded-2xl border border-transparent hover:border-kraft/25 hover:bg-white/5 transition-all duration-500 cursor-default"
                >
                  <span className="mb-4 text-sage group-hover:scale-110 transition-transform duration-500 ease-out">
                    <item.icon size={36} strokeWidth={1.5} />
                  </span>
                  <span className="text-[11px] md:text-xs font-sans font-bold tracking-[0.15em] uppercase text-charcoal leading-tight">
                    {item.line1}
                  </span>
                  <span className="text-[10px] md:text-[11px] font-sans font-semibold tracking-[0.12em] uppercase text-charcoal/50 mt-0.5">
                    {item.line2}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PLATE 2: Detailed USP Cards ──
            Four cards, each a focused "course" of information */}
        <div
          style={{
            background: "linear-gradient(180deg, var(--color-forest) 0%, var(--color-forest-light) 100%)",
          }}
        >
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-14 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px md:gap-0 rounded-3xl overflow-hidden border border-kraft/15 bg-kraft/10">
              {/* Card — Bleach Free */}
              <div className="bg-white/5 p-8 md:p-10 flex flex-col group md:border-r md:border-b border-kraft/10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-forest-light flex items-center justify-center text-sage group-hover:bg-kraft/20 transition-colors duration-300">
                    <Droplet size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif text-lg md:text-xl font-semibold text-charcoal">
                    Bleach Free
                  </h4>
                </div>
                <p className="text-sm text-charcoal/80 leading-relaxed font-sans flex-1">
                  No harmful chemicals. Our bamboo tissues are completely unbleached and natural — keeping your skin free from irritants.
                </p>
              </div>

              {/* Card — Best for Medical */}
              <div className="bg-white/5 p-8 md:p-10 flex flex-col group md:border-b border-kraft/10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-forest-light flex items-center justify-center text-sage group-hover:bg-kraft/20 transition-colors duration-300">
                    <Cross size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif text-lg md:text-xl font-semibold text-charcoal">
                    Best for Medical
                  </h4>
                </div>
                <p className="text-sm text-charcoal/80 leading-relaxed font-sans flex-1">
                  Gentle & hygienic. Soft, safe & gentle for patient care — ideal for hospitals, clinics, and sensitive medical environments.
                </p>
              </div>

              {/* Card — Best for Kids */}
              <div className="bg-white/5 p-8 md:p-10 flex flex-col group md:border-r border-kraft/10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-forest-light flex items-center justify-center text-sage group-hover:bg-kraft/20 transition-colors duration-300">
                    <Baby size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif text-lg md:text-xl font-semibold text-charcoal">
                    Best for Kids
                  </h4>
                </div>
                <p className="text-sm text-charcoal/80 leading-relaxed font-sans flex-1">
                  Totally safe & natural on sensitive skin. Free from bleach, chemicals, and irritants — the perfect choice for babies and toddlers.
                </p>
              </div>

              {/* Card — Hypoallergenic */}
              <div className="bg-white/5 p-8 md:p-10 flex flex-col group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-forest-light flex items-center justify-center text-sage group-hover:bg-kraft/20 transition-colors duration-300">
                    <ShieldCheck size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg md:text-xl font-semibold text-charcoal">
                      Hypoallergenic
                    </h4>
                    <span className="text-[10px] font-sans font-medium tracking-wider uppercase text-charcoal/50">
                      Dermatologically Tested
                    </span>
                  </div>
                </div>
                <p className="text-sm text-charcoal/80 leading-relaxed font-sans flex-1">
                  Minimizes risk of allergies & irritation. Tested for skin safety by dermatologists — trusted for premium quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── PLATE 3: Product Description ──
            The "main course" — elegant long-form copy */}
        <div style={{ backgroundColor: "var(--color-forest-light)" }}>
          <div className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
            {/* Ornamental divider */}
            <div className="flex items-center gap-4 mb-12 md:mb-16">
              <div className="flex-1 h-px bg-kraft/20" />
              <span className="text-[10px] font-sans font-bold tracking-[0.3em] uppercase text-kraft/60">
                Product Description
              </span>
              <div className="flex-1 h-px bg-kraft/20" />
            </div>

            <div className="space-y-6 text-[15px] md:text-base text-charcoal/80 leading-[1.9] font-sans">
              <p>
                Experience the perfect balance of softness, strength, and sustainability with{" "}
                <strong className="text-sage font-semibold">Ecco Pulps Bamboo Facial Tissue Papers</strong>.
                Crafted from 100% natural bamboo pulp, these tissues are unbleached, chemical-free,
                and hypoallergenic — making them safe and gentle on sensitive skin. Whether you're wiping
                your face, cleaning up spills, or removing makeup, these tissues deliver superior softness
                and absorbency without leaving any residue behind.
              </p>

              <p>
                Unlike traditional tissues, Ecco Pulps bamboo facial tissue packs are designed with the
                planet in mind. Made from sustainably sourced bamboo, they are eco-friendly, biodegradable,
                and non-toxic, giving you peace of mind with every pull. By switching to bamboo tissues,
                you're not only choosing comfort for yourself but also contributing towards a cleaner,
                greener planet.
              </p>

              <p>
                Each bamboo facial tissue box is compact, travel-friendly, and convenient to use — perfect
                for your home, office desk, car, or handbag. With{" "}
                <strong className="text-charcoal font-semibold">50 pulls per pack and 4 packs included</strong>,
                this combo ensures long-lasting supply and daily hygiene for the whole family.
              </p>

              <p>
                What sets Ecco Pulps apart is bamboo's natural antibacterial properties, which provide added
                hygiene compared to regular tissues. Soft yet strong, these tissues are perfect for a variety
                of uses: from freshening up after a workout, handling sudden spills, wiping sweat, to everyday
                skincare routines.
              </p>

              <p className="text-charcoal font-medium text-base md:text-lg leading-relaxed">
                Choose Ecco Pulps bamboo tissue paper — the eco-conscious way to stay clean, fresh, and
                protected every day. Gentle on skin, kind to nature, and trusted for premium quality.
              </p>
            </div>

            {/* Bottom ornamental divider */}
            <div className="flex items-center gap-4 mt-12 md:mt-16">
              <div className="flex-1 h-px bg-kraft/20" />
              <span className="text-xs text-kraft/40">✦</span>
              <div className="flex-1 h-px bg-kraft/20" />
            </div>
          </div>
        </div>

        {/* ── PLATE 4: Final CTA — the dessert ── */}
        <div
          className="w-full py-14 md:py-20"
          style={{
            background: "linear-gradient(135deg, #1a3a2a 0%, #264d38 50%, #2d6a4f 100%)",
          }}
        >
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="text-[10px] md:text-[11px] font-sans font-bold tracking-[0.3em] uppercase text-sage-light/60 mb-4">
              Ready to make the switch?
            </p>
            <h3 className="font-serif text-2xl md:text-4xl font-medium text-white mb-3 leading-tight">
              Try Bamboo. Feel the Difference.
            </h3>
            <p className="text-sm md:text-base text-white/50 font-sans mb-8 max-w-md mx-auto leading-relaxed">
              Join thousands of families who trust Ecco Pulps for a cleaner, greener everyday.
            </p>
            <a
              href={`https://wa.me/919547163587?text=${encodeURIComponent("Hi! I'm interested in ordering the Premium Bamboo Soft tissues. Could you share more details?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#25D366] text-white text-sm md:text-base font-bold tracking-widest uppercase hover:bg-[#128C7E] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 no-underline"
            >
              <WhatsAppIcon size={24} />
              Order Bamboo Tissues
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
