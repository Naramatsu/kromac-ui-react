import React, { lazy, Suspense, useEffect, useContext } from "react";
import galleryResponsiveProps from "./storyProps/galleryResponsiveProps";
import galleryPolygonProps from "./storyProps/galleryPolygonProps";
import {
  changeDocumentTitle,
  getComponentsRelated,
} from "../../../utils/utils";
import { PreferencesContext } from "../../../store";

const Preview = lazy(() => import("../../Preview"));
const Gallery = lazy(() => import("./Gallery"));
const Spinner = lazy(() => import("../../lib/Spinner"));

const galleryComponents = getComponentsRelated("gallery");

const galleryToShow = (galleryType) => {
  switch (galleryType) {
    case "polygon":
      return galleryPolygonProps;
    default:
      return galleryResponsiveProps;
  }
};

const GalleryHistory = ({ location: { state = "responsive" } }) => {
  const { version } = useContext(PreferencesContext);

  useEffect(() => {
    document.title = changeDocumentTitle({ component: "Gallery", state });
    window.scrollTo(0, 0);
  }, [state]);

  const galleryProps = {
    ...galleryToShow(state),
    importType: `import Gallery from "${version}/dist/Gallery";`,
  };
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
        storyLink={galleryProps.storyLink}
      >
        <Suspense
          fallback={
            <div className="center">
              <h4>Loading implementation</h4>
              <Spinner />
            </div>
          }
        >
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
