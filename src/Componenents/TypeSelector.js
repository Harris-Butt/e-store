import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import "./TypeSelector.css";
import Button from "@material-ui/core/Button";

function TypeSelector() {
  const appContext = useContext(AppContext);
  return (
    <>
      <div className="wearType__selector">
        <Link to="bombers">
          <Button
            className="wearType__button"
            onClick={() => appContext.stateDispatch({ type: "bombers" })}
          >
            Bombers
          </Button>
        </Link>
        <Link to="jackets">
          <Button
            className="wearType__button"
            onClick={() => appContext.stateDispatch({ type: "jackets" })}
          >
            Jackets
          </Button>
        </Link>
      </div>
      <hr />
    </>
  );
}

export default TypeSelector;
