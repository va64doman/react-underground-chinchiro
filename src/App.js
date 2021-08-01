/**
 * CREATION DATE: 09/07/2021
 * UPDATE DATE: 31/07/2021
 */

import './App.css';
import Footer from './components/Footer';
import data from "./player.json";
import Register from "./components/Register";
import Game from "./components/Game";
import React, {useState, Fragment} from "react";
import "./components/player.css";
import "./components/playerlist.css";

/**
 * Similar to Chinchiro (https://chinchiro.com/)
 * Dealer vs players
 * Dealer don't bet.
 * Dealer plays first.
 * In counter-clockwise direction starting at dealer.
 * Each player has 3 turns unless if it is not a bust.
 * If the dealer busted earlier, if a player rolls a pisser (die falls out of bowl), the dealer wins.
 * Also, the player doesn't get to re-roll.
 * So if your first roll is a pisser, you don't get a second or third try.
 * 
 * Except:
 * 	1. (Triple 1s (snake eyes) - Wins 5x the original bet)
 * 	2. No dealer's advantage 
 *  For example,
 *  (if dealer and player both have pair and 6, draw)
 *  (if dealer rolls pair and 6, while player rolls 4-5-6, dealer loses)
 * 	(if dealer rolls 1-2-3 and player rolls pisser, draw)
 * 	If it is a draw, dealer doesn't have to pay
 * 	3. Dealer can pass. (Pass dealer to the next person if not wanted).
 * 	4. Dealer plays twice then the next player gets his turn.
 *		- Quit after first turn if roll pair and 1, 1-2-3 or bust.
 * 
 * Roll from best to worst:
 * 1-1-1 : 5x
 * Triple (6 to 2) : 3x
 * 4-5-6 : 2x
 * Pair (6 to 1) : 1x
 * Bust (None of above) : Lose 1x if reaches third turn
 * 1-2-3 : Lose 2x
 */

function App() {

	const [players, setPlayers] = useState(data);
	const [isPlaying, setIsPlaying] = useState(false);
	const [cash, setCash] = useState(10000);

	function playGame()
	{
		// Randomise players in different order.
		let copy = [...players];
		for(let i = copy.length - 1; i > 0; i--)
		{
			let j = Math.floor(Math.random() * (i + 1));
			/* Similar to:
			* let t = copy[i];
			* copy[i] = copy[j];
			* copy[j] = t;
			*/
			[copy[i], copy[j]] = [copy[j], copy[i]];
		}

		setPlayers(copy);
		setIsPlaying(true);
	}
	// Every player's default cash will increase or decrease.
	function addCash()
	{
		var newCash = cash + 10000;
		if(newCash < 100001)
		{
			setCash(newCash);
			let copy = [...players];
			for(let i = 0; i < copy.length; i++)
				copy[i].cash = newCash;
			setPlayers(copy);
		}
	}

	function subtractCash()
	{
		var newCash = cash - 10000;
		if(newCash > 9999)
		{
			setCash(newCash);
			let copy = [...players];
			for(let i = 0; i < copy.length; i++)
				copy[i].cash = newCash;
			setPlayers(copy);
		}
	}

	return (
		<div className="App">
			<h1>Underground Chinchiro</h1>		
			{!isPlaying && 
			<Fragment>
				<Register players={players} setPlayers={setPlayers} cash={cash} isPlaying={isPlaying}/><br />
				<div className="cash-form">
					{cash > 10000 && <button onClick={subtractCash}>-</button>}
					<span>&nbsp;Starting Cash:&nbsp;{cash}&nbsp;</span>
					{cash < 100000 && <button onClick={addCash}>+</button>}<br /><br />
				</div>
				<button onClick={playGame}>Play</button><br />
			</Fragment>}
			{isPlaying && <Game players={players} setIsPlaying={setIsPlaying} setPlayers={setPlayers} cash={cash} />}
			<br />
			<Footer />
		</div>
	);
}

export default App;
