import "./App.css";
import RickMotry from "./components/RickMorty";
import { RickMortyProvider } from "./context/RickMortyContext/RickMortyContext";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="container">
      <RickMortyProvider>
        <RickMotry />
      </RickMortyProvider>
    </div>
  );
}

export default App;
