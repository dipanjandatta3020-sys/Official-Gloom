import { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import EditableText from './admin/EditableText';

const navLinks = ['Services', 'Projects', 'Company', 'Contacts'];

export default function Navbar({ onServicesClick, onProjectsClick, onLogoClick }: { onServicesClick?: () => void; onProjectsClick?: () => void; onLogoClick?: () => void }) {
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
          backgroundColor: 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(123, 92, 229, 0.15)',
        }}
        className="main-navbar"
      >
        <div
          className="navbar-inner"
          style={{
            width: '100%',
            maxWidth: '1526px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 115px',
          }}
        >
          {/* Logo with reveal animation */}
          <div style={{ overflow: 'hidden', paddingBottom: '4px' }}>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); onLogoClick?.(); }}
              className={isVisible ? 'animate-text-reveal animation-delay-100' : ''}
              style={{
                background: 'linear-gradient(135deg, #7B5CE5, #E040A0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: '"Outfit", sans-serif',
                fontSize: '1.85rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
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
              fontSize: '0.94rem',
              fontWeight: 500,
              color: '#4A3F6B',
              fontFamily: '"Inter", sans-serif',
              letterSpacing: '0.01em',
            }}
          >
            {navLinks.map((link, index) => (
              <div key={link} style={{ overflow: 'hidden', paddingBottom: '4px' }}>
                <a
                  href={link === 'Contacts' ? 'https://wa.me/918131949105' : `#${link.toLowerCase()}`}
                  target={link === 'Contacts' ? '_blank' : undefined}
                  rel={link === 'Contacts' ? 'noreferrer' : undefined}
                  className={isVisible ? `animate-text-reveal animation-delay-${(index + 1) * 100}` : ''}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'opacity 0.3s',
                    display: 'block',
                    opacity: isVisible ? undefined : 0,
                  }}
                  onClick={(e) => {
                    if (link === 'Services' && onServicesClick) {
                      e.preventDefault();
                      onServicesClick();
                    } else if (link === 'Projects' && onProjectsClick) {
                      e.preventDefault();
                      onProjectsClick();
                    }
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = '#0D0A1A'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'inherit'; }}
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
            style={{ color: '#0D0A1A' }}
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
              backgroundColor: '#06030D',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              padding: '24px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
              <span style={{ 
                background: 'linear-gradient(135deg, #7B5CE5, #E040A0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: '"Outfit", sans-serif',
                fontSize: '1.85rem', 
                fontWeight: 700, 
                letterSpacing: '-0.02em' 
              }}>
                Gloom
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#F0EBF8', display: 'flex' }}
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '20px' }}>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link}
                  href={link === 'Contacts' ? 'https://wa.me/918131949105' : `#${link.toLowerCase()}`}
                  target={link === 'Contacts' ? '_blank' : undefined}
                  rel={link === 'Contacts' ? 'noreferrer' : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  style={{
                    textDecoration: 'none',
                    color: '#F0EBF8',
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: 700,
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
              style={{ marginTop: 'auto', paddingBottom: '40px', fontSize: '14px', color: '#9B8EC4', fontFamily: '"Inter", sans-serif' }}
            >
              <EditableText path={['footer', 'office1', 'email']} as="span" style={{ display: 'block', marginBottom: '4px' }} />
              <EditableText path={['footer', 'office2', 'phone']} as="span" style={{ display: 'block' }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
