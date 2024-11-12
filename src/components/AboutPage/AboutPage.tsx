import { Card, CardContent } from "@/components/ui/card";
import { Users, Trophy, Star, GraduationCap } from "lucide-react";

const AboutPage = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-white" />,
      value: "5",
      label: "Team Members",
    },
    {
      icon: <Trophy className="w-6 h-6 text-white" />,
      value: "3",
      label: "Key Features",
    },
    {
      icon: <Star className="w-6 h-6 text-white" />,
      value: "AI",
      label: "Powered Matching",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      value: "24/7",
      label: "Support",
    },
  ];

  return (
    <div className="bg-afro-base-bg">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-[#411294] to-[#9C64FF] py-20">
        <div className="container mx-auto px-4">
          <div className="text-white font-medium mb-4">The Story Behind</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Transforming
            <br />
            Cameroon's Music
            <br />
            Industry
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 -mt-10 pb-16">
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Story Card */}
          <Card className="bg-[#323052] border-none shadow-lg lg:col-span-2 text-lg">
            <CardContent className="p-8">
              <p className="text-white leading-relaxed">
                Harmonic Hackers was born from a shared vision of five
                passionate innovators during a hackathon. We recognized a
                critical gap in Cameroon's music industry: the lack of
                accessible coaching and investor exposure for emerging artists.
              </p>
              <p className="text-white leading-relaxed mt-4">
                Our team combines expertise in development, UI/UX design,
                marketing, and music industry experience. With Boris heading our
                branding, Salome crafting our vision, MD Christien bringing
                musical expertise, Suzy leading marketing, and Cyril driving
                development, we're building a platform that bridges the gap
                between talent and opportunity.
              </p>
            </CardContent>
          </Card>

          {/* Image Card */}
          <Card className="bg-[#323052] border-none shadow-lg overflow-hidden lg:col-span-3">
            <CardContent className="p-0">
              <img
                src="/about.jpg"
                alt="Harmonic Hackers"
                className="w-full h-[500px] object-cover"
              />
            </CardContent>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-[#323052] border-none shadow-lg">
              <CardContent className="flex flex-col items-center p-6">
                <div className="w-12 h-12 bg-[#411294] rounded-full flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-[#9C64FF]">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vision Section */}
        <Card className="bg-[#323052] border-none shadow-lg">
          <CardContent className="p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Our Vision for Cameroon's Music Future
              </h2>
              <p className="text-white leading-relaxed">
                We're revolutionizing the way musical talent is discovered and
                developed in Cameroon. Through our AI-powered platform, we
                connect emerging artists with industry experts for personalized
                coaching, while creating an exceptional talent pool for
                investors. Our mission is to polish raw talent, produce
                outstanding musicians, and create a sustainable ecosystem that
                nurtures the next generation of Cameroonian music stars.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;

// import { Card, CardContent } from "@/components/ui/card";
// import { Users, Trophy, Star, GraduationCap } from "lucide-react";

// const AboutPage = () => {
//   const stats = [
//     {
//       icon: <Users className="w-6 h-6 text-white" />,
//       value: "100K+",
//       label: "Trusted Students",
//     },
//     {
//       icon: <Trophy className="w-6 h-6 text-white" />,
//       value: "830+",
//       label: "Positive Reviews",
//     },
//     {
//       icon: <Star className="w-6 h-6 text-white" />,
//       value: "3.5",
//       label: "Years Experience",
//     },
//     {
//       icon: <GraduationCap className="w-6 h-6 text-white" />,
//       value: "23",
//       label: "Project Challenge",
//     },
//   ];

//   return (
//     <div className="bg-afro-base-bg">
//       {/* Hero Section */}
//       <div className="w-full bg-gradient-to-r from-[#411294] to-[#9C64FF] py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-white font-medium mb-4">How It Started</div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
//             Our Dream is
//             <br />
//             Global Learning
//             <br />
//             Transformation
//           </h1>
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div className="container mx-auto px-4 -mt-10 pb-16">
//         <div className="grid lg:grid-cols-5 gap-8 mb-16">
//           {/* Story Card */}
//           <Card className="bg-[#323052] border-none shadow-lg lg:col-span-2 text-lg">
//             <CardContent className="p-8">
//               <p className="text-white leading-relaxed">
//                 AfroCoach was founded by Robert Anderson, a passionate lifelong
//                 learner, and Maria Sanchez, a visionary educator. Their shared
//                 dream was to create a digital haven of knowledge accessible to
//                 all. United by their belief in the transformational power of
//                 education, they embarked on a journey to build 'AfroCoach.'
//               </p>
//               <p className="text-white leading-relaxed mt-4">
//                 With relentless dedication, they gathered a team of experts and
//                 launched this innovative platform, creating a global community
//                 of eager learners, all connected by the desire to explore,
//                 learn, and grow.
//               </p>
//             </CardContent>
//           </Card>

//           {/* Image Card */}
//           <Card className="bg-[#323052] border-none shadow-lg overflow-hidden lg:col-span-3">
//             <CardContent className="p-0">
//               <img
//                 src="/about.jpg"
//                 alt="Harmonic Hackers"
//                 className="w-full h-[500px] object-cover"
//               />
//             </CardContent>
//           </Card>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
//           {stats.map((stat, index) => (
//             <Card key={index} className="bg-[#323052] border-none shadow-lg">
//               <CardContent className="flex flex-col items-center p-6">
//                 <div className="w-12 h-12 bg-[#411294] rounded-full flex items-center justify-center mb-4">
//                   {stat.icon}
//                 </div>
//                 <div className="text-3xl font-bold text-white mb-2">
//                   {stat.value}
//                 </div>
//                 <div className="text-[#9C64FF]">{stat.label}</div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Vision Section */}
//         <Card className="bg-[#323052] border-none shadow-lg">
//           <CardContent className="p-8">
//             <div className="max-w-3xl mx-auto text-center">
//               <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
//                 Our Vision for the Future
//               </h2>
//               <p className="text-white leading-relaxed">
//                 We envision a world where quality education knows no boundaries.
//                 Through innovative teaching methods, cutting-edge technology,
//                 and a commitment to excellence, we're building a future where
//                 everyone has access to transformative learning experiences that
//                 empower them to achieve their dreams.
//               </p>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;
