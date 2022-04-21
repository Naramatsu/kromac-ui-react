import React, { lazy, Suspense, useEffect } from "react";
import gridItemProps from "./storyProps/gridItemProps";
import {
  changeDocumentTitle,
  getComponentsRelated
} from "../../../utils/utils";

const Preview = lazy(() => import("../../Preview"));
const GridItem = lazy(() => import("./GridItem"));
const Spinner = lazy(() => import("../../lib/Spinner"));

const gridComponents = getComponentsRelated("gridItem");

const GridHistory = ({ location: { state = "classic" } }) => {
  useEffect(
    () => {
      document.title = changeDocumentTitle({ component: "GridItem", state });
      window.scrollTo(0, 0);
    },
    [state]
  );
  const gridProps = gridItemProps;
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
          <GridItem
            gridsProps={gridProps.gridProps}
            componentText={gridProps.componentText}
          />
        </Suspense>
      </Preview>
    </div>
  );
};

export default GridHistory;
