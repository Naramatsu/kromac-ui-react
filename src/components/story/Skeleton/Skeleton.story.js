import React, { lazy, Suspense } from "react";
import skeletonLightProps from "./storyProps/skeletonLightProps";
import skeletonDarkProps from "./storyProps/skeletonDarkProps";

const Preview = lazy(() => import("../../Preview"));
const Skeleton = lazy(() => import("./Skeleton"));

const SkeletonToShow = skeletonType => {
  switch (skeletonType) {
    case "dark":
      return skeletonDarkProps;
    default:
      return skeletonLightProps;
  }
};

const SkeletonHistory = ({ location: { state = "light" } }) => {
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
