// src/components/WeatherCard/WeatherCard.js
import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const { city, temperature, description, icon } = weatherData;

  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <div className="weather-info">
        <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt={description} />
        <p>{description}</p>
        <p>{temperature}°C</p>
      </div>
    </div>
  );
};

export default WeatherCard;