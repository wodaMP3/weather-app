import { useState } from "react";


const Input = () => {
    return (
        <div className="ui fluid search selection dropdown">
            <input type="hidden" name="country" />
                <i className="dropdown icon"></i>
            <div className="default text">Select Country</div>
        </div>
    );
};

export default Input;