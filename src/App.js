import "./App.css";
import NavBar from "./components/NavBar";
import AppRouter from "./AppRouter";
import { PokeController } from './context/PokeContext'

function App() {
  return (
    <div className="App">
      <PokeController>
        <AppRouter />
      </PokeController>
    </div>
  );
}

export default App;
