import ImageSlideshow from './ImageSlideshow';

export const projects = [
  {
    id: 1,
    title: 'Punto Pago',
    description: 'The First Super-App in Latin America',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=482&h=651&fit=crop',
      'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=482&h=651&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=482&h=651&fit=crop'
    ],
    detailHeadline: 'A digital product for Latin America',
    detailVideo: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    detailImages: [
      'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1296&h=729&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1296&h=729&fit=crop'
    ],
    overviewText: 'Punto Pago is designed to be the ultimate super-app for the Latin American market, integrating financial services, e-commerce, and lifestyle features into a single, seamless platform. This ambitious project aims to bank the unbanked, simplify daily transactions, and foster a connected digital economy across the region.'
  },
  {
    id: 2,
    title: 'Smart Watch UI',
    description: 'Wearable Design',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=482&h=651&fit=crop',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=482&h=651&fit=crop',
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=482&h=651&fit=crop'
    ],
    detailHeadline: 'Intuitive design for wearable technology',
    detailVideo: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    detailImages: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1296&h=729&fit=crop',
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=1296&h=729&fit=crop'
    ],
    overviewText: 'Creating interfaces for smartwatches requires extreme economy of space and movement. Our Smart Watch UI focuses on high-contrast typography, glanceable information, and large, forgiving touch targets. The result is an operating environment that feels fast, intuitive, and natural on the wrist.'
  },
  {
    id: 3,
    title: 'Nike Air',
    description: 'E-commerce Platform',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=482&h=651&fit=crop',
      'https://images.unsplash.com/photo-1605340537584-f6dfcce10c11?q=80&w=482&h=651&fit=crop',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=482&h=651&fit=crop'
    ],
    detailHeadline: 'High-performance e-commerce experience',
    detailVideo: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    detailImages: [
      'https://images.unsplash.com/photo-1605340537584-f6dfcce10c11?q=80&w=1296&h=729&fit=crop',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1296&h=729&fit=crop'
    ],
    overviewText: 'The Nike Air conceptual e-commerce platform pushes the boundaries of online retail. Featuring real-time 3D models, aggressive typography, and brutalist layout elements, it creates a shopping experience that feels as dynamic and high-performance as the products themselves.'
  },
  {
    id: 4,
    title: 'Wooden Stool',
    description: 'Furniture Brand Identity',
    images: [
      'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=482&h=651&fit=crop',
      'https://images.unsplash.com/photo-1506898667547-42e22a46e125?q=80&w=482&h=651&fit=crop',
      'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=482&h=651&fit=crop'
    ],
    detailHeadline: 'Minimalist identity for modern furniture',
    detailVideo: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    detailImages: [
      'https://images.unsplash.com/photo-1506898667547-42e22a46e125?q=80&w=1296&h=729&fit=crop',
      'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1296&h=729&fit=crop'
    ],
    overviewText: 'Wooden Stool is a boutique furniture brand that values craftsmanship and sustainability. We developed a brand identity that reflects these core values through a muted, earthy color palette, elegant serif typography, and generous use of negative space across all digital touchpoints.'
  },
  {
    id: 5,
    title: 'Polaroid Capture',
    description: 'Photography App',
    images: [
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=482&h=651&fit=crop',
      'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?q=80&w=482&h=651&fit=crop',
      'https://images.unsplash.com/photo-1534068305881-dfb34e4deec4?q=80&w=482&h=651&fit=crop'
    ],
    detailHeadline: 'Analog nostalgia in a digital world',
    detailVideo: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    detailImages: [
      'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?q=80&w=1296&h=729&fit=crop',
      'https://images.unsplash.com/photo-1534068305881-dfb34e4deec4?q=80&w=1296&h=729&fit=crop'
    ],
    overviewText: 'Polaroid Capture brings the unpredictable joy of instant film photography to modern smartphones. The interface mimics the tactile feel of a physical camera, with satisfying haptic feedback, mechanical sound design, and a unique developing process that forces users to wait for their memories.'
  },
];

export default function FeaturedProjects() {
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
                  <ImageSlideshow images={project.images} />
                </div>
                <h3
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '24px',
                    fontWeight: 500,
                    color: '#F0EBF8',
                    margin: '0 0 8px 0',
                  }}
                >
                  <strong>{project.title}</strong> <span style={{ color: '#9B8EC4' }}>– {project.description}</span>
                </h3>
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
                  <ImageSlideshow images={project.images} />
                </div>
                <h3
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '24px',
                    fontWeight: 500,
                    color: '#F0EBF8',
                    margin: '0 0 8px 0',
                  }}
                >
                  <strong>{project.title}</strong> <span style={{ color: '#9B8EC4' }}>– {project.description}</span>
                </h3>
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
