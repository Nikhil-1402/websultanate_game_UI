import { useState } from "react";
import "./App.css"
import Landing from "./components/Landing";

function App() {
  return (
    <>
      <section className="px-[10%] py-10 min-h-screen bg-[#232626]">
        <Landing />
      </section>
    </>
  );
}

export default App;
