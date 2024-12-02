// src/App.js
import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard/WeatherCard';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Exemple de ville, vous pouvez le changer ou le rendre dynamique
   // const city = 'Al Hoceima';

    // Remplacez par votre clé d'API OpenWeatherMap
    const apiKey = '86402a792c7d787509db8adf1c71c320';

    // Appel à l'API OpenWeatherMap
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        const { name, main, weather } = data;
        setWeatherData({
          city: name,
          temperature: main.temp,
          description: weather[0].description,
          icon: weather[0].icon,
        });
      });
  }, []);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <WeatherCard weatherData={weatherData} />
    </div>
  );
};

export default App;
