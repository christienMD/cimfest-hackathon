export const navLinks = [
    {to:"/home", label: "Home"},
    {to: "/talent-hub", label: "Talent Hub"},
    {to: "/about", label: "About"},
    {to: "/contact", label: "Contact"}
  
];

export const footerData  = [
  {
    title: "Partner with us",
    links: [
      { label: "I'm a studio", href: "/studio" },
      { label: "I'm an agent", href: "/agent" },
    ]
  },
  {
    title: "Partner support",
    links: [
      { label: "Support Us", href: "/support" },
    ]
  },
  {
    title: "Artist",
    links: [
      { label: "Find Coaches", href: "/coaches" },
      { label: "Guides", href: "/guides" },
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Afro coach", href: "/about" },
      { label: "Press and media", href: "/press" },
      { label: "Discover", href: "/discover" },
      { label: "Careers", href: "/careers" },
      { label: "Contact us", href: "/contact" },
    ]
  },
];

export const faqs = [
  {
    question: 'What is this platform about?',
    answer:
      'Our platform connects emerging Cameroonian artists with expert coaches and investors, providing personalized guidance to grow their talents and gain industry visibility.',
  },
  {
    question: 'How do I start finding a coach?',
    answer:
      'Simply create an account, complete your profile, and explore available coaches who match your musical interests and goals.',
  },
  {
    question: 'Can I apply to become a coach on the platform?',
    answer:
      'Yes, established artists and experts in music can apply to become coaches. Reach out through our "Partner with Us" section to get started.',
  },
  {
    question: 'Is there a fee for coaching sessions?',
    answer:
      'Coaches set their own fees, and you can view these details on their profiles. Some sessions may have introductory discounts or special offers.',
  },
  {
    question: 'How does the platform support investor connections?',
    answer:
      'Our platform showcases artists with potential and provides exposure to investors interested in discovering fresh talent in the Cameroonian music industry.',
  },
];



export interface Album {
  name: string;
  artist: string;
  cover: string;
}

export const listenNowAlbums: Album[] = [
  {
    name: "React Rendezvous",
    artist: "Ethan Byte",
    cover:
      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
  },
  {
    name: "Async Awakenings",
    artist: "Nina Netcode",
    cover:
      "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
  },
  {
    name: "The Art of Reusability",
    artist: "Lena Logic",
    cover:
      "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80",
  },
  {
    name: "Stateful Symphony",
    artist: "Beth Binary",
    cover:
      "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
  },
];

export const madeForYouAlbums: Album[] = [
  {
    name: "Thinking Components",
    artist: "Lena Logic",
    cover:
      "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
  },
  {
    name: "Functional Fury",
    artist: "Beth Binary",
    cover:
      "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",
  },
  {
    name: "React Rendezvous",
    artist: "Ethan Byte",
    cover:
      "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80",
  },
  {
    name: "Stateful Symphony",
    artist: "Beth Binary",
    cover:
      "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",
  },
  {
    name: "Async Awakenings",
    artist: "Nina Netcode",
    cover:
      "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
  },
  {
    name: "The Art of Reusability",
    artist: "Lena Logic",
    cover:
      "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
  },
];

export type Playlist = (typeof playlists)[number];

export const playlists = [
  "Recently Added",
  "Recently Played",
  "Top Songs",
  "Top Albums",
  "Top Artists",
  "Logic Discography",
  "Bedtime Beats",
  "Feeling Happy",
  "I miss Y2K Pop",
  "Runtober",
  "Mellow Days",
  "Eminem Essentials",
];





