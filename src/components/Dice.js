/**
 * CREATION DATE: 09/07/2021
 * UPDATE DATE: 31/07/2021
 */

import React, { useState } from "react";
import "./dice.css";
import {Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import ThrowBar from "./ThrowBar";

const Dice = (
	{players, playerIdx, dealerTurn, setPlayers, setPlayerIdx, setIsAcceptAsDealer, setIsAllBet, setDealerTurn,
	setNoOfBets, setDealerIdx, setNoPlayers}
) => {

	// Randomise dice rolls as a slideshow.
	const properties = {
		duration: 100,
		transitionDuration: 1,
		arrows: false,
		pauseOnHover: false,
		canSwipe: false,
		infinite: true,
		defaultIndex: Math.floor(Math.random() * 6),
	}

	// Rank from lowest to highest
	const results = [
		"", "1-2-3", "Pisser", "Bust", "1",
		"2", "3", "4", "5",
		"6", "4-5-6", "Triple 2", "Triple 3",
		"Triple 4", "Triple 5", "Triple 6", "Snake eyes (Triple 1)" 
	];

	const diceImages = [
		"assets/1.png",
		"assets/2.png",
		"assets/3.png",
		"assets/4.png",
		"assets/5.png",
		"assets/6.png"
	];
	
	const [throwVal, setThrowVal] = useState(0);
	const [finalThrow, setFinalThrow] = useState(0);
	const [die1, setDie1] = useState(1);
	const [die2, setDie2] = useState(3);
	const [die3, setDie3] = useState(4);
	const [idx, setIdx] = useState(0);
	const [noRoll, setNoRoll] = useState(3);
	const [isRoll, setIsRoll] = useState(false);

	var firstDieImage = `assets/${die1}.png`;
	var secondDieImage = `assets/${die2}.png`;
	var thirdDieImage = `assets/${die3}.png`;

	// Randomise throw bar.
	function growThrowBar()
	{
		var randVal = 0;
		randVal = Math.floor(Math.random() * 100 + 1);
		setThrowVal(randVal);
	}

	// Show a throw bar only when it is time to roll.
	function Throw()
	{
		var element = (<div></div>);
		if(!isRoll){
			window.setTimeout(growThrowBar, 1000);
			element = (<div id="throwbar">
				<ThrowBar bgcolor={(throwVal > 9 && throwVal < 91) ? "#00ff00" : "#ff0000"} throwVal={throwVal} />
			</div>);
		}
		return element;
	}

	// Randomise the dice
	function rollDice() 
	{
		var curRoll = noRoll - 1;
		setNoRoll(curRoll);
		setIsRoll(true);
		setDie1(Math.floor(Math.random() * 6) + 1);
		setDie2(Math.floor(Math.random() * 6) + 1);
		setDie3(Math.floor(Math.random() * 6) + 1);
		setFinalThrow(throwVal);
	}

	// Get the result from the dice.
	const FindRank = () =>
	{
		var index = 0;
		var curThrow = finalThrow;
		// If it is a good throw, then show dice result, otherwise, it is a pisser.
		if(curThrow > 9 && curThrow < 91)
		{
			// If any two dice are equal, then it is a 1 or above.
			if(die1 === die2)
			{
				// If the next die is the same, then it is a triple 2 or above.
				if(die1 === die3)
				{
					switch(die1)
					{
						case 6:
							index = 15;
						break;
						case 5:
							index = 14;
						break;
						case 4:
							index = 13;
						break;
						case 3:
							index = 12;
						break;
						case 2:
							index = 11;
						break;
						default:
							index = 16;
					}
				}
				// If the next die is different, then it is between 1 and 6.
				else
				{
					switch(die3)
					{
						case 6:
							index = 9;
						break;
						case 5:
							index = 8;
						break;
						case 4:
							index = 7;
						break;
						case 3:
							index = 6;
						break;
						case 2:
							index = 5;
						break;
						default:
							index = 4;
					}
				}
			}
			else if(die1 === die3)
			{
				if(die1 === die2)
				{
					switch(die1)
					{
						case 6:
							index = 15;
						break;
						case 5:
							index = 14;
						break;
						case 4:
							index = 13;
						break;
						case 3:
							index = 12;
						break;
						case 2:
							index = 11;
						break;
						default:
							index = 16;
					}
				}
				else
				{
					switch(die2)
					{
						case 6:
							index = 9;
						break;
						case 5:
							index = 8;
						break;
						case 4:
							index = 7;
						break;
						case 3:
							index = 6;
						break;
						case 2:
							index = 5;
						break;
						default:
							index = 4;
					}
				}
			}
			else if(die2 === die3)
			{
				if(die2 === die1)
				{
					switch(die2)
					{
						case 6:
							index = 15;
						break;
						case 5:
							index = 14;
						break;
						case 4:
							index = 13;
						break;
						case 3:
							index = 12;
						break;
						case 2:
							index = 11;
						break;
						default:
							index = 16;
					}
				}
				else
				{
					switch(die1)
					{
						case 6:
							index = 9;
						break;
						case 5:
							index = 8;
						break;
						case 4:
							index = 7;
						break;
						case 3:
							index = 6;
						break;
						case 2:
							index = 5;
						break;
						default:
							index = 4;
					}
				}
			}
			else
			{
				// The worst roll is 1-2-3
				if((die1 === 1 || die2 === 1 || die3 === 1) && (die1 === 2 || die2 === 2 || die3 === 2) &&
				(die1 + die2 + die3 === 6))
					index = 1;
				// The next best roll before triple is 4-5-6
				else if((die1 === 4 || die2 === 4 || die3 === 4) && (die1 + die2 + die3 === 15))
					index = 10;
				// It is a bust, otherwise.
				else
					index = 3;

			}
		}
		else
		{
			// If throw a pisser.
			index = 2;
		}

		if(idx === 0)
			setIdx(index);

		return (<div>
					<div style={(index === 2) ? {opacity: 0.5} : {}}>
						<img src={firstDieImage} className="die" alt="Die one" />&emsp;
						<img src={secondDieImage} className="die" alt="Die two" />&emsp;
						<img src={thirdDieImage} className="die" alt="Die three" />
					</div>
					<br/>
					<p>
						{(finalThrow < 10 || finalThrow > 90) ? `Bad throw ${finalThrow}%` : 
						`Good throw ${finalThrow}%`}
					</p>
					<p>{results[idx]}</p>
			</div>);
	}

	function nextRoll()
	{
		// If the dealer wins, all players must pay.
		function exchangeToDealer(copy, i, dealerIdx, multiplier)
		{
			var pay = copy[i].bet * multiplier;
			// If only a player does have 1-2-3.
			if(copy[i].rank === 1)
				pay *= 2;
			copy[i].cash -= pay;
			copy[dealerIdx].cash += pay;
		}
		// If player wins, the dealer must pay.
		function exchangeToPlayer(copy, highestPlayerIdx, dealerIdx, multiplier)
		{
			var pay = copy[highestPlayerIdx].bet * multiplier;
			if(copy[dealerIdx].rank === 1)
				pay *= 2;
			copy[dealerIdx].cash -= pay;
			copy[highestPlayerIdx].cash += pay;
		}

		var highestRank = 0;
		var highestPlayerIdx = 0;
		var highestPlayerIdcs = [];
		var dealerIdx = players.findIndex(player => player.isDealer === true);
		var nextPlayerIdx = playerIdx - 1;
		var nextDealTurn = dealerTurn - 1;
		var nextDealerIdx = dealerIdx - 1;
		var deciderIdx = 0;
		var containDealer = false;
		var curNoPlayers = players.length;
		let copy = [...players];

		// Don't change player if the current player rolls a bust, have more than 0 rolls or if the first
		// roll is not a pisser

		if((idx === 1 || (idx > 3 && idx < 17)) || noRoll < 1 || (idx === 2 && noRoll === 2))
		{
			copy[playerIdx].rank = idx;
			setNoRoll(3);
			if(nextPlayerIdx < 0)
				nextPlayerIdx = players.length - 1;
			while(copy[nextPlayerIdx].cash < 1)
			{
				nextPlayerIdx--;
				if(nextPlayerIdx < 0)
					nextPlayerIdx = players.length - 1;
			}
			// Take the next turn from the next player.
			setPlayerIdx(nextPlayerIdx);
			// End current match if reach to the dealer.
			if(dealerIdx === nextPlayerIdx)
			{
				// Find the highest rank overall
				for(let i = 0; i < copy.length; i++)
				{
					// Since reach to dealer, everyone bets again.
					if(copy[i].rank > highestRank)
						highestRank = copy[i].rank;
				}
				// Nobody wins or loses if the highest rank is a bust, pisser or 1-2-3
				if(highestRank > 3)
				{
					// If there is more than one winners
					for(let i = 0; i < copy.length; i++)
					{
						if(copy[i].rank === highestRank)
							highestPlayerIdcs.push(i);
					}
					// If there is only one winner
					if(highestPlayerIdcs.length === 1)
					{
						highestPlayerIdx = highestPlayerIdcs[0];
						// If dealer wins
						if(dealerIdx === highestPlayerIdx)
						{
							window.alert("Dealer wins");
							// All players pay twice
							if(copy[dealerIdx].rank === 10)
							{
								for(let i = 0; i < copy.length; i++)
								{
									if(i !== dealerIdx)
										exchangeToDealer(copy, i, dealerIdx, 2);
								}
							}
							// All players pay triple
							else if(copy[dealerIdx].rank > 10 && copy[dealerIdx].rank < 16)
							{
								for(let i = 0; i < copy.length; i++)
								{
									if(i !== dealerIdx)
										exchangeToDealer(copy, i, dealerIdx, 3);						
								}
							}
							// All players pay 5x
							else if(copy[dealerIdx].rank === 16)
							{
								for(let i = 0; i < copy.length; i++)
								{
									if(i !== dealerIdx)
										exchangeToDealer(copy, i, dealerIdx, 5);		
								}
							}
							// All players must pay
							else
							{
								for(let i = 0; i < copy.length; i++)
								{
									if(i !== dealerIdx)
										exchangeToDealer(copy, i, dealerIdx, 1);							
								}
							}

						}
						// If dealer loses
						// If dealer rolls pisser, draw if player rolls 1-2-3, pisser or bust
						// Pisser is treated as a bust
						else
						{
							window.alert(`${copy[highestPlayerIdx].username} wins, dealer loses.`);
							// Dealer must pay twice from the highest player
							if(copy[highestPlayerIdx].rank === 10)
								exchangeToPlayer(copy, highestPlayerIdx, dealerIdx, 2);
							// Dealer must pay triple from the highest player
							else if(copy[highestPlayerIdx].rank > 10 && copy[highestPlayerIdx].rank < 16)
								exchangeToPlayer(copy, highestPlayerIdx, dealerIdx, 3);
							// Dealer must pay 5x from the highest player
							else if(copy[highestPlayerIdx].rank === 16)
								exchangeToPlayer(copy, highestPlayerIdx, dealerIdx, 5);
							// Dealer must pay from the highest player
							else
								exchangeToPlayer(copy, highestPlayerIdx, dealerIdx, 1);
						}
					}
					// Unless there is more than one winner.
					else
					{
						for(let i = 0; i < highestPlayerIdcs.length; i++)
						{
							if(highestPlayerIdcs[i] === dealerIdx)
								containDealer = true;
						}

						if(!containDealer)
						{
							// If there are no dealers, then randomise which player should get the money from the dealer.
							// Else if there is a dealer, nobody wins or loses.
							deciderIdx = Math.floor(Math.random() * highestPlayerIdcs.length);
							// Avoid using the wrong index, must find the player's index not the decider index.
							deciderIdx = highestPlayerIdcs[deciderIdx];
							window.alert(`Tie. ${copy[deciderIdx].username} is the deciding player.`);
							if(copy[deciderIdx].rank === 10)
								exchangeToPlayer(copy, deciderIdx, dealerIdx, 2);
							// Dealer must pay triple from the highest player
							else if(copy[deciderIdx].rank > 10 && copy[deciderIdx].rank < 16)
								exchangeToPlayer(copy, deciderIdx, dealerIdx, 3);
							// Dealer must pay 5x from the highest player
							else if(copy[deciderIdx].rank === 16)
								exchangeToPlayer(copy, deciderIdx, dealerIdx, 5);
							// Dealer must pay from the highest player
							else
								exchangeToPlayer(copy, deciderIdx, dealerIdx, 1);
						}
						else
							window.alert("Tie. However, it contains a dealer. No-one wins.");
					}
				}
				else
					window.alert("Tie. No-one get a 1 or higher.");
				// Next turn
				setDealerTurn(nextDealTurn);
				// Check if dealer needs to play again (only pass if 1-2-3, bust, pisser or 1)
				if(copy[dealerIdx].rank < 5)
					setIsAcceptAsDealer(false);
				// Check if dealer plays twice.
				if(nextDealTurn < 1)
				{
					setIsAcceptAsDealer(false);
					copy[dealerIdx].isDealer = false;
					if(nextDealerIdx < 0)
						nextDealerIdx = players.length - 1;
					while(copy[nextDealerIdx].cash < 1)
					{
						nextDealerIdx--;
						if(nextDealerIdx < 0)
							nextDealerIdx = players.length - 1;
					}
					setDealerIdx(nextDealerIdx);
					setDealerTurn(2);
				}
				else
				{
					// If at some point, dealer is out of cash or roll a pisser on first turn
					if(copy[dealerIdx].cash < 1)
					{
						setIsAcceptAsDealer(false);
						copy[dealerIdx].isDealer = false;						
						if(nextDealerIdx < 0)
							nextDealerIdx = players.length - 1;
						while(copy[nextDealerIdx].cash < 1)
						{
							nextDealerIdx--;
							if(nextDealerIdx < 0)
								nextDealerIdx = players.length - 1;
						}
						setDealerIdx(nextDealerIdx);
						setDealerTurn(2);						
					}
				}

				setIsAllBet(false);
				// Clear results
				for(let i = 0; i < copy.length; i++)
				{
					copy[i].hasBet = false;
					copy[i].rank = 0;
					copy[i].bet = 100;
				}
				// Get rid of bankrupt players.
				for(let i = 0; i < copy.length; i++)
				{
					if(copy[i].cash < 1)
						curNoPlayers--;
				}
				setNoPlayers(curNoPlayers);
				setNoOfBets(curNoPlayers - 1);
			}
			setPlayers(copy);
		}
		setIdx(0);
		setIsRoll(false);
	}

	function Dieroll()
	{
		return (<div>
					<Slide {...properties}>
						<div className="each-slide">
							<img src={diceImages[0]} alt="dice1" />&emsp;
							<img src={diceImages[1]} alt="dice2" />&emsp;
							<img src={diceImages[2]} alt="dice3" />
						</div>
						<div className="each-slide">
							<img src={diceImages[1]} alt="dice2" />&emsp;
							<img src={diceImages[2]} alt="dice3" />&emsp;
							<img src={diceImages[3]} alt="dice4" />
						</div>
						<div className="each-slide">
							<img src={diceImages[2]} alt="dice3" />&emsp;
							<img src={diceImages[3]} alt="dice4" />&emsp;
							<img src={diceImages[4]} alt="dice5" />
						</div>
						<div className="each-slide">
							<img src={diceImages[3]} alt="dice4" />&emsp;
							<img src={diceImages[4]} alt="dice5" />&emsp;
							<img src={diceImages[5]} alt="dice6" />
						</div>
						<div className="each-slide">
							<img src={diceImages[4]} alt="dice5" />&emsp;
							<img src={diceImages[5]} alt="dice6" />&emsp;
							<img src={diceImages[0]} alt="dice1" />
						</div>
						<div className="each-slide">
							<img src={diceImages[5]} alt="dice6" />&emsp;
							<img src={diceImages[0]} alt="dice1" />&emsp;
							<img src={diceImages[1]} alt="dice2" />
						</div>
					</Slide>
				</div>);
	}

	return (
		<div className="Dice">
			<p id="playerTurnTxt">{players[playerIdx].username} Turn</p>
			<p>Number of rolls: {noRoll}</p>
			{!isRoll  && 
			<div>
				<Dieroll /><br /><Throw />
			</div>}
			{isRoll && <FindRank />}
			{isRoll ? <button onClick={nextRoll}>Next</button> : <button onClick={rollDice}>Roll Me</button>}     
		</div>
	);

}

export default Dice;