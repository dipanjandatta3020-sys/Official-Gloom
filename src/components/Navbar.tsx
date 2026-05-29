import { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = ['Services', 'Projects', 'Company', 'Blog', 'Contacts'];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150 && !isMobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <div
          className="navbar-inner"
          style={{
            width: '100%',
            maxWidth: '1526px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '28px 115px',
          }}
        >
          {/* Logo with reveal animation */}
          <div style={{ overflow: 'hidden', paddingBottom: '4px' }}>
            <a
              href="#"
              className={isVisible ? 'animate-text-reveal animation-delay-100' : ''}
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                color: '#0a0a0a',
                textDecoration: 'none',
                cursor: 'pointer',
                userSelect: 'none',
                display: 'block',
                opacity: isVisible ? undefined : 0,
              }}
            >
              Gloom
            </a>
          </div>

          {/* Desktop nav links with reveal animation */}
          <div
            className="navbar-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '40px',
              fontSize: '0.95rem',
              fontWeight: 500,
              color: '#0a0a0a',
            }}
          >
            {navLinks.map((link, index) => (
              <div key={link} style={{ overflow: 'hidden', paddingBottom: '4px' }}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={isVisible ? `animate-text-reveal animation-delay-${(index + 1) * 100}` : ''}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'opacity 0.3s',
                    display: 'block',
                    opacity: isVisible ? undefined : 0,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.4')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  {link}
                </a>
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: '#ffffff',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              padding: '24px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.04em', color: '#0a0a0a' }}>
                Gloom
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#0a0a0a', display: 'flex' }}
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '20px' }}>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  style={{
                    textDecoration: 'none',
                    color: '#0a0a0a',
                    fontSize: '2.5rem',
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ marginTop: 'auto', paddingBottom: '40px', fontSize: '14px', color: '#666666' }}
            >
              info@gloom.com <br/>
              +1 301 549 9309
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
