'use client'

export function Footer() {
  return (
    <footer className="header-3d w-full mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <p className="body-text text-lg italic leading-relaxed" style={{ color: '#5d4037' }}>
            "O come, let us sing unto the Lord, let us make a joyful noise to the Rock of our salvation!"
          </p>
          <p className="body-text text-base mt-2" style={{ color: '#795548' }}>
            ~Psalms 95:1~
          </p>
        </div>

        <div className="text-center">
          <h3 className="header-2 text-lg mb-4">Connect</h3>
          <div className="flex justify-center gap-4">
            <a
              href="https://facebook.com/southerncrossrangers"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button text-sm px-4 py-2"
            >
              📘 Facebook
            </a>
            <a
              href="https://youtube.com/@southerncrossrangers"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button text-sm px-4 py-2"
            >
              📺 YouTube
            </a>
            <a
              href="https://instagram.com/southerncrossrangers"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button text-sm px-4 py-2"
            >
              📷 Instagram
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
