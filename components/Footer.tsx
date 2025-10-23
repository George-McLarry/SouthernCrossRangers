'use client'

export function Footer() {
  return (
    <footer className="header-3d w-full mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <p className="body-text text-lg italic leading-relaxed" style={{ color: '#FFD700', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            "O come, let us sing unto the Lord, let us make a joyful noise to the Rock of our salvation!"
          </p>
          <p className="body-text text-base mt-2" style={{ color: '#FFD700', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            ~Psalms 95:1~
          </p>
        </div>

        <div className="text-center">
          <h3 className="header-2 text-lg mb-4">Connect</h3>
          <div className="flex justify-center gap-2">
            <a
              href="https://facebook.com/southerncrossrangers"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              style={{
                background: 'linear-gradient(145deg, #1877f2 0%, #0d5bb8 100%)',
                borderRadius: '50%',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                color: 'white',
                fontSize: '16px'
              }}
            >
              f
            </a>
            <a
              href="https://youtube.com/@southerncrossrangers"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              style={{
                background: 'linear-gradient(145deg, #ff0000 0%, #cc0000 100%)',
                borderRadius: '50%',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                color: 'white',
                fontSize: '16px'
              }}
            >
              ▶
            </a>
            <a
              href="https://instagram.com/southerncrossrangers"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              style={{
                background: 'linear-gradient(145deg, #e4405f 0%, #c13584 100%)',
                borderRadius: '50%',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                color: 'white',
                fontSize: '16px'
              }}
            >
              📷
            </a>
          </div>
        </div>

        <div className="text-center mt-8 pt-4 border-t border-parchment-border">
          <p className="body-text text-sm text-text-light">
            © 2025 Southern Cross Rangers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
