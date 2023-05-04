import React from "react";
import { Popup } from "./Popup";

export const GameOver = ({ msg }) => {
  return (
    <Popup>
      <div className="winner">
        <p className="msg">{msg}</p>
      </div>
    </Popup>
  );
};
