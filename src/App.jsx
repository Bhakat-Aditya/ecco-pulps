import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Section components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Features from "./components/Features";
import WhyChooseUs from "./components/WhyChooseUs";
import Products from "./components/Products";
import Founder from "./components/Founder";
import Testimonials from "./components/Testimonials";
import PartnerWithUs from "./components/PartnerWithUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

// Register GSAP plugins once at the app level
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger after all components have mounted
    // This ensures accurate measurements for pinned sections
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="w-full min-h-screen bg-cream text-charcoal font-sans overflow-x-hidden selection:bg-sage-light selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <WhyChooseUs />
        <Products />
        <Founder />
        <Testimonials />
        <PartnerWithUs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
