import { useDispatch } from "react-redux";
import { BoardActions } from "../store/slices/board";
import { GameOptions } from "../store/slices/optionGame";
export const Popup = ({ children }) => {
  const dispatch = useDispatch();
  const resetGame = () => {
    dispatch(BoardActions.resetGame());
    dispatch(GameOptions.resetGame());
  };
  return (
    <div className="popup">
      <div className="child">
        {children}
        <div className="reset" onClick={resetGame}>
          Reset
        </div>
      </div>
    </div>
  );
};
