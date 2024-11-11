import UsersCards from '@/components/cards/UsersCards/UsersCards';

const OurUsers = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-afro-base-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center max-w-7xl mx-auto">
          <h1 className="heading text-white">Explore contents roles</h1>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            {/* For Artists Card */}
            <div className="flex justify-center">
              <UsersCards
                title="For Artists"
                link="/catalog"
                imageSrc="https://www.figma.com/file/Hw24rKXR9xcsS8NyturKwh/image/65c1f0e8f6ba599d0ab324c54ab6e218c59ed948"
              />
            </div>

            {/* For Coach Card */}
            <div className="flex justify-center">
              <UsersCards
                title="For Coach"
                link="/catalog"
                imageSrc="https://www.figma.com/file/Hw24rKXR9xcsS8NyturKwh/image/65c1f0e8f6ba599d0ab324c54ab6e218c59ed948"
              />
            </div>

            {/* For Investors Card - Centered on MD screens */}
            <div className="flex justify-center ">
              <UsersCards
                title="For Investors"
                link="/catalog"
                imageSrc="https://www.figma.com/file/Hw24rKXR9xcsS8NyturKwh/image/65c1f0e8f6ba599d0ab324c54ab6e218c59ed948"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurUsers;
