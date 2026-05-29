import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const servicesData = [
  {
    id: 1,
    title: 'Brand Identity',
    description: 'Strategic design that positions AI products for trust and clarity.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=480&h=648&fit=crop',
  },
  {
    id: 2,
    title: 'AI-enhanced UX/UI design',
    description: 'Interfaces that adapt, predict, and respond intelligently.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=480&h=648&fit=crop',
  },
  {
    id: 3,
    title: 'Custom development',
    description: 'Frontend + backend + AI integrations — built for performance and scalability.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=480&h=648&fit=crop',
  },
];

export default function OurServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section
      ref={ref}
      className="ourservices-section"
      style={{
        padding: '120px 0 200px 0',
        backgroundColor: '#ffffff',
        color: '#050505',
        borderRadius: '80px 80px 0 0',
        marginTop: '-80px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        className="ourservices-container"
        style={{
          maxWidth: '1528px',
          margin: '0 auto',
          padding: '0 230px',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: '40px',
            lineHeight: 1.1,
          }}
        >
          Our services
        </h2>

        <p
          className="ourservices-desc"
          style={{
            fontSize: '24px',
            lineHeight: 1.4,
            fontWeight: 400,
            color: '#050505',
            maxWidth: '500px',
            marginBottom: '80px',
          }}
        >
          From motion design to AI-powered products — we design and build
          interfaces for the future.
        </p>

        <div
          className="ourservices-grid"
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '108px',
          }}
        >
          {/* Left Column */}
          <div
            className="ourservices-col"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '108px',
              width: '480px',
            }}
          >
            {servicesData.filter((_, i) => i % 2 === 0).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
              >
                <div
                  className="ourservices-card-img"
                  style={{
                    width: '480px',
                    height: '648px',
                    borderRadius: '40px',
                    overflow: 'hidden',
                    backgroundColor: '#f5f5f5',
                    marginBottom: '20px',
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
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
                    color: '#050505',
                    margin: '0 0 8px 0',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#666666',
                    margin: 0,
                  }}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div
            className="ourservices-col ourservices-col-right"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '108px',
              width: '480px',
              marginTop: '317px',
            }}
          >
            {servicesData.filter((_, i) => i % 2 !== 0).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
              >
                <div
                  className="ourservices-card-img"
                  style={{
                    width: '480px',
                    height: '648px',
                    borderRadius: '40px',
                    overflow: 'hidden',
                    backgroundColor: '#f5f5f5',
                    marginBottom: '20px',
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
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
                    color: '#050505',
                    margin: '0 0 8px 0',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#666666',
                    margin: 0,
                  }}
                >
                  {service.description}
                </p>
              </motion.div>
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
            className="cta-btn cta-btn-dark"
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
            View all services
          </button>
        </div>
      </div>
    </section>
  );
}
