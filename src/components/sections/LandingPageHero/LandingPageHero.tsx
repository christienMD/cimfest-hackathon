const LandingPageHero = () => {
  return (
    <section className="bg-afro-base-bg flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Gradient background effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[500px] h-[800px] mt-20"
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
          filter: 'blur(70px)',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          <h1
            className="heading text-white
          
          
          
          
          
          
          "
          >
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
            <button
              className="group relative h-[46px] w-full sm:w-[140px] text-base font-medium"
              style={{
                padding: '3px',
                background: 'linear-gradient(90deg, #411294 0%, #9C64FF 100%)',
                borderRadius: '20px',
              }}
            >
              <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-[#411294] to-[#9C64FF] opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-[#323052] to-[#411294] text-white rounded-[17px]">
                Get started
              </div>
            </button>

            <button className="h-[46px] w-full sm:w-[140px] rounded-[20px] bg-[#C4A2FF] hover:bg-[#C4A2FF]/90 text-[#23213A] text-base font-medium transition-colors">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageHero;
