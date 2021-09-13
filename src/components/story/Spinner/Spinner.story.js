import React, { lazy, Suspense, useEffect } from "react";
import spinnerLighterProps from "./storyProps/spinnerLighterProps";
import spinnerWavesProps from "./storyProps/spinnerWavesProps";
import spinnerSvgProps from "./storyProps/spinnerSvgProps";
import spinnerRainbowProps from "./storyProps/spinnerRainbowProps";
import {
  changeDocumentTitle,
  getComponentsRelated
} from "../../../utils/utils";

const Preview = lazy(() => import("../../Preview"));
const Spinner = lazy(() => import("./Spinner"));

const spinnerComponents = getComponentsRelated("spinner");

const spinnerToShow = spinnerType => {
  switch (spinnerType) {
    case "waves":
      return spinnerWavesProps;
    case "svg":
      return spinnerSvgProps;
    case "rainbow":
      return spinnerRainbowProps;
    default:
      return spinnerLighterProps;
  }
};

const SpinnerHistory = ({ location: { state = "lighter" } }) => {
  useEffect(
    () => {
      document.title = changeDocumentTitle({ component: "Spinner", state });
      window.scrollTo(0, 0);
    },
    [state]
  );
  const spinnerProps = spinnerToShow(state);
  return (
    <div>
      <Preview
        title="Spinner"
        subTitle={spinnerProps.subTitle}
        description={spinnerProps.description}
        importType={spinnerProps.importType}
        propsDescription={spinnerProps.propsDescription}
        notes={spinnerProps.notes}
        componentsRealated={spinnerComponents}
      >
        <Suspense fallback={<div>Loading Spinner component...</div>}>
          <Spinner
            spinnersProps={spinnerProps.spinnerProps}
            componentText={spinnerProps.componentText}
          />
        </Suspense>
      </Preview>
    </div>
  );
};

export default SpinnerHistory;
