import React, { lazy, Suspense, useEffect, useContext } from "react";
import gridProps from "./storyProps/gridClassicProps";
import {
  changeDocumentTitle,
  getComponentsRelated,
} from "../../../utils/utils";
import { PreferencesContext } from "../../../store";

const Preview = lazy(() => import("../../Preview"));
const Grid = lazy(() => import("./Grid"));
const Spinner = lazy(() => import("../../lib/Spinner"));

const gridComponents = getComponentsRelated("grid");

const GridHistory = ({ location: { state = "classic" } }) => {
  const { version } = useContext(PreferencesContext);

  useEffect(() => {
    document.title = changeDocumentTitle({ component: "Grid", state });
    window.scrollTo(0, 0);
  }, [state]);

  return (
    <div>
      <Preview
        title="Grid"
        subTitle={gridProps.subTitle}
        description={gridProps.description}
        importType={gridProps.importType(version)}
        propsDescription={gridProps.propsDescription}
        notes={gridProps.notes}
        componentsRealated={gridComponents}
        storyLink={gridProps.storyLink}
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
