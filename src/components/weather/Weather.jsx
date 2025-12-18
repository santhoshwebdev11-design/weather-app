import { useEffect, useState } from "react";
import Serach from "../search/Serach";
import { FadeLoader } from "react-spinners";

const Weather = () => {
  const [serach, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (param) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=0da5533cd4fc749400a65e654d7327b5&units=metric`
      );

      const data = await response.json();
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleSearch = () => {
    fetchWeatherData(serach);
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
  useEffect(() => {
    fetchWeatherData("Davanagere");
  }, [serach]);
  console.log(weatherData);

  return (
    <div>
      <Serach
        serach={serach}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {loading ? (
        <div className="text-center flex justify-center items-center h-full">
          <FadeLoader color="blue" />
        </div>
      ) : (
        <div>
          <div className="city mb-2.5 font-bold text-4xl">
            <h2>
              {weatherData?.name},<span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date font-bold text-sm italic mb-10">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp text-3xl text-center font-bold mt-2">
            {weatherData?.main?.temp} °C
          </div>

          <p className="description text-xl font-bold mt-0 mb-5 italic">
            {weatherData &&
              weatherData.weather &&
              weatherData.weather[0].description}
          </p>

          <div className="wether-info flex justify-evenly items-center mt-20 px-0 py-5 text-2xl font-medium text-center">
            <div>
              <div>
                <p>{weatherData?.wind?.speed} m/s</p>
                <p>wind speed</p>
              </div>
            </div>
            <div>
              <div>
                <p className="">{weatherData?.main?.humidity} (%)</p>
                <p>humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
