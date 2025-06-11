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
      'img/projects/alae_silentes/10.jpeg',
      'img/projects/alae_silentes/6.jpeg',
      'img/projects/alae_silentes/7.jpeg',
      'img/projects/alae_silentes/8.jpeg',
      'img/projects/alae_silentes/11.jpeg'
    ],
    mediaVideos: [
      'https://youtu.be/yR62s5UImNc',
      'https://youtu.be/NH7QO1Kzq8g'
    ],
  },

  // ───── You can repeat for other projects ────────────────────────────────────
  {
    id: 'vietnam-worship-website',
    title: 'Vietnam Worship Website',
    category: 'UI/UX Design',
    year: '2025',
    description: `Vietnam Worship Platform is a responsive, one-stop e-commerce solution 
    that simplifies traditional Vietnamese rituals by delivering pre-prepared packs, 
    individual items, and on-demand blessing services to users’ doorsteps. It includes step-by-step 
    ritual guides, an AI chatbot for instant support, and integrated temple location services. 
    I designed the UX, built the mobile-first front end (HTML/CSS/JS), and developed the PHP/MySQL 
    back end for authentication, orders, subscriptions, and wishlist management.<br>
    <a href="https://dms.onl/WorshipEcommerce/" target="_blank" rel="noopener" style="color:#F3F3F3; opacity: 0.5;">
      [ Visit the website now ]
    </a>`,
    metadata: {
      type: 'Group Project',
      duration: '3 months (3/2025 – 5/2025)',
      scope: [
        'Wireframing & Prototyping',
        'Front-end  HTML/CSS/JS',
        'PHP/MySQL Backend Integration',
        "Developing User Experience",
        'Gemini AI Implementation',
        'Testing User Experience'
      ]
    },
    thumbnail: 'img/projects/vietnam_worship_website/cover.png',
    mediaThumbs: [
      'img/projects/vietnam_worship_website/0.png',
      'img/projects/vietnam_worship_website/0-1.png',
      'img/projects/vietnam_worship_website/1.png',
      'img/projects/vietnam_worship_website/2.png',
      'img/projects/vietnam_worship_website/3.png',
      'img/projects/vietnam_worship_website/4.png',
      'img/projects/vietnam_worship_website/5.png',
      'img/projects/vietnam_worship_website/6.png',
      'img/projects/vietnam_worship_website/7.png',
      'img/projects/vietnam_worship_website/8.png',
      'img/projects/vietnam_worship_website/9.png'
    ]
  },

  {
    id: 'set-of-icons-dusha',
    title: 'Set of icons: Dusha',
    category: '2D Illustration',
    year: '2023',
    description: `Dusha is a custom set of eight flower icons inspired by the enduring personalities 
    of Vietnamese women preserved through generations. I designed each icon to capture a distinct 
    characteristic, crafting minimalist floral forms in Adobe Illustrator that balance clean geometry 
    with subtle cultural symbolism. This collection celebrates the soul beauty of Vietnamese women, 
    offering versatile tokens ideal as personal keepsakes or thoughtful gifts.`,
    metadata: {
      type: 'Personal Project',
      duration: '3 weeks (3/2023)',
      scope: [
        'Research & concept development', 
        'Hand-sketched icon explorations', 
        'Vector illustration & refinement',
        'Documentation of icon meanings and usage guidelines'
      ]
    },
    thumbnail: 'img/projects/dusha/cover.png',
    mediaThumbs: [
      'img/projects/dusha/1.png',
      'img/projects/dusha/2.png',
      'img/projects/dusha/3.png',
      'img/projects/dusha/4.png',
      'img/projects/dusha/5.png',
      'img/projects/dusha/6.png',
      'img/projects/dusha/7.png',
      'img/projects/dusha/8.png',
      'img/projects/dusha/9.png',
      'img/projects/dusha/10.png',
      'img/projects/dusha/13.png',
      'img/projects/dusha/16.png',
      'img/projects/dusha/14.png',
      'img/projects/dusha/11.png',
      'img/projects/dusha/15.png',
      'img/projects/dusha/12.png'
    ]
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
      type: 'Personal Project',
      duration: '1 week (12/2024)',
      scope: [
        'Research & Concept', 
        'Neighborhood Researcher',
        'Visual Developing',
        'Layout Designer'
      ]
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
    description: `For the RMIT Fitness Assessment,  I was the sole photographer and editor for the 
    collaborative event between RMIT x Lecao Athletics Base (LAB). I captured dynamic athlete moments, 
    facility setups, and candid behind-the-scenes interactions, then refined each image to highlight 
    the energy and professionalism of the assessment. The resulting photo series showcases the seamless 
    blend of academic rigor and athletic excellence at the heart of this partnership.<br>
    <a href="https://drive.google.com/drive/folders/1LffvIb9yzCDNaRv750CbNAVi9PeIv4Zc?usp=sharing" target="_blank" rel="noopener" style="color:#F3F3F3; opacity: 0.5;">
      [ View full album here ]
    </a>`,
    metadata: {
      type: 'Personal Project',
      duration: '3 days (05/2025)',
      scope: [
        'Sole Event Photographer', 
        'Concept & Shot List Development',
        'Post-Production Editing',
        'Asset Management & Delivery',
        'Client Liaison'
      ]
    },
    thumbnail: 'img/projects/fitness_assessment/cover.png',
    mediaThumbs: [
      'img/projects/fitness_assessment/1.png',
      'img/projects/fitness_assessment/2.png',
      'img/projects/fitness_assessment/9.png',
      'img/projects/fitness_assessment/4.png',
      'img/projects/fitness_assessment/5.png',
      'img/projects/fitness_assessment/6.png',
      'img/projects/fitness_assessment/7.png',
      'img/projects/fitness_assessment/11.png',
      'img/projects/fitness_assessment/10.png',
      'img/projects/fitness_assessment/3.png',
      'img/projects/fitness_assessment/8.png',
      'img/projects/fitness_assessment/12.png'
    ]
  },
  {
    id: 'character-animation',
    title: 'Sologramy - 3D Animation Character',
    category: '3D Design',
    year: '2024',
    description: `In this 3D character animation, I transform Thúy Kiều from Nguyễn Du’s Truyện Kiều 
    into an anti-heroine: her timeless Vietnamese grace now tempered by trauma-driven determination. 
    Betrayed and hardened, she strikes back at those who harm her yet fiercely shields the innocent. 
    I sculpted, textured, rigged, and animated her in Blender, styling her in áo dài–inspired attire 
    and ritual accessories to blend cultural authenticity with dynamic motion, capturing both her 
    classical beauty and modern resilience.`,
    metadata: {
      type: 'Personal Project',
      duration: '5 weeks (3/2024 - 4/2024)',
      scope: [
        'Research & Concept', 
        '3D Modeller and Animator', 
        'Visual Developing'
      ]
    },
    thumbnail: 'img/projects/character_animation/14.png',
    mediaThumbs: [
      'img/projects/character_animation/1.png',
      'img/projects/character_animation/2.png',
      'img/projects/character_animation/3.png',
      'img/projects/character_animation/4.png',
      'img/projects/character_animation/5.png',
      'img/projects/character_animation/6.png',
      'img/projects/character_animation/7.png',
      'img/projects/character_animation/8.png',
      'img/projects/character_animation/9.png',
      'img/projects/character_animation/10.png',
      'img/projects/character_animation/11.png',
      'img/projects/character_animation/12.png',
      'img/projects/character_animation/13.png',
      'img/projects/character_animation/14.png',
      'img/projects/character_animation/15.png'
    ],
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
      type: 'Group Project',
      duration: '3 weeks (5/2024)',
      scope: [
        'Research & Concept', 
        'Visual Developing', 
        'Mapping Arena Resolume',
        'VJ Performer'
      ]
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
      type: 'Personal Project',
      duration: '4 weeks (7/2024)',
      scope: [
        'Research & Concept', 
        'Digital Painting', 
        'Print-ready Export'
      ]
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
      type: 'Personal Project',
      duration: '1 week (08/2024)',
      scope: ['Research & Concept', 'Digital Painting', 'Print-ready Export']
    },
    thumbnail: 'img/other4.jpg',
    mediaThumbs: [/* … */],
    mediaVideo: 'img/ton-dan-video-poster.jpg'
  },
  {
    id: 'book-cover',
    title: 'Redesign Book Cover (Dear, darling - Hiên)',
    category: '2D Illustration',
    year: '2024',
    description: `I redesigned the cover of Dear, darling, blending hand-drawn textures 
    with digital painting to capture the story’s intimate, romantic tone. My process 
    spanned research and concept development, sketching and digital illustration, typographic 
    refinement, and print-ready exports, resulting in a cohesive, emotionally resonant cover design.`,
    metadata: {
      type: 'Personal Project',
      duration: '4 days (11/2024)',
      scope: [
        'Research & Concept Development', 
        'Hand-drawn Texture Sketches', 
        'Digital Painting & Composition',
        'Typography & Layout Refinement'
      ]
    },
    thumbnail: 'img/projects/book_cover/cover.png',
    mediaThumbs: [      
      'img/projects/book_cover/1.png',
      'img/projects/book_cover/4.png',
      'img/projects/book_cover/2.jpg',
      'img/projects/book_cover/5.jpg',
      'img/projects/book_cover/3.jpg',
      'img/projects/book_cover/6.jpg'
    ],
  },
  {
    id: 'typhography-logo',
    title: 'Typography Logo',
    category: '2D Illustration',
    year: '2024',
    description: `For the Typography Logo project, I created a bespoke wordmark for the fictional 
    candle brand Hestia Glow, inspired by the Greek goddess of the hearth. Starting from hand-sketched 
    letterforms that mimic the gentle flicker of a flame, I refined each curve and terminal in 
    Illustrator to convey warmth, sanctuary, and artisanal care. The result is a clean, scalable 
    typographic identity that captures the brand’s essence of glowing candlelight and timeless elegance.`,
    metadata: {
      type: 'Personal Project',
      duration: '3 days (1/2025)',
      scope: [
        'Brand & concept development', 
        'Hand-drawn letterform sketching', 
        'Vectorization and digital refinement',
        'Kerning, weight tuning, and structural adjustments',
        'Color exploration and palette application',
        'Creation of logo usage guidelines and export of print- and web-ready assets'
      ]
    },
    thumbnail: 'img/projects/typography_logo/9.jpg',
    mediaThumbs: [
      'img/projects/typography_logo/3.png',
      'img/projects/typography_logo/4.png',
      'img/projects/typography_logo/1.png',
      'img/projects/typography_logo/5.jpg',
      'img/projects/typography_logo/6.jpg',
      'img/projects/typography_logo/7.jpg',
      'img/projects/typography_logo/8.jpg',
      'img/projects/typography_logo/9.jpg',
      'img/projects/typography_logo/10.jpg',
      'img/projects/typography_logo/11.jpg'
    ],
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
      type: 'Personal Project',
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
    description: `For Hierarchy Layout Design, I reimagined Chapter 1 of Dickens’s Great Expectations 
    in three treatments: an editorial style with classic hierarchy and generous white space; a modular 
    grid for clarity and balance; and a chaotic layout with overlapping forms to heighten tension. 
    By varying type scale, image placement, and spatial rhythm, each design guides the reader’s eye 
    and evokes a distinct mood-showcasing the power of visual hierarchy.`,
    metadata: {
      type: 'Personal Project',
      duration: '5 days (12/2024)',
      scope: [
        'Concept & research', 
        'Typographic hierarchy & grid system setup', 
        'Three layout designs: editorial, modular, chaotic'
      ]
    },
    thumbnail: 'img/projects/hierarchy_layout/cover.png',
    mediaThumbs: [
      'img/projects/hierarchy_layout/1.png',
      'img/projects/hierarchy_layout/2.jpg',
      'img/projects/hierarchy_layout/3.png',
      'img/projects/hierarchy_layout/4.jpg',
      'img/projects/hierarchy_layout/5.png',
      'img/projects/hierarchy_layout/6.jpg'
    ]
  },
  // ────────────────────────────────────────────────────────────────────────────
];
