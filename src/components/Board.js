import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BoardActions } from "../store/slices/board";
import { CheckWin } from "../utils/CheckWin";
import { GameOver } from "./GameOver";
import { Square } from "./Square";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { GameOptions } from "../store/slices/optionGame";

export const Board = ({ CurrentOption }) => {
  const InitialTime = 2 * 60 * 1000;
  const { Board, win, movements } = useSelector((state) => state.Board);
  const [time, setTime] = useState(InitialTime);
  const percentage = (time / InitialTime) * 100;
  const dispatch = useDispatch();

  const resetGameHandler = () => {
    dispatch(GameOptions.resetGame());
  };

  useEffect(() => {
    if (percentage >= 0)
      setTimeout(() => {
        setTime(time - 1000);
      }, 1000);
  }, [time]);

  useEffect(() => {
    if (!Board) {
      dispatch(BoardActions.generateBoard(CurrentOption));
      return;
    }
    if (CheckWin(Board)) {
      dispatch(BoardActions.setWin(true));
    }
  }, [Board, CurrentOption, dispatch]);
  const windowWidth = window.innerWidth;

  return (
    <>
      {win && <GameOver msg="You Win" />}
      <div className="board_container">
        <div className="board_container-back" onClick={resetGameHandler}>
          <ArrowLeftOutlined />
        </div>
        <div
          className="board"
          style={{
            maxWidth: `${
              windowWidth < 480 && Board?.length > 5
                ? "90%"
                : `calc(${Board?.length} * 50px + ${Board?.length - 1} * 7px)`
            } `,
          }}
        >
          {Board?.map((row, x) =>
            row.map((cell, y) => (
              <Square key={y} cell={cell} pos={{ x, y }} Board={Board} />
            ))
          )}
        </div>
        {/* <div className="gamesetting">
        <p className="mov">
          Movement: <span>{movements}</span>
        </p>
        <p className="bar">
          <div style={{ width: `${percentage}%` }}></div>
        </p>
      </div> */}
      </div>
    </>
  );
};
