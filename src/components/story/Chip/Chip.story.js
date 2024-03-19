import React, { lazy, Suspense, useEffect } from "react";
import chipProps from "./storyProps/chipProps";
import {
  changeDocumentTitle,
  getComponentsRelated,
} from "../../../utils/utils";

const Preview = lazy(() => import("../../Preview"));
const Chip = lazy(() => import("./Chip"));
const Spinner = lazy(() => import("../../lib/Spinner"));

const chipComponents = getComponentsRelated("chip");

const ChipHistory = ({ location }) => {
  useEffect(() => {
    document.title = changeDocumentTitle({ component: "Chip", state: "" });
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Preview
        title="Chip"
        subTitle={chipProps.subTitle}
        description={chipProps.description}
        importType={chipProps.importType}
        propsDescription={chipProps.propsDescription}
        notes={chipProps.notes}
        componentsRealated={chipComponents}
      >
        <Suspense
          fallback={
            <div className="center">
              <h4>Loading implementation</h4>
              <Spinner />
            </div>
          }
        >
          <Chip
            chipsProps={chipProps.chipProps}
            componentText={chipProps.componentText}
          />
        </Suspense>
      </Preview>
    </div>
  );
};

export default ChipHistory;
