import React from "react";

const Selectbutton = ({ dicenum, index, handelSelectDice, isActive }) => {
  return (
    <div>
      <button
        className={`h-8 w-8 border border-black font-medium text-xl cursor-pointer ${
          isActive ? "bg-black text-white" : "bg-white text-black"
        }`}
        key={index}
        id={dicenum}
        onClick={() => handelSelectDice(dicenum)}
      >
        {dicenum}
      </button>
    </div>
  );
};

export default Selectbutton;
