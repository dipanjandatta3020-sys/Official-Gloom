import { useState, useRef, useEffect } from 'react';

export default function ContactCTA() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

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
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#050505',
        color: '#ffffff',
        borderRadius: '40px 40px 0 0',
        marginTop: '40px',
      }}
    >
      {/* Background Video */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <video
          src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.4,
            filter: 'grayscale(100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}
        />
      </div>

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
          <h2
            className={isInView ? 'animate-text-reveal animation-delay-100' : ''}
            style={{
              fontSize: 'clamp(3rem, 8vw, 8rem)',
              lineHeight: 1.05,
              fontWeight: 500,
              letterSpacing: '-0.02em',
              margin: 0,
              opacity: isInView ? undefined : 0,
            }}
          >
            Have
          </h2>
        </div>

        {/* "an idea?" line */}
        <div style={{ overflow: 'hidden', paddingBottom: '16px' }}>
          <h2
            className={isInView ? 'animate-text-reveal animation-delay-200' : ''}
            style={{
              fontSize: 'clamp(3rem, 8vw, 8rem)',
              lineHeight: 1.05,
              fontWeight: 500,
              letterSpacing: '-0.02em',
              margin: 0,
              opacity: isInView ? undefined : 0,
            }}
          >
            an idea?
          </h2>
        </div>

        <div
          className={isInView ? 'animate-text-reveal animation-delay-300' : ''}
          style={{ marginTop: '56px', cursor: 'pointer', opacity: isInView ? undefined : 0 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '100px',
              border: isHovered
                ? '1px solid #ffffff'
                : '1px solid rgba(255, 255, 255, 0.4)',
              padding: '24px 64px',
              transition: 'all 0.5s ease',
              backgroundColor: isHovered
                ? '#ffffff'
                : 'transparent',
            }}
          >
            <span
              style={{
                position: 'relative',
                zIndex: 10,
                fontSize: 'clamp(2rem, 5vw, 5rem)',
                lineHeight: 1,
                fontWeight: 500,
                letterSpacing: '-0.02em',
                transition: 'color 0.5s ease',
                color: isHovered ? '#050505' : '#ffffff',
              }}
            >
              TELL US
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
