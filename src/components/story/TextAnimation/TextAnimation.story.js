import React, { lazy, Suspense, useEffect } from "react";
import textAnimationProps from "./storyProps/textAnimationProps";
import { getComponentsRelated } from "../../../utils/utils";

const Preview = lazy(() => import("../../Preview"));
const TextAnimation = lazy(() => import("./TextAnimation"));

const textAnimationComponents = getComponentsRelated("textAnimation");

const TextAnimationHistory = ({ location }) => {
  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [location]
  );

  return (
    <div>
      <Preview
        title="TextAnimation"
        subTitle={textAnimationProps.subTitle}
        description={textAnimationProps.description}
        importType={textAnimationProps.importType}
        propsDescription={textAnimationProps.propsDescription}
        notes={textAnimationProps.notes}
        componentsRealated={textAnimationComponents}
      >
        <Suspense fallback={<div>Cargando card...</div>}>
          <TextAnimation
            textAnimationProps={textAnimationProps.textAnimationProp}
            componentText={textAnimationProps.componentText}
          />
        </Suspense>
      </Preview>
    </div>
  );
};

export default TextAnimationHistory;
