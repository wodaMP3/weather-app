import React, { useState } from "react";

const Form = () => {
    const [city, setCity] = useState('');

    return (
        <form>
            <label>Enter the city:
                <input type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}/>
            </label>
            <button className="button">sellect</button>
        </form>
    );
}

export default Form;