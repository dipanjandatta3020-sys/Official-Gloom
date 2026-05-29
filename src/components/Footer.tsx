import { Instagram, Youtube, Github, Facebook, Dribbble } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#050505',
        color: '#ffffff',
        padding: '120px 0 60px 0',
        width: '100%',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: '1528px',
          margin: '0 auto',
          padding: '0 230px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Top Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '160px' }}>
          
          {/* Left: Contacts */}
          <div style={{ display: 'flex', gap: '80px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <button
                style={{
                  border: '1px solid #333333',
                  borderRadius: '100px',
                  padding: '16px 32px',
                  fontSize: '20px',
                  color: '#ffffff',
                  backgroundColor: 'transparent',
                  marginBottom: '40px',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s ease',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#333333'}
              >
                info@gloom.com
              </button>
              <span style={{ fontSize: '12px', color: '#666666', letterSpacing: '0.05em', marginBottom: '12px', textTransform: 'uppercase' }}>
                Main Office
              </span>
              <span style={{ fontSize: '16px', color: '#ffffff', marginBottom: '4px' }}>901 N Pitt Street</span>
              <span style={{ fontSize: '16px', color: '#ffffff' }}>Alexandria VA, 22314</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <button
                style={{
                  border: '1px solid #333333',
                  borderRadius: '100px',
                  padding: '16px 32px',
                  fontSize: '20px',
                  color: '#ffffff',
                  backgroundColor: 'transparent',
                  marginBottom: '40px',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s ease',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#333333'}
              >
                +1 301 549 9309
              </button>
              <span style={{ fontSize: '12px', color: '#666666', letterSpacing: '0.05em', marginBottom: '12px', textTransform: 'uppercase' }}>
                Second Office
              </span>
              <span style={{ fontSize: '16px', color: '#ffffff', marginBottom: '4px' }}>Na Perstyne</span>
              <span style={{ fontSize: '16px', color: '#ffffff' }}>342/1, 11000 Prague</span>
            </div>
          </div>

          {/* Right: Links */}
          <div style={{ display: 'flex', gap: '80px', paddingRight: '80px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {['Services', 'Projects', 'Company'].map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '20px',
                    transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
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
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '20px',
                    transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '40px' }}>
            <a
              href="#privacy"
              style={{
                color: '#aaaaaa',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#aaaaaa')}
            >
              Privacy Policy
            </a>
            <span style={{ color: '#aaaaaa', fontSize: '14px' }}>2026, Gloom</span>
          </div>

          <div style={{ display: 'flex', gap: '16px', paddingRight: '200px' }}>
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
                  backgroundColor: '#1a1a1a',
                  color: '#ffffff',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#333333')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1a1a1a')}
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
