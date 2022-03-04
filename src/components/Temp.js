import React, { useState, useEffect } from "react";
import Weathercard from "./WeatherCard";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("Delhi");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  function handleChange(e){
    setSearchValue(e.target.value);
  }

  return (
    <>
      <div className="mt-10  w-fit mx-auto bg-black text-white  px-3 py-1 rounded-lg">
        <label for="city" className="text-xl">Choose a City :</label>

        <select id="city" onChange={handleChange} className="ml-2 px-6  py-2 font-medium bg-white text-black space-y-2  ">
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="London">London</option>
          <option value="New York">New York</option>
        </select>
        <button type="button" onClick={getWeatherInfo} className="px-3 py-2 bg-blue-700  font-semibold">
          Search
        </button>
      </div>

      <Weathercard {...tempInfo} />
    </>
  );
};

export default Temp;
