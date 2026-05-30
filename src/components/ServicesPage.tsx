import { useEffect, useState } from 'react';
import MagneticString from './MagneticString';
import EditableText from './admin/EditableText';
import EditableMedia from './admin/EditableMedia';
import { useSiteData } from '../context/SiteDataContext';

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const { data } = useSiteData();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="services-page-section"
      style={{
        position: 'relative',
        paddingTop: '200px',
        paddingBottom: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        minHeight: '100vh',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* Background Blobs (same as Hero) */}
      <div style={{
        position: 'absolute', top: '-80px', left: '-120px',
        width: '650px', height: '650px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(130, 80, 220, 0.65) 0%, rgba(130, 80, 220, 0.25) 45%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(40px)',
        animation: 'blobFloat1 12s ease-in-out infinite',
      }} />

      <div style={{
        position: 'absolute', top: '-40px', right: '-80px',
        width: '420px', height: '420px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(210, 60, 170, 0.55) 0%, rgba(210, 60, 170, 0.18) 50%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(50px)',
        animation: 'blobFloat2 15s ease-in-out infinite',
      }} />

      <div style={{
        position: 'absolute', top: '200px', right: '-60px',
        width: '340px', height: '340px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(160, 120, 240, 0.40) 0%, rgba(160, 120, 240, 0.12) 50%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(60px)',
        animation: 'blobFloat3 10s ease-in-out infinite',
      }} />

      <div style={{
        position: 'absolute', bottom: '100px', left: '-60px',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(190, 80, 190, 0.35) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(50px)',
        animation: 'blobFloat4 18s ease-in-out infinite',
      }} />

      <div style={{
        position: 'absolute', top: '0px', left: '50%',
        transform: 'translateX(-50%)',
        width: '500px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(255,255,255,0.95) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(20px)',
        animation: 'blobPulse 8s ease-in-out infinite',
      }} />

      {/* Services Header Text Block */}
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
        {/* Eyebrow */}
        <div style={{ overflow: 'hidden', paddingBottom: '16px' }}>
          <EditableText
            path={['services', 'hero', 'eyebrow']}
            as="p"
            className={isVisible ? 'animate-text-reveal' : ''}
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)',
              lineHeight: 1.65,
              color: '#6B5F8A',
              letterSpacing: '0.01em',
              fontWeight: 500,
              margin: '0 auto 24px auto',
              opacity: isVisible ? undefined : 0,
              animationDelay: isVisible ? '0.1s' : undefined,
              display: 'block'
            }}
          />
        </div>

        {/* Headline line 1 */}
        <EditableText path={['services', 'hero', 'line1']} as="div" className="hero-word-gap" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          {data.services.hero.line1.split(' ').map((word: string, i: number) => (
            <span
              key={i}
              className={isVisible ? 'animate-text-reveal' : ''}
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: 'clamp(3rem, 6.5vw, 6rem)',
                lineHeight: 'normal',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: '#0D0A1A',
                display: 'inline-block',
                paddingBottom: '0.2em',
                marginBottom: '-0.2em',
                opacity: isVisible ? undefined : 0,
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                textRendering: 'optimizeLegibility' as const,
                animationDelay: isVisible ? `${0.2 + i * 0.08}s` : undefined,
              }}
            >
              {word}
            </span>
          ))}
        </EditableText>

        {/* Headline line 2 */}
        <EditableText path={['services', 'hero', 'line2']} as="div" className="hero-word-gap" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'flex-end', marginBottom: '48px' }}>
          {data.services.hero.line2.split(' ').map((word: string, i: number) => (
            <span
              key={i}
              className={isVisible ? 'animate-text-reveal' : ''}
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: 'clamp(3rem, 6.5vw, 6rem)',
                lineHeight: 'normal',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: '#0D0A1A',
                display: 'inline-block',
                paddingBottom: '0.2em',
                marginBottom: '-0.2em',
                opacity: isVisible ? undefined : 0,
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                textRendering: 'optimizeLegibility' as const,
                animationDelay: isVisible ? `${0.36 + i * 0.08}s` : undefined,
              }}
            >
              {word}
            </span>
          ))}
        </EditableText>
      </div>

      {/* Video Section */}
      <div
        className={`hero-video-wrapper ${isVisible ? 'animate-text-reveal animation-delay-500' : ''}`}
        style={{
          width: '100%',
          maxWidth: '1526px',
          paddingLeft: '115px',
          paddingRight: '115px',
          margin: '60px auto 0 auto',
          opacity: isVisible ? undefined : 0,
          animationDelay: isVisible ? '0.6s' : undefined,
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
          <EditableMedia
            path={['services', 'hero', 'videoUrl']}
            type="video"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>

      {/* Our Solutions Section */}
      <div
        className={isVisible ? 'animate-text-reveal' : ''}
        style={{
          width: '100%',
          maxWidth: '1296px',
          padding: '0 20px',
          margin: '150px auto 100px auto',
          position: 'relative',
          zIndex: 1,
          opacity: isVisible ? undefined : 0,
          animationDelay: isVisible ? '0.7s' : undefined,
        }}
      >
        <h2
          style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: 'clamp(3rem, 5vw, 5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: '#0D0A1A',
            marginBottom: '0px',
          }}
        >
          Our solutions
        </h2>

        {/* Section 1 */}
        <MagneticString />
        <div style={{ display: 'flex', gap: '100px', marginTop: '20px', marginBottom: '80px' }}>
          <div style={{ width: '250px' }}>
            <EditableText path={['services', 'solutions', '0', 'title']} as="p" style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: '#0D0A1A',
              textTransform: 'uppercase',
              display: 'block'
            }} />
          </div>
          <div style={{ flex: 1 }}>
            <EditableText path={['services', 'solutions', '0', 'description']} as="p" style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '28px',
              lineHeight: '1.5',
              fontWeight: 400,
              color: '#0D0A1A',
              display: 'block'
            }} />
          </div>
        </div>

        {/* Section 2 */}
        <MagneticString />
        <div style={{ display: 'flex', gap: '100px', marginTop: '20px', marginBottom: '80px' }}>
          <div style={{ width: '250px' }}>
            <EditableText path={['services', 'solutions', '1', 'title']} as="p" style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: '#0D0A1A',
              textTransform: 'uppercase',
              display: 'block'
            }} />
          </div>
          <div style={{ flex: 1 }}>
            <EditableText path={['services', 'solutions', '1', 'description']} as="p" style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '28px',
              lineHeight: '1.5',
              fontWeight: 400,
              color: '#0D0A1A',
              display: 'block'
            }} />
          </div>
        </div>

        {/* Section 3 */}
        <MagneticString />
        <div style={{ display: 'flex', gap: '100px', marginTop: '20px' }}>
          <div style={{ width: '250px' }}>
            <EditableText path={['services', 'solutions', '2', 'title']} as="p" style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: '#0D0A1A',
              textTransform: 'uppercase',
              display: 'block'
            }} />
          </div>
          <div style={{ flex: 1 }}>
            <EditableText path={['services', 'solutions', '2', 'description']} as="p" style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '28px',
              lineHeight: '1.5',
              fontWeight: 400,
              color: '#0D0A1A',
              display: 'block'
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
