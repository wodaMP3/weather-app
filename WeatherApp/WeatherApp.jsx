import { useEffect, useState } from "react";
import Form from "../src/components/Form/Form";
import fetchWeatherData from "../src/services/WeatherService";
import WeatherByLocation from "../src/services/WeatherByLocation";
import List from "../src/components/List/List";

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    WeatherByLocation(latitude, longitude)
                        .then((data) => {
                            setWeatherData(data);
                        })
                        .catch((error) => {
                            console.error('Failed to load weather data by location:', error);
                        });
                },
                (error) => {
                    console.error('Failed to get geolocation:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);
    console.log(weatherData)
    
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