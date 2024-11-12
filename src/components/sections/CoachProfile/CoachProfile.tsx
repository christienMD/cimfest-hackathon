import { Award, Star, Music, Users, Clock, Trophy, Disc } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CoachProfile = () => {
  return (
    <div className="bg-[#323052] min-h-screen">
      {/* Coach Header Section */}
      <div className="bg-gradient-to-r from-[#411294] to-[#9C64FF] text-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/20">
              <img
                src="/images/nkeng-stephens.jpeg"
                alt="Coach Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">Nkeng Stephens</h1>
              <p className="text-xl mb-4">Music Producer & Industry coach</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  Grammy Nominated
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  10+ Years Experience
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  Label Executive
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="mb-8 bg-[#2E2B4A] text-white border-none">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  Professional Background
                </h2>
                <p className="text-gray-300 mb-6">
                  With over two decades in the music industry, I've worked with
                  major labels and independent artists alike. My expertise spans
                  production, artist development, and music business strategy.
                  I'm passionate about nurturing new talent and helping artists
                  realize their full potential.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Trophy className="w-6 h-6 text-[#9C64FF]" />
                    <div>
                      <h3 className="font-semibold">Achievements</h3>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>3x Grammy Nominated Producer</li>
                        <li>100+ Gold & Platinum Records</li>
                        <li>Founded Breakthrough Artists Program</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Music className="w-6 h-6 text-[#9C64FF]" />
                    <div>
                      <h3 className="font-semibold">Specialties</h3>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>R&B/Soul Production</li>
                        <li>Vocal Development</li>
                        <li>Artist Branding</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#2E2B4A] text-white border-none">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Mentorship Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#323052] p-6 rounded-lg border border-[#411294]">
                    <h3 className="text-xl font-semibold mb-3">
                      1-on-1 Coaching
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#9C64FF]" />
                        <span>Weekly 60-min sessions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Music className="w-4 h-4 text-[#9C64FF]" />
                        <span>Personalized development plan</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Disc className="w-4 h-4 text-[#9C64FF]" />
                        <span>Studio recording guidance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[#323052] p-6 rounded-lg border border-[#411294]">
                    <h3 className="text-xl font-semibold mb-3">
                      Artist Development
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#9C64FF]" />
                        <span>Industry networking</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-[#9C64FF]" />
                        <span>Performance coaching</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#9C64FF]" />
                        <span>Career strategy planning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <Card className="bg-[#2E2B4A] text-white border-none">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Success Stories</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 border-b border-[#411294] pb-4 last:border-0"
                    >
                      <img
                        src={`/images/salatiel.jpeg`}
                        alt={`Success Story ${index}`}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">Artist Name {index}</h3>
                        <p className="text-sm text-gray-300">
                          Achieved platinum status
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#2E2B4A] text-white border-none">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Get Started</h2>
                <button className="w-full bg-gradient-to-r from-[#411294] to-[#9C64FF] text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
                  Schedule Consultation
                </button>
                <p className="text-sm text-gray-300 mt-4 text-center">
                  Limited spots available for 2024
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachProfile;
