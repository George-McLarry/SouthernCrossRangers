'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ParchmentSection } from '@/components/ParchmentSection'
import Image from 'next/image'

export default function HomePage() {
  // For now, we'll use static content since client components can't use async/await
  const contentMap: Record<string, string> = {}
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <ParchmentSection>
          <h1 className="header-1 text-4xl md:text-6xl mb-6 text-center">
            What's All This?
          </h1>
          <h2 className="header-2 text-2xl md:text-3xl mb-6 text-center">
            Welcome, I'm glad you asked!
          </h2>
          <p className="body-text text-lg md:text-xl mb-8 text-center">
            This website was built with the intention of keeping you updated and entertained with the latest news, songs, projects and merchandise! Feel free to join our growing family of friends and fans of real country music!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('newsletter-modal')?.classList.remove('hidden')}
              className="gold-button"
              style={{ color: '#5d4037', textShadow: 'none' }}
            >
              Join Our Family!
            </button>
          </div>
        </ParchmentSection>

        {/* Promotion Section */}
        <ParchmentSection>
          <h1 className="header-1 text-3xl md:text-4xl mb-6 text-center">
            Promotion Section
          </h1>
          <h2 className="header-2 text-2xl md:text-3xl mb-6 text-center">
            Take a look at our latest project!
          </h2>
          <p className="body-text text-lg mb-8 text-center">
            This past month I have been working hard on building this website, of course, but more than that, I have finally recorded my very first album! I am so excited to share it with you, I hope you enjoy it!
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="text-center">
              <Image 
                src="https://instasize.com/p/8118536984dd76c4837dbe798fe7d8526f318239167f522a034ae5462ba1ce6f" 
                alt="The One You Need Album Cover"
                width={256}
                height={256}
                className="object-cover rounded-lg mx-auto mb-6"
              />
            </div>
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/mercantile" className="gold-button">
                  View In Mercantile
                </a>
              </div>
            </div>
          </div>
        </ParchmentSection>

        {/* About Section */}
        <ParchmentSection>
          <h1 className="header-1 text-3xl md:text-4xl mb-6 text-center">
            About
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <Image 
                src="https://instasize.com/p/9c178832ed80a5c3d6c9e4896e7553e61c8f423769d7a5322d2a118062b2e0c0" 
                alt="George McLarry"
                width={400}
                height={256}
                className="object-cover rounded-lg mb-6"
              />
            </div>
            <div>
              <p className="body-text text-lg mb-6">
                Howdy, I am George McLarry!<br/><br/>
                As some of you may know, I have a passion for real country music. For those who are curious about how I got into it in the first place ~ The simple answer is "I don't know". I can't remember exactly what first got me into it, but I do know that I have been listening to country music since before I knew that different genres were a thing. There was always something special about it for me. and now more than ever, country music continues to touch my heart! My goal is to help bring back real country music - songs for entertainment, for families, for the "little man" and for God! So Thank you for being part of my journey. Let's grow together, it's an exciting road!
              </p>
            </div>
          </div>
        </ParchmentSection>

        {/* Contact Section */}
        <ParchmentSection>
          <h1 className="header-1 text-3xl md:text-4xl mb-6 text-center">
            Contact George!
          </h1>
          <h2 className="header-2 text-2xl md:text-3xl mb-6 text-center">
            Letters and Such
          </h2>
          <p className="body-text text-lg mb-8 text-center">
            I never had computers growing up, and phones were far from my mind! I used to write letters to stay connected with friends, and up till now it is my favourite means of contact. If you fancy getting in touch this way, simply contact me through the form box below and entrust me with your mailing address, I will send a letter your way! For those who are too far or would prefer to keep it digital, simply leave out your address and just fill in your email and nickname. I look forward to hearing from you either way!
          </p>
          <div className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Nickname"
              className="form-input w-full px-4 py-3 border-2 border-parchment-border rounded-lg focus:outline-none focus:border-gold transition-colors"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="form-input w-full px-4 py-3 border-2 border-parchment-border rounded-lg focus:outline-none focus:border-gold transition-colors"
            />
            <input
              type="text"
              placeholder="Postal Address (Optional)"
              className="form-input w-full px-4 py-3 border-2 border-parchment-border rounded-lg focus:outline-none focus:border-gold transition-colors"
            />
            <button 
              onClick={() => document.getElementById('newsletter-modal')?.classList.remove('hidden')}
              className="gold-button w-full"
            >
              Contact George!
            </button>
          </div>
        </ParchmentSection>

        {/* Credits Section */}
        <ParchmentSection>
          <h1 className="header-1 text-3xl md:text-4xl mb-6 text-center">
            Credits to:
          </h1>
          <h2 className="header-2 text-2xl md:text-3xl mb-6 text-center">
            The dear visitor and supporter of this little endeavour of mine – your support means the world to me!
          </h2>
          <p className="body-text text-lg mb-8 text-center">
            My dear family, for their ongoing support, advice, and patience.<br/><br/>
            Last and most of all, the Lord! All praise and glory to Him, without whom nothing is possible!
          </p>
        </ParchmentSection>
      </main>

      <Footer />
    </div>
  )
}
