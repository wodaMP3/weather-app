import { useState } from "react";
import Form from "../src/components/Form/Form";
import fetchWeatherData from "../src/services/WeatherService";
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


    return (
        <div>
            <Form onSubmit={handleFormSumbit}/>
            <List weatherData={weatherData} />
        </div>
    )
}
export default WeatherApp;