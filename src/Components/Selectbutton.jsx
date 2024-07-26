import React from "react";

const Selectbutton = ({ dicenum, index }) => {
  return (
    <div>
      <button
        className="h-8 w-8 border border-black font-medium text-xl cursor-pointer bg-red-500"
        key={index}
      >
        {dicenum}
      </button>
    </div>
  );
};

export default Selectbutton;
