/**
 * CREATION DATE: 25/07/2021
 * UPDATE DATE: 25/07/2021
 */

import React from "react";
import GamePlayer from "./GamePlayer";

const GamePlayerList = ({players, addBet, removeBet, setBet, isAcceptAsDealer}) => {
    return (
	    <div className="playerList">
            {players.map((player,idx) => {
                return (
                    <GamePlayer player={player} players={players} addBet={addBet} removeBet={removeBet} 
                    setBet={setBet} isAcceptAsDealer={isAcceptAsDealer} key={player.id} />
                );
            })}
        </div>
    );
}

export default GamePlayerList;