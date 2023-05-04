import React from "react";

import { Option } from "./option";

function StartGame({ Options }) {
  return (
    <div className="start">
      {Options.map((opt, i) => {
        return <Option opt={opt} key={i} />;
      })}
    </div>
  );
}

export default StartGame;
