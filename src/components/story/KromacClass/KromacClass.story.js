import React, { lazy, Suspense, useEffect } from "react";
import kromacClassProps from "./storyProps/kromacClassProps";
import {
  changeDocumentTitle,
  getComponentsRelated
} from "../../../utils/utils";

const Preview = lazy(() => import("../../Preview"));
const KromacClass = lazy(() => import("./KromacClass"));
const Spinner = lazy(() => import("../../lib/Spinner"));

const kromacClassComponents = getComponentsRelated("class");

const KromacClassHistory = ({ location }) => {
  useEffect(
    () => {
      document.title = changeDocumentTitle({ component: "class", state: "" });
      window.scrollTo(0, 0);
    },
    [location]
  );

  return (
    <div>
      <Preview
        title="Kromac class"
        subTitle={kromacClassProps.subTitle}
        description={kromacClassProps.description}
        importType={kromacClassProps.importType}
        propsDescription={kromacClassProps.propsDescription}
        notes={kromacClassProps.notes}
        componentsRealated={kromacClassComponents}
      >
        <Suspense
          fallback={
            <div className="center">
              <h4>Loading implementation</h4>
              <Spinner />
            </div>
          }
        >
          <KromacClass
            kromacClassProps={kromacClassProps.kromacClassProps}
            componentText={kromacClassProps.componentText}
          />
        </Suspense>
      </Preview>
    </div>
  );
};

export default KromacClassHistory;
