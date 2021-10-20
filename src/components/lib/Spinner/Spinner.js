import React from "react";
import SpinnerRainbow from "./components/SpinnerRainbow";
import SpinnerSVG from "./components/SpinnerSVG";
import SpinnerLighter from "./components/SpinnerLighter";
import SpinnerWaves from "./components/SpinnerWaves";

const Spinner = props => {
  const { spinnerType } = props;
  switch (spinnerType) {
    case "svg":
      return <SpinnerSVG {...props} />;
    case "rainbow":
      return <SpinnerRainbow {...props} />;
    case "waves":
      return <SpinnerWaves {...props} />;
    default:
      return <SpinnerLighter {...props} />;
  }
};

export default Spinner;
