import React, { lazy, Suspense, useEffect, useContext } from "react";
import spinnerLighterProps from "./storyProps/spinnerLighterProps";
import spinnerWavesProps from "./storyProps/spinnerWavesProps";
import spinnerSvgProps from "./storyProps/spinnerSvgProps";
import spinnerRainbowProps from "./storyProps/spinnerRainbowProps";
import {
  changeDocumentTitle,
  getComponentsRelated,
} from "../../../utils/utils";
import { PreferencesContext } from "../../../store";

const Preview = lazy(() => import("../../Preview"));
const Spinner = lazy(() => import("./Spinner"));
const SpinnerLoader = lazy(() => import("../../lib/Spinner"));

const spinnerComponents = getComponentsRelated("spinner");

const spinnerToShow = (spinnerType) => {
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
  const { version } = useContext(PreferencesContext);

  useEffect(() => {
    document.title = changeDocumentTitle({ component: "Spinner", state });
    window.scrollTo(0, 0);
  }, [state]);

  const spinnerProps = {
    ...spinnerToShow(state),
    importType: `import Spinner from "${version}/dist/Spinner";`,
  };
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
        storyLink={spinnerProps.storyLink}
      >
        <Suspense
          fallback={
            <div className="center">
              <h4>Loading implementation</h4>
              <SpinnerLoader />
            </div>
          }
        >
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
