import {useEffect, useState} from 'react';
import axios from 'axios';

function WeatherPage() {
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {async function fetchWeatherData() {
        try {
            const response = await axios.get('https://localhost:7001/WeatherForecast');
            setWeatherData(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }    }
        fetchWeatherData();
    }, []);
    
    if (loading) {
        return <div>Loading...</div>;
    }    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div>
            <h1>Weather Data</h1>
            <ul>
                {weatherData.map((item, index) => (
                    <li key={item.date}>
                        {item.date} : {item.temperatureC}°C, {item.summary}</li>
                ))}
            </ul>
        </div>
    );
}
export default WeatherPage;