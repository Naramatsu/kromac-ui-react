import React, { lazy } from "react";

const ToggleSwitch = lazy(() => import("./components/ToggleSwitch"));
const TogglePower = lazy(() => import("./components/TogglePower"));

const Toggle = props => {
  const { toggleType } = props;
  switch (toggleType) {
    case "power":
      return <TogglePower {...props} />;
    default:
      return <ToggleSwitch {...props} />;
  }
};

export default Toggle;
