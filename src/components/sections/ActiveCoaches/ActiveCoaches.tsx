import ActiveCoachCard from "@/components/cards/ActiveCoachCard/ActiveCoachCard";


interface Coach {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  description: string;
}

const coaches: Coach[] = [
  {
    id: "1",
    name: "Donny Elwood",
    role: "Vocal Coach",
    imageUrl: "/coach.png",
    description:
      "Expert vocal coach specializing in African Jazz and Folk music. Known for training emerging artists in Yaoundé. Former judge on The Voice Afrique and mentor to numerous successful Cameroonian artists.",
  },
  {
    id: "2",
    name: "Ndedi Dibango",
    role: "Music Production Coach",
    imageUrl: "/coach.png",
    description:
      "Leading music production coach with over 15 years of experience. Specializes in modern Afropop and traditional fusion. Head of production at Galaxy Records Douala.",
  },
  {
    id: "3",
    name: "Charlotte Dipanda",
    role: "Performance Coach",
    imageUrl: "/coach.png",
    description:
      "Renowned performance and stage presence coach. Expert in both traditional and contemporary Cameroonian music styles. Provides masterclasses in artist development and stage craft.",
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
