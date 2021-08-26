import React, { lazy, Suspense } from "react";
import menuProps from "./storyProps/menuProps";
import "./style.scss";

const Preview = lazy(() => import("../../Preview"));
const Menu = lazy(() => import("./Menu"));

const MenuHistory = () =>
  <div>
    <Preview
      title="Menu"
      subTitle={menuProps.subTitle}
      description={menuProps.description}
      importType={menuProps.importType}
      propsDescription={menuProps.propsDescription}
      notes={menuProps.notes}
    >
      <Suspense fallback={<div>Cargando card...</div>}>
        <Menu
          menusProps={menuProps.menuProps}
          componentText={menuProps.componentText}
        />
      </Suspense>
    </Preview>
  </div>;

export default MenuHistory;
