import { useState } from "react";
import "./App.css";
import Homepage from "./Components/Homepage";
import Game from "./Components/Game";

function App() {
  return (
    <>
      <div className="max-h-screen ">
        <Game />
      </div>
    </>
  );
}

export default App;
