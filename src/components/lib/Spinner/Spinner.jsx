import React from "react";

import SpinnerRainbow from "./components/SpinnerRainbow/SpinnerRainbow.jsx";
import SpinnerSVG from "./components/SpinnerSVG/SpinnerSVG.jsx";
import SpinnerLighter from "./components/SpinnerLighter";
import SpinnerWaves from "./components/SpinnerWaves/SpinnerWaves.jsx";

const Spinner = (props) => {
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
