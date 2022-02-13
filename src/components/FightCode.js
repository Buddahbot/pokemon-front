// import "../App.css";
import "./fightStyle.css";
import { useContext, useState } from "react";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import { PokeContext } from "../context/PokeContext";
import { PlayerContext } from "../context/PlayerContext";
import { CompContext } from "../context/CompContext";
import { useEffect } from "react/cjs/react.development";
import { GameContext } from "../context/GameContext";
import BG from "../images/bg0.jpg";
import BG1 from "../images/bg1.jpg";
import BG2 from "../images/bg3.jpg";
import BG3 from "../images/bg12.jpg";
import BG5 from "../images/Ybg5.png";
import Explosion from "../images/boom2.gif";

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
  const [fight, setFight] = useState(false);
  const [explosion, setExplosion] = useState(false);

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
    if (newHpPlayer === 0 || newDefensePlayer === 0) { // computer won
      return winnerFlag
    } else if (newHpComp === 0 || newDefenseComp === 0) { // player is winning 
      winnerFlag = true
      return winnerFlag
    }
  }
  const winner = getWinner()
  console.log(winner)
  if (winner) {
    setPlayerScore(1)
  }

  const scores = {
    gamesWon: playerScore,
    gamesPlayed: gameCount
  }

  const handleExplo = (e) => {
    e.preventDefault();
    setTimeout(() => {
      console.log("here");
      setExplosion(true)
    }, 5000);
    clearTimeout()
  }
   // const getWinner = () => {
  //   let winnerFlag = false
  //   if (newHpPlayer === 0 || newDefensePlayer === 0){ // computer won
  //     setPlayerScore(0)
  //     return winnerFlag
  //   } else if (newHpComp === 0 ||newDefenseComp === 0){ // player is winning 
  //     winnerFlag = true
  //     setPlayerScore(1)
  //     return winnerFlag
  //   }else{
  //     setPlayerScore(0)
  //     return winnerFlag
  //   }
  // }
  // const winner = getWinner()
  // console.log(winner)
  // console.log(playerScore)

  
  
  // useEffect(() => {
  //   const scores = {
  //     gamesWon : playerScore,
  //     gamesPlayed : gameCount
  //   }
  //   stats(scores).then((res) =>{
  //     if (res){
  //       if (winner){
  //         navigate("/Winner")
  //       } else if (!winner){
  //         navigate("/Loser")
  //       }
  //     }
  //   })
  // }, []);


  const picArray = [BG, BG1, BG2, BG3, BG5];

  const randomPic = Math.floor(Math.random() * picArray.length);
  const selectedPicture = picArray[randomPic];


  return (

    <div style={{ backgroundImage: `url(${selectedPicture})` }} className="bg ">

      <div className="fightTitle-div">
        {fight && <h1 className={`${fight ? "fightTitle" : ""}`}>POKE FIGHT!</h1>}
      </div>

      <div className="whoAttacked">
        <h3>{whoAttacks === 1
          ? "You attack!"
          : whoAttacks === 2
            ? "Computer attacks you!"
            : "Ready To Rumble!"}
        </h3>
      </div>

      <div style={{ color: "white" }} className='whoWon'>
        {fight && explosion && <h2 >{winner ? 'Player won' : 'Computer won'}</h2>}
      </div>

      {explosion && <img src={Explosion} className={`${explosion ? "explosion" : ""}`} />}

      {newHpPlayer === 0
        ? navigate("/loser")
        : newDefensePlayer === 0
          ? navigate("/loser")
          : newHpComp === 0
            ? navigate("/winner")
            : newDefenseComp === 0
              ? navigate("/winner")
              : ""}

      <div className="fighters">

        <div className="leftFighter">

          <div >
            <img src={player.image} className={`${fight ? "imgLeft" : "imgLeft-img"}`} />
          </div>

          <div className="pokeName">
            <h3 >{player.nameEN}</h3>

            <p>Health Points:</p> <p className="stat">{newHpPlayer}</p>

            <p>Defense Points:</p> <p className="stat"> {newDefensePlayer}</p>

          </div>

        </div>

        <div className="rightFighter">

          <div >
            <img src={comp.image} className={`${fight ? "imgRight" : "imgRight-img"}`} />
          </div>
          <div className="pokeName">
            <h3 >{comp.nameEN}</h3>

            <p>Health Points:</p> <p className="stat">{newHpComp}</p>

            <p>Defense Points:</p> <p className="stat"> {newDefenseComp}</p>
          </div>

        </div>
      </div>
      <div className="buttons-fight-back">
        <button className="FightButton" onClick={(e) => {
          setFight(true)
          handleExplo(e)
          codeLogic()
        }}>FIGHT!</button>

        <button className="FightButton" onClick={(e) => {
          setFight(false)
          setExplosion(false)
        }}>BACK!</button>
      </div>
    </div>
  );
};

export default FightCode;
