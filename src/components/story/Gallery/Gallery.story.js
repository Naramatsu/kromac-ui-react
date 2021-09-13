import React, { lazy, Suspense, useEffect } from "react";
import galleryResponsiveProps from "./storyProps/galleryResponsiveProps";
import galleryPolygonProps from "./storyProps/galleryPolygonProps";
import {
  changeDocumentTitle,
  getComponentsRelated
} from "../../../utils/utils";

const Preview = lazy(() => import("../../Preview"));
const Gallery = lazy(() => import("./Gallery"));

const galleryComponents = getComponentsRelated("gallery");

const galleryToShow = galleryType => {
  switch (galleryType) {
    case "polygon":
      return galleryPolygonProps;
    default:
      return galleryResponsiveProps;
  }
};

const GalleryHistory = ({ location: { state = "responsive" } }) => {
  useEffect(
    () => {
      document.title = changeDocumentTitle({ component: "Gallery", state });
      window.scrollTo(0, 0);
    },
    [state]
  );
  const galleryProps = galleryToShow(state);
  return (
    <div>
      <Preview
        title="Gallery"
        subTitle={galleryProps.subTitle}
        description={galleryProps.description}
        importType={galleryProps.importType}
        propsDescription={galleryProps.propsDescription}
        notes={galleryProps.notes}
        componentsRealated={galleryComponents}
      >
        <Suspense fallback={<div>Loading Gallery component...</div>}>
          <Gallery
            gallerysProps={galleryProps.galleryProps}
            componentText={galleryProps.componentText}
          />
        </Suspense>
      </Preview>
    </div>
  );
};

export default GalleryHistory;
