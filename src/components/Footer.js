/**
 * CREATION DATE: 16/07/2021
 * UPDATE DATE: 26/07/2021
 */

import React, {useState} from "react";
import Modal from 'react-modal';

import "./footer.css";

const Footer = () => {

	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
	<div className="footer">
		<button onClick={openModal}>Rules</button>
		<Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        	<h2>Rules</h2>
			<p>Similar to Chinchiro (Chinchirorin or Cee-lo), except this is Underground Chinchiro.</p>
			<p>The rules of Chinchiro is from&nbsp;
				<a href="https://chinchiro.com/" target="_blank" rel="noopener noreferrer">https://chinchiro.com/</a> or&nbsp;
				<a href="https://en.wikipedia.org/wiki/Cee-lo" target="_blank" rel="noopener noreferrer">
					https://en.wikipedia.org/wiki/Cee-lo
				</a>.
			</p>
			<p>There are 3 additional rules:</p>
			<ol>
				<li>
					<h4>There is no dealer's advantage.</h4>
					<p>Normally, if the dealer rolls a six, a 4-5-6, or three of a kind, he automatically wins.</p>
					<p>The dealer will take everyone's bet.</p>
					<p>
						However in underground chinchiro, the players are still allowed to roll the dice no matter 
						how strong the dealer's roll is.
					</p>
					<p>
						If the dealer rolls a one-two-three and the player rolls a pisser, that's a draw.
					</p>
				</li>
				<li>
					<h4>The dealer can pass.</h4>
					<p>
						If the dealer is low on funds or luck isn't on his side, he can pass to the next player. 
						Of course, you're free to pass again the next time your turn comes up.
					</p>
				</li>
				<li>
					<h4>You can only deal for two rounds.</h4>
					<p>
						In order to prevent the dealer from cleaning everyone out, 
						players only get two rounds as dealer. Then, the next player gets his turn.
						Now, if the dealer rolls a bust or a one on his first round, his turn is over.
						So the dealer can change after one round, too.
					</p>
				</li>
			</ol>
			<p>The roll combinations' outcomes will also change. They are order from highest to lowest rank.</p>
			<table>
				<tr>
					<th>Name</th>&nbsp;
					<th>Roll Combination</th>&nbsp;
					<th>Outcome</th>
				</tr>
				<tr>
					<td>Snake eyes</td>&nbsp;
					<td>
						<p>
							<img src="assets/mini-1.png" alt="dice1" />&nbsp;
							<img src="assets/mini-1.png" alt="dice1"/>&nbsp;
							<img src="assets/mini-1.png" alt="dice1"/>
						</p>
					</td>&nbsp;
					<td className="td-info">Win 5x the bet.</td>
				</tr>
				<tr>
					<td>Triple</td>&nbsp;
					<td>
						<p>
							<img src="assets/mini-6.png" alt="dice6" />&nbsp;
							<img src="assets/mini-6.png" alt="dice6"/>&nbsp;
							<img src="assets/mini-6.png" alt="dice6"/>
						</p>
						<p>
							<img src="assets/mini-5.png" alt="dice5" />&nbsp;
							<img src="assets/mini-5.png" alt="dice5"/>&nbsp;
							<img src="assets/mini-5.png" alt="dice5"/>
						</p>
						<p>
							<img src="assets/mini-4.png" alt="dice4" />&nbsp;
							<img src="assets/mini-4.png" alt="dice4"/>&nbsp;
							<img src="assets/mini-4.png" alt="dice4"/>
						</p>
						<p>
							<img src="assets/mini-3.png" alt="dice3" />&nbsp;
							<img src="assets/mini-3.png" alt="dice3"/>&nbsp;
							<img src="assets/mini-3.png" alt="dice3"/>
						</p>
						<p>
							<img src="assets/mini-2.png" alt="dice2" />&nbsp;
							<img src="assets/mini-2.png" alt="dice2"/>&nbsp;
							<img src="assets/mini-2.png" alt="dice2"/>
						</p>
					</td>&nbsp;
					<td className="td-info">Win 3x the bet.</td>
				</tr>
				<tr>
					<td>4-5-6</td>&nbsp;
					<td>
						<p>
							<img src="assets/mini-4.png" alt="dice4" />&nbsp;
							<img src="assets/mini-5.png" alt="dice5"/>&nbsp;
							<img src="assets/mini-6.png" alt="dice6"/>
						</p>
					</td>&nbsp;
					<td>Win 2x the bet.</td>
				</tr>
				<tr>
					<td>Points</td>&nbsp;
					<td>
						<p>
							2&nbsp;x&nbsp;( <img src="assets/mini-1.png" alt="dice1" />&nbsp;-&nbsp;
							<img src="assets/mini-5.png" alt="dice5"/> )&nbsp;
							<img src="assets/mini-6.png" alt="dice6"/>
						</p>
						<p>
							2&nbsp;x&nbsp;( <img src="assets/mini-1.png" alt="dice1" />&nbsp;-&nbsp;
							<img src="assets/mini-5.png" alt="dice4"/>,&nbsp;
							<img src="assets/mini-6.png" alt="dice6"/> )&nbsp;
							<img src="assets/mini-5.png" alt="dice5"/>
						</p>
						<p>
							2&nbsp;x&nbsp;( <img src="assets/mini-1.png" alt="dice1" />&nbsp;-&nbsp;
							<img src="assets/mini-3.png" alt="dice3"/>,&nbsp;
							<img src="assets/mini-5.png" alt="dice5"/>,&nbsp;
							<img src="assets/mini-6.png" alt="dice6"/> )&nbsp;
							<img src="assets/mini-4.png" alt="dice4"/>
						</p>
						<p>
							2&nbsp;x&nbsp;( <img src="assets/mini-1.png" alt="dice1" />,&nbsp;
							<img src="assets/mini-2.png" alt="dice2"/>,&nbsp;
							<img src="assets/mini-4.png" alt="dice4"/>&nbsp;-&nbsp;
							<img src="assets/mini-6.png" alt="dice6"/> )&nbsp;
							<img src="assets/mini-3.png" alt="dice3"/>
						</p>
						<p>
							2&nbsp;x&nbsp;( <img src="assets/mini-1.png" alt="dice1" />,&nbsp;
							<img src="assets/mini-3.png" alt="dice3"/>&nbsp;-&nbsp;
							<img src="assets/mini-6.png" alt="dice6"/> )&nbsp;
							<img src="assets/mini-2.png" alt="dice2"/>
						</p>
						<p>
							2&nbsp;x&nbsp;( <img src="assets/mini-2.png" alt="dice2" />&nbsp;-&nbsp;
							<img src="assets/mini-6.png" alt="dice6"/> )&nbsp;
							<img src="assets/mini-1.png" alt="dice1"/>
						</p>
					</td>&nbsp;
					<td className="td-info">Depends on n-points. If it is the highest, win a bet.</td>
				</tr>
				<tr>
					<td>Bust</td>&nbsp;
					<td>
						<p>
							For example:<br />
							<img src="assets/mini-1.png" alt="dice1" />&nbsp;
							<img src="assets/mini-3.png" alt="dice3"/>&nbsp;
							<img src="assets/mini-4.png" alt="dice4"/>
						</p>
					</td>&nbsp;
					<td className="td-info">
						Any combinations that doesn't result snake eyes, triple, 4-5-6, points (pair + value) 
						or 1-2-3 is considered a bust and require a re-roll. However, if this is the third
						time to get a bust, it is an automatic loss.
					</td>
				</tr>
				<tr>
					<td>1-2-3</td>&nbsp;
					<td>
						<p>
							<img src="assets/mini-1.png" alt="dice1" />&nbsp;
							<img src="assets/mini-2.png" alt="dice2"/>&nbsp;
							<img src="assets/mini-3.png" alt="dice3"/>
						</p>
					</td>&nbsp;
					<td className="td-info">Lose 2x the bet.</td>
				</tr>
			</table>
			<br />
			<p>
				Then, there's what we call the "pisser." If a die rolls out of the bowl, it's a bust.
				Plus, even if the dealer busted earlier, if a player rolls a pisser, the dealer wins.
				Also, the player doesn't get to re-roll. So if your first roll is a pisser, 
				you don't get a second or third try.
			</p>
        	<button onClick={closeModal}>Close</button>
      	</Modal>
	</div>
	);
};

export default Footer;