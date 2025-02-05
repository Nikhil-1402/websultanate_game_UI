import React from "react";
import star from "../assets/star.png";
import diamond from "../assets/diamond.webp";
import mine from "../assets/mine.webp";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import {
  setAmount,
  setMines,
  setRandom,
  setStart,
} from "../redux/features/game";
import { ChevronDown, ChevronUp } from "lucide-react";

const Game = () => {
  const { random, mines, amount, start } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const handleAmountChange = (e) => {
    dispatch(setAmount(e.target.value));
  };

  const handleBetting = () => {
    dispatch(setStart(true));
    dispatch(setRandom());
  };

  return (
    <>
      <section className="w-full h-full lg:py-5 py-2 lg:px-3 relative">
        <div className="md:pl-6 md:pr-4 z-10 lg:block sm:my-2 md:mb-10 md:mt-1">
          <h1 className="bg-[#323738] mx-2 flex items-center justify-center h-8 md:h-10 truncate rounded-lg text-center leading-10 !text-[#b3bec1] text-sm">
            Game result will be displayed
          </h1>
        </div>
        <div className="grid grid-cols-5 gap-2 bg-[#A9B2B4] dark:bg-[#292d2e] relative flex-1 p-2 sm:p-4 rounded-xl sm:max-w-[30rem] mx-auto z-[1]">
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
          {(random.length > 0
            ? random
            : Array.from({ length: 25 }, () => 1)
          ).map((value, index) => (
            <div key={index}>
              <Card img={value === 2 ? mine : diamond} value={value} />
            </div>
          ))}
        </div>
        <div className="betting-area px-5 py-5 text-white md:hidden sm:block hidden">
          <div className="mb-3">
            <div className="flex items-center justify-between text-sm font-semibold text-white/50">
              <span className="!text-[#b3bec1]">Amount</span>
              <span className="!text-[#b3bec1]">≈0BCD</span>
            </div>
            <div className="">
              <div className="flex items-center w-full relative mt-2 bg-[#292d2e] rounded-lg px-1 pl-3 h-9 border border-white/10 mb-1.5">
                <img
                  src="https://hash.game/coin/INR.rect.png"
                  alt="Currency"
                  className="w-4 h-4 mr-2"
                />
                <input
                  type="text"
                  name=""
                  value={amount}
                  onChange={(e) => handleAmountChange(e)}
                  disabled={start}
                  className="z-0 py-1 w-full h-9 font-bold px-1 outline-none border-none disabled:cursor-not-allowed"
                />
                <div className="flex gap-1">
                  <button
                    disabled={start}
                    className=" bg-[#3a4142] rounded h-7 px-3 flex items-center justify-center cursor-pointer disabled:cursor-not-allowed disabled:text-white/50"
                  >
                    1/2
                  </button>
                  <button
                    disabled={start}
                    className=" bg-[#3a4142] rounded h-7 px-3 flex items-center justify-center cursor-pointer disabled:cursor-not-allowed disabled:text-white/50"
                  >
                    2×
                  </button>
                  <div className="flex flex-col items-center bg-[#3a4142] rounded h-7">
                    <button
                      disabled={start}
                      className="flex w-full h-full items-center justify-center disabled:cursor-not-allowed px-3 disabled:text-white/50"
                    >
                      <ChevronUp className="w-4 h-4" />
                    </button>
                    <button
                      disabled={start}
                      className="flex w-full h-full items-center justify-center disabled:cursor-not-allowed px-3 disabled:text-white/50"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="space-y-2">
              <span className="!text-[#b3bec1] text-sm">Mines</span>
              <div className="bg-[#292d2e] flex items-center justify-between px-3 py-2.5 rounded-lg mt-2">
                <span
                  className={`mr-3 w-7 ${
                    start ? "text-[#b3bec1]" : "text-white"
                  }`}
                >
                  {mines < 10 ? "0" + mines : mines}
                </span>
                <div className="relative w-full">
                  <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-700 rounded-lg transform -translate-y-1/2"></div>

                  <div
                    className={`absolute top-1/2 left-0 h-2 ${
                      start ? "bg-[#9fe871]/50" : "bg-[#9fe871]"
                    } rounded-lg transform -translate-y-1/2`}
                    style={{ width: `${((mines - 1) / (24 - 1)) * 100}%` }}
                  ></div>

                  <input
                    type="range"
                    min="1"
                    max="24"
                    value={mines}
                    onChange={(e) => dispatch(setMines(Number(e.target.value)))}
                    disabled={start}
                    className="w-full h-2 bg-transparent appearance-none cursor-pointer disabled:cursor-not-allowed"
                    style={{
                      WebkitAppearance: "none",
                    }}
                  />
                </div>
                <div className="flex justify-between">
                  <span
                    className={`ml-3  ${
                      start ? "text-[#b3bec1]" : "text-white"
                    }`}
                  >
                    24
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bet w-full text-center">
            {start ? (
              <>
                <button
                  onClick={() => dispatch(setStart(false))}
                  className="bg-[#3a4142] w-full text-center py-2.5 font-bold rounded-lg mb-2 cursor-pointer"
                >
                  Pick a tile randomly
                </button>
                <button
                  onClick={() => dispatch(setStart(false))}
                  className="w-full text-center py-2.5 bg-linear-to-l from-[#fbd765] to-[#ef9e3f] !text-black font-bold rounded-lg mb-2 cursor-pointer"
                >
                  Cash Out
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  handleBetting();
                }}
                className="w-full text-center py-2.5 bg-linear-to-r from-[#24ee89] to-[#9fe871] !text-black font-bold rounded-lg mb-2 cursor-pointer"
              >
                Bet
              </button>
            )}
            <p className="text-sm bg-[#9fe871]/20 rounded-lg py-1 !text-white/50">
              Betting with $0 will enter demo mode.
            </p>
          </div>
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
