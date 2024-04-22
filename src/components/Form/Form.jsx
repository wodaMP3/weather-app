import { useState } from "react";
import axios from "axios";
import './Form.css';


const cityApiKey = import.meta.env.VITE_CITY_API_KEY;
const API_BASE_CITY_URL = 'https://api.api-ninjas.com/v1/city?name=';

const Form = ({ onSubmit }) => {
    const [city, setCity] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleCityChange = async (e) => {
        const value = e.target.value;
        setCity(value);

        if (value.trim() === ''){
            setSuggestions([]);
            return;
        }

        try {
            const response = await axios.get(`${API_BASE_CITY_URL}${cityApiKey}`, {
                params: {
                    name: value,
                },
                headers: {'X-Api-Key': cityApiKey}
            });
            console.log(response);
            const cities = response.data.map(city => city.name);
            setSuggestions(cities);
        } catch (error) {
            console.error('Failed to fetch city data:', error);
            setSuggestions([]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(city);
    };

    const [value, setValue] = useState('');

    const filteredCities = value ? suggestions.filter(city => {
        return city.toLowerCase().includes(value.toLowerCase());
    }) : suggestions;

    console.log(filteredCities)

    const itemClickHandler = (cityName) => {
        setValue(cityName)
    }

    return (
        <form className="form" onSubmit={handleSubmit}>    
            <input
                className="input"
                type="text"
                value={city}
                placeholder="Enter the city name"
                onChange={handleCityChange}
            />
            <ul className="autocomplete">
                {filteredCities.map((cityName, index) => (
                    <li 
                        className="autocomplete__item"
                        key={index}
                        onClick={() => itemClickHandler(city)}
                    >
                        {cityName}
                    </li>
                ))}
            </ul>
            <button className="buttonSearch">Get weather</button>
        </form>
    );
};

export default Form;
