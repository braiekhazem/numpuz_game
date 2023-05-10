import React from "react";
import { Popup } from "./Popup";
import WinnerIcon from "././../assets/icons/pngegg.png";
import { useDispatch } from "react-redux";
import { BoardActions } from "../store/slices/board";
import { GameOptions } from "../store/slices/optionGame";

export const GameOver = ({ msg }) => {
  const dispatch = useDispatch();
  const resetGame = () => {
    dispatch(BoardActions.resetGame());
    dispatch(GameOptions.resetGame());
  };
  const nextLevel = () => {
    dispatch(GameOptions.setNextOption());
    dispatch(BoardActions.setNextLevel());
  };
  const restartLevel = () => {
    dispatch(BoardActions.generateBoard("x3"));
    dispatch(GameOptions.setOption("x3"));
    dispatch(BoardActions.restartLevel());
  };

  return (
    <Popup>
      <div className="winner">
        <div className="winner_icon">
          <img src={WinnerIcon} />
        </div>
        <p className="msg">{msg}</p>
        <div className="winner_buttons">
          <div className="winner_buttons-one" onClick={resetGame}>
            Other Levels
          </div>
          <div className="winner_buttons-two" onClick={restartLevel}>
            Restart
          </div>
          <div className="winner_buttons-three" onClick={nextLevel}>
            Next Level
          </div>
        </div>
      </div>
    </Popup>
  );
};
