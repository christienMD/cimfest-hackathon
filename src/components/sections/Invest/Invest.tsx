import { Button } from '@/components/ui/button';

function Invest() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-afro-base-bg p-4">
      <div className="max-w-md rounded-xl text-white bg-indigo-500 p-6 shadow-lg sm:p-8 md:p-10">
        <div className="space-y-6">
          <h2 className="text-center text-2xl font-bold tracking-tight  sm:text-3xl md:text-4xl">
            Looking to invest
          </h2>

          <p className="text-center text-sm text-white sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sit
            odio porro eius placeat beatae dolorem necessitatibus ab sunt
            ducimus?
          </p>

          <div className="flex justify-center">
            <Button className="w-full transform rounded-lg px-8 py-3 transition-all duration-200 hover:scale-105 sm:w-auto">
              Click to invest
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invest;
