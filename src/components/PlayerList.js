/**
 * CREATION DATE: 19/07/2021
 * UPDATE DATE: 25/07/2021
 */

import React from "react";
import Player from "./Player";

const PlayerList = ({players, deletePlayer, updatePlayer}) => {
    return (
	    <div className="playerList">
            {players.map((player, idx) => {
                return (
                        <Player player={player} deletePlayer={deletePlayer} updatePlayer={updatePlayer} 
                        players={players} key={player.id} />
                )
            })}
        </div>
    );
}

export default PlayerList;