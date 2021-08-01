/**
 * CREATION DATE: 19/07/2021
 * UPDATE DATE: 30/07/2021
 */

import React, {Fragment} from "react";
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

const Player = ({player, players, deletePlayer, updatePlayer}) => {

    return (
	    <div className="player">
            <p>
                {player.username}&nbsp;
                <Fragment>
                    <TiEdit 
                        onClick={() => updatePlayer(player.id)} 
                        className="edit-icon"
                        size="1.5em"
                    />&nbsp;
                    {players.length > 2 && <RiCloseCircleLine 
                        onClick={() => deletePlayer(player.id)} 
                        className="delete-icon"
                        size="1.5em"
                        color="red"
                    />}
                </Fragment>
            </p>
        </div>
    );
}

export default Player;