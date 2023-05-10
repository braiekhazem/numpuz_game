import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Options: ["x3", "x5", "x6", "x7", "x8"],
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
    setNextOption(state) {
      const nextOptionIndex =
        +state.Options?.findIndex((opt) => opt === state?.CurrentOption) + 1;
      const nextOption = state.Options[nextOptionIndex] || state.Options[0];
      state.CurrentOption = nextOption;
    },
  },
});

export const GameOptions = GameOpt.actions;
export default GameOpt;
