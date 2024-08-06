import React from "react";
import {
    WiDaySunny, WiNightClear, WiDayCloudy, WiNightCloudy, WiCloud, WiCloudy,
    WiRain, WiDayRain, WiNightRain, WiThunderstorm, WiSnow, WiDayFog, WiNightFog
} from 'react-icons/wi';
import "./historico.css";

function Weatherhistorydays({ weather5days }) {
    console.log(weather5days);

    let dailyForecast = {};

    for (let forecast of weather5days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();

        // Se a data não está no objeto dailyForecast, adicionamos o forecast
        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast;
        }
    }

    // Pega os próximos cinco dias, excluindo a data de hoje
    const nextFiveDays = Object.values(dailyForecast).slice(1, 6);

    console.log(nextFiveDays);

    const getWeatherIcon = (iconCode) => {
        switch (iconCode) {
            case '01d':
                return <WiDaySunny size={32} />;
            case '01n':
                return <WiNightClear size={32} />;
            case '02d':
                return <WiDayCloudy size={32} />;
            case '02n':
                return <WiNightCloudy size={32} />;
            case '03d':
            case '03n':
                return <WiCloud size={32} />;
            case '04d':
            case '04n':
                return <WiCloudy size={32} />;
            case '09d':
            case '09n':
                return <WiRain size={32} />;
            case '10d':
                return <WiDayRain size={32} />;
            case '10n':
                return <WiNightRain size={32} />;
            case '11d':
            case '11n':
                return <WiThunderstorm size={32} />;
            case '13d':
            case '13n':
                return <WiSnow size={32} />;
            case '50d':
                return <WiDayFog size={32} />;
            case '50n':
                return <WiNightFog size={32} />;
            default:
                return <WiDaySunny size={32} />;
        }
    };

    const getDayOfWeek = (timestamp) => {
        const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
        const date = new Date(timestamp * 1000);
        return daysOfWeek[date.getDay()];
    };

    return (
        <div className="weather-container">
            {nextFiveDays.map((forecast, index) => {
                const dayOfWeek = getDayOfWeek(forecast.dt);

                return (
                    <div key={index} className="weather-day">
                        <span className="diasSemana">
                            {getWeatherIcon(forecast.weather[0].icon)}
                            <h3>{dayOfWeek}</h3>
                        </span>
                        <aside className="info-days">
                            <p>{Math.round(forecast.main.temp)}°C</p>
                            <p>{forecast.weather[0].description}</p>
                        </aside>
                    </div>
                );
            })}
        </div>
    );
}

export default Weatherhistorydays;
