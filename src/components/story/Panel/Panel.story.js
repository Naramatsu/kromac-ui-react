import React, { lazy, Suspense, useEffect, useContext } from "react";
import panelClassicProps from "./storyProps/panelClassicProps";
import panelNeonProps from "./storyProps/panelNeonProps";
import panelTransparentProps from "./storyProps/panelTransparentProps";
import {
  changeDocumentTitle,
  getComponentsRelated,
} from "../../../utils/utils";
import { PreferencesContext } from "../../../store";

const Preview = lazy(() => import("../../Preview"));
const Panel = lazy(() => import("./Panel"));
const Spinner = lazy(() => import("../../lib/Spinner"));

const panelComponents = getComponentsRelated("panel");

const PanelToShow = (panelType) => {
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
  const { version } = useContext(PreferencesContext);

  useEffect(() => {
    document.title = changeDocumentTitle({ component: "Panel", state });
    window.scrollTo(0, 0);
  }, [state]);

  const panelProps = {
    ...PanelToShow(state),
    importType: `import Panel from "${version}/dist/Panel";`,
  };
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
        <Suspense
          fallback={
            <div className="center">
              <h4>Loading implementation</h4>
              <Spinner />
            </div>
          }
        >
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
