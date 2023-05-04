import { getInterfaces } from "../store/slices/board";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const RandomBoard = (board, level) => {
  const newBoard = [...board];
  const length = newBoard.length - 1;
  const NumRandom = Math.pow(newBoard.length, level);
  let pos = { x: length, y: length };
  Array.from(Array(NumRandom)).forEach((_, i) => {
    const Interfaces = getInterfaces(pos).filter(
      (sqr) => sqr.x <= length && sqr.x >= 0 && sqr.y <= length && sqr.y >= 0
    );
    const RandomSqr = Interfaces[getRandomInt(Interfaces.length)];
    [newBoard[pos.x][pos.y], newBoard[RandomSqr.x][RandomSqr.y]] = [
      newBoard[RandomSqr.x][RandomSqr.y],
      newBoard[pos.x][pos.y],
    ];
    pos = { x: RandomSqr.x, y: RandomSqr.y };
  });

  return board;
};
