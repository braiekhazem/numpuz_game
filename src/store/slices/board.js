import { createSlice } from "@reduxjs/toolkit";
import { RandomBoard } from "../../utils/RandomBoard";
const initialState = {
  Board: null,
  win: false,
  movements: 0,
  level: 8,
};

export function getInterfaces({ x, y }) {
  return [
    { x, y: y + 1 },
    { x, y: y - 1 },
    { x: x + 1, y: y },
    { x: x - 1, y: y },
  ];
}

const GameBoard = createSlice({
  name: "game Choices",
  initialState,
  reducers: {
    generateBoard(state, action) {
      const level = state.level;
      const CurrentOption = action.payload;
      const numOpt = +CurrentOption.substring(1);

      let board = Array.from(
        Array(numOpt)
          .fill()
          .map((_, i) =>
            Array(numOpt)
              .fill()
              .map((_, idx) => (i > 0 ? i * numOpt + idx + 1 : idx + 1))
          )
      );

      const X = board.length - 1;
      const Y = X;

      board[X][Y] = "";

      state.Board = RandomBoard(board, level);
    },
    setBoard(state, action) {
      const pos = action.payload.posClicked;
      const Board = state.Board;
      const Interfaces = getInterfaces(pos);
      const emptySquare = Interfaces.filter(
        (sqr) =>
          sqr.x < Board.length &&
          sqr.x >= 0 &&
          sqr.y < Board.length &&
          sqr.y >= 0
      ).find((sqr) => Board[sqr.x][sqr.y] === "");

      if (!emptySquare) return;

      const aux = Board[pos.x][pos.y];
      Board[pos.x][pos.y] = Board[emptySquare.x][emptySquare.y];
      Board[emptySquare.x][emptySquare.y] = aux;
      state.movements++;
      state.Board = Board;
    },
    setWin(state, action) {
      state.win = action.payload;
    },
    setMovement(state) {
      state.movements = state.movements + 1;
    },
    setLevel(state) {
      state.level = state.level + 1;
    },
    setNextLevel(state) {
      state.win = false;
      state.movements = 0;
    },
    restartLevel(state) {
      state.win = false;
      state.movements = 0;
    },

    resetGame(state) {
      state.Board = null;
      state.win = false;
      state.movements = 0;
      state.level = 3;
    },
  },
});

export const BoardActions = GameBoard.actions;
export default GameBoard;
