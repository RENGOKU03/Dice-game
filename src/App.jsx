import "./App.css";
import Homepage from "./Components/Homepage";
import Game from "./Components/Game";
import { useState } from "react";
function App() {
  const [gamePage, setGamePage] = useState(false);
  return (
    <>
      <div className="max-h-screen ">
        {gamePage ? <Game /> : <Homepage setGamePage={setGamePage} />}
      </div>
    </>
  );
}

export default App;
