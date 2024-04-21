import { useState } from "react";
import { Dropdown } from "semantic-ui-react";


const Input = () => {
    
    const [city, setCity] = useState('');
    const [value, setValue] = useState('');
    const [prevValue, setPrevValue] = useState('');

    const handleCityChange = (e, { value }) => {
        setCity(e.target.value);
        setPrevValue(value);
        setValue(value);
    };

    const handleBlur = () => {
        setValue(prevValue);
    }

    const options = [
        {key: 'london', text: 'London', value: 'london'}
    ];

    return (
        <Dropdown 
            placeholder="Choose the city"
            fluid
            options={options}
            value={value}
            onChange={handleCityChange}
            onBlur={handleBlur}
        />
    )
};

export default Input;