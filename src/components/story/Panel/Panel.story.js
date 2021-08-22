import React, { lazy, Suspense } from "react";
import panelClassicProps from "./storyProps/panelClassicProps";
import panelNeonProps from "./storyProps/panelNeonProps";
import panelTransparentProps from "./storyProps/panelTransparentProps";

const Preview = lazy(() => import("../../Preview"));
const Panel = lazy(() => import("./Panel"));

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
      >
        <Suspense fallback={<div>Cargando card...</div>}>
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
