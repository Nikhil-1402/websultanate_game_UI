import React from "react";
import star from "../assets/star.png";

const Game = () => {
  return (
    <>
      <section className="w-full h-full py-5 px-3 relative">
        <div className="md:pl-6 md:pr-4 z-10 lg:block my-2 md:mb-10 md:mt-1">
          <h1 className="bg-[#323738] mx-2 flex items-center justify-center h-8 md:h-10 truncate rounded-lg text-center leading-10 !text-[#b3bec1] text-sm">
            Game result will be displayed
          </h1>
        </div>
        <div className="grid grid-cols-5 gap-2 bg-[#A9B2B4] dark:bg-[#292d2e] relative flex-1 p-2 sm:p-4 -mt-2 rounded-xl sm:max-w-[30rem] mx-auto z-[1]">
          <img
            className="absolute -top-0.5 left-2 h-3.5 hidden sm:block"
            src="https://hash.game/modules/games2/assets/box-bg1-dark-baa28890.png"
            alt=""
          />
          <img
            className="absolute -top-8 right-2 h-14 z-100 hidden lg:block"
            src="https://hash.game/modules/games2/assets/box-bg2-dark-e53f83c0.png"
            alt=""
          />
          {Array.from({ length: 25 }, (_, index) => (
            <div
              key={index}
              className="relative cursor-pointer p-1 transition-all ease-linear text-center rounded-lg bg-[#E0E5E6] hover:bg-[#4a5354] dark:bg-[#444C4D] dark:hover:bg-[#545F60]"
            >
              <div className="pb-[100%]"></div>
            </div>
          ))}
        </div>
        <div className="absolute left-0 bottom-5 h-12 w-full hidden sm:flex z-0">
          <img
            className="absolute left-[83%] top-[7%] animate-twinkle opacity-80"
            src={star}
          />
          <img
            className="absolute left-[5%] top-[-90%] animate-twinkle delay-200 opacity-50"
            src={star}
          />
          <img
            className="absolute left-[14%] top-[-80%] animate-twinkle-big delay-500"
            src={star}
          />
          <img
            className="absolute left-[95%] top-[-40%] animate-twinkle-big delay-700"
            src={star}
          />
        </div>
      </section>
    </>
  );
};

export default Game;
