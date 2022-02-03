// import "./App.css";
import NavBar from "./components/NavBar";
import AppRouter from "./AppRouter";
import { PokeController } from "./context/PokeContext";
import { ImgController } from "./context/ImgContext";

function App() {
  return (
    <div className="App">
      <ImgController>
        <PokeController>
          <AppRouter />
        </PokeController>
      </ImgController>
    </div>
  );
}

export default App;
