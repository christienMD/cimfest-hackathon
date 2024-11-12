import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactUs = () => {
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Handle form submission
  //   };

  return (
    <div className="min-h-screen bg-afro-base-bg text-white">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-[#411294] to-[#9C64FF] py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Get in Touch
          </h1>
          <p className="text-lg text-center max-w-2xl mx-auto text-white">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-[#323052] border-none shadow-lg">
            <CardContent className="flex flex-col items-center p-6">
              <div className="w-12 h-12 bg-[#411294] rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
              <p className="text-white text-center">Mon-Fri from 8am to 5pm</p>
              <a
                href="tel:+1234567890"
                className="text-[#9C64FF] hover:underline"
              >
                +237 650 398 429
              </a>
            </CardContent>
          </Card>

          <Card className="bg-[#323052] border-none shadow-lg">
            <CardContent className="flex flex-col items-center p-6">
              <div className="w-12 h-12 bg-[#411294] rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-white font-semibold mb-2">Email</h3>
              <p className="text-white text-center">24/7 Support</p>
              <a
                href="mailto:support@afrocoach.com"
                className="text-[#9C64FF] hover:underline"
              >
                support@afrocoach.com
              </a>
            </CardContent>
          </Card>

          <Card className="bg-[#323052] border-none shadow-lg">
            <CardContent className="flex flex-col items-center p-6">
              <div className="w-12 h-12 bg-[#411294] rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Office</h3>
              <p className="text-white text-center">Visit our office</p>
              <p className="text-[#9C64FF]">123 Molyko, Buea</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="bg-[#323052] text-white border-none shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input
                      className="w-full bg-[#2E2B4A] border-[#411294] focus:border-[#9C64FF]"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input
                      className="w-full bg-[#2E2B4A] border-[#411294] focus:border-[#9C64FF]"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    className="w-full bg-[#2E2B4A] border-[#411294] focus:border-[#9C64FF]"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    className="w-full bg-[#2E2B4A] border-[#411294] focus:border-[#9C64FF] min-h-[150px]"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative h-[46px] w-full sm:w-[200px] mx-auto block text-base font-medium"
                  style={{
                    padding: '3px',
                    background:
                      'linear-gradient(90deg, #411294 0%, #9C64FF 100%)',
                    borderRadius: '20px',
                  }}
                >
                  <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-[#411294] to-[#9C64FF] opacity-0 group-hover:opacity-20 transition-opacity" />
                  <div className="h-full w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#323052] to-[#411294] text-white rounded-[17px] font-bold">
                    <Send className="w-4 h-4" />
                    Send Message
                  </div>
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
