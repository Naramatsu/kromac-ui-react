import React, { lazy, Suspense, useEffect, useContext } from "react";
import chipProps from "./storyProps/chipProps";
import {
  changeDocumentTitle,
  getComponentsRelated,
} from "../../../utils/utils";
import { PreferencesContext } from "../../../store";

const Preview = lazy(() => import("../../Preview"));
const Chip = lazy(() => import("./Chip"));
const Spinner = lazy(() => import("../../lib/Spinner"));

const chipComponents = getComponentsRelated("chip");

const ChipHistory = ({ location }) => {
  const { version } = useContext(PreferencesContext);

  useEffect(() => {
    document.title = changeDocumentTitle({ component: "Chip", state: "" });
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Preview
        title="Chip"
        subTitle={chipProps.subTitle}
        description={chipProps.description}
        importType={chipProps.importType(version)}
        propsDescription={chipProps.propsDescription}
        notes={chipProps.notes}
        componentsRealated={chipComponents}
        storyLink={chipProps.storyLink}
      >
        <Suspense
          fallback={
            <div className="center">
              <h4>Loading implementation</h4>
              <Spinner />
            </div>
          }
        >
          <Chip
            chipsProps={chipProps.chipProps}
            componentText={chipProps.componentText}
          />
        </Suspense>
      </Preview>
    </div>
  );
};

export default ChipHistory;
