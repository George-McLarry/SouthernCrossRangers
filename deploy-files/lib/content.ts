// Content management system for the website
export interface WebsiteContent {
  // Homepage content
  hero: {
    title: string
    subtitle: string
    description: string
    primaryButton: { text: string; link: string }
    secondaryButton: { text: string; link: string }
  }
  
  promotion: {
    title: string
    description: string
    price: string
    originalPrice: string
    discount: string
    primaryButton: { text: string; link: string }
    secondaryButton: { text: string; link: string }
  }
  
  about: {
    title: string
    description: string
    story: string
    button: { text: string; link: string }
  }
  
  contact: {
    title: string
    description: string
    form: {
      namePlaceholder: string
      emailPlaceholder: string
      messagePlaceholder: string
      buttonText: string
    }
  }
  
  newsletter: {
    title: string
    description: string
    form: {
      firstNamePlaceholder: string
      emailPlaceholder: string
      buttonText: string
    }
  }
  
  // Music page content
  music: {
    title: string
    subtitle: string
    description: string
    playerNote: string
  }
  
  // Mercantile page content
  mercantile: {
    title: string
    subtitle: string
    description: string
  }
  
  // Library page content
  library: {
    title: string
    subtitle: string
    description: string
  }
  
  // Gallery page content
  gallery: {
    title: string
    subtitle: string
    description: string
  }
  
  // Events page content
  events: {
    title: string
    subtitle: string
    description: string
  }
  
  // Footer content
  footer: {
    bibleVerse: string
    bibleReference: string
    socialLinks: {
      facebook: string
      youtube: string
      instagram: string
    }
    copyright: string
  }
  
  // Theme settings
  theme: {
    primaryColor: string
    goldColor: string
    parchmentColor: string
    headerFont: string
    bodyFont: string
    showBackground: boolean
  }
}

// Default content
export const defaultContent: WebsiteContent = {
  hero: {
    title: "Welcome to Southern Cross Rangers",
    subtitle: "Authentic Country Music from the Heart of Tasmania",
    description: "Experience the raw beauty of Tasmanian landscapes through our music. Every song tells a story of the land, the people, and the spirit that makes Tasmania special.",
    primaryButton: { text: "🎵 Listen to Our Music", link: "/music" },
    secondaryButton: { text: "📅 Upcoming Events", link: "/events" }
  },
  
  promotion: {
    title: "New Album: \"The One You Need\"",
    description: "Our debut album featuring 10 authentic country tracks from the heart of Tasmania. Each song tells a story of the land, the people, and the spirit that makes Tasmania special.",
    price: "$20 AUD",
    originalPrice: "$25 AUD",
    discount: "Save $5",
    primaryButton: { text: "🛒 Buy Now - $20 AUD", link: "/mercantile" },
    secondaryButton: { text: "🎧 Preview Tracks", link: "/music" }
  },
  
  about: {
    title: "About Southern Cross Rangers",
    description: "We are a country music band from Tasmania, Australia, dedicated to preserving and sharing the authentic sounds of our homeland. Our music is inspired by the rugged beauty of Tasmania's landscapes, the resilience of its people, and the rich heritage of Australian country music.",
    story: "From the rolling hills of the Midlands to the wild coastlines of the West Coast, our songs capture the essence of what it means to be Tasmanian.",
    button: { text: "Learn More About Us", link: "/library" }
  },
  
  contact: {
    title: "Get in Touch",
    description: "Want to book us for an event? Have a question about our music? We'd love to hear from you!",
    form: {
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      buttonText: "📧 Send Message"
    }
  },
  
  newsletter: {
    title: "Join Our Family",
    description: "Get exclusive updates, new music releases, and behind-the-scenes content delivered straight to your inbox. Be the first to know about our latest adventures!",
    form: {
      firstNamePlaceholder: "Your First Name",
      emailPlaceholder: "Your Email Address",
      buttonText: "🎵 Join Our Family"
    }
  },
  
  music: {
    title: "Our Music",
    subtitle: "Authentic Country Music from the Heart of Tasmania",
    description: "Experience the raw beauty of Tasmanian landscapes through our music. Every song tells a story of the land, the people, and the spirit that makes Tasmania special.",
    playerNote: "To enable audio playback, add your WAV or MP3 files to the /public/audio/ directory. The music player supports both formats and will automatically detect the files."
  },
  
  mercantile: {
    title: "Mercantile",
    subtitle: "Support the Band",
    description: "Show your support for Southern Cross Rangers by purchasing our music and merchandise. Every purchase helps us continue creating authentic Tasmanian country music."
  },
  
  library: {
    title: "Library",
    subtitle: "Newsletters, Lyrics & More",
    description: "Access our collection of newsletters, song lyrics, and exclusive content. Stay connected with the latest news and stories from Southern Cross Rangers."
  },
  
  gallery: {
    title: "Gallery",
    subtitle: "Photos & Memories",
    description: "Browse through our collection of photos from performances, recording sessions, and life on the road. See the faces behind the music."
  },
  
  events: {
    title: "Events",
    subtitle: "Upcoming Performances",
    description: "Check out our upcoming performances and events. Join us for an evening of authentic Tasmanian country music."
  },
  
  footer: {
    bibleVerse: "O come, let us sing unto the Lord, let us make a joyful noise to the Rock of our salvation!",
    bibleReference: "~Psalms 95:1~",
    socialLinks: {
      facebook: "https://facebook.com/southerncrossrangers",
      youtube: "https://youtube.com/@southerncrossrangers",
      instagram: "https://instagram.com/southerncrossrangers"
    },
    copyright: "© 2025 Southern Cross Rangers. All rights reserved."
  },
  
  theme: {
    primaryColor: "#28D1CC",
    goldColor: "#FFD700",
    parchmentColor: "#f4e4c1",
    headerFont: "Rye",
    bodyFont: "Georgia",
    showBackground: true
  }
}

// Content management functions
export const contentManager = {
  // Get content (in a real app, this would fetch from Supabase)
  getContent: (): WebsiteContent => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('website-content')
      return stored ? JSON.parse(stored) : defaultContent
    }
    return defaultContent
  },
  
  // Save content (in a real app, this would save to Supabase)
  saveContent: (content: WebsiteContent): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('website-content', JSON.stringify(content))
    }
  },
  
  // Update specific section
  updateSection: (section: keyof WebsiteContent, data: any): void => {
    const content = contentManager.getContent()
    content[section] = { ...content[section], ...data }
    contentManager.saveContent(content)
  }
}

