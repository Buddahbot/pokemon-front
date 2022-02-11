import "../App.css";
import { useContext, useState } from "react";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import { PokeContext } from "../context/PokeContext";
import { PlayerContext } from "../context/PlayerContext";
import { CompContext } from "../context/CompContext";
import { useEffect } from "react/cjs/react.development";
import { GameContext } from "../context/GameContext";

const FightCode = () => {
  const [player, setPlayer] = useContext(PlayerContext);
  const [playerScore, setPlayerScore] = useContext(PlayerContext)
  const [pokemons, setPokemons] = useContext(PokeContext);
  const [healthpoints, setHealthpoints] = useState();
  const [comp, setComp] = useContext(CompContext);
  const [compScore, setCompScore] = useContext(CompContext);
  const [newHpPlayer, setNewHpPlayer] = useState();
  const [newHpComp, setNewHpComp] = useState();
  const [newDefensePlayer, setNewDefensePlayer] = useState();
  const [newDefenseComp, setNewDefenseComp] = useState();
  const [winCountPlayer, setWinCountPlayer] = useState(false);
  const [winCountComp, setWinCountComp] = useState(false);
  const [whoAttacks, setWhoAttacks] = useState();
  const [gameCount, setGameCount] = useContext(GameContext)

  let navigate = useNavigate();

  //  let winCountPlayer = false
  //  let winCountComp = false

  useEffect(() => {
    setNewHpPlayer(player.hp);
    setNewHpComp(comp.hp);
    setNewDefensePlayer(player.defense);
    setNewDefenseComp(comp.defense);
  }, []);

  const codeLogic = () => {
    let attacker = Math.floor(Math.random() * 2 + 1);
    // console.log(attacker);
    setWhoAttacks(attacker);
    if (attacker === 1 && player.attack > comp.defense) {
      //player 1 attacks and wins
      const x = newDefenseComp * 0.5;
      setNewDefenseComp(x);
    } else if (attacker === 1 && player.attack < comp.defense) {
      // player 1 attacks and loses
      const y = newHpPlayer * 0.5;
      setNewHpPlayer(y);
    } else if (attacker === 2 && comp.attack > player.defense) {
      // player 2 attacks and wins
      const d = newDefensePlayer * 0.5;
      setNewDefensePlayer(d);
    } else if (attacker === 2 && comp.attack < player.defense) {
      // player 2 attacks and loses
      const a = newHpComp * 0.5;
      setNewHpComp(a);
    } else {
      // (comp.attack === player.defense || comp.defense === player.attack) { // no one wins this round
      const tryAgain = "No one wins this round. You are both so strong!!";
      console.log(tryAgain);
    }

    if (newDefenseComp < 20) {
      setNewDefenseComp(0) && setWinCountPlayer(true);
    } else if (newHpComp < 20) {
      setNewHpComp(0) && setWinCountPlayer(true);
    } else if (newDefensePlayer < 20) {
      setNewDefensePlayer(0) && setWinCountComp(true);
    } else if (newHpPlayer < 20) {
      setNewHpPlayer(0);
    }
    // console.log(winCountPlayer);
    // console.log(winCountComp);
  };
 
const getWinner = () => {
    let winnerFlag = false
    if (newHpPlayer === 0 || newDefensePlayer === 0){ // computer won
      return winnerFlag
    } else if (newHpComp === 0 ||newDefenseComp === 0){ // player is winning 
      winnerFlag = true
      return winnerFlag
    }
}
const winner = getWinner()
console.log(winner)
if (winner){
  setPlayerScore(1)
}



const scores = {
    gamesWon : playerScore,
    gamesPlayed : gameCount
}


  return (
    <div className="home-container">
      <div className="main-container">
      <div className="main-container-header">
      <h1>
        {whoAttacks === 1
          ? "You Attacked!!!"
          : whoAttacks === 2
          ? "Comp Attacked You"
          : "Ready To Rumble"}
      </h1>
      </div>
      <button className="button-green" onClick={codeLogic}>Click To Fight</button>
     

      {winner ? 'playerwon': 'computerwon'}
      {/* {winner ? setPlayerScore(playerScore+1): setCompScore(compScore+1)}  */}
       {/* { winner ? (
        stats(scores)
        navigate('/winner', state={result})
      ) 
      : dbpost(scorecomp)}  */}

       {newHpPlayer === 0 
        ? navigate("/loser")
        : newDefensePlayer === 0
        ? navigate("/loser")
        : newHpComp === 0
        ? navigate("/winner")
        : newDefenseComp === 0
        ? navigate("/winner")
        : ""} 
<div className="poke-card">
          <div className="two-columns">
            <div className="fight-fighter">
            <img src={player.image} style={{ width: "300px" }} />

      <h2>{player.nameEN}</h2>
      <div className="player-stats">

      <p>Health Points:</p> <p className="stat">{newHpPlayer}</p>

      <p>Defense Points:</p> <p className="stat"> {newDefensePlayer}</p>
      </div>
</div>
<div className="fight-fighter">
<img src={comp.image} style={{ width: "300px" }}/>
      <h2>{comp.nameEN}</h2>
      <div className="player-stats">

      <p>Health Points:</p> <p className="stat">{newHpComp}</p>
     
      <p>Defense Points:</p> <p className="stat"> {newDefenseComp}</p>
      </div>
      </div>
    </div>
    </div>   </div>   </div>
  );
};

export default FightCode;
