import { useState } from "react";
import "./App.css";
import Landing from "./components/Landing";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <section className="px-[10%] py-10 min-h-screen bg-[#232626]">
          <Landing />
        </section>
      </Provider>
    </>
  );
}

export default App;
