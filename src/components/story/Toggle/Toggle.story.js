import React, { lazy, Suspense, useEffect } from "react";
import toggleSwitchProps from "./storyProps/toggleSwitchProps";
import togglePowerProps from "./storyProps/togglePowerProps";
import { getComponentsRelated } from "../../../utils/utils";

const Preview = lazy(() => import("../../Preview"));
const Toggle = lazy(() => import("./Toggle"));

const toggleComponents = getComponentsRelated("toggle");

const ToggleToShow = toggleType => {
  switch (toggleType) {
    case "power":
      return togglePowerProps;
    default:
      return toggleSwitchProps;
  }
};

const ToggleHistory = ({ location: { state = "switch" } }) => {
  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [state]
  );
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
        componentsRealated={toggleComponents}
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
