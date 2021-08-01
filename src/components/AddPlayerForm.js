/**
 * CREATION DATE: 19/07/2021
 * UPDATE DATE: 20/07/2021
 */

import React, { useState } from 'react';

const AddPlayerForm = ({ addPlayer }) => {

    const [ userInput, setUserInput ] = useState("");

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput && !/^\s*$/.test(userInput))
        {
            addPlayer(userInput);
            setUserInput("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter username..."/>&nbsp;
            <button>Add Player</button>
        </form>
    );
};

export default AddPlayerForm;