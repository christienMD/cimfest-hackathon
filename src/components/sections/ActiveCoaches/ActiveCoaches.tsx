import ActiveCoachCard from '@/components/cards/ActiveCoachCard/ActiveCoachCard';

interface Coach {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  description: string;
}

const coaches: Coach[] = [
  {
    id: '1',
    name: 'Salatiel',
    role: 'Record label/Beatmaker',
    imageUrl: '/images/salatiel.jpeg',
    description:
      'Salatiel, a renowned Cameroonian producer, singer-songwriter, and CEO of Alpha Better Records, is known for his Afrobeat and Afro-pop influence.',
  },
  {
    id: '2',
    name: 'Jovi',
    role: 'Song writter/Singer',
    imageUrl: '/images/jovi.jpeg',
    description:
      'Jovi, a pioneering Cameroonian rapper, producer, and founder of New Bell Music, is acclaimed for blending hip-hop with traditional Cameroonian sounds.',
  },
  {
    id: '3',
    name: 'Charlotte Dipanda',
    role: 'Singer/Song-writer',
    imageUrl: '/images/charlotte-dipanda.jpeg',
    description:
      'Charlotte Dipanda, a celebrated Cameroonian singer-songwriter, is known for her soulful vocals and blending traditional rhythms with contemporary African music.',
  },
];

const ActiveCoaches = () => {
  return (
    <section className="w-full bg-[#333057] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="heading2">
            See the most <span className="font-bold">active Coaches</span>
          </h2>
        </div>
        {/* Coaches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-6 max-w-6xl mx-auto">
          {coaches.map((coach) => (
            <div key={coach.id} className="flex justify-center">
              <ActiveCoachCard
                name={coach.name}
                role={coach.role}
                imageUrl={coach.imageUrl}
                description={coach.description}
                onLearnMore={() =>
                  console.log(`Learn more about ${coach.name}`)
                }
                className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[350px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActiveCoaches;
