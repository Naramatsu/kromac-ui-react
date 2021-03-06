import React, { lazy, Suspense, useEffect } from "react";
import sliderProps from "./storyProps/sliderProps";
import {
  changeDocumentTitle,
  getComponentsRelated
} from "../../../utils/utils";

const Preview = lazy(() => import("../../Preview"));
const Slider = lazy(() => import("./Slider"));
const Spinner = lazy(() => import("../../lib/Spinner"));

const sliderComponents = getComponentsRelated("slider");

const SliderHistory = ({ location }) => {
  useEffect(
    () => {
      document.title = changeDocumentTitle({ component: "Slider", state: "" });
      window.scrollTo(0, 0);
    },
    [location]
  );

  return (
    <div>
      <Preview
        title="Slider"
        subTitle={sliderProps.subTitle}
        description={sliderProps.description}
        importType={sliderProps.importType}
        propsDescription={sliderProps.propsDescription}
        notes={sliderProps.notes}
        componentsRealated={sliderComponents}
      >
        <Suspense
          fallback={
            <div className="center">
              <h4>Loading implementation</h4>
              <Spinner />
            </div>
          }
        >
          <Slider
            sliderProps={sliderProps.sliderProp}
            componentText={sliderProps.componentText}
          />
        </Suspense>
      </Preview>
    </div>
  );
};

export default SliderHistory;
