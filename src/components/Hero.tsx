import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure CSS animation classes are applied after mount
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        paddingTop: '200px',
        paddingBottom: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        margin: '0 auto',
      }}
    >
      {/* Hero Text Block */}
      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Headline line 1 - word by word */}
        <div className="hero-word-gap" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', paddingBottom: '8px' }}>
          {['Digital', 'design', '&'].map((word, i) => (
            <div key={i} style={{ overflow: 'hidden', paddingBottom: '8px' }}>
              <span
                className={isVisible ? `animate-text-reveal` : ''}
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  lineHeight: 1.08,
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: '#050505',
                  display: 'inline-block',
                  opacity: isVisible ? undefined : 0,
                  animationDelay: isVisible ? `${0.1 + i * 0.08}s` : undefined,
                }}
              >
                {word}
              </span>
            </div>
          ))}
        </div>

        {/* Headline line 2 - word by word */}
        <div className="hero-word-gap" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
          {['development', 'agency'].map((word, i) => (
            <div key={i} style={{ overflow: 'hidden', paddingBottom: '8px' }}>
              <span
                className={isVisible ? `animate-text-reveal` : ''}
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  lineHeight: 1.08,
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: '#050505',
                  display: 'inline-block',
                  opacity: isVisible ? undefined : 0,
                  animationDelay: isVisible ? `${0.34 + i * 0.08}s` : undefined,
                }}
              >
                {word}
              </span>
            </div>
          ))}
        </div>

        {/* Subheading */}
        <div style={{ overflow: 'hidden', paddingBottom: '16px' }}>
          <p
            className={isVisible ? 'animate-text-reveal' : ''}
            style={{
              fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
              lineHeight: 1.55,
              color: '#333333',
              maxWidth: '560px',
              fontWeight: 400,
              margin: '0 auto',
              opacity: isVisible ? undefined : 0,
              animationDelay: isVisible ? '0.55s' : undefined,
            }}
          >
            We help companies build scalable digital products with thoughtful
            design systems and carefully crafted development.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div
        className={`hero-video-wrapper ${isVisible ? 'animate-text-reveal animation-delay-500' : ''}`}
        style={{
          marginTop: '100px',
          width: '100%',
          maxWidth: '1526px',
          paddingLeft: '115px',
          paddingRight: '115px',
          margin: '0 auto',
          opacity: isVisible ? undefined : 0,
        }}
      >
        <div
          className="hero-video"
          style={{
            width: '100%',
            maxWidth: '1296px',
            margin: '0 auto',
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            backgroundColor: '#f0f0f0',
            height: '729px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08), 0 4px 20px rgba(0, 0, 0, 0.04)',
          }}
        >
          <video
            src="https://media.w3.org/2010/05/sintel/trailer.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </section>
  );
}
