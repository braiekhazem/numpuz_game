export const CheckWin = (board) => {
  let result = true;
  if (board[0][0] !== 1 || board[board.length - 1][board.length - 1] !== "") {
    return false;
  }
  let x = 1;
  let y = 1;

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length - 1; y++) {
      if (board[x][y + 1] !== "" && board[x][y + 1] !== board[x][y] + 1) {
        console.log("error");
        result = false;
        break;
      }
    }
    if (!result) break;
  }
  return result;
};
