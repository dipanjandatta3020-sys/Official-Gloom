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
      <div
        className="floating-contact-circle"
        style={{
          position: 'relative',
          width: '140px',
          height: '140px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {/* Spinning text */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            animation: 'spin 10s linear infinite',
            mixBlendMode: 'difference',
            color: '#ffffff',
          }}
        >
          <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
            <path
              id="circlePath"
              d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
              fill="transparent"
            />
            <text
              fill="#ffffff"
              fontSize="10"
              letterSpacing="4.5"
              style={{
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                fontWeight: 700,
                opacity: 1,
              }}
            >
              <textPath href="#circlePath" startOffset="0%">
                contact • contact • contact • contact •{' '}
              </textPath>
            </text>
          </svg>
        </div>

        {/* Inner avatar */}
        <div
          className="floating-contact-logo"
          style={{
            width: '120px',
            height: '120px',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="/logo.png"
            alt="Gloom Logo"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
