interface Props {
  percentageDiscount: number;
  month: string;
  className?: string;
}

const AnnouncementAlert = ({ percentageDiscount, month, className }: Props) => {
  return (
    <div
      className={` fixed z-30 top-0 right-0 text-sm bg-indigo-500 text-white  text-center w-full h-6 sm:text-base ${className}`}
    >
      Get {percentageDiscount}% off this{' '}
      <span className="capitalize">{month}</span> if you are a{' '}
      <span className="font-bold">blue</span> subscribe{' '}
    </div>
  );
};

export default AnnouncementAlert;
