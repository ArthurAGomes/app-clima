import React from "react";
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

    return (
        <div className="weather-container">
            {nextFiveDays.map((forecast, index) => {
                const date = new Date(forecast.dt * 1000).toLocaleDateString();
                const iconUrl = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;

                return (
                    <div key={index} className="weather-day">
                        <h3>{date}</h3>
                        <img src={iconUrl} alt="Weather icon" />
                        <p>Temperatura: {Math.round(forecast.main.temp)}°C</p>
                        <p>Descrição: {forecast.weather[0].description}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Weatherhistorydays;
