const projectsData = [
  {
    id: 'alae-silentes',
    title: 'Alae Silentes',
    category: 'Video Production',
    year: '2025',
    description: `Alae Silentes is a mixed-media short film combining pixilation, puppet-needle felting,
      2D animation, and CGI to tell a hauntingly poetic story about trust and betrayal. The
      narrative follows a butterfly raised with apparent love, only to discover its caretaker’s
      true, selfish intent. With a symbolic and emotional tone, the film critiques manipulative
      affection through a visual language rich in metaphor. As the project manager, I
      contributed across research, story development, prop making, lighting, character
      animation, color grading, and VFX—bringing the world of Alae Silentes to life from
      concept to final frame.`,
    metadata: {
      type: 'Group Project',
      duration: '3 months (10/2024 – 1/2025)',
      scope: [
        'Project Manager',
        'Narrative and Concept Development',
        'Props Maker',
        'Motion Graphics Designer',
        'Lighting Director',
        'Color Grading'
      ]
    },
    // For “Other Projects” thumbnails, if you have static images:
    thumbnail: 'img/projects/alae_silentes/cover.jpeg',
    // If you want to display media thumbnails on the detailed page:
    mediaThumbs: [
      'img/projects/alae_silentes/1.jpeg',
      'img/projects/alae_silentes/2.jpeg',
      'img/projects/alae_silentes/3.jpeg',
      'img/projects/alae_silentes/4.jpeg',
      'img/projects/alae_silentes/5.jpeg',
      'img/projects/alae_silentes/6.jpeg',
      'img/projects/alae_silentes/7.jpeg',
      'img/projects/alae_silentes/8.jpeg'
    ],
    mediaVideos: [
      'https://youtu.be/NH7QO1Kzq8g',
      'https://youtu.be/yR62s5UImNc'
    ],
  },

  // ───── You can repeat for other projects ────────────────────────────────────
  {
    id: 'vietnam-worship-website',
    title: 'Vietnam Worship Website',
    category: 'UI/UX Design',
    year: '2025',
    description: `A fully responsive worship e-commerce web platform offering pre-prepared worship packs,
      detailed ritual guides, AI chatbot support, and temple location services. I handled
      UX flows, front-end implementation (HTML/CSS/JS), and integrated PHP/MySQL for
      user accounts, order management, and wishlist functionality.`,
    metadata: {
      type: 'Solo UX/UI Project',
      duration: '4 months (02/2025 – 06/2025)',
      scope: [
        'Wireframing & Prototyping',
        'Front-end HTML/CSS/JS',
        'PHP/MySQL Backend Integration',
        'Gemini AI Chatbot Implementation',
        'Google Maps API Integration'
      ]
    },
    thumbnail: 'img/other2.jpg',
    mediaThumbs: [/* … */],
    mediaVideo: 'img/vietnam-worship-video-poster.jpg'
  },

  {
    id: 'set-of-icons-dusha',
    title: 'Set of icons: Dusha',
    category: '2D Illustration',
    year: '2023',
    description: `A custom icon set named “Dusha” inspired by Vietnamese folklore and geometric
      patterns. I designed eight icons that represent the essence of daily emotions, crafted
      entirely in Adobe Illustrator with a focus on minimalism and cultural symbolism.`,
    metadata: {
      type: 'Personal Illustration',
      duration: '1 month (12/2022 – 01/2023)',
      scope: ['Concept & Sketching', 'Vector Illustration', 'Final Export & Delivery']
    },
    thumbnail: 'img/other3.jpg',
    mediaThumbs: [/* … */],
    mediaVideo: 'img/dusha-video-poster.jpg'
  },

  {
    id: 'ton-dan-district-4',
    title: 'Poster series: Ton Dan – District 4',
    category: '2D Illustration',
    year: '2024',
    description: `A three-poster series capturing the vibrant street life of Ton Dan in District 4.
      By blending hand-drawn textures with digital painting, I highlighted markets, pagodas,
      and community celebrations. I was responsible for concept sketches, final layouts,
      and color grading.`,
    metadata: {
      type: 'Class Assignment',
      duration: '2 months (06/2024 – 08/2024)',
      scope: ['Research & Concept', 'Digital Painting', 'Print-ready Export']
    },
    thumbnail: 'img/other4.jpg',
    mediaThumbs: [/* … */],
    mediaVideo: 'img/ton-dan-video-poster.jpg'
  },

  {
    id: 'fitness-assessment',
    title: 'RMIT Fitness Assessment',
    category: 'Photography',
    year: '2025',
    description: `A three-poster series capturing the vibrant street life of Ton Dan in District 4.
      By blending hand-drawn textures with digital painting, I highlighted markets, pagodas,
      and community celebrations. I was responsible for concept sketches, final layouts,
      and color grading.`,
    metadata: {
      type: 'Class Assignment',
      duration: '2 months (06/2024 – 08/2024)',
      scope: ['Research & Concept', 'Digital Painting', 'Print-ready Export']
    },
    thumbnail: 'img/other4.jpg',
    mediaThumbs: [/* … */],
    mediaVideo: 'img/ton-dan-video-poster.jpg'
  },
  {
    id: 'character-animation',
    title: '3D Character Animation',
    category: '3D Design',
    year: '2024',
    description: `A three-poster series capturing the vibrant street life of Ton Dan in District 4.
      By blending hand-drawn textures with digital painting, I highlighted markets, pagodas,
      and community celebrations. I was responsible for concept sketches, final layouts,
      and color grading.`,
    metadata: {
      type: 'Class Assignment',
      duration: '2 months (06/2024 – 08/2024)',
      scope: ['Research & Concept', 'Digital Painting', 'Print-ready Export']
    },
    thumbnail: 'img/other4.jpg',
    mediaThumbs: [/* … */],
    mediaVideo: 'img/ton-dan-video-poster.jpg'
  },
  {
    id: 'vj-performance',
    title: 'VJ Live Performance',
    category: '3D Design',
    year: '2024',
    description: `A three-poster series capturing the vibrant street life of Ton Dan in District 4.
      By blending hand-drawn textures with digital painting, I highlighted markets, pagodas,
      and community celebrations. I was responsible for concept sketches, final layouts,
      and color grading.`,
    metadata: {
      type: 'Class Assignment',
      duration: '2 months (06/2024 – 08/2024)',
      scope: ['Research & Concept', 'Digital Painting', 'Print-ready Export']
    },
    thumbnail: 'img/other4.jpg',
    mediaThumbs: [/* … */],
    mediaVideo: 'img/ton-dan-video-poster.jpg'
  },
  {
    id: 'golden-memo',
    title: 'Golden Memo',
    category: '2D Illustration',
    year: '2024',
    description: `A three-poster series capturing the vibrant street life of Ton Dan in District 4.
      By blending hand-drawn textures with digital painting, I highlighted markets, pagodas,
      and community celebrations. I was responsible for concept sketches, final layouts,
      and color grading.`,
    metadata: {
      type: 'Class Assignment',
      duration: '2 months (06/2024 – 08/2024)',
      scope: ['Research & Concept', 'Digital Painting', 'Print-ready Export']
    },
    thumbnail: 'img/other4.jpg',
    mediaThumbs: [/* … */],
    mediaVideo: 'img/ton-dan-video-poster.jpg'
  },
  {
    id: 'commercial-product-photo',
    title: 'Commercial Product Photography',
    category: 'Photography',
    year: '2024',
    description: `A three-poster series capturing the vibrant street life of Ton Dan in District 4.
      By blending hand-drawn textures with digital painting, I highlighted markets, pagodas,
      and community celebrations. I was responsible for concept sketches, final layouts,
      and color grading.`,
    metadata: {
      type: 'Class Assignment',
      duration: '2 months (06/2024 – 08/2024)',
      scope: ['Research & Concept', 'Digital Painting', 'Print-ready Export']
    },
    thumbnail: 'img/other4.jpg',
    mediaThumbs: [/* … */],
    mediaVideo: 'img/ton-dan-video-poster.jpg'
  },
  {
    id: 'book-cover',
    title: 'Redesign Book Cover (dear,darling)',
    category: '2D Illustration',
    year: '2024',
    description: `A three-poster series capturing the vibrant street life of Ton Dan in District 4.
      By blending hand-drawn textures with digital painting, I highlighted markets, pagodas,
      and community celebrations. I was responsible for concept sketches, final layouts,
      and color grading.`,
    metadata: {
      type: 'Class Assignment',
      duration: '2 months (06/2024 – 08/2024)',
      scope: ['Research & Concept', 'Digital Painting', 'Print-ready Export']
    },
    thumbnail: 'img/other4.jpg',
    mediaThumbs: [/* … */],
    mediaVideo: 'img/ton-dan-video-poster.jpg'
  },
  {
    id: 'typhography-logo',
    title: 'Typography Logo',
    category: '2D Illustration',
    year: '2024',
    description: `A three-poster series capturing the vibrant street life of Ton Dan in District 4.
      By blending hand-drawn textures with digital painting, I highlighted markets, pagodas,
      and community celebrations. I was responsible for concept sketches, final layouts,
      and color grading.`,
    metadata: {
      type: 'Class Assignment',
      duration: '2 months (06/2024 – 08/2024)',
      scope: ['Research & Concept', 'Digital Painting', 'Print-ready Export']
    },
    thumbnail: 'img/other4.jpg',
    mediaThumbs: [/* … */],
    mediaVideo: 'img/ton-dan-video-poster.jpg'
  },
  {
    id: 'social-post',
    title: 'Social Post for RED',
    category: '2D Illustration',
    year: '2024',
    description: `A three-poster series capturing the vibrant street life of Ton Dan in District 4.
      By blending hand-drawn textures with digital painting, I highlighted markets, pagodas,
      and community celebrations. I was responsible for concept sketches, final layouts,
      and color grading.`,
    metadata: {
      type: 'Class Assignment',
      duration: '2 months (06/2024 – 08/2024)',
      scope: ['Research & Concept', 'Digital Painting', 'Print-ready Export']
    },
    thumbnail: 'img/other4.jpg',
    mediaThumbs: [/* … */],
    mediaVideo: 'img/ton-dan-video-poster.jpg'
  },
  {
    id: 'hierarchy-layout',
    title: 'Hierarchy Layout Design',
    category: '2D Illustration',
    year: '2024',
    description: `A three-poster series capturing the vibrant street life of Ton Dan in District 4.
      By blending hand-drawn textures with digital painting, I highlighted markets, pagodas,
      and community celebrations. I was responsible for concept sketches, final layouts,
      and color grading.`,
    metadata: {
      type: 'Class Assignment',
      duration: '2 months (06/2024 – 08/2024)',
      scope: ['Research & Concept', 'Digital Painting', 'Print-ready Export']
    },
    thumbnail: 'img/other4.jpg',
    mediaThumbs: [/* … */],
    mediaVideo: 'img/ton-dan-video-poster.jpg'
  },
  // ────────────────────────────────────────────────────────────────────────────
];
