import React, { lazy, Suspense, useEffect, useContext } from "react";
import { changeDocumentTitle } from "../../../utils/utils";
import menuProps from "./storyProps/menuProps";
import { PreferencesContext } from "../../../store";

const Preview = lazy(() => import("../../Preview"));
const Menu = lazy(() => import("./Menu"));
const Spinner = lazy(() => import("../../lib/Spinner"));

const MenuHistory = ({ location }) => {
  const { version } = useContext(PreferencesContext);

  useEffect(() => {
    document.title = changeDocumentTitle({ component: "Menu", state: "" });
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Preview
        title="Menu"
        subTitle={menuProps.subTitle}
        description={menuProps.description}
        importType={menuProps.importType(version)}
        propsDescription={menuProps.propsDescription}
        notes={menuProps.notes}
        storyLink={menuProps.storyLink}
      >
        <Suspense
          fallback={
            <div className="center">
              <h4>Loading implementation</h4>
              <Spinner />
            </div>
          }
        >
          <Menu
            menusProps={menuProps.menuProps}
            componentText={menuProps.componentText}
          />
        </Suspense>
      </Preview>
    </div>
  );
};

export default MenuHistory;
