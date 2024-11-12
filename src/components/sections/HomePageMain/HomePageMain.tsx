import CoachCard from '@/components/cards/ActiveCoachCard/CoachCard';

const suggestedCoachesData = [
  {
    name: 'Lady Ponce',
    role: 'Singer/Song-writer',
    imageUrl: '/images/lady.jpeg',
    description:
      'Lady Ponce, a prominent Cameroonian singer, is known as the "Queen of Bikutsi," celebrated for her energetic performances and empowering lyrics.',
  },
  {
    name: 'Charlotte Dipanda',
    role: 'Voice Coach',
    imageUrl: '/images/charlotte-dipanda.jpeg',
    description:
      'Award-winning artist and vocal coach with expertise in traditional and contemporary African music styles. Specializes in helping artists develop their unique voice.',
  },
  {
    name: 'Petit Pays',
    role: 'Beat Maker & Producer',
    imageUrl: '/images/petit-pays.jpeg',
    description:
      'Pioneer of Makossa-style production with over 20 years of experience. Expertise in traditional and modern beat making, mixing African rhythms with contemporary sounds.',
  },
  {
    name: 'Blaise B',
    role: 'Sound Engineer',
    imageUrl: '/images/blaise-b.jpeg',
    description:
      'Professional sound engineer and producer at Stevens Music Entertainment. Known for his work with major Cameroonian artists and expertise in modern recording techniques.',
  },
  {
    name: 'Askia',
    role: 'Rap/Song-writer Artist',
    imageUrl: '/images/askia.jpeg',
    description:
      'Askia, a Cameroonian rapper and songwriter, is known for her powerful lyrics and bold style, addressing social issues and female empowerment in her music.',
  },
  {
    name: 'Phillbill',
    role: 'Beat Maker',
    imageUrl: '/images/philbill.jpeg',
    description:
      'Professional producer known for creating unique Afrobeats. Has worked with top artists across Africa and specializes in modern music production.',
  },
  {
    name: 'Duc-Z',
    role: 'Video Producer',
    imageUrl: '/images/duc-z.jpeg',
    description:
      'Award-winning music video producer and director. Known for creating high-quality visual content and innovative music videos for major artists.',
  },
  {
    name: 'Ndedi Eyango',
    role: 'Sound Engineer',
    imageUrl: '/images/prince-eyango.jpeg',
    description:
      'Veteran sound engineer with over 25 years of experience in Makossa and traditional music. Specializes in blending traditional and modern recording techniques.',
  },
];

const otherCoachesData = [
  {
    name: 'Nkeng Stephens',
    role: 'Music Producer & Artist',
    imageUrl: '/images/nkeng-stephens.jpeg',
    description:
      'Innovative producer and artist known for his unique style in urban music. Expertise in modern production techniques and artist development.',
  },
  {
    name: 'Krotal',
    role: 'Rap Coach & Producer',
    imageUrl: '/images/krotal.jpeg',
    description:
      'Veteran rapper and producer with over 15 years in hip-hop. Specializes in rap techniques, songwriting, and urban music production.',
  },
  {
    name: 'Grace Decca',
    role: 'Traditional Music Expert',
    imageUrl: '/images/grace-decca.jpeg',
    description:
      'Master of traditional Cameroonian music with expertise in indigenous instruments and rhythms. Specializes in blending traditional elements with modern sounds.',
  },
  {
    name: 'Lady Ponce',
    role: 'Vocal Coach & Performer',
    imageUrl: '/images/lady-ponce.jpeg',
    description:
      'Accomplished vocalist and performer specializing in Bikutsi music. Expertise in traditional vocal techniques and stage performance.',
  },
  {
    name: 'Locko',
    role: 'Urban Music Producer',
    imageUrl: '/images/locko.jpeg',
    description:
      'Contemporary producer and artist known for modern Afropop production. Specializes in urban music arrangements and vocal production.',
  },
  {
    name: 'Ténor',
    role: 'Rap Producer',
    imageUrl: '/images/tenor.jpeg',
    description:
      'Leading figure in Cameroonian rap, experienced in modern trap and hip-hop production. Expertise in contemporary urban music styles.',
  },
  {
    name: 'Indira Barboke',
    role: 'Gospel Music Artist',
    imageUrl: '/images/indira-barboke.jpeg',
    description:
      'Indira Baboke, a Cameroonian gospel singer, is known for her heartfelt voice and inspirational songs, which uplift and inspire listeners.',
  },
  {
    name: 'Lydol',
    role: 'Poet, Song-writer, Singer',
    imageUrl: '/images/lydol.jpeg',
    description:
      'Lydol, a Cameroonian spoken word artist and singer, is celebrated for her poetic style, blending storytelling with music to address social and cultural themes.',
  },
];

const HomePageMain = () => {
  return (
    <section className="lg:px-4 py-8 max-w-7xl mx-auto">
      {/* Suggested Coaches Section */}
      <div className="mb-16">
        <h2 className="text-[#D4BBFF] text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
          Coaches Suggested by Preference
        </h2>

        <div className="pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {suggestedCoachesData.map((coach, index) => (
              <CoachCard
                key={index}
                name={coach.name}
                role={coach.role}
                imageUrl={coach.imageUrl}
                description={coach.description}
                onLearnMore={() => console.log(`See ${coach.name}'s profile`)}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </div>

      {/* All Other Coaches Section */}
      <div className="mb-16">
        <h2 className="text-[#D4BBFF] text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
          All Other Coaches
        </h2>

        <div className="pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {otherCoachesData.map((coach, index) => (
              <CoachCard
                key={index}
                name={coach.name}
                role={coach.role}
                imageUrl={coach.imageUrl}
                description={coach.description}
                onLearnMore={() => console.log(`See ${coach.name}'s profile`)}
                className="h-full"
              />
            ))}
          </div>

          <button className="w-full mt-8 sm:w-48 py-4 text-lg bg-[#D4BBFF] hover:bg-[#C4A2FF] text-[#411294] hover:opacity-90 rounded-full transition-colors duration-200 font-medium">
            see more
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePageMain;
