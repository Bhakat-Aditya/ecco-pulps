import logo from "../assets/logo.jpg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-forest text-charcoal/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Left column — Brand + Location */}
          <div className="flex flex-col items-start">
            <a href="#hero" className="flex items-center gap-4 mb-6 no-underline group">
              <div className="relative overflow-hidden rounded-full p-[2px] bg-gradient-to-tr from-kraft/60 to-sage-light/60 transition-transform duration-500 group-hover:scale-105">
                <img src={logo} alt="Ecco Pulps Logo" className="h-12 w-12 rounded-full object-cover border-2 border-forest" />
              </div>
              <span className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-wider transition-colors duration-300 group-hover:text-kraft">
                Ecco Pulps
              </span>
            </a>
            <p className="text-sm leading-relaxed opacity-80 mb-2 font-medium tracking-wide">
              Kolkata, West Bengal, India
            </p>
            <p className="text-sm opacity-70 max-w-xs leading-relaxed">
              Premium sustainable tissue products, crafted with care for a greener tomorrow.
            </p>
          </div>

          {/* Center column — Site Navigation */}
          <div className="md:pl-16">
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-kraft mb-6">
              Explore
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Our Products", href: "#products" },
                { name: "B2B Partnership", href: "#partner" },
                { name: "Contact Us", href: "#contact" }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center text-sm font-medium text-charcoal/70 hover:text-white transition-colors duration-300 no-underline"
                  >
                    <span className="w-0 h-[1px] bg-kraft mr-0 transition-all duration-300 group-hover:w-4 group-hover:mr-3"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — Direct Contact */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-kraft mb-6">
              Get in Touch
            </h4>
            <div className="space-y-5">
              <a href="tel:+919547163587" className="block text-base font-semibold text-charcoal/90 hover:text-white transition-colors duration-300 no-underline group">
                <span className="block text-xs font-bold tracking-widest uppercase text-sage-light mb-1 opacity-80 group-hover:opacity-100 transition-opacity">Call / WhatsApp</span>
                +91 95471 63587
              </a>
              <a href="mailto:eccopulps.tissue@gmail.com" className="block text-base font-semibold text-charcoal/90 hover:text-white transition-colors duration-300 no-underline group">
                <span className="block text-xs font-bold tracking-widest uppercase text-sage-light mb-1 opacity-80 group-hover:opacity-100 transition-opacity">Email Us</span>
                eccopulps.tissue@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.instagram.com/eccopulps_tissue/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal/60 hover:text-white hover:border-kraft hover:bg-kraft/10 transition-all duration-300 no-underline"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576594711777#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal/60 hover:text-white hover:border-kraft hover:bg-kraft/10 transition-all duration-300 no-underline"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom divider and tagline */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs opacity-50 font-medium tracking-wider">
            © {currentYear} Ecco Pulps. All rights reserved.
          </p>
          <p className="text-xs opacity-60 font-semibold tracking-widest uppercase text-sage-light">
            Every tissue you choose makes the planet a little greener.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
