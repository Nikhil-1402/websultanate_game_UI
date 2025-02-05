import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameMode: "manual",
  mines: 4,
  amount: 0,
  start: false,
  random: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameMode: (state, action) => {
      state.gameMode = action.payload;
    },
    setMines: (state, action) => {
      state.mines = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setStart: (state, action) => {
      state.start = action.payload;
    },
    setRandom: (state) => {
      const totalLength = 25;
      const minesCount = state.mines;
      const randomArray = Array(minesCount)
        .fill(2)
        .concat(Array(totalLength - minesCount).fill(1));
      for (let i = randomArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomArray[i], randomArray[j]] = [randomArray[j], randomArray[i]];
      }

      state.random = randomArray;
    },
    resetInitialState: (state) => {
      state.amount = 0;
      state.gameMode = "Manual";
      state.mines = 4;
      state.random = [];
      state.start = false;
    },
  },
});

export const {
  setGameMode,
  setMines,
  setAmount,
  setStart,
  setRandom,
  resetInitialState,
} = gameSlice.actions;
export default gameSlice.reducer;
