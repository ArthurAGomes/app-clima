// App.js
import { useState, useRef } from 'react';
import axios from "axios";
import './App.css';
import Weatherhistorydays from './components/weatherhistorydays';
import Weatherinfo from './components/weatherinfo';

function App() {
  const [weather, setWeather] = useState();
  const [weather5days, setWeather5days] = useState();

  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "94753d611e61a7b1aaadf87ad8a8b030";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
      const apiInfo5days = await axios.get(url5days);
      setWeather5days(apiInfo5days.data);
      console.log(apiInfo5days.data);
    } catch (error) {
      console.error("Erro ao buscar a previsão do tempo:", error);
    }
  }

  return (
    <div className='container'>
      <h1>Previsão do tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite a sua cidade' />
      <button onClick={searchCity}>Buscar</button>
      {weather && <Weatherinfo weather={weather} />}
      {weather5days && <Weatherhistorydays weather5days={weather5days} />}
    </div>
  );
}

export default App;
