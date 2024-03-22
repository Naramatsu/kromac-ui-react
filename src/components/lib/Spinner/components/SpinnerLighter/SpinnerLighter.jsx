import React from "react";
import classNames from "classnames";
import { styleCentered } from "../../../../../utils/utils";

const SpinnerLighter = (props) => {
  const {
    size = "sm",
    isCentered = false,
    shadows = true,
    bgColorInside = "#fff",
    ...rest
  } = props;

  const { key, id } = rest;
  const newRest = {
    key,
    id,
  };

  const isShadows = shadows ? "shadows" : "";
  const kromacSpinner = classNames("kromac-spinner", "spinner-lighter", {
    [size]: !!size,
    [isShadows]: !!isShadows,
    [rest.className]: !!rest.className,
  });

  return (
    <div
      {...newRest}
      className={kromacSpinner}
      style={styleCentered(isCentered)}
    >
      <div className="loader">
        <span style={{ background: bgColorInside }} />
      </div>
    </div>
  );
};

export default SpinnerLighter;
