import { useEffect, useState } from 'react';
import { useSiteData } from '../context/SiteDataContext';
import ImageSlideshow from './ImageSlideshow';

export default function ProjectsPage() {
  const { data, isAdmin, updateData } = useSiteData();
  const projects = data.projects;
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All Projects');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filters = ['All Projects', 'Websites', 'Applications'];

  const filteredProjects = activeFilter === 'All Projects'
    ? projects
    : projects.filter((p: any) => p.category === activeFilter);

  const leftColumn = filteredProjects.filter((_, i) => i % 2 === 0);
  const rightColumn = filteredProjects.filter((_, i) => i % 2 !== 0);

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
          className={`projects-filter-wrapper ${isVisible ? 'animate-text-reveal' : ''}`}
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
              className="projects-filter-button"
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
        
        {isAdmin && (
          <div style={{ marginTop: '32px', position: 'relative', zIndex: 1 }}>
            <button
              onClick={() => {
                const newProject = {
                  id: Date.now(),
                  title: 'New Project',
                  description: 'Project description',
                  category: activeFilter === 'Applications' ? 'Applications' : 'Websites',
                  images: ['https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=482&h=651&fit=crop'],
                  detailHeadline: 'Project headline',
                  detailVideo: '',
                  detailImages: ['', ''],
                  overviewText: 'Project overview text.',
                  isFeatured: false,
                };
                updateData(['projects'], [...data.projects, newProject]);
              }}
              style={{
                backgroundColor: '#7B5CE5',
                color: '#ffffff',
                border: 'none',
                borderRadius: '100px',
                padding: '14px 32px',
                fontSize: '15px',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              + Add {activeFilter === 'Applications' ? 'Application' : 'Website'} Project
            </button>
          </div>
        )}
      </div>

      {/* Projects Grid */}
      <div
        className={`projects-grid-wrapper ${isVisible ? 'animate-text-reveal' : ''}`}
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
        <div
            className="projects-grid-row"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '48px',
            }}
          >
            {/* Left Column */}
            <div className="projects-grid-col" style={{ display: 'flex', flexDirection: 'column', gap: '80px', width: '500px' }}>
              {leftColumn.map(project => (
                <div 
                  key={project.id} 
                  style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                  onClick={() => window.location.hash = `#project-${project.id}`}
                >
                  <div
                    className="projects-grid-img"
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
                  {isAdmin && (
                    <div style={{ display: 'flex', gap: '8px', marginTop: '10px', flexWrap: 'wrap' }}>
                      {/* Featured toggle */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const newProjects = data.projects.map((p: any) =>
                            p.id === project.id ? { ...p, isFeatured: !p.isFeatured } : p
                          );
                          updateData(['projects'], newProjects);
                        }}
                        style={{
                          backgroundColor: project.isFeatured ? 'rgba(224,64,160,0.2)' : 'rgba(123,92,229,0.15)',
                          color: project.isFeatured ? '#E040A0' : '#7B5CE5',
                          border: `1px solid ${project.isFeatured ? 'rgba(224,64,160,0.4)' : 'rgba(123,92,229,0.3)'}`,
                          borderRadius: '20px',
                          padding: '6px 16px',
                          fontSize: '12px',
                          fontFamily: '"Inter", sans-serif',
                          cursor: 'pointer',
                        }}
                      >
                        {project.isFeatured ? '★ Featured' : '☆ Add to Featured'}
                      </button>
                      {/* Delete button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!window.confirm(`Delete "${project.title}"? This cannot be undone.`)) return;
                          updateData(['projects'], data.projects.filter((p: any) => p.id !== project.id));
                        }}
                        style={{
                          backgroundColor: 'rgba(220,38,38,0.15)',
                          color: '#ef4444',
                          border: '1px solid rgba(220,38,38,0.35)',
                          borderRadius: '20px',
                          padding: '6px 16px',
                          fontSize: '12px',
                          fontFamily: '"Inter", sans-serif',
                          cursor: 'pointer',
                        }}
                      >
                        🗑 Delete
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="projects-grid-col" style={{ display: 'flex', flexDirection: 'column', gap: '80px', width: '500px', marginTop: '100px' }}>
              {rightColumn.map(project => (
                <div 
                  key={project.id} 
                  style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                  onClick={() => window.location.hash = `#project-${project.id}`}
                >
                  <div
                    className="projects-grid-img"
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
                  {isAdmin && (
                    <div style={{ display: 'flex', gap: '8px', marginTop: '10px', flexWrap: 'wrap' }}>
                      {/* Featured toggle */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const newProjects = data.projects.map((p: any) =>
                            p.id === project.id ? { ...p, isFeatured: !p.isFeatured } : p
                          );
                          updateData(['projects'], newProjects);
                        }}
                        style={{
                          backgroundColor: project.isFeatured ? 'rgba(224,64,160,0.2)' : 'rgba(123,92,229,0.15)',
                          color: project.isFeatured ? '#E040A0' : '#7B5CE5',
                          border: `1px solid ${project.isFeatured ? 'rgba(224,64,160,0.4)' : 'rgba(123,92,229,0.3)'}`,
                          borderRadius: '20px',
                          padding: '6px 16px',
                          fontSize: '12px',
                          fontFamily: '"Inter", sans-serif',
                          cursor: 'pointer',
                        }}
                      >
                        {project.isFeatured ? '★ Featured' : '☆ Add to Featured'}
                      </button>
                      {/* Delete button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!window.confirm(`Delete "${project.title}"? This cannot be undone.`)) return;
                          updateData(['projects'], data.projects.filter((p: any) => p.id !== project.id));
                        }}
                        style={{
                          backgroundColor: 'rgba(220,38,38,0.15)',
                          color: '#ef4444',
                          border: '1px solid rgba(220,38,38,0.35)',
                          borderRadius: '20px',
                          padding: '6px 16px',
                          fontSize: '12px',
                          fontFamily: '"Inter", sans-serif',
                          cursor: 'pointer',
                        }}
                      >
                        🗑 Delete
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
}
