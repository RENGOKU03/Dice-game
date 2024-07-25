import React from "react";
import Selectbutton from "./Selectbutton";

const Game = () => {
  const dices = [1, 2, 3, 4, 5, 6];
  return (
    <div className="">
      <div className="flex h-40 m-auto w-2/3 mt-1/5 justify-between ">
        <div className="my-auto">
          <h1 className="text-8xl font-semibold ">0</h1>
          <span>Total Score</span>
        </div>
        <div className="flex gap-3 my-auto relative">
          {dices.map((dice, index) => (
            <Selectbutton dicenum={dice} index={index} />
          ))}
          <h1 className="absolute top-9 text-xl font-medium">Select Number</h1>
        </div>
      </div>
    </div>
  );
};

export default Game;
