import React, { lazy, Suspense, useEffect, useContext } from "react";
import toastProps from "./storyProps/toastProps";
import {
  changeDocumentTitle,
  getComponentsRelated,
} from "../../../utils/utils";
import { PreferencesContext } from "../../../store";

const Preview = lazy(() => import("../../Preview"));
const Toast = lazy(() => import("./Toast"));
const Spinner = lazy(() => import("../../lib/Spinner"));

const toastComponents = getComponentsRelated("toast");

const ToastHistory = ({ location }) => {
  const { version } = useContext(PreferencesContext);

  useEffect(() => {
    document.title = changeDocumentTitle({ component: "Toast", state: "" });
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Preview
        title="Toast"
        subTitle={toastProps.subTitle}
        description={toastProps.description}
        importType={toastProps.importType(version)}
        propsDescription={toastProps.propsDescription}
        notes={toastProps.notes}
        componentsRealated={toastComponents}
        storyLink={toastProps.storyLink}
      >
        <Suspense
          fallback={
            <div className="center">
              <h4>Loading implementation</h4>
              <Spinner />
            </div>
          }
        >
          <Toast
            toastProps={toastProps.toastProp}
            componentText={toastProps.componentText}
          />
        </Suspense>
      </Preview>
    </div>
  );
};

export default ToastHistory;
