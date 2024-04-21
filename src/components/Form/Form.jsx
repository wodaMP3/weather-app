import { useState } from "react";
import './Form.css';


const Form = ({ onSubmit, ...props }) => {
    const [city, setCity] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const options = ['apple'];

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
            <input
                className="input"
                type="text"
                value={city}
                placeholder="Enter the city name"
        onChange={handleCityChange}/>
        <ul className="autocomplete">
            <li className="autocomplete__item">sdd</li>
            <li className="autocomplete__item">asd</li>
            <li className="autocomplete__item">asd</li>
            <li className="autocomplete__item">asd</li>
            <li className="autocomplete__item">asd</li>
            <li className="autocomplete__item">asd</li>
            <li className="autocomplete__item">asd</li>
            <li className="autocomplete__item">asd</li>
            <li className="autocomplete__item">ad</li>
            <li className="autocomplete__item">asd</li>
        </ul>
       
            <button className="buttonSearch">get weather</button>
        </form>
    );
};

export default Form;