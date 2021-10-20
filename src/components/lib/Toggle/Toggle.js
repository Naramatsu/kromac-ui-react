import React from "react";
import ToggleSwitch from "./components/ToggleSwitch";
import TogglePower from "./components/TogglePower";

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
