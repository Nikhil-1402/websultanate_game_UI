import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import {
  setGameMode,
  setMines,
  setAmount,
  setStart,
  setRandom,
} from "../redux/features/game";

const Sidebar = () => {
  const { gameMode, mines, amount, start } = useSelector((state) => state.game);
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
      <section className="text-white">
        <div className="relative flex items-center w-full bg-layer4 overflow-hidden flex-shrink-0 rounded-none h-12 lg:order-first lg:border-b lg:border-[#3a4142] lg:sticky top-0 lg:rounded-b-none">
          <button
            onClick={() => dispatch(setGameMode("manual"))}
            disabled={start}
            className={`h-full flex-1 px-4 py-2 relative font-medium ease-in-out transition-all duration-150 cursor-pointer disabled:opacity-50 ${
              gameMode === "manual" ? "opacity-100" : "opacity-50"
            }`}
          >
            Manual
            {gameMode === "manual" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#24ee89] to-[#9fe871]"></span>
            )}
          </button>
          <button
            onClick={() => dispatch(setGameMode("auto"))}
            disabled={start}
            className={`h-full flex-1 px-4 py-2 relative font-medium ease-in-out transition-all duration-150 cursor-pointer disabled:opacity-50 ${
              gameMode === "auto" ? "opacity-100" : "opacity-50"
            }`}
          >
            Auto
            {gameMode === "auto" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#24ee89] to-[#9fe871]"></span>
            )}
          </button>
        </div>
        <div className="betting-area px-5 py-5">
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
              <div className="flex justify-between gap-2 px-1">
                <button
                  className="bg-[#3a4142] opacity-50 font-semibold rounded py-2 w-full cursor-not-allowed"
                  disabled
                >
                  10
                </button>
                <button
                  className="bg-[#3a4142] opacity-50 font-semibold rounded py-2 w-full cursor-not-allowed"
                  disabled
                >
                  100
                </button>
                <button
                  className="bg-[#3a4142] opacity-50 font-semibold rounded py-2 w-full cursor-not-allowed"
                  disabled
                >
                  1.0K
                </button>
                <button
                  className="bg-[#3a4142] opacity-50 font-semibold rounded py-2 w-full cursor-not-allowed"
                  disabled
                >
                  10.0K
                </button>
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
      </section>
    </>
  );
};

export default Sidebar;
