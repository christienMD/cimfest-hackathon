import GetStarted from '../GetStarted/GetStarted';

function HowItWork() {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="w-full md:w-2/5 max-w-sm mx-auto">
          <div className="rounded-lg overflow-hidden shadow-xl aspect-w-4 aspect-h-3">
            <img
              src="/images/cultural vestival.jpeg"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        <div className="w-full md:w-3/5 space-y-4 md:space-y-6 mt-6 md:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            How does it work?
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            repellat ipsa ipsum adipisci, lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis repellat ipsa ipsum adipisci.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <GetStarted />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWork;
