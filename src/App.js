// import "./App.css"; // it can't be here because its gonna overtake my fightStyl.css file :)

import NavBar from "./components/NavBar";
import AppRouter from "./AppRouter";
import { PokeController } from "./context/PokeContext";
import { ImgController } from "./context/ImgContext";
import { ShuffleController } from "./context/ShuffleContext";

function App() {
  return (
    <div className="App">
      <ImgController>
        <PokeController>
          <ShuffleController>
            <AppRouter />
          </ShuffleController>
        </PokeController>
      </ImgController>
    </div>
  );
}

export default App;
