import React from "react";

const Homepage = ({ setGamePage }) => {
  const handelHomepage = () => {
    setGamePage(true);
  };

  return (
    <div className="h-fit flex my-[5%] items-center  ml-[10%] mr-[5%] ">
      <div className="w-1/2">
        <img src="/images/dices.png" alt="" />
      </div>
      <div className="w-1/2 h-fit flex flex-col">
        <h1 className="text-[110px] font-bold text-nowrap">DICE GAME</h1>
        <button
          className="bg-black w-40 text-white h-12 rounded-lg self-end mr-10"
          onClick={handelHomepage}
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default Homepage;
