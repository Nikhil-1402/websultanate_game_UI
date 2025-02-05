import React from "react";
import Game from "./Game";
import Sidebar from "./Sidebar";

const Landing = () => {
  return (
    <>
      <div className="grid lg:grid-cols-9 bg-[#323738] rounded-xl overflow-hidden max-w-[1248px] mx-auto">
        <div className="sidebar lg:order-1 order-2 lg:col-span-3 w-full">
          <Sidebar />
        </div>
        <div className="game lg:order-2 order-1 lg:col-span-6 w-full">
          <Game />
        </div>
      </div>
    </>
  );
};

export default Landing;
