import { Button } from '@/components/ui/button';

function Invest() {
  return (
    <div className=" bg-purple-600 p-8 text-center text-white md:p-12">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold md:text-4xl">Looking to invest</h2>

        <p className="mx-auto text-base md:text-lg">
          Investors may acquire a stake in the artist's business, sharing in
          future profits and losses.
        </p>

        <div className="pt-2">
          <Button className="rounded-full bg-purple-300 px-6 py-2 text-base font-medium text-purple-900 hover:bg-purple-200">
            Click to Invest
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Invest;
