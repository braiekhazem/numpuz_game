import { configureStore } from "@reduxjs/toolkit";
import GameBoard from "./slices/board";
import GameOpt from "./slices/optionGame";

const store = configureStore({
  reducer: {
    Options: GameOpt.reducer,
    Board: GameBoard.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
