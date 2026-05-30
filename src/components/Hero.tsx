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
        backgroundColor: '#ffffff',
      }}
    >
      {/* === HERO BACKGROUND BLOBS === */}
      {/* Blob 1 — violet, top-left */}
      <div style={{
        position: 'absolute', top: '-80px', left: '-120px',
        width: '650px', height: '650px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(130, 80, 220, 0.65) 0%, rgba(130, 80, 220, 0.25) 45%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(40px)',
        animation: 'blobFloat1 12s ease-in-out infinite',
      }} />

      {/* Blob 2 — pink, top-right */}
      <div style={{
        position: 'absolute', top: '-40px', right: '-80px',
        width: '420px', height: '420px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(210, 60, 170, 0.55) 0%, rgba(210, 60, 170, 0.18) 50%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(50px)',
        animation: 'blobFloat2 15s ease-in-out infinite',
      }} />

      {/* Blob 3 — lavender, mid-right */}
      <div style={{
        position: 'absolute', top: '200px', right: '-60px',
        width: '340px', height: '340px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(160, 120, 240, 0.40) 0%, rgba(160, 120, 240, 0.12) 50%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(60px)',
        animation: 'blobFloat3 10s ease-in-out infinite',
      }} />

      {/* Blob 4 — warm pink, bottom-left */}
      <div style={{
        position: 'absolute', bottom: '100px', left: '-60px',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(190, 80, 190, 0.35) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(50px)',
        animation: 'blobFloat4 18s ease-in-out infinite',
      }} />

      {/* Blob 5 — white center brightening */}
      <div style={{
        position: 'absolute', top: '0px', left: '50%',
        transform: 'translateX(-50%)',
        width: '500px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(255,255,255,0.95) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(20px)',
        animation: 'blobPulse 8s ease-in-out infinite',
      }} />

      {/* Hero Text Block */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Headline line 1 - word by word */}
        <div className="hero-word-gap" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          {['Digital', 'design', '&'].map((word, i) => (
            <span
              key={i}
              className={isVisible ? `animate-text-reveal` : ''}
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                lineHeight: 'normal',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#0D0A1A',
                display: 'inline-block',
                paddingBottom: '0.2em',
                marginBottom: '-0.2em',
                opacity: isVisible ? undefined : 0,
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                textRendering: 'optimizeLegibility' as const,
                animationDelay: isVisible ? `${0.1 + i * 0.08}s` : undefined,
                ...(word === 'design' ? {
                  background: 'linear-gradient(135deg, #7B5CE5, #E040A0)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                } : {}),
              }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Headline line 2 - word by word */}
        <div className="hero-word-gap" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'flex-end', marginBottom: '48px' }}>
          {['development', 'agency'].map((word, i) => (
            <span
              key={i}
              className={isVisible ? `animate-text-reveal` : ''}
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                lineHeight: 'normal',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#0D0A1A',
                display: 'inline-block',
                paddingBottom: '0.2em',
                marginBottom: '-0.2em',
                opacity: isVisible ? undefined : 0,
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                textRendering: 'optimizeLegibility' as const,
                animationDelay: isVisible ? `${0.34 + i * 0.08}s` : undefined,
              }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Subheading */}
        <div style={{ overflow: 'hidden', paddingBottom: '16px' }}>
          <p
            className={isVisible ? 'animate-text-reveal' : ''}
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)',
              lineHeight: 1.65,
              color: '#6B5F8A',
              letterSpacing: '0.01em',
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
            backgroundColor: '#EDE9F8',
            border: '1px solid rgba(123, 92, 229, 0.15)',
            height: '729px',
            boxShadow: '0 20px 80px rgba(123, 92, 229, 0.12), 0 4px 24px rgba(13, 10, 26, 0.06)',
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
