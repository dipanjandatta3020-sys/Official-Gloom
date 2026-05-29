export default function Services() {
  return (
    <section
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
      }}
    >
      {/* Left side: Video */}
      <div style={{ width: '480px', flexShrink: 0 }}>
        <div
          style={{
            width: '480px',
            height: '480px',
            overflow: 'hidden',
            backgroundColor: '#111111',
            borderRadius: '40px',
          }}
        >
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay
            muted
            loop
            playsInline
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
        style={{
          width: '510px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '28px',
          marginTop: '51px',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.4rem, 2vw, 1.85rem)',
            lineHeight: 1.35,
            fontWeight: 500,
            color: '#050505',
            margin: 0,
          }}
        >
          Since 2010, we have been helping our clients find exceptional
          solutions for their businesses, creating memorable websites and
          digital products.
        </h2>

        <p
          style={{
            fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
            lineHeight: 1.55,
            color: '#050505',
            fontWeight: 400,
            margin: 0,
          }}
        >
          Gloom doesn't do cookie-cutter solutions and we build products
          exactly as they were designed, no shortcuts or simplifications.
        </p>

        <button
          className="cta-btn cta-btn-dark"
          style={{
            marginTop: '12px',
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
          What we do
        </button>
      </div>
    </section>
  );
}
