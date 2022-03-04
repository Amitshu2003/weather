import React from "react";

const Weathercard = ({
  temp,
  humidity,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset,
}) => {

  // converting the seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <div className="flex flex-col bg-white font-medium p-6  justify-center items-center w-[50%] h-[50%] mx-auto mt-6 rounded-xl">
      <div className="flex flex-row justify-center items-center p-1 sm:p-3 w-[100%]">
        <div className="text-2xl sm:text-4xl text-slate-700 font-bold">{temp}&deg;C</div>
        <div className="p-4 text-xl text-slate-700">
          <div>{weathermood}</div>
          <div>
            {name}, {country}
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap sm:flex-nowrap space-y-2 sm:space-y-0 justify-between items-center w-[100%] text-slate-600">
        <div className="text-xs sm:text-base">
          {timeStr} PM <br />
          Sunset
        </div>

        <div className="text-xs sm:text-base">
          {humidity} <br />
          Humidity
        </div>

        <div className="text-xs sm:text-base">
          {pressure} <br />
          Pressure
        </div>

        <div className="text-xs sm:text-base">
          {speed} <br />
          Speed
        </div>
      </div>
    </div>
  );
};

export default Weathercard;
