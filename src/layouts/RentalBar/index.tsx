const RentalBar = () => {
  return (
    <div className="ct-container flex flex-row justify-between items-center gap-8 h-[86px] py-3 px-3 absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 rounded-2xl shadow-lg bg-white">
      <div className="basis-4/12 border-r">
        <h3 className="text-sm font-extrabold">LOCATION</h3>
        <p className="text-lg font-thin text-gray-400">Search your location</p>
      </div>
      <div className="basis-2/12 border-r">
        <h3 className="text-sm font-extrabold">PICKUP DATE</h3>
        <p className="text-lg font-thin">Tue 15 Feb, 09:00</p>
      </div>
      <div className="basis-2/12">
        <h3 className="text-sm font-extrabold">RETURN DATE</h3>
        <p className="text-lg font-thin">Thu 16 Feb, 11:00</p>
      </div>
      <div className="basis-2/12 w-full h-full text-right">
        <button className="px-[60px] h-full rounded-2xl bg-teal text-white">Search</button>
      </div>
    </div>
  );
};

export default RentalBar;
