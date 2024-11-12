// import React, { useState } from 'react';
import {
  Music,
  Award,
  Users,
  PlayCircle,
  Calendar,
  Link as Instagram,
  Twitter,
  Youtube,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const ArtistProfile = () => {
  //   const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-afro-base-bg text-white pb-16">
      {/* Cover Photo */}
      <div className="h-64 bg-gradient-to-r from-[#411294] to-[#9C64FF]" />

      {/* Profile Section */}
      <div className="container mx-auto px-4">
        <div className="relative -mt-20">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src="/images/chriestien.jpeg"
                alt="Artist profile"
                className="w-40 h-40 rounded-full border-4 border-[#323052] object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-3xl font-bold">MD Chriestien</h1>
                    <Badge className="bg-[#411294]">Gospel Artist</Badge>
                  </div>
                  {/* <p className="text-gray-300 mt-1">R&B / Soul Singer</p> */}
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="w-4 h-4 text-[#9C64FF]" />
                    <span className="text-gray-300">Buea, Cameroon</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex gap-3">
                  <Button className="bg-gradient-to-r from-[#411294] to-[#9C64FF] hover:opacity-90">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <Card className="bg-[#323052] border-none">
                  <CardContent className="p-4 text-center">
                    <Music className="w-6 h-6 text-[#9C64FF] mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Genre</p>
                    <p className="font-bold text-white">Gospel</p>
                  </CardContent>
                </Card>
                <Card className="bg-[#323052] border-none">
                  <CardContent className="p-4 text-center">
                    <Award className="w-6 h-6 text-[#9C64FF] mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Experience</p>
                    <p className="font-bold text-white">2 Years</p>
                  </CardContent>
                </Card>
                <Card className="bg-[#323052] border-none">
                  <CardContent className="p-4 text-center">
                    <Users className="w-6 h-6 text-[#9C64FF] mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Followers</p>
                    <p className="font-bold text-white">5.2K</p>
                  </CardContent>
                </Card>
                <Card className="bg-[#323052] border-none">
                  <CardContent className="p-4 text-center">
                    <PlayCircle className="w-6 h-6 text-[#9C64FF] mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Releases</p>
                    <p className="font-bold text-white">12</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="about" className="mt-8">
            <TabsList className="bg-[#323052] border-b border-gray-700">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="music">Music</TabsTrigger>
              <TabsTrigger value="goals">Goals</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="availability">Availability</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-6">
              <Card className="bg-[#323052] border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl text-white font-bold mb-4">
                    About Me
                  </h3>
                  <p className="text-gray-300 mb-6">
                    I am a dedicated Software Engineer with over 2+ years of
                    experience in developing innovative solutions, complemented
                    by a solid foundation in Computer Science through my degree.
                    Beyond the world of technology, I am a passionate Gospel
                    Artist who has released "Lion of Judah" on YouTube,
                    combining my love for worship music with my technical
                    expertise. This unique blend of technical acumen and
                    creative artistry allows me to bring a distinctive
                    perspective to both my engineering projects and musical
                    endeavors.
                  </p>

                  <h3 className="text-xl font-bold mb-4 text-white">
                    Looking For
                  </h3>
                  <div className="space-y-3 mb-6">
                    <Badge className="mr-2 bg-[#411294]">Vocal Coach</Badge>
                    <Badge className="mr-2 bg-[#411294]">Music Producer</Badge>
                    <Badge className="mr-2 bg-[#411294]">
                      Songwriting Coach
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-white">
                    Social Media
                  </h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-[#9C64FF] hover:text-white">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-[#9C64FF] hover:text-white">
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-[#9C64FF] hover:text-white">
                      <Youtube className="w-6 h-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="music" className="mt-6">
              <Card className="bg-[#323052] border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Latest Releases</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-4 p-4 bg-[#2E2B4A] rounded-lg"
                      >
                        <img
                          src="/api/placeholder/80/80"
                          alt="Track cover"
                          className="w-20 h-20 rounded-md"
                        />
                        <div>
                          <h4 className="font-bold">Track Title {item}</h4>
                          <p className="text-gray-300">Released: Jan 2024</p>
                          <Button variant="ghost" size="sm" className="mt-2">
                            <PlayCircle className="w-4 h-4 mr-2" />
                            Play
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="skills" className="mt-6">
              <Card className="bg-[#323052] border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Technical Skills</h3>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Vocals</span>
                        <span className="text-[#9C64FF]">Advanced</span>
                      </div>
                      <Progress value={85} className="h-2 bg-[#2E2B4A]" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Songwriting</span>
                        <span className="text-[#9C64FF]">Intermediate</span>
                      </div>
                      <Progress value={65} className="h-2 bg-[#2E2B4A]" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Piano</span>
                        <span className="text-[#9C64FF]">Intermediate</span>
                      </div>
                      <Progress value={60} className="h-2 bg-[#2E2B4A]" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Music Production</span>
                        <span className="text-[#9C64FF]">Beginner</span>
                      </div>
                      <Progress value={40} className="h-2 bg-[#2E2B4A]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mt-8 mb-4">
                    Software & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-[#411294]">Logic Pro X</Badge>
                    <Badge className="bg-[#411294]">Pro Tools</Badge>
                    <Badge className="bg-[#411294]">Ableton Live</Badge>
                    <Badge className="bg-[#411294]">Melodyne</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="goals" className="mt-6">
              <Card className="bg-[#323052] border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Career Goals</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-[#2E2B4A] rounded-lg">
                      <h4 className="font-bold mb-2">Short-term Goals</h4>
                      <ul className="list-disc list-inside text-gray-300">
                        <li>Release first professional EP</li>
                        <li>Build social media presence</li>
                        <li>Collaborate with local artists</li>
                        <li>Perform at major local venues</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-[#2E2B4A] rounded-lg">
                      <h4 className="font-bold mb-2">Long-term Goals</h4>
                      <ul className="list-disc list-inside text-gray-300">
                        <li>Sign with a major record label</li>
                        <li>Complete a nationwide tour</li>
                        <li>Win industry awards</li>
                        <li>Collaborate with established artists</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-[#2E2B4A] rounded-lg">
                      <h4 className="font-bold mb-2">
                        What I'm Looking for in a Coach
                      </h4>
                      <ul className="list-disc list-inside text-gray-300">
                        <li>Industry expertise and connections</li>
                        <li>Vocal technique development</li>
                        <li>Career guidance and planning</li>
                        <li>Performance coaching</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="availability" className="mt-6">
              <Card className="bg-[#323052] border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Scheduling Preferences
                  </h3>
                  <div className="space-y-6">
                    <div className="p-4 bg-[#2E2B4A] rounded-lg">
                      <h4 className="font-bold mb-2">Available Times</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium mb-2">Weekdays</h5>
                          <p className="text-gray-300">
                            10:00 AM - 6:00 PM PST
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Weekends</h5>
                          <p className="text-gray-300">
                            12:00 PM - 4:00 PM PST
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#2E2B4A] rounded-lg">
                      <h4 className="font-bold mb-2">Session Preferences</h4>
                      <div className="space-y-2 text-gray-300">
                        <p>• Preferred session length: 1-2 hours</p>
                        <p>
                          • Available for both in-person and virtual sessions
                        </p>
                        <p>• Willing to travel within Los Angeles area</p>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-[#411294] to-[#9C64FF] hover:opacity-90">
                      <Calendar className="w-4 h-4 mr-2" />
                      Check Full Availability
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;
