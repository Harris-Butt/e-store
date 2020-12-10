import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import Button from "@material-ui/core/Button";
import "./GenderSelector.css";
function GenderSelector() {
  const appContext = useContext(AppContext);
  return (
    <div>
      <div className="gender__selector">
        <Link to="men">
          <Button
            onClick={() => appContext.stateDispatch({ type: "men" })}
            color="primary"
          >
            Men
          </Button>
        </Link>
        <Link to="women">
          <Button
            onClick={() => appContext.stateDispatch({ type: "women" })}
            color="primary"
          >
            Women
          </Button>
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default GenderSelector;
