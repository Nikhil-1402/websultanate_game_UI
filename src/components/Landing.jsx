import React from "react";
import Game from "./Game";
import Sidebar from "./Sidebar";

const Landing = () => {
  return (
    <>
      <div className="grid grid-cols-9 border border-white/10 bg-[#323738] rounded-xl overflow-hidden">
        <div className="sidebar col-span-3 w-full">
          <Sidebar />
        </div>
        <div className="game col-span-6 w-full">
          <Game />
        </div>
      </div>
    </>
  );
};

export default Landing;
