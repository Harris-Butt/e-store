import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

function GenderSelector() {
  const appContext = useContext(AppContext);
  return (
    <div>
      <Link to="men">
        <button onClick={() => appContext.stateDispatch({ type: "men" })}>
          Men
        </button>
      </Link>
      <Link to="women">
        <button onClick={() => appContext.stateDispatch({ type: "women" })}>
          Women
        </button>
      </Link>
    </div>
  );
}

export default GenderSelector;
