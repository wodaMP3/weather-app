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
            const cityName = response.data.map(city => city.name);
            setSuggestions([cityName]);
        } catch (error) {
            console.error('Failed to fetch city data:', error);
            setSuggestions([]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(city);
    };

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
                {suggestions.map((city, index) => (
                    <li className='autocomplete__item' key={index}>{city}</li>
                ))}
            </ul>
            <button className="buttonSearch">Get weather</button>
        </form>
    );
};

export default Form;
