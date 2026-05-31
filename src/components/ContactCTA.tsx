import { useState, useRef, useEffect } from 'react';
import EditableText from './admin/EditableText';
import { useSiteData } from '../context/SiteDataContext';

export default function ContactCTA() {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const { data } = useSiteData();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="contact-cta-section"
      style={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
        color: '#F0EBF8',
      }}
    >

      {/* Decorative Glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(192,96,208,0.15) 0%, rgba(123,92,229,0.08) 40%, transparent 70%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 24px',
          width: '100%',
        }}
      >
        {/* "Have" line */}
        <div style={{ overflow: 'hidden', paddingBottom: '16px', marginBottom: '-16px' }}>
            <EditableText
              path={['contact', 'line1']}
              as="h2"
              className={`contact-cta-heading ${isInView ? 'animate-text-reveal animation-delay-100' : ''}`}
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: 'clamp(3rem, 8vw, 8rem)',
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: '#F0EBF8',
                margin: 0,
                opacity: isInView ? undefined : 0,
                display: 'block'
              }}
            />
        </div>

        {/* "an idea?" line */}
        <div style={{ overflow: 'hidden', paddingBottom: '16px' }}>
          <EditableText
            path={['contact', 'line2']}
            as="h2"
            className={`contact-cta-heading ${isInView ? 'animate-text-reveal animation-delay-200' : ''}`}
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: 'clamp(3rem, 8vw, 8rem)',
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: '#F0EBF8',
              margin: 0,
              opacity: isInView ? undefined : 0,
              display: 'block'
            }}
          />
        </div>

        <div
          className={isInView ? 'animate-text-reveal animation-delay-300' : ''}
          style={{ marginTop: '56px', opacity: isInView ? undefined : 0 }}
        >
          <button
            className="cta-btn contact-cta-btn-wrap"
            style={{
              borderRadius: '100px',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              padding: '24px 64px',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <EditableText
              path={['contact', 'buttonText']}
              as="span"
              className="contact-cta-btn-text"
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: 'clamp(2rem, 5vw, 5rem)',
                lineHeight: 1,
                fontWeight: 700,
                letterSpacing: '0.05em',
                color: '#ffffff',
              }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
