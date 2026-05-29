const projects = [
  {
    id: 1,
    title: 'Punto Pago',
    description: 'The First Super-App in Latin America',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=482&h=651&fit=crop',
  },
  {
    id: 2,
    title: 'Smart Watch UI',
    description: 'Wearable Design',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=482&h=651&fit=crop',
  },
  {
    id: 3,
    title: 'Nike Air',
    description: 'E-commerce Platform',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=482&h=651&fit=crop',
  },
  {
    id: 4,
    title: 'Wooden Stool',
    description: 'Furniture Brand Identity',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=482&h=651&fit=crop',
  },
  {
    id: 5,
    title: 'Polaroid Capture',
    description: 'Photography App',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=482&h=651&fit=crop',
  },
];

export default function FeaturedProjects() {
  return (
    <section
      style={{
        padding: '120px 0 200px 0',
        backgroundColor: '#050505',
        borderRadius: '80px 80px 0 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: '1529px',
          margin: '0 auto',
          padding: '0 230px',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            marginBottom: '64px',
            lineHeight: 1.1,
          }}
        >
          Featured projects.
        </h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '105px',
          }}
        >
          {/* Left Column */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '105px',
              width: '482px',
            }}
          >
            {projects.filter((_, i) => i % 2 === 0).map((project) => (
              <div key={project.id} style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                <div
                  style={{
                    width: '482px',
                    height: '651px',
                    borderRadius: '40px',
                    overflow: 'hidden',
                    backgroundColor: '#ffffff',
                    marginBottom: '20px',
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: 500,
                    color: '#ffffff',
                    margin: '0 0 8px 0',
                  }}
                >
                  <strong>{project.title}</strong> – {project.description}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '105px',
              width: '482px',
              marginTop: '317px',
            }}
          >
            {projects.filter((_, i) => i % 2 !== 0).map((project) => (
              <div key={project.id} style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                <div
                  style={{
                    width: '482px',
                    height: '651px',
                    borderRadius: '40px',
                    overflow: 'hidden',
                    backgroundColor: '#ffffff',
                    marginBottom: '20px',
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: 500,
                    color: '#ffffff',
                    margin: '0 0 8px 0',
                  }}
                >
                  <strong>{project.title}</strong> – {project.description}
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
            style={{
              width: '285px',
              height: '85px',
              borderRadius: '100px',
              fontWeight: 500,
              fontSize: '18px',
              fontFamily: 'inherit',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            View all projects
          </button>
        </div>
      </div>
    </section>
  );
}
