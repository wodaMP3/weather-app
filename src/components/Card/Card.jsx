import React from "react";

const Card = () => {

    const { date, temp, description, name } = '';
    return (
        <div className="weatherCard">
            <h3>The weather in{name}</h3>
            <h2>{date}</h2>
            <p>{temp}</p>
            <p>{description}</p>
        </div>
    );
}

export default Card;