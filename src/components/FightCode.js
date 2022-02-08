
import "../App.css";
import { useContext, useState, } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { PokeContext } from "../context/PokeContext";
import { PlayerContext } from "../context/PlayerContext";
import { CompContext } from "../context/CompContext";
import { useEffect } from "react/cjs/react.development";


const FightCode = () => {
	
	const[player, setPlayer] = useContext(PlayerContext);
	const[pokemons, setPokemons] = useContext(PokeContext);
	const[healthpoints, setHealthpoints] = useState()
	const [comp, setComp] = useContext(CompContext);
	const[newHpPlayer, setNewHpPlayer] = useState();
	const[newHpComp, setNewHpComp] = useState();
	const[newDefensePlayer, setNewDefensePlayer] = useState();
	const[newDefenseComp, setNewDefenseComp] = useState();
	const[winCountPlayer, setWinCountPlayer] = useState(false);
	const[winCountComp, setWinCountComp] = useState(false);
	const[whoAttacks, setWhoAttacks] = useState();
	
	// let winCountPlayer = false
	// let winCountComp = false

	useEffect(() => {

	setNewHpPlayer(player.hp);
	setNewHpComp(comp.hp);
	setNewDefensePlayer(player.defense);
	setNewDefenseComp(comp.defense);
},[]);

	const codeLogic = () => {
		  
	let attacker = Math.floor((Math.random() * 2) + 1);
console.log(attacker)
		setWhoAttacks(attacker);
	if 	( attacker === 1 && player.attack > comp.defense) { //player 1 attacks and wins
			const x = newDefenseComp * 0.5;
		setNewDefenseComp(x)} else if 
		( attacker === 1 && player.attack < comp.defense) { // player 1 attacks and loses
			const y = newHpPlayer * 0.5;
		setNewHpPlayer(y) } else if 
		( attacker === 2 && comp.attack > player.defense) { // player 2 attacks and wins
			const d = newDefensePlayer * 0.5;
		setNewDefensePlayer(d) } else if 
		( attacker === 2 && comp.attack < player.defense) { // player 2 attacks and loses
			const a = newHpComp * 0.5;
		setNewHpComp(a) } else {
		// (comp.attack === player.defense || comp.defense === player.attack) { // no one wins this round
			const tryAgain = "No one wins this round. You are both so strong!!" 
			console.log(tryAgain)};
		
			if (newDefenseComp < 20) {
				setNewDefenseComp(0) && setWinCountPlayer(true);
			} else if (newHpComp < 20 ) {
				setNewHpComp(0)&& setWinCountPlayer(true);
			} else if (newDefensePlayer < 20) {
				setNewDefensePlayer(0) && setWinCountComp(true);
			} else if (newHpPlayer < 20) {
			setNewHpPlayer(0);
			}
			
			console.log(winCountPlayer);
			console.log(winCountComp);
		
	
	}

	return (
		
	  <div className="home-container" >
		<button onClick={codeLogic}>
      Click To Fight
    	</button>

		<h3>{whoAttacks === 1 ? ("You Attacked!!!")
		: whoAttacks === 2 ? ("Comp Attacked You")
		: ("Ready To Rumble") }</h3>

		{newHpPlayer === 0 ? 
				("You Lost")
			: newDefensePlayer === 0 ?
				("You Lost")
			: newHpComp === 0 ?
				("You Won!")
			: newDefenseComp === 0 ?
				("You Won!")
			: ("")
			}



		<h2>Your Fighter: {player.nameEN}</h2>
		<h3>Health Points: {newHpPlayer}</h3>
		<h3>Attack Points: {player.attack}</h3>
		<h3>Defense Points: {newDefensePlayer}</h3>
		<img src={player.image}/>

		<h2>Computer Fighter: {comp.nameEN}</h2>
		<h3>Health Points: {newHpComp}</h3>
		<h3>Attack Points: {comp.attack}</h3>
		<h3>Defense Points: {newDefenseComp}</h3>
		<img src={comp.image}/>




</div>
	);
  };

  export default FightCode;


