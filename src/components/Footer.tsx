import { Instagram, Youtube, Github, Facebook, Dribbble } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="footer-section"
      style={{
        background: 'transparent',
        color: '#F0EBF8',
        padding: '120px 0 60px 0',
        width: '100%',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        className="footer-container"
        style={{
          maxWidth: '1528px',
          margin: '0 auto',
          padding: '0 230px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Top Section */}
        <div className="footer-top" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '160px' }}>
          
          {/* Left: Contacts */}
          <div className="footer-contacts" style={{ display: 'flex', gap: '80px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <button
                style={{
                  border: '1px solid #2A1F42',
                  borderRadius: '100px',
                  padding: '16px 32px',
                  fontSize: '18px',
                  color: '#F0EBF8',
                  backgroundColor: 'transparent',
                  marginBottom: '40px',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s ease',
                  fontFamily: '"Inter", sans-serif',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#7B5CE5'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2A1F42'}
              >
                info@gloom.com
              </button>
              <span style={{ fontSize: '11px', color: '#5A4E7A', letterSpacing: '0.08em', marginBottom: '12px', textTransform: 'uppercase' }}>
                Main Office
              </span>
              <span style={{ fontSize: '15px', color: '#9B8EC4', marginBottom: '4px' }}>901 N Pitt Street</span>
              <span style={{ fontSize: '15px', color: '#9B8EC4' }}>Alexandria VA, 22314</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <button
                style={{
                  border: '1px solid #2A1F42',
                  borderRadius: '100px',
                  padding: '16px 32px',
                  fontSize: '18px',
                  color: '#F0EBF8',
                  backgroundColor: 'transparent',
                  marginBottom: '40px',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s ease',
                  fontFamily: '"Inter", sans-serif',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#7B5CE5'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2A1F42'}
              >
                +1 301 549 9309
              </button>
              <span style={{ fontSize: '11px', color: '#5A4E7A', letterSpacing: '0.08em', marginBottom: '12px', textTransform: 'uppercase' }}>
                Second Office
              </span>
              <span style={{ fontSize: '15px', color: '#9B8EC4', marginBottom: '4px' }}>Na Perstyne</span>
              <span style={{ fontSize: '15px', color: '#9B8EC4' }}>342/1, 11000 Prague</span>
            </div>
          </div>

          {/* Right: Links */}
          <div className="footer-nav-links" style={{ display: 'flex', gap: '80px', paddingRight: '80px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {['Services', 'Projects', 'Company'].map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  style={{
                    color: '#9B8EC4',
                    textDecoration: 'none',
                    fontSize: '18px',
                    fontFamily: '"Inter", sans-serif',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#F0EBF8'; e.currentTarget.style.opacity = '1'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#9B8EC4'; e.currentTarget.style.opacity = '1'; }}
                >
                  {link}
                </a>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {['Blog', 'Workflow', 'Contacts'].map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  style={{
                    color: '#9B8EC4',
                    textDecoration: 'none',
                    fontSize: '18px',
                    fontFamily: '"Inter", sans-serif',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#F0EBF8'; e.currentTarget.style.opacity = '1'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#9B8EC4'; e.currentTarget.style.opacity = '1'; }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '40px' }}>
            <a
              href="#privacy"
              style={{
                color: '#5A4E7A',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F0EBF8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#5A4E7A')}
            >
              Privacy Policy
            </a>
            <span style={{ color: '#5A4E7A', fontSize: '14px' }}>2026, Gloom</span>
          </div>

          <div className="footer-social" style={{ display: 'flex', gap: '16px', paddingRight: '200px' }}>
            {[Instagram, Youtube, Github, Facebook, Dribbble].map((Icon, i) => (
              <a
                key={i}
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: '#160E26',
                  border: '1px solid #2A1F42',
                  color: '#9B8EC4',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2A1F42';
                  e.currentTarget.style.color = '#F0EBF8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#160E26';
                  e.currentTarget.style.color = '#9B8EC4';
                }}
              >
                <Icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
