import React, { lazy, Suspense, useEffect } from "react";
import bannerClassicProps from "./storyProps/bannerClassicProps";
import bannerImageProps from "./storyProps/bannerImageProps";
import bannerTextProps from "./storyProps/bannerTextProps";
import {
  changeDocumentTitle,
  getComponentsRelated
} from "../../../utils/utils";

const Preview = lazy(() => import("../../Preview"));
const Banner = lazy(() => import("./Banner"));

const bannerComponents = getComponentsRelated("banner");

const bannerToShow = bannerType => {
  switch (bannerType) {
    case "image":
      return bannerImageProps;
    case "text":
      return bannerTextProps;
    default:
      return bannerClassicProps;
  }
};

const BannerHistory = ({ location: { state = "classic" } }) => {
  useEffect(
    () => {
      document.title = changeDocumentTitle({ component: "Banner", state });
      window.scrollTo(0, 0);
    },
    [state]
  );
  const bannerProps = bannerToShow(state);
  return (
    <div>
      <Preview
        title="Banner"
        subTitle={bannerProps.subTitle}
        description={bannerProps.description}
        importType={bannerProps.importType}
        propsDescription={bannerProps.propsDescription}
        notes={bannerProps.notes}
        componentsRealated={bannerComponents}
      >
        <Suspense fallback={<div>Loading Banner component...</div>}>
          <Banner
            bannersProps={bannerProps.bannerProps}
            componentText={bannerProps.componentText}
          />
        </Suspense>
      </Preview>
    </div>
  );
};

export default BannerHistory;
