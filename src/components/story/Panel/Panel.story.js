import React, { lazy, Suspense, useEffect } from "react";
import panelClassicProps from "./storyProps/panelClassicProps";
import panelNeonProps from "./storyProps/panelNeonProps";
import panelTransparentProps from "./storyProps/panelTransparentProps";
import {
  changeDocumentTitle,
  getComponentsRelated
} from "../../../utils/utils";

const Preview = lazy(() => import("../../Preview"));
const Panel = lazy(() => import("./Panel"));

const panelComponents = getComponentsRelated("panel");

const PanelToShow = panelType => {
  switch (panelType) {
    case "neon":
      return panelNeonProps;
    case "transparent":
      return panelTransparentProps;
    default:
      return panelClassicProps;
  }
};

const PanelHistory = ({ location: { state = "classic" } }) => {
  useEffect(
    () => {
      document.title = changeDocumentTitle({ component: "Panel", state });
      window.scrollTo(0, 0);
    },
    [state]
  );
  const panelProps = PanelToShow(state);
  return (
    <div>
      <Preview
        title="Panel"
        subTitle={panelProps.subTitle}
        description={panelProps.description}
        importType={panelProps.importType}
        propsDescription={panelProps.propsDescription}
        notes={panelProps.notes}
        componentsRealated={panelComponents}
      >
        <Suspense fallback={<div>Loading Panel component...</div>}>
          <Panel
            panelProps={panelProps.panelProp}
            componentText={panelProps.componentText}
          />
        </Suspense>
      </Preview>
    </div>
  );
};

export default PanelHistory;
