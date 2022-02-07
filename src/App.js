// import "./App.css"; // it can't be here because its gonna overtake my fightStyl.css file :)

import NavBar from "./components/NavBar";
import AppRouter from "./AppRouter";
import { PokeController } from "./context/PokeContext";
import { ImgController } from "./context/ImgContext";
import { ShuffleController } from "./context/ShuffleContext";
import { ClickController } from "./context/ClickContext";
import { PlayerController } from "./context/PlayerContext";
import { CompController } from "./context/CompContext";
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
                {/* <ComputerContext> */}
                <AppRouter />
                {/* </ComputerContext> */}
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
