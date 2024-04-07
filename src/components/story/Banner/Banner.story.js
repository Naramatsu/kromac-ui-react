import React, { lazy, Suspense, useEffect, useContext } from "react";
import bannerClassicProps from "./storyProps/bannerClassicProps";
import bannerImageProps from "./storyProps/bannerImageProps";
import bannerTextProps from "./storyProps/bannerTextProps";
import {
  changeDocumentTitle,
  getComponentsRelated,
} from "../../../utils/utils";
import { PreferencesContext } from "../../../store";

const Preview = lazy(() => import("../../Preview"));
const Banner = lazy(() => import("./Banner"));
const Spinner = lazy(() => import("../../lib/Spinner"));

const bannerComponents = getComponentsRelated("banner");

const bannerToShow = (bannerType) => {
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
  const { version } = useContext(PreferencesContext);

  useEffect(() => {
    document.title = changeDocumentTitle({ component: "Banner", state });
    window.scrollTo(0, 0);
  }, [state]);

  const bannerProps = {
    ...bannerToShow(state),
    importType: `import Banner from "${version}/dist/Banner";`,
  };
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
        storyLink={bannerProps.storyLink}
      >
        <Suspense
          fallback={
            <div className="center">
              <h4>Loading implementation</h4>
              <Spinner />
            </div>
          }
        >
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
