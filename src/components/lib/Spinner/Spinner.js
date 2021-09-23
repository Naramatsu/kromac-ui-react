import React, { lazy } from "react";
import "./Spinner.scss";

const SpinnerRainbow = lazy(() => import("./components/SpinnerRainbow"));
const SpinnerSVG = lazy(() => import("./components/SpinnerSVG"));
const SpinnerLighter = lazy(() => import("./components/SpinnerLighter"));
const SpinnerWaves = lazy(() => import("./components/SpinnerWaves"));

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
