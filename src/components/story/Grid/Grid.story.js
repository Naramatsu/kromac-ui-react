import React, { lazy, Suspense, useEffect } from "react";
import gridProps from "./storyProps/gridClassicProps";
import {
  changeDocumentTitle,
  getComponentsRelated
} from "../../../utils/utils";

const Preview = lazy(() => import("../../Preview"));
const Grid = lazy(() => import("./Grid"));
const Spinner = lazy(() => import("../../lib/Spinner"));

const gridComponents = getComponentsRelated("grid");

const GridHistory = ({ location: { state = "classic" } }) => {
  useEffect(
    () => {
      document.title = changeDocumentTitle({ component: "Grid", state });
      window.scrollTo(0, 0);
    },
    [state]
  );

  return (
    <div>
      <Preview
        title="Grid"
        subTitle={gridProps.subTitle}
        description={gridProps.description}
        importType={gridProps.importType}
        propsDescription={gridProps.propsDescription}
        notes={gridProps.notes}
        componentsRealated={gridComponents}
      >
        <Suspense
          fallback={
            <div className="center">
              <h4>Loading implementation</h4>
              <Spinner />
            </div>
          }
        >
          <Grid
            gridsProps={gridProps.gridProps}
            componentText={gridProps.componentText}
          />
        </Suspense>
      </Preview>
    </div>
  );
};

export default GridHistory;
