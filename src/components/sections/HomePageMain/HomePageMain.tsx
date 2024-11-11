import CoachCard from "@/components/cards/ActiveCoachCard/CoachCard";

const suggestedCoachesData = [
  {
    name: "Salatiel",
    role: "Sound Engineer & Producer",
    imageUrl: "/coach.png",
    description:
      "Founder of Alpha Better Records, renowned producer and sound engineer with over 15 years of experience. Known for producing hits for multiple artists and his work with international artists.",
  },
  {
    name: "Charlotte Dipanda",
    role: "Voice Coach",
    imageUrl: "/coach.png",
    description:
      "Award-winning artist and vocal coach with expertise in traditional and contemporary African music styles. Specializes in helping artists develop their unique voice.",
  },
  {
    name: "Petit Pays",
    role: "Beat Maker & Producer",
    imageUrl: "/coach.png",
    description:
      "Pioneer of Makossa-style production with over 20 years of experience. Expertise in traditional and modern beat making, mixing African rhythms with contemporary sounds.",
  },
  {
    name: "Blaise B",
    role: "Sound Engineer",
    imageUrl: "/coach.png",
    description:
      "Professional sound engineer and producer at Stevens Music Entertainment. Known for his work with major Cameroonian artists and expertise in modern recording techniques.",
  },
  {
    name: "Mr. Leo",
    role: "Song Writer & Producer",
    imageUrl: "/coach.png",
    description:
      "Founder of Lionn Production, experienced songwriter and producer. Specializes in afropop and contemporary African music production.",
  },
  {
    name: "Phillbill",
    role: "Beat Maker",
    imageUrl: "/coach.png",
    description:
      "Professional producer known for creating unique Afrobeats. Has worked with top artists across Africa and specializes in modern music production.",
  },
  {
    name: "Duc-Z",
    role: "Video Producer",
    imageUrl: "/coach.png",
    description:
      "Award-winning music video producer and director. Known for creating high-quality visual content and innovative music videos for major artists.",
  },
  {
    name: "Ndedi Eyango",
    role: "Sound Engineer",
    imageUrl: "/coach.png",
    description:
      "Veteran sound engineer with over 25 years of experience in Makossa and traditional music. Specializes in blending traditional and modern recording techniques.",
  },
];

