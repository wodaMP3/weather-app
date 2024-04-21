import { useEffect, useState } from "react"
import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';


const WeatherByLocation = () => {

    const [location, setLocation] = useState(null);
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                }
            ), 
            (error) => {
                console.error('Failed to get geolocation', error)
            }
        }
    }, [])
    useEffect(() => {
        if (location) {

          axios.get(API_BASE_URL)
            .then(response => {
              setWeather(response.data);
            })
            .catch(error => {
              console.error('Failed to get data info:', error);
            });
        }
      }, [location]);
    
}

export default WeatherByLocation;