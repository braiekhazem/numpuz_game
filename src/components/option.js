import React from "react";
import { useDispatch } from "react-redux";
import GameOpt, { GameOptions } from "../store/slices/optionGame";

export const Option = ({ opt }) => {
  const dispatch = useDispatch();
  const SetOtp = () => {
    dispatch(GameOptions.setOption(opt));
  };
  return (
    <div className="opt" onClick={SetOtp}>
      {opt}
    </div>
  );
};
