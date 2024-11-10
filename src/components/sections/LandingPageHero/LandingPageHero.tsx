import { Button } from "@/components/ui/button";

const LandingPageHero = () => {
  return (
    <section className="bg-[#23213A] flex items-center justify-center py-16 px-4 relative overflow-hidden">
      {/* More pronounced and extended gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[500px] h-[800px]"
        style={{
          background: `
            radial-gradient(
              70% 100% at 50% 40%,
              rgba(110, 30, 250, 0.35) 0%,
              rgba(110, 30, 250, 0.20) 25%,
              rgba(110, 30, 250, 0.10) 50%,
              rgba(110, 30, 250, 0.05) 75%,
              transparent 100%
            )
          `,
          filter: "blur(70px)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Empowering the Next Generation
            <br />
            <span className="text-[#A495FF] block mt-1">of Music.</span>
          </h1>

          <p className="mt-6 mx-auto text-base text-gray-300/90 leading-relaxed max-w-2xl">
            &quot;Ready to take your music to the next level? Sign up today and
            start your journey towards stardom. Connect with industry experts,
            secure funding, and release your music to the world.&quot;
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8">
            <Button className="h-[46px] w-full sm:w-[140px] rounded-[20px] bg-[#312F4A] hover:bg-[#312F4A]/90 text-white border border-[#454268] text-sm">
              Get started
            </Button>
            <Button className="h-[46px] w-full sm:w-[140px] rounded-[20px] bg-[#C4A2FF] hover:bg-[#C4A2FF]/90 text-[#23213A] text-sm">
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageHero;
