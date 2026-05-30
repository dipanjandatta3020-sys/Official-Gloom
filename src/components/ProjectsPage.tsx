import { useEffect, useState } from 'react';
import { projects } from './FeaturedProjects';
import ImageSlideshow from './ImageSlideshow';

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All Projects');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filters = ['All Projects', 'Websites', 'Applications'];

  const leftColumn = projects.filter((_, i) => i % 2 === 0);
  const rightColumn = projects.filter((_, i) => i % 2 !== 0);

  return (
    <section
      className="projects-page-section"
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
      {/* Background Blobs (same as Hero/Services) */}
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
          padding: '0 20px',
        }}
      >
        <div style={{ overflow: 'hidden', paddingBottom: '16px' }}>
          <h1
            className={isVisible ? 'animate-text-reveal' : ''}
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: 'clamp(3rem, 6vw, 6rem)',
              lineHeight: 'normal',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: '#0D0A1A',
              margin: '0 0 24px 0',
              opacity: isVisible ? undefined : 0,
              animationDelay: isVisible ? '0.1s' : undefined,
            }}
          >
            Our projects
          </h1>
        </div>

        <div style={{ overflow: 'hidden', paddingBottom: '16px' }}>
          <p
            className={isVisible ? 'animate-text-reveal' : ''}
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)',
              lineHeight: 1.65,
              color: '#0D0A1A',
              letterSpacing: '0.01em',
              fontWeight: 400,
              margin: '0 auto',
              opacity: isVisible ? undefined : 0,
              animationDelay: isVisible ? '0.2s' : undefined,
            }}
          >
            We help bring ideas to life and create digital products that work.
          </p>
        </div>

        {/* Filters */}
        <div 
          className={isVisible ? 'animate-text-reveal' : ''}
          style={{ 
            display: 'flex', 
            gap: '32px', 
            marginTop: '48px',
            opacity: isVisible ? undefined : 0,
            animationDelay: isVisible ? '0.3s' : undefined,
          }}
        >
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                fontFamily: '"Inter", sans-serif',
                fontSize: '18px',
                fontWeight: 500,
                color: activeFilter === filter ? '#0D0A1A' : '#6B5F8A',
                cursor: 'pointer',
                position: 'relative',
                transition: 'color 0.3s ease',
              }}
            >
              {filter}
              {activeFilter === filter && (
                <div style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: 0,
                  width: '100%',
                  height: '1px',
                  backgroundColor: '#0D0A1A',
                }} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div
        className={isVisible ? 'animate-text-reveal' : ''}
        style={{
          width: '100%',
          maxWidth: '1526px',
          padding: '0 115px',
          margin: '100px auto 0 auto',
          position: 'relative',
          zIndex: 1,
          opacity: isVisible ? undefined : 0,
          animationDelay: isVisible ? '0.4s' : undefined,
        }}
      >
        {activeFilter === 'Applications' ? (
          <div style={{ textAlign: 'center', padding: '100px 0', color: '#6B5F8A', fontFamily: '"Inter", sans-serif', fontSize: '24px' }}>
            Coming soon
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '48px',
            }}
          >
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', width: '500px' }}>
              {leftColumn.map(project => (
                <div 
                  key={project.id} 
                  style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                  onClick={() => window.location.hash = `#project-${project.id}`}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '675px',
                      borderRadius: '40px',
                      overflow: 'hidden',
                      marginBottom: '24px',
                      position: 'relative',
                      backgroundColor: '#2E1A4A',
                    }}
                  >
                    <ImageSlideshow images={project.images} />
                  </div>
                  <h3
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '24px',
                      fontWeight: 500,
                      color: '#0D0A1A',
                      margin: '0 0 8px 0',
                    }}
                  >
                    <strong>{project.title}</strong> <span style={{ color: '#6B5F8A' }}>– {project.description}</span>
                  </h3>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', width: '500px', marginTop: '100px' }}>
              {rightColumn.map(project => (
                <div 
                  key={project.id} 
                  style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                  onClick={() => window.location.hash = `#project-${project.id}`}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '675px',
                      borderRadius: '40px',
                      overflow: 'hidden',
                      marginBottom: '24px',
                      position: 'relative',
                      backgroundColor: '#2E1A4A',
                    }}
                  >
                    <ImageSlideshow images={project.images} />
                  </div>
                  <h3
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '24px',
                      fontWeight: 500,
                      color: '#0D0A1A',
                      margin: '0 0 8px 0',
                    }}
                  >
                    <strong>{project.title}</strong> <span style={{ color: '#6B5F8A' }}>– {project.description}</span>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
