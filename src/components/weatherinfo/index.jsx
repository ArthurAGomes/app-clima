import React from 'react';
import {
    WiDaySunny, WiNightClear, WiDayCloudy, WiNightCloudy, WiCloud, WiCloudy,
    WiRain, WiDayRain, WiNightRain, WiThunderstorm, WiSnow, WiDayFog, WiNightFog,
    WiStrongWind, WiSunset, WiRaindrop
} from 'react-icons/wi';
import { FaWind } from "react-icons/fa";

import "./tempoatual.css";

function Weatherinfo({ weather }) {
    if (!weather || !weather.weather || !weather.weather[0]) {
        return <div>Loading...</div>;
    }

    const getWeatherIcon = (iconCode) => {
        switch (iconCode) {
            case '01d':
                return <WiDaySunny size={64} />;
            case '01n':
                return <WiNightClear size={64} />;
            case '02d':
                return <WiDayCloudy size={64} />;
            case '02n':
                return <WiNightCloudy size={64} />;
            case '03d':
            case '03n':
                return <WiCloud size={64} />;
            case '04d':
            case '04n':
                return <WiCloudy size={64} />;
            case '09d':
            case '09n':
                return <WiRain size={64} />;
            case '10d':
                return <WiDayRain size={64} />;
            case '10n':
                return <WiNightRain size={64} />;
            case '11d':
            case '11n':
                return <WiThunderstorm size={64} />;
            case '13d':
            case '13n':
                return <WiSnow size={64} />;
            case '50d':
                return <WiDayFog size={64} />;
            case '50n':
                return <WiNightFog size={64} />;
            default:
                return <WiDaySunny size={64} />;
        }
    };

    const getSunsetTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className='containerweather'>
            <h2>{weather.name}, {weather.sys.country}</h2>
            <div className='weather-info'>
                {getWeatherIcon(weather.weather[0].icon)}
                <p className='temp'>{Math.round(weather.main.temp)}°C</p>
                <p className='descricption'>{weather.weather[0].description}</p>
                <span className='maxMin'>
                    <p>Max: {Math.round(weather.main.temp_max)}°</p>
                    <p>Min: {Math.round(weather.main.temp_min)}°</p>
                </span>
            </div>
            <section className='detalhes'>
                <h4>Detalhes</h4>
                <div className='minCards'>
                    <div className='minCard'>
                        <div className='icone'>
                            <WiStrongWind size={30} />
                        </div>
                        <span><p className='min-title'>Vento</p><p className="results">{weather.wind.speed}m/s</p></span>
                    </div>
                    <div className='minCard'>
                        <div className='icone'>
                            <WiRaindrop size={32} />
                        </div>
                        <span><p className='min-title'>Umidade</p><p className="results">{weather.main.humidity}%</p></span>
                    </div>
                    <div className='minCard'>
                        <div className='icone'>
                            <WiSunset size={32} />
                        </div>
                        <span><p className='min-title'>Pôr do sol</p><p className="results">{getSunsetTime(weather.sys.sunset)}</p></span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Weatherinfo;
