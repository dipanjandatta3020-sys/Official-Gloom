import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import ImageSlideshow from './ImageSlideshow';
import EditableText from './admin/EditableText';
import EditableImageArray from './admin/EditableImageArray';
import { useSiteData } from '../context/SiteDataContext';

export default function OurServices({ openServices }: { openServices: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const { data } = useSiteData();
  const servicesData = data.ourServices.cards;

  return (
    <section
      ref={ref}
      className="ourservices-section"
      style={{
        padding: '120px 0 200px 0',
        backgroundColor: '#ffffff',
        borderRadius: '80px 80px 0 0',
        marginTop: '-80px',
        position: 'relative',
        zIndex: 2,
        overflow: 'hidden',
      }}
    >
      {/* === OUR SERVICES BACKGROUND BLOBS === */}
      {/* Blob 1 — pink, top-left */}
      <div style={{
        position: 'absolute', top: '-80px', left: '-80px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(210, 60, 170, 0.35) 0%, rgba(210, 60, 170, 0.10) 50%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(50px)',
        animation: 'blobFloat4 16s ease-in-out infinite',
      }} />

      {/* Blob 2 — violet, top-right */}
      <div style={{
        position: 'absolute', top: '10%', right: '-100px',
        width: '650px', height: '650px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(130, 80, 220, 0.45) 0%, rgba(130, 80, 220, 0.15) 45%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(45px)',
        animation: 'blobFloat1 18s ease-in-out infinite',
      }} />

      {/* Blob 3 — lavender, center-left */}
      <div style={{
        position: 'absolute', top: '35%', left: '-150px',
        width: '700px', height: '700px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(160, 120, 240, 0.30) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(70px)',
        animation: 'blobFloat3 14s ease-in-out infinite',
      }} />

      {/* Blob 4 — warm pink, center-right */}
      <div style={{
        position: 'absolute', top: '55%', right: '-50px',
        width: '450px', height: '450px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(190, 80, 190, 0.35) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(60px)',
        animation: 'blobFloat2 15s ease-in-out infinite',
      }} />

      {/* Blob 5 — soft violet, bottom-left */}
      <div style={{
        position: 'absolute', bottom: '10%', left: '5%',
        width: '550px', height: '550px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(130, 80, 220, 0.35) 0%, rgba(130, 80, 220, 0.10) 50%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(55px)',
        animation: 'blobFloat1 19s ease-in-out infinite',
      }} />

      {/* Blob 6 — magenta, bottom-right */}
      <div style={{
        position: 'absolute', bottom: '-50px', right: '10%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(210, 60, 170, 0.40) 0%, rgba(210, 60, 170, 0.15) 50%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(45px)',
        animation: 'blobFloat4 12s ease-in-out infinite',
      }} />

      {/* Blob 7 — massive faint lavender wash, dead center */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1200px', height: '1200px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(160, 120, 240, 0.15) 0%, transparent 60%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(90px)',
        animation: 'blobPulse 20s ease-in-out infinite',
      }} />
      <div
        className="ourservices-container"
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1528px',
          margin: '0 auto',
          padding: '0 230px',
        }}
      >
        <EditableText
          path={['ourServices', 'heading']}
          as="h2"
          style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: '#0D0A1A',
            marginBottom: '40px',
            lineHeight: 1.1,
            display: 'block'
          }}
        />

        <EditableText
          path={['ourServices', 'description']}
          as="p"
          className="ourservices-desc"
          style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '22px',
            lineHeight: 1.4,
            fontWeight: 400,
            color: '#6B5F8A',
            maxWidth: '500px',
            marginBottom: '80px',
            display: 'block'
          }}
        />

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
                    border: '1px solid rgba(123, 92, 229, 0.15)',
                    backgroundColor: '#ffffff',
                    marginBottom: '20px',
                  }}
                >
                  <EditableImageArray path={['ourServices', 'cards', servicesData.findIndex((s: any) => s.id === service.id).toString(), 'images']} images={service.images}>
                    <ImageSlideshow images={service.images} />
                  </EditableImageArray>
                </div>
                <h3
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#0D0A1A',
                    margin: '0 0 8px 0',
                  }}
                >
                  <EditableText path={['ourServices', 'cards', servicesData.findIndex((s: any) => s.id === service.id).toString(), 'title']} />
                </h3>
                <EditableText
                  path={['ourServices', 'cards', servicesData.findIndex((s: any) => s.id === service.id).toString(), 'description']}
                  as="p"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '15px',
                    color: '#6B5F8A',
                    margin: 0,
                    lineHeight: 1.65,
                    display: 'block'
                  }}
                />
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
                    border: '1px solid rgba(123, 92, 229, 0.15)',
                    backgroundColor: '#ffffff',
                    marginBottom: '20px',
                  }}
                >
                  <EditableImageArray path={['ourServices', 'cards', servicesData.findIndex((s: any) => s.id === service.id).toString(), 'images']} images={service.images}>
                    <ImageSlideshow images={service.images} />
                  </EditableImageArray>
                </div>
                <h3
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#0D0A1A',
                    margin: '0 0 8px 0',
                  }}
                >
                  <EditableText path={['ourServices', 'cards', servicesData.findIndex((s: any) => s.id === service.id).toString(), 'title']} />
                </h3>
                <EditableText
                  path={['ourServices', 'cards', servicesData.findIndex((s: any) => s.id === service.id).toString(), 'description']}
                  as="p"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '15px',
                    color: '#6B5F8A',
                    margin: 0,
                    lineHeight: 1.65,
                    display: 'block'
                  }}
                />
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
            className="cta-btn cta-btn-on-light"
            onClick={openServices}
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
            View all services
          </button>
        </div>
      </div>
    </section>
  );
}
