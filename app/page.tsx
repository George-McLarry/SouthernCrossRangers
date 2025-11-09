'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ParchmentSection } from '@/components/ParchmentSection'
import Image from 'next/image'
import { ContactModal } from '@/components/ContactModal'

export default function HomePage() {
  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <div className="flex flex-col min-h-full flex-grow">
      <Header />
      
      <main className="flex-grow">
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
            <a 
              href="https://southern-cross-rangers.kit.com/a07736e30e"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button text-center"
              style={{ color: '#5d4037', textShadow: 'none', textDecoration: 'none', display: 'inline-block' }}
            >
              Join Our Family!
            </a>
          </div>
        </ParchmentSection>

        {/* Promotion Section */}
        <ParchmentSection>
          <h1 className="header-1 text-3xl md:text-4xl mb-6 text-center">
            What's New?
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
                src="/images/The One You Need Album Cover.jpg" 
                alt="The One You Need Album Cover"
                width={512}
                height={512}
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
                src="/images/George McLarry 2025.jpeg" 
                alt="George McLarry"
                width={400}
                height={400}
                className="object-cover rounded-lg mb-6 mx-auto"
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
          <div className="text-center">
            <button 
              onClick={() => setShowContactModal(true)}
              className="gold-button"
              style={{ color: '#5d4037', textShadow: 'none' }}
            >
              Send Message!
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
      
      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
      />
    </div>
  )
}
