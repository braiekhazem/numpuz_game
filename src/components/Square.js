import React from "react";
import { useDispatch } from "react-redux";
import { BoardActions } from "../store/slices/board";

export const Square = ({ cell, pos, Board }) => {
  const dispatch = useDispatch();
  const switchPos = () => {
    dispatch(BoardActions.setBoard({ posClicked: pos }));
  };
  const windowWidth = window.innerWidth;
  const BoardWith = (windowWidth * 90) / 100 - (Board?.length - 1) * 7 - 16;
  const cellSize = BoardWith / Board?.length;

  const style =
    Board?.length > 5 && windowWidth <= 480
      ? {
          width: cellSize,
          minWidth: cellSize,
          minHeight: cellSize,
          maxWidth: cellSize,
          maxHeight: cellSize,
          height: cellSize,
        }
      : {};
  return (
    <div
      className={`cell ${!cell ? "empty" : ""}`}
      style={{
        ...style,
      }}
      onClick={switchPos}
    >
      {cell}
    </div>
  );
};
