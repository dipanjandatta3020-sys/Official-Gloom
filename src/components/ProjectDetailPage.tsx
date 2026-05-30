import { useEffect, useState } from 'react';
import { useSiteData } from '../context/SiteDataContext';
import EditableText from './admin/EditableText';
import EditableMedia from './admin/EditableMedia';
import MagneticString from './MagneticString';

interface ProjectDetailPageProps {
  id: number;
}

export default function ProjectDetailPage({ id }: ProjectDetailPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { data } = useSiteData();
  const projects = data.projects;

  // Find the project data
  const projectIndex = projects.findIndex((p: any) => p.id === id);
  const pIndexStr = (projectIndex === -1 ? 0 : projectIndex).toString();
  const project = projects[projectIndex] || projects[0];

  useEffect(() => {
    // Reset visibility when ID changes
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [id]);

  return (
    <section
      className="project-detail-section"
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
      {/* Background Blobs (same as Hero/Services/Projects) */}
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

      {/* Header Text Block */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px',
          padding: '0 20px',
        }}
      >
        <div style={{ overflow: 'hidden', paddingBottom: '16px' }}>
          <EditableText
            path={['projects', pIndexStr, 'title']}
            as="p"
            className={isVisible ? 'animate-text-reveal' : ''}
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '18px',
              lineHeight: 1.65,
              color: '#0D0A1A',
              fontWeight: 500,
              margin: '0 auto 40px auto',
              opacity: isVisible ? undefined : 0,
              animationDelay: isVisible ? '0.1s' : undefined,
              display: 'block'
            }}
          />
        </div>

        {/* Staggered Word Reveal for Headline */}
        <EditableText path={['projects', pIndexStr, 'detailHeadline']} as="div" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
          {project.detailHeadline.split(' ').map((word: string, i: number) => (
            <div key={i} style={{ overflow: 'hidden', paddingBottom: '16px' }}>
              <span
                className={isVisible ? 'animate-text-reveal' : ''}
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: 'clamp(3rem, 6.5vw, 6rem)',
                  lineHeight: '1.1',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: '#0D0A1A',
                  display: 'inline-block',
                  opacity: isVisible ? undefined : 0,
                  animationDelay: isVisible ? `${0.2 + i * 0.05}s` : undefined,
                }}
              >
                {word}
              </span>
            </div>
          ))}
        </EditableText>
      </div>

      {/* Video Section */}
      <div
        className={isVisible ? 'animate-text-reveal' : ''}
        style={{
          width: '100%',
          maxWidth: '1526px',
          padding: '0 115px',
          margin: '50px auto 0 auto',
          position: 'relative',
          zIndex: 1,
          opacity: isVisible ? undefined : 0,
          animationDelay: isVisible ? '0.6s' : undefined,
        }}
      >
        <div
          style={{
            width: '100%',
            aspectRatio: '16/9',
            margin: '0 auto',
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            backgroundColor: '#EDE9F8',
          }}
        >
          <EditableMedia
            path={['projects', pIndexStr, 'detailVideo']}
            type="video"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Detail Images Section */}
      <div
        style={{
          width: '100%',
          maxWidth: '1526px',
          padding: '0 115px',
          margin: '50px auto 0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '50px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {project.detailImages.map((img, i) => (
          <div
            key={i}
            className={isVisible ? 'animate-text-reveal' : ''}
            style={{
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: '24px',
              overflow: 'hidden',
              backgroundColor: '#EDE9F8',
              opacity: isVisible ? undefined : 0,
              animationDelay: isVisible ? `${0.8 + i * 0.2}s` : undefined,
            }}
          >
            <EditableMedia path={['projects', pIndexStr, 'detailImages', i.toString()]} type="image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>

      {/* Product Overview Section */}
      <div
        style={{
          width: '100%',
          maxWidth: '1296px',
          padding: '0 20px',
          margin: '150px auto 100px auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: 'clamp(3rem, 5vw, 5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: '#0D0A1A',
            marginBottom: '0px', // Magnetic string will provide spacing
          }}
        >
          Product overview
        </h2>

        {/* Interactive Magnetic String */}
        <MagneticString />

        <div style={{ display: 'flex', gap: '100px', marginTop: '20px' }}>
          <div style={{ width: '250px' }}>
            <p style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: '#0D0A1A',
              textTransform: 'uppercase'
            }}>
              Product Overview
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <EditableText
              path={['projects', pIndexStr, 'overviewText']}
              as="p"
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '28px',
                lineHeight: '1.5',
                fontWeight: 400,
                color: '#0D0A1A',
                margin: 0,
                display: 'block'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
