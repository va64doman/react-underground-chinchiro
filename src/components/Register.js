/**
 * CREATION DATE: 18/07/2021
 * UPDATE DATE: 31/07/2021
 */

import React from "react";
import PlayerList from "./PlayerList";
import AddPlayerForm from "./AddPlayerForm";

import "./register.css";

const Header = ({players, cash, setPlayers}) => {

    const addPlayer = (userInput) => 
    {
        var index = players.findIndex(player => player.username === userInput);
        if(index === -1)
        {
            // Avoid duplicate id
            setTimeout(() => {}, 2000);
            let copy = [...players];
            copy = [...copy, { id: Date.now(), username: userInput, bet: 100, hasBet: false, rank: 0, isDealer: false, cash: cash}];
            setPlayers(copy);
            console.log(copy);
        }
        else
            window.alert(`${userInput} is already exists.`);
    }

    const deletePlayer = (id) => 
    {
        var index = players.findIndex(player => player.id === id);
        const isDelete = window.confirm(`Are you sure you want to delete ${players[index].username}?`)
        if(isDelete)
        {
            const remainPlayers = players.filter((player) => { return player.id !== id; });
            setPlayers(remainPlayers);
        }
    }

    const updatePlayer = (id) => 
    {
        let copy = [...players];
        var index = players.findIndex(player => player.id === id);
        const userInput = window.prompt(`Change ${copy[index].username} to`, copy[index].username);
        if(userInput && !/^\s*$/.test(userInput))
        {
            var nameIdx = players.findIndex(player => player.username === userInput);
            if(nameIdx === -1)
            {
                copy[index] = { id: id, username: userInput, bet: 100, hasBet: false, rank: 0, 
                    isDealer: false, cash: cash};
                setPlayers(copy);
            }
            else
                window.alert(`${userInput} is already exists.`);
        }
    }

    return (
	    <div className="header">
            <PlayerList players={players} deletePlayer={deletePlayer} updatePlayer={updatePlayer} /><br />
            <div className="form-container">
                {(players.length < 12) && <AddPlayerForm addPlayer={addPlayer} />}
            </div>
        </div>
    );
}

export default Header;