import React, { useState } from "react";
import Selectbutton from "./Selectbutton";
import RulesDiv from "./RulesDiv";
import { MdPlayArrow } from "react-icons/md";

const Game = () => {
  const dices = [1, 2, 3, 4, 5, 6];
  const [showRules, setShowRules] = useState(false);
  const [diceValue, setDiceValue] = useState("1");
  const [totalScore, setTotalScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState(undefined);
  const handelRandomDice = () => {
    if (playerChoice === undefined) {
      document.getElementById("error_msg").classList.remove("hidden");
    } else {
      setDiceValue(Math.floor(Math.random() * 6) + 1);
      totalScoreDice();
    }
  };
  const handelSelectDice = (dice) => {
    const newChoice = dice;

    const element = document.getElementById(dice);
    element.classList.toggle("bg-blue-500");
    setPlayerChoice(newChoice);
  };
  const totalScoreDice = () => {
    console.log(diceValue, playerChoice);
    if (diceValue === playerChoice) {
      setTotalScore(totalScore + diceValue);
    } else {
      setTotalScore(totalScore - 1);
    }
  };
  return (
    <>
      {/*  Main Div */}
      <div className="flex flex-col justify-center gap-20 ">
        {/* Nav Div */}
        <div className="flex h-40 m-auto w-2/3 mt-1/5 justify-between relative">
          <div className="my-auto">
            <h1 className="text-8xl font-semibold ">{totalScore}</h1>
            <span>Total Score</span>
          </div>
          {/* Dice select Menu */}
          <div className="flex flex-col gap-1 my-auto">
            <p id="error_msg" className="text-red-600 font-medium hidden">
              You Have not Seleced Any Dice
            </p>
            <div className="flex gap-2 ">
              {dices.map((dice, index) => (
                <Selectbutton
                  dicenum={dice}
                  id={dice}
                  key={index}
                  handelSelectDice={handelSelectDice}
                />
              ))}
            </div>
            <h1 className="=text-xl font-medium">Select Number</h1>
          </div>
        </div>
        {/* Dice Roll Div */}
        <div className="m-auto flex flex-col ">
          <img
            className="h-60 w-60 cursor-pointer"
            src={`./images/dice_${diceValue}.png`}
            alt="roll-dice-img"
            onClick={handelRandomDice}
          />
          <span className="text-center font-medium text-xl">
            Click on Dice to Roll
          </span>
          <button
            className="bg-white text-black p-2 mt-3 w-10/12 border-2 rounded-lg border-black m-auto"
            onClick={() => setTotalScore(0)}
          >
            Reset Score
          </button>
          <button
            className="bg-black text-white p-2 mt-3 w-10/12 border-2 rounded-lg border-black m-auto"
            onClick={() => setShowRules(true)}
          >
            Show Rules
          </button>
        </div>
      </div>
      {showRules && <RulesDiv setShowRules={setShowRules} />}
    </>
  );
};

export default Game;
