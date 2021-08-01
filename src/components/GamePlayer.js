/**
 * CREATION DATE: 25/07/2021
 * UPDATE DATE: 30/07/2021
 */

import React from "react";

const GamePlayer = ({player, players, addBet, removeBet, setBet, isAcceptAsDealer}) => {

	const results = [
		"", "1-2-3", "Pisser", "Bust", "1",
		"2", "3", "4", "5",
		"6", "4-5-6", "Triple 2", "Triple 3",
		"Triple 4", "Triple 5", "Triple 6", "Snake eyes (Triple 1)" 
	];

    return (
	    <div className={(player.cash > 0) ? "player" : "player-lost"}>
            <p>{player.username}</p>
            <p>{player.isDealer && `Dealer`}</p>
            <p>{(player.rank !== 0) && `Roll: ${results[player.rank]}`}</p>
            {isAcceptAsDealer && !player.isDealer && !player.hasBet && player.cash > 0 &&
            <div>
                <div className="betButtons">
                    {(player.bet > 100) && (<button onClick={() => removeBet(player.id, (player.bet - 100))}>Min Bet</button>)}
                    <div className="divider"/>
                    {(player.bet - 100 > 0) && <button onClick={() => removeBet(player.id, 100)}>-100</button>}
                    <div className="divider"/>
                    {(player.bet - 1000 > 0) && <button onClick={() => removeBet(player.id, 1000)}>-1000</button>}
                    <div className="divider"/>
                    {(player.bet - 10000 > 0) && <button onClick={() => removeBet(player.id, 10000)}>-10000</button>}
                    <div className="divider"/>
                    {(player.bet - 100000 > 0) && <button onClick={() => removeBet(player.id, 100000)}>-100000</button>}
                    <div className="divider"/>
                    {/* It is possible that the cash earnt more than 1 million, it is not necessary to 
                        add more buttons exponentially (10 to the power of 7 or greater). */}
                    {(player.bet - 1000000 > 0) && <button onClick={() => removeBet(player.id, 1000000)}>-1000000</button>}
                </div>
                <br />
                <span>&nbsp;How high will you bet: {player.bet}&nbsp;</span><br /><br />
                <div className="betButtons">
                    {(player.cash - player.bet > 99) && <button onClick={() => addBet(player.id, 100)}>+100</button>}
                    <div className="divider"/>
                    {(player.cash - player.bet > 999) && <button onClick={() => addBet(player.id, 1000)}>+1000</button>}
                    <div className="divider"/>
                    {(player.cash - player.bet > 9999) && <button onClick={() => addBet(player.id, 10000)}>+10000</button>}
                    <div className="divider"/>
                    {(player.cash - player.bet > 99999) && <button onClick={() => addBet(player.id, 100000)}>+100000</button>}
                    <div className="divider"/>
                    {(player.cash - player.bet > 999999) && <button onClick={() => addBet(player.id, 1000000)}>+100000</button>}
                    <div className="divider"/>
                    {(player.bet < player.cash) && <button onClick={() => addBet(player.id, (player.cash - player.bet))}>All In</button>}
                </div>
                <br /><br />
                <button onClick={() => setBet(player.id)}>Set Bet</button>
            </div>}
            {player.hasBet && <p>Bet: {player.bet}</p>}
            <p>Cash: {player.cash}</p>
        </div>
    );
}

export default GamePlayer;