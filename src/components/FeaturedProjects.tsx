import ImageSlideshow from './ImageSlideshow';
import EditableText from './admin/EditableText';
import EditableMedia from './admin/EditableMedia';
import EditableImageArray from './admin/EditableImageArray';
import { useSiteData } from '../context/SiteDataContext';

export default function FeaturedProjects() {
  const { data } = useSiteData();
  const projects = data.projects;
  return (
    <section
      className="featured-section"
      style={{
        padding: '120px 0 200px 0',
        background: 'linear-gradient(160deg, #0E0818 0%, #1A1124 30%, #2E1A4A 65%, #3D2468 100%)',
        borderRadius: '80px 80px 0 0',
        marginTop: '-80px',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
        boxShadow: '0 -20px 60px rgba(13, 10, 26, 0.4)',
      }}
    >
      {/* Glossy highlight overlay */}
      <div
        style={{
          position: 'absolute',
          top: '-30%',
          left: '20%',
          width: '60%',
          height: '70%',
          background: 'radial-gradient(ellipse at center, rgba(123,92,229,0.12) 0%, rgba(224,64,160,0.04) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        className="featured-container"
        style={{
          maxWidth: '1529px',
          margin: '0 auto',
          padding: '0 230px',
        }}
      >
        <h2
          style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: '#F0EBF8',
            marginBottom: '64px',
            lineHeight: 'normal',
            paddingBottom: '0.2em',
          }}
        >
          Featured projects.
        </h2>

        <div
          className="featured-grid"
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '105px',
          }}
        >
          {/* Left Column */}
          <div
            className="featured-col"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '105px',
              width: '482px',
            }}
          >
            {projects.filter((_, i) => i % 2 === 0).map((project) => (
              <div 
                key={project.id} 
                style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                onClick={() => window.location.hash = `#project-${project.id}`}
              >
                <div
                  className="featured-card-img"
                  style={{
                    width: '482px',
                    height: '651px',
                    borderRadius: '40px',
                    border: '1px solid rgba(123, 92, 229, 0.2)',
                    overflow: 'hidden',
                    backgroundColor: '#ffffff',
                    marginBottom: '20px',
                  }}
                >
                  <EditableImageArray path={['projects', projects.findIndex(p => p.id === project.id).toString(), 'images']} images={project.images}>
                    <ImageSlideshow images={project.images} />
                  </EditableImageArray>
                </div>
                <h3
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#F0EBF8',
                    margin: '0 0 8px 0',
                  }}
                >
                  <EditableText path={['projects', projects.findIndex(p => p.id === project.id).toString(), 'title']} />
                </h3>
                <EditableText
                  path={['projects', projects.findIndex(p => p.id === project.id).toString(), 'description']}
                  as="p"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '22px',
                    color: '#9B8EC4',
                    margin: 0,
                    lineHeight: 1.45,
                    display: 'block'
                  }}
                />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div
            className="featured-col featured-col-right"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '105px',
              width: '482px',
              marginTop: '317px',
            }}
          >
            {projects.filter((_, i) => i % 2 !== 0).map((project) => (
              <div 
                key={project.id} 
                style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                onClick={() => window.location.hash = `#project-${project.id}`}
              >
                <div
                  className="featured-card-img"
                  style={{
                    width: '482px',
                    height: '651px',
                    borderRadius: '40px',
                    border: '1px solid rgba(123, 92, 229, 0.2)',
                    overflow: 'hidden',
                    backgroundColor: '#ffffff',
                    marginBottom: '20px',
                  }}
                >
                  <EditableImageArray path={['projects', projects.findIndex(p => p.id === project.id).toString(), 'images']} images={project.images}>
                    <ImageSlideshow images={project.images} />
                  </EditableImageArray>
                </div>
                <h3
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#F0EBF8',
                    margin: '0 0 8px 0',
                  }}
                >
                  <EditableText path={['projects', projects.findIndex(p => p.id === project.id).toString(), 'title']} />
                </h3>
                <EditableText
                  path={['projects', projects.findIndex(p => p.id === project.id).toString(), 'description']}
                  as="p"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '22px',
                    color: '#9B8EC4',
                    margin: 0,
                    lineHeight: 1.45,
                    display: 'block'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: '100px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <button
            className="cta-btn cta-btn-light"
            onClick={() => window.location.hash = '#projects'}
            style={{
              width: '285px',
              height: '85px',
              borderRadius: '100px',
              fontWeight: 500,
              fontSize: '18px',
              fontFamily: '"Inter", sans-serif',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            View all projects
          </button>
        </div>
      </div>
    </section>
  );
}
