// import "./App.css"; // it can't be here because its gonna overtake my fightStyl.css file :)

import NavBar from "./components/NavBar";
import AppRouter from "./AppRouter";
import { PokeController } from "./context/PokeContext";
import { ImgController } from "./context/ImgContext";
import { ShuffleController } from "./context/ShuffleContext";
import { ClickController } from "./context/ClickContext";
import { PlayerController } from "./context/PlayerContext";
import { CompController } from "./context/CompContext";
import { GameController } from "./context/GameContext";
import { UserController } from "./context/UserContext";
import { BackgroundController } from "./context/BackgroundContext";
// import { ComputerContext } from "./context/ComputerContext";

function App() {
  return (
    <div className="App">
      <ImgController>
        <PokeController>
          <ShuffleController>
            <ClickController>
              <PlayerController>
                <CompController>
                  <GameController>
                    <UserController>
                      {/* <BgController> */}
                      <AppRouter />
                      {/* </BgController> */}
                    </UserController>
                  </GameController>
                </CompController>
              </PlayerController>
            </ClickController>
          </ShuffleController>
        </PokeController>
      </ImgController>
    </div>
  );
}

export default App;
