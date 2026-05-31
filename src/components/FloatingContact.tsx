export default function FloatingContact() {
  return (
    <div
      className="floating-contact-wrapper"
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <a
        href="https://wa.me/918131949105"
        target="_blank"
        rel="noreferrer"
        className="floating-contact-circle"
        style={{
          position: 'relative',
          width: '110px',
          height: '110px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {/* Spinning text ring — tight, correct radius */}
        <svg
          viewBox="0 0 110 110"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            animation: 'spinText 12s linear infinite',
          }}
        >
          <defs>
            <path
              id="textCircle"
              d="M 55,55 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
            />
          </defs>
          <text
            fontSize="8.5"
            letterSpacing="3.2"
            fill="#7B5CE5"
            fontFamily="'Inter', monospace"
            fontWeight="600"
          >
            <textPath href="#textCircle" startOffset="0%">
              CONTACT • CONTACT • CONTACT •
            </textPath>
          </text>
        </svg>

        {/* Logo only — no circle bg */}
        <div
          className="floating-contact-logo"
          style={{
            width: '72px',
            height: '72px',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="/logo.png"
            alt="Contact"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      </a>

      <style>{`
        @keyframes spinText {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
