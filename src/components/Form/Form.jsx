import { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Enter the city name"
                value={city}    
                onChange={handleCityChange}
            />
            <button className="button">get weather</button>
        </form>
    );
};

export default Form;