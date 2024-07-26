import React from "react";
import { RiCloseLine } from "react-icons/ri";

const RulesDiv = ({ setShowRules }) => {
  const handelShowRules = () => {
    setShowRules(false);
  };
  return (
    <div className="absolute top-1/3 left-1/4 p-5 w-1/2 bg-[#48E1D5] rounded-3xl">
      <div className="flex justify-between mr-2">
        <h1 className="text-xl font-medium mb-3">How to play Game</h1>
        <button
          className="cursor-pointer hover:bg-teal-200 rounded-lg"
          onClick={handelShowRules}
        >
          <RiCloseLine size={"35px"} />
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice number
        </p>
        <p>if you get wrong guess than 2 points will be deducted</p>
      </div>
    </div>
  );
};

export default RulesDiv;
