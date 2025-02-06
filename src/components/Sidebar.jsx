import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import {
  setGameMode,
  setMines,
  setAmount,
  setStart,
  setRandom,
  resetInitialState,
} from "../redux/features/game";
import inr from "../assets/inr.webp";
import SiteWideModal from "./SiteWideModal";

const Sidebar = () => {
  const { gameMode, mines, amount, start } = useSelector((state) => state.game);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const dispatch = useDispatch();
  const handleAmountChange = (e) => {
    dispatch(setAmount(e.target.value));
  };

  const handleBetting = () => {
    dispatch(setStart(true));
    dispatch(setRandom());
  };

  const handleCashOut = () => {
    dispatch(setStart(false));
    openModal();
  };

  const handleRandomSelection = () =>{
    dispatch(setStart(false))
  }

  const openModal = () => {
    setModalContent(
      <div className="">
        <h1 className="text-2xl mb-3 text-center">Congratulations</h1>
        <p className="!font-medium mb-2 text-center">You Won!!</p>
        <button
          onClick={() => {
            dispatch(resetInitialState());
            setIsModalOpen(false);
          }}
          className="w-full text-center py-2.5 bg-linear-to-r from-[#24ee89] to-[#9fe871] !text-black font-bold rounded-lg mb-2 cursor-pointer"
        >
          New Match
        </button>
      </div>
    );
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="text-white flex flex-col">
        <div className="lg:order-1 order-2 relative flex items-center w-full overflow-hidden flex-shrink-0 rounded-none h-12 lg:border-b lg:border-[#3a4142] lg:sticky top-0 lg:rounded-b-none">
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
        <div className="lg:order-2 order-1 betting-area md::px-5 px-2 md:py-5 py-2 md:block sm:hidden block">
          <div className="mb-3">
            <div className="flex items-center justify-between text-sm font-semibold text-white/50">
              <span className="!text-[#b3bec1]">Amount</span>
              <span className="!text-[#b3bec1]">≈0BCD</span>
            </div>
            <div className="">
              <div className="flex items-center w-full relative mt-2 bg-[#292d2e] rounded-lg px-1 pl-3 h-12 border border-white/10 mb-1.5">
                <img src={inr} className="w-4 h-4 mr-2" />
                <input
                  type="text"
                  name=""
                  value={amount}
                  onChange={(e) => handleAmountChange(e)}
                  disabled={start}
                  className="z-0 py-1 w-full h-12 font-bold px-1 outline-none border-none disabled:cursor-not-allowed"
                />
                <div className="flex gap-1">
                  <button
                    disabled={start}
                    className=" bg-[#3a4142] rounded h-10 px-3 flex items-center justify-center cursor-pointer disabled:cursor-not-allowed disabled:text-white/50"
                  >
                    1/2
                  </button>
                  <button
                    disabled={start}
                    className=" bg-[#3a4142] rounded h-10 px-3 flex items-center justify-center cursor-pointer disabled:cursor-not-allowed disabled:text-white/50"
                  >
                    2×
                  </button>
                  <div className="flex flex-col items-center bg-[#3a4142] rounded h-10">
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
                  onClick={() => handleRandomSelection()}
                  className="bg-[#3a4142] w-full text-center py-2.5 font-bold rounded-lg mb-2 cursor-pointer"
                >
                  Pick a tile randomly
                </button>
                <button
                  onClick={() => handleCashOut()}
                  className="w-full text-center py-2.5 bg-linear-to-l from-[#fbd765] to-[#ef9e3f] !text-black font-bold rounded-lg mb-2 cursor-pointer shadow-[0px_0px_10px_0px_rgba(255,187,0,0.5)]"
                >
                  Cash Out
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  handleBetting();
                }}
                className="w-full text-center py-2.5 bg-linear-to-r from-[#24ee89] to-[#9fe871] !text-black font-bold rounded-lg mb-2 cursor-pointer shadow-[0_0_12px_#23ee884d,0_-2px_#1dca6a_inset]"
              >
                Bet
              </button>
            )}
            <p className="text-sm bg-[#24ee891a] rounded-lg py-1 !text-white/50">
              Betting with $0 will enter demo mode.
            </p>
          </div>
        </div>
        <SiteWideModal
          buttonText="Trigger Modal"
          className="hidden modal-trigger-button"
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          // setShow={setShow}
        >
          {modalContent}
        </SiteWideModal>
      </section>
    </>
  );
};

export default Sidebar;
