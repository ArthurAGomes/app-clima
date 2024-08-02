// Weatherinfo.js
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
                <p className='temp'>Temperatura Atual: {Math.round(weather.main.temp)}°C</p>
                <p className='temp-max'>Temperatura Máxima: {Math.round(weather.main.temp_max)}°C</p>
                <p className='temp-min'>Temperatura Mínima: {Math.round(weather.main.temp_min)}°C</p>
                <p className='descricption'>{weather.weather[0].description}</p>
            </div>
            <div className='details'>
                <div>
                    <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
                </div>
                <div>
                    <p>Umidade: {weather.main.humidity}%</p>
                </div>
                <div>
                    <p>Pressão: {weather.main.pressure} hPa</p>
                </div>
            </div>
        </div>
    );
}

export default Weatherinfo;
