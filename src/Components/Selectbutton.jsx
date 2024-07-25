import React from "react";

const Selectbutton = ({ dicenum }) => {
  return (
    <div>
      <button className="h-8 w-8 border border-black font-medium text-xl">
        {dicenum}
      </button>
    </div>
  );
};

export default Selectbutton;
