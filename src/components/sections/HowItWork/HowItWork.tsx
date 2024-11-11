import GetStarted from '../GetStarted/GetStarted';

function HowItWork() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Image Container */}
          <div className="w-full lg:w-1/2 max-w-lg mx-auto lg:mx-0">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src="/images/cultural vestival.jpeg"
                  alt="Cultural Festival"
                  className="w-full h-full object-cover object-center transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              How does it work?
            </h1>

            <p className="text-base sm:text-lg text-white max-w-prose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              repellat ipsa ipsum adipisci, lorem ipsum dolor sit amet
              consectetur adipisicing elit. Veritatis repellat ipsa ipsum
              adipisci.
            </p>

            <div className="mt-2 sm:mt-4">
              <GetStarted />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWork;
