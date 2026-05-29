import { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

const navLinks = ['Services', 'Projects', 'Company', 'Blog', 'Contacts'];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
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
                href="#"
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
      </div>
    </motion.nav>
  );
}
