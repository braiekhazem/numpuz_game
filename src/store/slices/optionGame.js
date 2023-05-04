import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Options: ["x3", "x4", "x5", "x7", "x9"],
  CurrentOption: "",
};
const GameOpt = createSlice({
  name: "game Choices",
  initialState,
  reducers: {
    setOption(state, action) {
      state.CurrentOption = action.payload;
    },
    resetGame(state) {
      state.CurrentOption = "";
    },
  },
});

export const GameOptions = GameOpt.actions;
export default GameOpt;
