import React, { lazy, Suspense, useEffect } from "react";
import cardClassicProps from "./storyProps/cardClassicProps";
import cardImageProps from "./storyProps/cardImageProps";
import cardRevealProps from "./storyProps/cardRevealProps";
import cardInfoProps from "./storyProps/cardInfoProps";
import cardHorizontalProps from "./storyProps/cardHorizontalProps";
import cardPolygonProps from "./storyProps/cardPolygonProps";
import cardTeamProps from "./storyProps/cardTeamProps";
import cardPercentageProps from "./storyProps/cardPercentageProps";
import {
  changeDocumentTitle,
  getComponentsRelated
} from "../../../utils/utils";

const Preview = lazy(() => import("../../Preview"));
const Card = lazy(() => import("./Card"));
const Spinner = lazy(() => import("../../lib/Spinner"));

const cardComponents = getComponentsRelated("card");

const cardToShow = cardType => {
  switch (cardType) {
    case "image":
      return cardImageProps;
    case "horizontal":
      return cardHorizontalProps;
    case "reveal":
      return cardRevealProps;
    case "info":
      return cardInfoProps;
    case "team":
      return cardTeamProps;
    case "polygon":
      return cardPolygonProps;
    case "percentage":
      return cardPercentageProps;
    default:
      return cardClassicProps;
  }
};

const CardStory = ({ location: { state = "classic" } }) => {
  useEffect(
    () => {
      document.title = changeDocumentTitle({ component: "Card", state });
      window.scrollTo(0, 0);
    },
    [state]
  );
  const cardProps = cardToShow(state);
  return (
    <div>
      <Preview
        title="Card"
        subTitle={cardProps.subTitle}
        description={cardProps.description}
        importType={cardProps.importType}
        propsDescription={cardProps.propsDescription}
        notes={cardProps.notes}
        componentsRealated={cardComponents}
      >
        <Suspense
          fallback={
            <div className="center">
              <h4>Loading implementation</h4>
              <Spinner />
            </div>
          }
        >
          <Card
            cardProps={cardProps.cardProps}
            componentText={cardProps.componentText}
          />
        </Suspense>
      </Preview>
    </div>
  );
};

export default CardStory;
