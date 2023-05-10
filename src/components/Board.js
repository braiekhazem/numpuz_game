import React, { useEffect, useState } from "react";
import restardIcon from "./../assets/icons/restard.svg";
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

  const restartGame = () => {
    dispatch(BoardActions.generateBoard(CurrentOption));
    dispatch(GameOptions.setOption(CurrentOption));
    dispatch(BoardActions.restartLevel());
  };

  useEffect(() => {
    if (percentage >= 0)
      setTimeout(() => {
        setTime(time - 1000);
      }, 1000);
  }, [time]);

  useEffect(() => {
    dispatch(BoardActions.generateBoard(CurrentOption));
  }, [CurrentOption, dispatch]);

  useEffect(() => {
    if (Board && CheckWin(Board)) {
      dispatch(BoardActions.setWin(true));
    }
  }, [Board]);

  const windowWidth = window.innerWidth;
  return (
    <>
      {win && <GameOver msg={`Congratulations! You win`} />}
      <div className="board_container">
        <div className="board_container-back" onClick={resetGameHandler}>
          <ArrowLeftOutlined />
        </div>
        <div className="board_container-back restard" onClick={restartGame}>
          <img src={restardIcon} />
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
