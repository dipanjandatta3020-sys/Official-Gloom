import EditableText from './admin/EditableText';
import EditableMedia from './admin/EditableMedia';
import { useSiteData } from '../context/SiteDataContext';

export default function Services({ openServices }: { openServices: () => void }) {
  const { data } = useSiteData();
  return (
    <section
      className="services-section"
      style={{
        width: '100%',
        maxWidth: '1524px',
        margin: '0 auto',
        paddingTop: '149px',
        paddingBottom: '223px',
        paddingLeft: '230px',
        paddingRight: '250px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: '54px',
        backgroundColor: '#ffffff',
        position: 'relative',
      }}
    >
      {/* === SERVICES BACKGROUND BLOBS === */}
      {/* Services Blob 1 — violet, bottom-right */}
      <div style={{
        position: 'absolute', bottom: '-60px', right: '-100px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(130, 80, 220, 0.55) 0%, rgba(130, 80, 220, 0.18) 45%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(45px)',
        animation: 'blobFloat2 14s ease-in-out infinite',
      }} />

      {/* Services Blob 2 — pink, top-left */}
      <div style={{
        position: 'absolute', top: '-80px', left: '-80px',
        width: '380px', height: '380px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(210, 60, 170, 0.45) 0%, rgba(210, 60, 170, 0.14) 50%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(50px)',
        animation: 'blobFloat4 16s ease-in-out infinite',
      }} />

      {/* Services Blob 3 — lavender, center */}
      <div style={{
        position: 'absolute', top: '30%', left: '40%',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(160, 120, 240, 0.30) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(60px)',
        animation: 'blobFloat1 11s ease-in-out infinite',
      }} />

      {/* Left side: Video */}
      <div className="services-video-col" style={{ width: '480px', flexShrink: 0, position: 'relative', zIndex: 1 }}>
        <div
          className="services-video-box"
          style={{
            width: '480px',
            height: '480px',
            overflow: 'hidden',
            backgroundColor: 'transparent',
            borderRadius: '40px',
          }}
        >
          <EditableMedia
            path={['homeServices', 'videoUrl']}
            type="video"
            chromakey={true}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>

      {/* Right side: Text and button */}
      <div
        className="services-text-col"
        style={{
          width: '510px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '28px',
          marginTop: '51px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <EditableText
          path={['homeServices', 'heading']}
          as="h2"
          style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: 'clamp(1.4rem, 2vw, 1.85rem)',
            lineHeight: 1.35,
            fontWeight: 700,
            color: '#0D0A1A',
            margin: 0,
            display: 'block'
          }}
        />

        <EditableText
          path={['homeServices', 'description']}
          as="p"
          style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
            lineHeight: 1.55,
            color: '#6B5F8A',
            fontWeight: 400,
            margin: 0,
            display: 'block'
          }}
        />

        <button
          className="cta-btn cta-btn-on-light"
          onClick={openServices}
          style={{
            marginTop: '12px',
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
          What we do
        </button>
      </div>
    </section>
  );
}
