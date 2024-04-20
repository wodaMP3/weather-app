import { useState } from "react";
import './Form.css';

const Form = ({ onSubmit }) => {
    const [city, setCity] = useState('');

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(city);
    };

    return (
        <form className="form"
            onSubmit={handleSubmit}>
            <input className="input"
                type="text" 
                placeholder="Enter the city name"
                value={city}    
                onChange={handleCityChange}
            />
            <button className="buttonSearch">get weather</button>
        </form>
    );
};

export default Form;