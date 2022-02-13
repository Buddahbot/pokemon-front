import { useContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import "../App.css";
import "./fight2style.css";

import { PlayerContext } from "../context/PlayerContext";
import { CompContext } from "../context/CompContext";

const Fight2 = () => {
  const [player, setPlayer] = useContext(PlayerContext);
  const [comp, setComp] = useContext(CompContext);
  const [round, setRound] = useState(1);
  const [report, setReport] = useState("Ready...");

  const [compHP, setCompHP] = useState(comp.hp);
  const [playerHP, setPlayerHP] = useState(player.hp);

  const navigate = useNavigate();

  // ACTION BUTTONS
  const attack = () => {
    setCompHP(compHP - (player.attack - comp.defense));
    console.log(compHP);
    setReport(report + " You attacked!...");
    if (compHP <= 0) {
      navigate("/winner");
    }
    setRound(round + 1);
  };

  const specialAttack = () => {
    setCompHP(compHP - (player.specialAttack - comp.specialDefense));
    console.log(compHP);
    setReport(" You special attacked!... " + report);
    if (compHP <= 0) {
      navigate("/winner");
    }
    setRound(round + 1);
  };

  useEffect(() => {
    console.log("use effect");
  }, [round]);

  return (
    <>
      <div className="main-container">
        <div className="main-container-header">
          <h1>Round: {round}</h1>
        </div>
        <div className="fighting-ring">
          <div>
            <img src={player.image} className="fight2-img flip" />
            <h4>{player.nameEN}</h4>
            <div
              className="health-bar-player"
              style={{
                width: `${playerHP}px`,
              }}
            >
              HP
            </div>
          </div>
          <div className="kill-zone"></div>
          <div>
            <img src={comp.image} className="fight2-img" />
            <h4>{comp.nameEN}</h4>
            <div
              className="health-bar-comp"
              style={{
                width: `${compHP}px`,
              }}
            >
              HP
            </div>
          </div>
        </div>

        <div className="action-box">
          <div className="action-buttons">
            <button onClick={attack}>Attack</button>
            <button onClick={specialAttack}>Special Attack</button>
          </div>

          <div className="action-report">{report}</div>
        </div>
      </div>
    </>
  );
};

export default Fight2;
