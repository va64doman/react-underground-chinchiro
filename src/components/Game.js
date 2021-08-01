/**
 * CREATION DATE: 21/07/2021
 * UPDATE DATE: 30/07/2021
 */

import Dice from './Dice';
import GamePlayerList from './GamePlayerList';
import React, {useState} from "react";

function Game({players, cash, setPlayers, setIsPlaying}) {

	const [isAcceptAsDealer, setIsAcceptAsDealer] = useState(false);
	const [noOfBets, setNoOfBets] = useState(players.length - 1);
	const [isAllBet, setIsAllBet] = useState(false);
	const [dealerIdx, setDealerIdx] = useState(players.length - 1);
	const [playerIdx, setPlayerIdx] = useState(players.length - 1);
	const [noPlayers, setNoPlayers] = useState(players.length);
	const [dealerTurn, setDealerTurn] = useState(2);

	const acceptDealer = () => 
	{
		let copy = [...players];
		copy[dealerIdx].isDealer = true;
		for(let i = 0; i < copy.length; i++)
		{
			if(!copy[i].isDealer)
				copy[i].bet = 100;
		}
		setPlayers(copy);
		setIsAcceptAsDealer(true);
		setDealerTurn(dealerTurn);
	}

	const passDealer = () => 
	{
		let copy = [...players];
		let index = dealerIdx;
		index--;
		if(index < 0)
			index = players.length - 1;
		for(let i = 0; i < copy.length; i++)
		{
			copy[i].isDealer = false;
		}
		// Pass on to the next player who is not bankrupt.
		while(copy[index].cash < 1)
		{
			index--;
			if(index < 0)
				index = players.length - 1;
		}
		setPlayers(copy);
		setDealerIdx(index);
		setIsAcceptAsDealer(false);
		setDealerTurn(2);
	}

	const addBet = (id, betVal) => 
	{
		let copy = [...players];
        var index = players.findIndex(player => player.id === id);
		var newBet = copy[index].bet + betVal;
		if(newBet < copy[index].cash + 1)
		{
			copy[index] = { id: id, username: copy[index].username, bet: newBet, hasBet: false, rank: 0, isDealer: false, cash: copy[index].cash};
			setPlayers(copy);
		}
	}

	const removeBet = (id, betVal) => 
	{
		let copy = [...players];
        var index = players.findIndex(player => player.id === id);
		var newBet = copy[index].bet - betVal;
		if(newBet > 99)
		{
			copy[index] = { id: id, username: copy[index].username, bet: newBet, hasBet: false, rank: 0, isDealer: false, cash: copy[index].cash};
			setPlayers(copy);
		}
	}

	const setBet = (id) =>
	{
		var index = players.findIndex(player => player.id === id);
		let copy = [...players];
		var choice = window.confirm(`Are you sure you want to bet ${copy[index].bet}, ${copy[index].username}?`);
		if(choice)
		{
			var curNoOfBets = noOfBets - 1;
			copy[index] = { id: id, username: copy[index].username, bet: copy[index].bet, 
				hasBet: true, rank: 0, isDealer: false, cash: copy[index].cash};
			setPlayers(copy);
			if(curNoOfBets === 0)
			{
				setIsAllBet(true);
				setPlayerIdx(dealerIdx);
			}
			setNoOfBets(curNoOfBets);
		}
	}

	const quit = () =>
	{
		let copy = [...players];
		for(let i = 0; i < copy.length; i++)
		{
			copy[i].bet = 100;
        	copy[i].hasBet = false;
        	copy[i].rank = 0;
        	copy[i].isDealer = false;
        	copy[i].cash = cash;
		}
		setPlayers(copy);
		setIsPlaying(false);
	}

	return (
		<div className="Game">
			<button onClick={quit}>Quit</button><br />
			<GamePlayerList players={players} addBet={addBet} removeBet={removeBet} setBet={setBet}
			isAcceptAsDealer={isAcceptAsDealer}/>
			{noPlayers > 1 && <p>Number of dealer's turn: {dealerTurn}</p>}
			{!isAcceptAsDealer && noOfBets > 0 &&
			<div>
				<p>Do {players[dealerIdx].username} want to be a dealer?</p>
				<button onClick={acceptDealer}>Deal</button>&nbsp;
				<button onClick={passDealer}>Pass</button>
			</div>}
			{isAcceptAsDealer && isAllBet && noPlayers > 1 &&
			<Dice players={players} setPlayers={setPlayers} playerIdx={playerIdx}
			setPlayerIdx={setPlayerIdx} setIsAcceptAsDealer={setIsAcceptAsDealer} setIsAllBet={setIsAllBet}
			dealerTurn={dealerTurn} setDealerTurn={setDealerTurn} setNoOfBets={setNoOfBets} 
			setDealerIdx={setDealerIdx} setNoPlayers={setNoPlayers} />}
			{noPlayers < 2 && <p style={{ 'fontWeight': 'bold' }}>Winner: {players[dealerIdx].username}</p>}
		</div>
	);
}

export default Game;