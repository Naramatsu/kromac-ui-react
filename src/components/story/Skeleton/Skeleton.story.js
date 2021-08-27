import React, { lazy, Suspense, useEffect } from "react";
import skeletonLightProps from "./storyProps/skeletonLightProps";
import skeletonDarkProps from "./storyProps/skeletonDarkProps";
import { getComponentsRelated } from "../../../utils/utils";

const Preview = lazy(() => import("../../Preview"));
const Skeleton = lazy(() => import("./Skeleton"));

const skeletonComponents = getComponentsRelated("skeleton");

const SkeletonToShow = skeletonType => {
  switch (skeletonType) {
    case "dark":
      return skeletonDarkProps;
    default:
      return skeletonLightProps;
  }
};

const SkeletonHistory = ({ location: { state = "light" } }) => {
  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [state]
  );
  const skeletonProps = SkeletonToShow(state);
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
        <Suspense fallback={<div>Cargando card...</div>}>
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
