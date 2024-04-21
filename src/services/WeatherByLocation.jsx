import { useEffect, useState } from "react"
import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';


const WeatherByLocation = () => {

    const [location, setLocation] = useState(null);
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (location) {
            axios.get(API_BASE_URL, {
                params: {
                    lat: location.latitude,
                    lon: location.longitude,
                    appid: apiKey,
                    units: 'metric'
                }
            })
            .then(response => {
                setWeather(response.data);
            })
            .catch(error => {
                console.error('Failed to get weather data:', error);
            });
        }
    }, [location]);

    
}

export default WeatherByLocation;