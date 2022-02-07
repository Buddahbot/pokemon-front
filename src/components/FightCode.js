
import "../App.css";
import { useContext, useState, } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { PokeContext } from "../context/PokeContext";
import { PlayerContext } from "../context/PlayerContext";
import { CompContext } from "../context/CompContext";


const FightCode = () => {
	
	const[player, setPlayer] = useContext(PlayerContext);
	const[pokemons, setPokemons] = useContext(PokeContext);
	const[healthpoints, setHealthpoints] = useState()
	const [comp, setComp] = useContext(CompContext);
	const[newHpPlayer, setNewHpPlayer] = useState([]);
	const[newHpComp, setNewHpComp] = useState([]);
	const[newAttackPlayer, setNewAttackPlayer] = useState([]);
	const[newAttackComp, setNewAttackComp] = useState();
	const[newDefensePlayer, setNewDefensePlayer] = useState();
	const[newDefenseComp, setNewDefenseComp] = useState([]);

	let attacker = Math.floor((Math.random() * 2) + 1);
 console.log(attacker)
	if 	( attacker === 1 && player.attack > comp.attack) { //player 1 attacks and wins
			const x = comp.defense * 0.5;
		setNewDefenseComp(x)} else if 
		( attacker === 1 && player.attack < comp.attack) { // player 1 attacks and loses
			const y = player.hp * 0.5;
		setNewHpPlayer(y) } else if 
		( attacker === 2 && comp.attack > player.defense) { // player 2 attacks and wins
			const z = player.defense * 0.5;
		setNewDefensePlayer(z) } else if 
		( attacker === 2 && comp.attack < player.defense) { // player 2 attacks and loses
			const a = comp.hp * 0.5;
		setNewHpComp(a) } else if 
		(comp.attack === player.defense || comp.defense === player.attack) { // no one wins this round
			const b = "No one wins this round. You are both so strong!!" 
			console.log(b)
		}

		// when health points are under 10 or defense points are under 10 then x wins
	
			
	
	console.log(newDefenseComp)
	console.log(newHpPlayer)

	// else if (attacker === 1 && player.attack < comp.defense) {
	// 	setNewHpPlayer(player.hp * 0.50)
	// }
	

	// let selectedCardPlayer = [3, 20, 15, 19]
	// let selectedCardComp = [7, 4, 14, 19]

	// let winCountPlayer = 0
	// let winCountComp = 0
	
	// for (let i = 0; i < selectedCardPlayer.length; i++) {
		
	// if (selectedCardPlayer[i] > selectedCardComp[i]) {
	// 	winCountPlayer += 1
	// } else if ( selectedCardPlayer[i] < selectedCardComp[i]) {
	// 	winCountComp += 1
	// } else { 
	// 	winCountPlayer += 0
	// }
	// console.log(player)
	// }

	return (
	  <div className="home-container" >
		<h2>Your Fighter: {player.nameEN}</h2>
		<h3>Health Points: {player.hp}</h3>
		<h3>Attack Points: {player.attack}</h3>
		<h3>Defense Points: {player.defense}</h3>
		<img src={player.image}/>

		<h2>Computer Fighter: {comp.nameEN}</h2>
		<h3>Health Points: {comp.hp}</h3>
		<h3>Attack Points: {comp.attack}</h3>
		<h3>Defense Points: {comp.defense}</h3>
		<img src={comp.image}/>
		
	
		  
{/* { winCountPlayer > winCountComp ? (

<h1>RESULT: You won!</h1>)
: winCountPlayer < winCountComp ? (
	<h1>RESULT: You lost</h1>)
: (<h1>RESULT: Draw!</h1>)

}; */}

</div>
	);
  };

  export default FightCode;


