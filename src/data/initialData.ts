

export const initialSiteData = {
  isDraft: false, // For later Firebase integration
  home: {
    hero: {
      eyebrow: "We are Gloom",
      line1: "Digital design &",
      line2: "motion"
    },
    video: {
      url: "https://media.w3.org/2010/05/sintel/trailer.mp4"
    }
  },
  footer: {
    office1: {
      email: "info@gloom.com",
      title: "Main Office",
      line1: "901 N Pitt Street",
      line2: "Alexandria VA, 22314"
    },
    office2: {
      phone: "+1 301 549 9309",
      title: "Second Office",
      line1: "Na Perstyne",
      line2: "342/1, 11000 Prague"
    }
  },
  homeServices: {
    heading: "Since 2010, we have been helping our clients find exceptional solutions for their businesses, creating memorable websites and digital products.",
    description: "Gloom doesn't do cookie-cutter solutions and we build products exactly as they were designed, no shortcuts or simplifications.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  ourServices: {
    heading: "Our services",
    description: "From motion design to AI-powered products — we design and build interfaces for the future.",
    cards: [
      {
        id: 1,
        title: "Brand Identity",
        description: "Strategic design that positions AI products for trust and clarity.",
        images: [
          "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=480&h=648&fit=crop",
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=480&h=648&fit=crop"
        ]
      },
      {
        id: 2,
        title: "AI-enhanced UX/UI design",
        description: "Interfaces that adapt, predict, and respond intelligently.",
        images: [
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=480&h=648&fit=crop",
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=480&h=648&fit=crop"
        ]
      },
      {
        id: 3,
        title: "Custom development",
        description: "Frontend + backend + AI integrations — built for performance and scalability.",
        images: [
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=480&h=648&fit=crop",
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=480&h=648&fit=crop"
        ]
      }
    ]
  },
  contact: {
    line1: "Have",
    line2: "an idea?",
    buttonText: "TELL US"
  },
  services: {
    hero: {
      eyebrow: "Our services",
      line1: "Going beyond",
      line2: "what's possible",
      videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4"
    },
    solutions: [
      {
        id: 'websites',
        title: "WEBSITES AND PLATFORMS",
        description: "In our team, developers work alongside designers. This is crucial in creating a fast and responsive website that would excite the audience."
      },
      {
        id: 'mobile',
        title: "MOBILE APPLICATIONS",
        description: "Cuberto doesn't do cookie-cutter solutions. Every mobile app involves stages of target audience research and prototype testing. The result? A product that's perfectly suited to your users."
      },
      {
        id: 'strategy',
        title: "STRATEGY AND BRANDING",
        description: "We identify your brand by developing a logo, corporate identity, user manuals, any mockups, and souvenir products. Whatever it takes to get your brand noticed."
      }
    ]
  },
  projects: [
    {
      id: 1,
      title: 'Punto Pago',
      description: 'The First Super-App in Latin America',
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=482&h=651&fit=crop',
        'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=482&h=651&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=482&h=651&fit=crop'
      ],
      detailHeadline: 'A digital product for Latin America',
      detailVideo: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
      detailImages: [
        'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1296&h=729&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1296&h=729&fit=crop'
      ],
      overviewText: 'Punto Pago is designed to be the ultimate super-app for the Latin American market, integrating financial services, e-commerce, and lifestyle features into a single, seamless platform. This ambitious project aims to bank the unbanked, simplify daily transactions, and foster a connected digital economy across the region.'
    },
    {
      id: 2,
      title: 'Smart Watch UI',
      description: 'Wearable Design',
      images: [
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=482&h=651&fit=crop',
        'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=482&h=651&fit=crop',
        'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=482&h=651&fit=crop'
      ],
      detailHeadline: 'Intuitive design for wearable technology',
      detailVideo: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
      detailImages: [
        'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1296&h=729&fit=crop',
        'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=1296&h=729&fit=crop'
      ],
      overviewText: 'Creating interfaces for smartwatches requires extreme economy of space and movement. Our Smart Watch UI focuses on high-contrast typography, glanceable information, and large, forgiving touch targets. The result is an operating environment that feels fast, intuitive, and natural on the wrist.'
    },
    {
      id: 3,
      title: 'Nike Air',
      description: 'E-commerce Platform',
      images: [
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=482&h=651&fit=crop',
        'https://images.unsplash.com/photo-1605340537584-f6dfcce10c11?q=80&w=482&h=651&fit=crop',
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=482&h=651&fit=crop'
      ],
      detailHeadline: 'High-performance e-commerce experience',
      detailVideo: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
      detailImages: [
        'https://images.unsplash.com/photo-1605340537584-f6dfcce10c11?q=80&w=1296&h=729&fit=crop',
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1296&h=729&fit=crop'
      ],
      overviewText: 'The Nike Air conceptual e-commerce platform pushes the boundaries of online retail. Featuring real-time 3D models, aggressive typography, and brutalist layout elements, it creates a shopping experience that feels as dynamic and high-performance as the products themselves.'
    },
    {
      id: 4,
      title: 'Wooden Stool',
      description: 'Furniture Brand Identity',
      images: [
        'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=482&h=651&fit=crop',
        'https://images.unsplash.com/photo-1506898667547-42e22a46e125?q=80&w=482&h=651&fit=crop',
        'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=482&h=651&fit=crop'
      ],
      detailHeadline: 'Minimalist identity for modern furniture',
      detailVideo: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
      detailImages: [
        'https://images.unsplash.com/photo-1506898667547-42e22a46e125?q=80&w=1296&h=729&fit=crop',
        'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1296&h=729&fit=crop'
      ],
      overviewText: 'Wooden Stool is a boutique furniture brand that values craftsmanship and sustainability. We developed a brand identity that reflects these core values through a muted, earthy color palette, elegant serif typography, and generous use of negative space across all digital touchpoints.'
    },
    {
      id: 5,
      title: 'Polaroid Capture',
      description: 'Photography App',
      images: [
        'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=482&h=651&fit=crop',
        'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?q=80&w=482&h=651&fit=crop',
        'https://images.unsplash.com/photo-1534068305881-dfb34e4deec4?q=80&w=482&h=651&fit=crop'
      ],
      detailHeadline: 'Analog nostalgia in a digital world',
      detailVideo: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
      detailImages: [
        'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?q=80&w=1296&h=729&fit=crop',
        'https://images.unsplash.com/photo-1534068305881-dfb34e4deec4?q=80&w=1296&h=729&fit=crop'
      ],
      overviewText: 'Polaroid Capture brings the unpredictable joy of instant film photography to modern smartphones. The interface mimics the tactile feel of a physical camera, with satisfying haptic feedback, mechanical sound design, and a unique developing process that forces users to wait for their memories.'
    }
  ]
};

export type SiteData = typeof initialSiteData;
