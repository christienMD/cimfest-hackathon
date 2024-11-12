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
    name: "Fleur et Vénin",
    artist: "Ben Decca",
    cover:
      "/images/ben-decca.jpeg",
  },
  {
    name: "Bamileke Heritage",
    artist: "Prince Eyango",
    cover:
      "/images/prince-eyango.jpeg",
  },
  {
    name: "Kanda na me",
    artist: "Annie Anzoue",
    cover: "/images/annie-anzoue.jpeg",
  },
  {
    name: "Le Meilleur de Tala Andre Marie",
    artist: "Tala André Marie",
    cover:
      "/images/andre-talla.jpeg",
  },
  {
    name: "Jalous",
    artist: "Kameni",
    cover:
      "/images/kameni.jpg",
  },
];


export const madeForYouAlbums: Album[] = [
  {
    name: "Therapy",
    artist: "Libianca",
    cover:
      "/images/libianca.jpeg",
  },
  {
    name: "African Woman",
    artist: "Charlotte Dipanda",
    cover:
      "/images/charlotte-dipanda.jpeg",
  },
  {
    name: "Sade",
    artist: "Salatiel",
    cover:
      "/images/salatiel.jpeg",
  },
  {
    name: "On Est Ensemble",
    artist: "Mr. Leo",
    cover:
      "/images/mr-leo.jpeg",
  },
  {
    name: "Ndi Ndol’am",
    artist: "Lady Ponce",
    cover:
      "/images/lady.jpeg",
  },
  {
    name: "Pour Nous",
    artist: "Tayc",
    cover:
     "/images/tayc.jpeg",
  },
  {
    name: "Pour Nous",
    artist: "Tenor",
    cover:
     "/images/tenor.jpeg",
  },
  {
    name: "Ndolo",
    artist: "Rinyu",
    cover:
      "/images/runyi.jpeg",
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