const otherCoachesData = [
  {
    name: "Maahlox Le Vibeur",
    role: "Music Producer & Artist",
    imageUrl: "/coach.png",
    description:
      "Innovative producer and artist known for his unique style in urban music. Expertise in modern production techniques and artist development.",
  },
  {
    name: "Krotal",
    role: "Rap Coach & Producer",
    imageUrl: "/coach.png",
    description:
      "Veteran rapper and producer with over 15 years in hip-hop. Specializes in rap techniques, songwriting, and urban music production.",
  },
  {
    name: "Nyangono du Sud",
    role: "Traditional Music Expert",
    imageUrl: "/coach.png",
    description:
      "Master of traditional Cameroonian music with expertise in indigenous instruments and rhythms. Specializes in blending traditional elements with modern sounds.",
  },
  {
    name: "Lady Ponce",
    role: "Vocal Coach & Performer",
    imageUrl: "/coach.png",
    description:
      "Accomplished vocalist and performer specializing in Bikutsi music. Expertise in traditional vocal techniques and stage performance.",
  },
  {
    name: "Locko",
    role: "Urban Music Producer",
    imageUrl: "/coach.png",
    description:
      "Contemporary producer and artist known for modern Afropop production. Specializes in urban music arrangements and vocal production.",
  },
  {
    name: "Ténor",
    role: "Rap Producer",
    imageUrl: "/coach.png",
    description:
      "Leading figure in Cameroonian rap, experienced in modern trap and hip-hop production. Expertise in contemporary urban music styles.",
  },
  {
    name: "Dynastie Le Tigre",
    role: "Music Director",
    imageUrl: "/coach.png",
    description:
      "Experienced music director and producer. Specializes in arrangement and live performance direction for major productions.",
  },
  {
    name: "Francis Ngueba",
    role: "Audio Engineer",
    imageUrl: "/coach.png",
    description:
      "Professional audio engineer with expertise in studio recording and live sound. Known for his work in major music festivals and concerts.",
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

          <button
            className="w-full mt-8 sm:w-48 py-4 text-lg bg-[#D4BBFF] hover:bg-[#C4A2FF] text-[#411294] hover:opacity-90 rounded-full transition-colors duration-200 font-medium"
          >
            see more
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePageMain;

// import CoachCard from "@/components/cards/ActiveCoachCard/CoachCard";

// const coachesData = [
//   {
//     name: "Salatiel",
//     role: "Sound Engineer & Producer",
//     imageUrl: "/coach.png",
//     description:
//       "Founder of Alpha Better Records, renowned producer and sound engineer with over 15 years of experience. Known for producing hits for multiple artists and his work with international artists.",
//   },
//   {
//     name: "Charlotte Dipanda",
//     role: "Voice Coach",
//     imageUrl: "/coach.png",
//     description:
//       "Award-winning artist and vocal coach with expertise in traditional and contemporary African music styles. Specializes in helping artists develop their unique voice.",
//   },
//   {
//     name: "Petit Pays",
//     role: "Beat Maker & Producer",
//     imageUrl: "/coach.png",
//     description:
//       "Pioneer of Makossa-style production with over 20 years of experience. Expertise in traditional and modern beat making, mixing African rhythms with contemporary sounds.",
//   },
//   {
//     name: "Blaise B",
//     role: "Sound Engineer",
//     imageUrl: "/coach.png",
//     description:
//       "Professional sound engineer and producer at Stevens Music Entertainment. Known for his work with major Cameroonian artists and expertise in modern recording techniques.",
//   },
//   {
//     name: "Mr. Leo",
//     role: "Song Writer & Producer",
//     imageUrl: "/coach.png",
//     description:
//       "Founder of Lionn Production, experienced songwriter and producer. Specializes in afropop and contemporary African music production.",
//   },
//   {
//     name: "Phillbill",
//     role: "Beat Maker",
//     imageUrl: "/coach.png",
//     description:
//       "Professional producer known for creating unique Afrobeats. Has worked with top artists across Africa and specializes in modern music production.",
//   },
//   {
//     name: "Duc-Z",
//     role: "Video Producer",
//     imageUrl: "/coach.png",
//     description:
//       "Award-winning music video producer and director. Known for creating high-quality visual content and innovative music videos for major artists.",
//   },
//   {
//     name: "Ndedi Eyango",
//     role: "Sound Engineer",
//     imageUrl: "/coach.png",
//     description:
//       "Veteran sound engineer with over 25 years of experience in Makossa and traditional music. Specializes in blending traditional and modern recording techniques.",
//   },
// ];

// const HomePageMain = () => {
//   return (
//     <section className="lg:px-4 py-8 max-w-7xl mx-auto">
//       <div className="">
//         <h2 className="text-[#D4BBFF] text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
//           Coaches Suggested by Preference
//         </h2>

//         {/* Responsive Grid Container */}
//         <div className="pt-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {coachesData.map((coach, index) => (
//               <CoachCard
//                 key={index}
//                 name={coach.name}
//                 role={coach.role}
//                 imageUrl={coach.imageUrl}
//                 description={coach.description}
//                 onLearnMore={() => console.log(`See ${coach.name}'s profile`)}
//                 className="h-full"
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="">
//         <h2 className="text-[#D4BBFF] text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
//           All Other Coaches
//         </h2>
//           display more Professional Camerounnian musice prpfessionals you know . make sure they exist
// make it responsive Look at my styles above and apply them
//       </div>
//     </section>
//   );
// };

// export default HomePageMain;
