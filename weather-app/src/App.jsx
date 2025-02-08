import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState(null)
  const [apiKey, setKey] = useState('5a5b9db67354136d5ab2c73981bb2ded')
  const [forecast, setForecast] = useState(null)
  const fetchWeather = async () => {

    if (!city) {
      setError('please enter city name')
      return;
    }
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      if (!response.ok) {
        throw new Error('cityyyyyyy not found')
      }
      const data = await response.json();
      setWeather(data)
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
      );

      if (!forecastResponse.ok) {
        throw new Error("Forecast data not available.");
      }
      const forecastData = await forecastResponse.json();
      setForecast(forecastData);
      console.log(forecastData)
      console.log(data)
    }
    catch (error) {
      console.log(error.message)
      setWeather(null);
      setForecast(null);
    }
  }

  return (
    <div>
      <div>
        <div>
          <h1>Weather App</h1>
        </div>
        <div>
          <input type="text"
            placeholder='Enter City Name'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={fetchWeather}>Enter</button>
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <div>
          {forecast && (
            <div className="mt-6 p-4 bg-white rounded shadow-md w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">5-Day Forecast</h2>
              <ul>
                {forecast.list.map((entry, index) => (
                  <li key={index} className="mb-2 border-b pb-2">
                    <p><strong>Date:</strong> {new Date(entry.dt * 1000).toLocaleDateString()}</p>
                    <p>Temperature: {entry.main.temp}°C</p>
                    <p>Weather: {entry.weather[0].description}</p>
                    <p>Humidity: {entry.main.humidity}%</p>
                    <p>Wind Speed: {entry.wind.speed} m/s</p>

                  </li>
                ))}
              </ul>

            </div>
          )}
        </div>
        <div>
          
        </div>


      </div>

    </div>
  )
}

export default App
