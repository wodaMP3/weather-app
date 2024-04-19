import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const fetchWeatherData = async (city) => {
    try {
        const response = await axios.get(API_BASE_URL, {
            params: {
                q: city,
                appid: apiKey,
                units: 'metric'
            }
        });

        return response.data;
    } catch (error) {
        console.error("failed to fetch data", error);
        return null;
    }
};


export default fetchWeatherData;
