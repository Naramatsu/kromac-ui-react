import React, { lazy, Suspense } from "react";
import spinnerLighterProps from "./storyProps/spinnerLighterProps";
import spinnerWavesProps from "./storyProps/spinnerWavesProps";
import spinnerSvgProps from "./storyProps/spinnerSvgProps";
import spinnerRainbowProps from "./storyProps/spinnerRainbowProps";

const Preview = lazy(() => import("../../Preview"));
const Spinner = lazy(() => import("./Spinner"));

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
      >
        <Suspense fallback={<div>Cargando card...</div>}>
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
