import React from "react";
import Game from "./Game";
import Sidebar from "./Sidebar";
import {
  CircleHelp,
  Heart,
  Music,
  Music4,
  Nut,
  Route,
  Send,
  Star,
  Volume2,
} from "lucide-react";

const Landing = () => {
  return (
    <>
      <div className="bg-[#323738] rounded-xl overflow-hidden max-w-[1248px] mx-auto relative">
        <div className="game-container grid lg:grid-cols-9 bg-[#323738]">
          <div className="sidebar lg:order-1 order-2 lg:col-span-3 w-full lg:border-r lg:border-[#3a4142]">
            <Sidebar />
          </div>
          <div className="game lg:order-2 order-1 lg:col-span-6 w-full">
            <Game />
          </div>
        </div>
        <div className="order-3 col-span-9 p-1 border-t border-[#3a4142] bg-[#292d2e]">
          <div className="max-w-7xl mx-auto flex items-center justify-between sm:px-10 px-0 text-[#b3bec1] h-full">
            <div className="flex items-center sm:gap-4 gap-3 h-full">
              <button className="flex items-center sm:gap-1 cursor-pointer py-2 px-1">
                <Star fill="#b3bec1" className="w-5 h-5" />
                <span className="mt-px !font-medium ml-0.5 sm:block hidden">20806</span>
              </button>
              <button className="flex items-center sm:gap-1 cursor-pointer py-2 px-1">
                <Heart fill="#b3bec1" className="w-5 h-5" />
                <span className="mt-px !font-medium ml-0.5 sm:block hidden">20845</span>
              </button>
              <button className="cursor-pointer py-2 px-1">
                <Send fill="#b3bec1" className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center sm:gap-4 gap-3">
              <button className="cursor-pointer py-2 px-1">
                <Music4 className="w-5 h-5" />
              </button>
              <button className="cursor-pointer py-2 px-1">
                <Volume2 className="w-5 h-5" />
              </button>
              <button className="cursor-pointer py-2 px-1">
                <Route className="w-5 h-5" />
              </button>
              <button className="cursor-pointer py-2 px-1">
                <Nut className="w-5 h-5" />
              </button>
              <button className="cursor-pointer py-2 px-1">
                <CircleHelp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
