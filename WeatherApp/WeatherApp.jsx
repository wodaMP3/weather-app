import { useState } from "react";
import Form from "../src/components/Form/Form";
import fetchWeatherData from "../src/services/WeatherService";
import WeatherByLocation from "../src/services/WeatherByLocation";
import List from "../src/components/List/List";

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);
    const handleFormSumbit = async (city) => {
        try {
            const data = await fetchWeatherData(city);
            setWeatherData(data);
        } catch (error) {
            console.error(`Failed to fetch weatherData`, error)
        }
    };
    const handleFormSumbitLocation = async (location) => {
        try {
            const data = await WeatherByLocation(location);
                setWeatherData(data);
        } catch (error) {
            console.error(`Failed to get your location:`, error)
        }
    };

    return (
        <div>
            <Form onSubmit={handleFormSumbit}/>
            <List onSubmit={handleFormSumbitLocation} 
                  weatherData={weatherData}
            />
        </div>
    )
}
export default WeatherApp;