import React, { lazy, Suspense } from "react";
import toggleSwitchProps from "./storyProps/toggleSwitchProps";
import togglePowerProps from "./storyProps/togglePowerProps";

const Preview = lazy(() => import("../../Preview"));
const Toggle = lazy(() => import("./Toggle"));

const ToggleToShow = toggleType => {
  switch (toggleType) {
    case "power":
      return togglePowerProps;
    default:
      return toggleSwitchProps;
  }
};

const ToggleHistory = ({ location: { state = "switch" } }) => {
  const toggleProps = ToggleToShow(state);
  return (
    <div>
      <Preview
        title="Toggle"
        subTitle={toggleProps.subTitle}
        description={toggleProps.description}
        importType={toggleProps.importType}
        propsDescription={toggleProps.propsDescription}
        notes={toggleProps.notes}
      >
        <Suspense fallback={<div>Cargando card...</div>}>
          <Toggle
            toggleProps={toggleProps.toggleProp}
            componentText={toggleProps.componentText}
          />
        </Suspense>
      </Preview>
    </div>
  );
};

export default ToggleHistory;
