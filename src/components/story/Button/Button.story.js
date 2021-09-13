import React, { lazy, Suspense, useEffect } from "react";
import buttonClassicProps from "./storyProps/buttonClassicProps";
import buttonNeonProps from "./storyProps/buttonNeonProps";
import {
  changeDocumentTitle,
  getComponentsRelated
} from "../../../utils/utils";

const Preview = lazy(() => import("../../Preview"));
const Button = lazy(() => import("./Button"));

const buttonComponents = getComponentsRelated("button");

const buttonToShow = buttonType => {
  switch (buttonType) {
    case "neon":
      return buttonNeonProps;
    default:
      return buttonClassicProps;
  }
};

const ButtonHistory = ({ location: { state = "classic" } }) => {
  useEffect(
    () => {
      document.title = changeDocumentTitle({ component: "Button", state });
      window.scrollTo(0, 0);
    },
    [state]
  );
  const buttonProps = buttonToShow(state);
  return (
    <div>
      <Preview
        title="Button"
        subTitle={buttonProps.subTitle}
        description={buttonProps.description}
        importType={buttonProps.importType}
        propsDescription={buttonProps.propsDescription}
        notes={buttonProps.notes}
        componentsRealated={buttonComponents}
      >
        <Suspense fallback={<div>Loading Button component...</div>}>
          <Button
            buttonsProps={buttonProps.buttonProps}
            componentText={buttonProps.componentText}
          />
        </Suspense>
      </Preview>
    </div>
  );
};

export default ButtonHistory;
