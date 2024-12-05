import Spinner from "../Utils/Spinner";

const DailyCarousel = ({ date_epoch, day }) => {
  if (!date_epoch || !day) {
    return (
      <div className="w-28 h-36 rounded-md bg-white m-auto flex justify-center items-center ">
        <Spinner />
      </div>
    );
  }

  const date = new Date(date_epoch * 1000);
  const { maxtemp_c = "-", mintemp_c = "-", condition = "-" } = day;

  const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "short" });
  const iconUrl = `https:${condition.icon}`;

  return (
    <div className="w-28 h-36 flex flex-col justify-center rounded-lg m-auto text-center bg-white">
      <p className="text-xl font-semibold">{dayOfWeek}</p>
      <img src={iconUrl} alt={condition.text} className="w-20 mx-auto" />
      <div className="flex justify-center text-xl">
        <p>{Math.floor(maxtemp_c)}&deg;c</p>
        <p className="ml-4 text-slate-400">{Math.floor(mintemp_c)}&deg;c </p>
      </div>
    </div>
  );
};

export default DailyCarousel;
