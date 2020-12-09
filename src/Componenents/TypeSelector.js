import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

function TypeSelector() {
  const appContext = useContext(AppContext);
  return (
    <div>
      <Link to="bombers">
        <button onClick={() => appContext.stateDispatch({ type: "bombers" })}>
          Bomber
        </button>
      </Link>
      <Link to="jackets">
        <button onClick={() => appContext.stateDispatch({ type: "jackets" })}>
          Jackets
        </button>
      </Link>
    </div>
  );
}

export default TypeSelector;
