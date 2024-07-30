import React from 'react';
import "./tempoatual.css"


function Weatherinfo({ weather }) {
    if (!weather || !weather.weather || !weather.weather[0]) {
        return <div>Loading...</div>;
    }

    const iconCode = weather.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;


    return (
        <div className='containerweather'>
            <h2>{weather.name}</h2>
            <div className='weather-info'>
                <img src={iconUrl} alt="Weather icon"/>
                <p className='temp'>{Math.round(weather.main.temp)}°C</p>
            </div>
            <p className='descricption'>{weather.weather[0].description}</p>
            <div className='details'>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure}</p>
            </div>
        </div>
    );
}

export default Weatherinfo;
