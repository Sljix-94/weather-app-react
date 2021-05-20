import React, { useState, useEffect, useCallback } from "react";
import classes from "./App.module.css";
import Weather from "./Component/Weather/Weather.js";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const key = "95662109ff51268dddd80880a65ffd09";
      const url = `http://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${key}&units=metric`;

      const response = await fetch(url);

      const data = await response.json();
      console.log(data);
      setWeatherInfo({
        name: data.name,
        temp: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      });
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  let content;
  if (loading) content = <p>Loading...</p>;
  if (weatherInfo) content = <Weather weatherInfo={weatherInfo} />;
  if (error) content = <p>{error}</p>;

  return <main className={classes.container}>{content}</main>;
}

export default App;
