import React, { lazy, Suspense, useEffect, useContext } from "react";
import skeletonLightProps from "./storyProps/skeletonLightProps";
import skeletonDarkProps from "./storyProps/skeletonDarkProps";
import {
  changeDocumentTitle,
  getComponentsRelated,
} from "../../../utils/utils";
import { PreferencesContext } from "../../../store";

const Preview = lazy(() => import("../../Preview"));
const Skeleton = lazy(() => import("./Skeleton"));
const Spinner = lazy(() => import("../../lib/Spinner"));

const skeletonComponents = getComponentsRelated("skeleton");

const SkeletonToShow = (skeletonType) => {
  switch (skeletonType) {
    case "dark":
      return skeletonDarkProps;
    default:
      return skeletonLightProps;
  }
};

const SkeletonHistory = ({ location: { state = "light" } }) => {
  const { version } = useContext(PreferencesContext);

  useEffect(() => {
    document.title = changeDocumentTitle({ component: "Skeleton", state });
    window.scrollTo(0, 0);
  }, [state]);

  const skeletonProps = {
    ...SkeletonToShow(state),
    importType: `import Skeleton from "${version}/dist/Skeleton";`,
  };
  return (
    <div>
      <Preview
        title="Skeleton"
        subTitle={skeletonProps.subTitle}
        description={skeletonProps.description}
        importType={skeletonProps.importType}
        propsDescription={skeletonProps.propsDescription}
        notes={skeletonProps.notes}
        componentsRealated={skeletonComponents}
      >
        <Suspense
          fallback={
            <div className="center">
              <h4>Loading implementation</h4>
              <Spinner />
            </div>
          }
        >
          <Skeleton
            skeletonProps={skeletonProps.skeletonProp}
            componentText={skeletonProps.componentText}
          />
        </Suspense>
      </Preview>
    </div>
  );
};

export default SkeletonHistory;
