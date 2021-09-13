import React, { lazy, Suspense, useEffect } from "react";
import toggleSwitchProps from "./storyProps/toggleSwitchProps";
import togglePowerProps from "./storyProps/togglePowerProps";
import {
  changeDocumentTitle,
  getComponentsRelated
} from "../../../utils/utils";

const Preview = lazy(() => import("../../Preview"));
const Toggle = lazy(() => import("./Toggle"));
const Spinner = lazy(() => import("../../lib/Spinner"));

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
      document.title = changeDocumentTitle({ component: "Toggle", state });
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
        <Suspense
          fallback={
            <div className="center">
              <h4>Loading implementation</h4>
              <Spinner />
            </div>
          }
        >
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
