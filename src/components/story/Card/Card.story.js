import React, { lazy, Suspense } from "react";
import cardClassicProps from "./storyProps/cardClassicProps";
import cardImageProps from "./storyProps/cardImageProps";
import cardRevealProps from "./storyProps/cardRevealProps";
import cardInfoProps from "./storyProps/cardInfoProps";
import cardHorizontalProps from "./storyProps/cardHorizontalProps";
import cardPolygonProps from "./storyProps/cardPolygonProps";
import cardUserProps from "./storyProps/cardUserProps";
import cardPercentageProps from "./storyProps/cardPercentageProps";

const Preview = lazy(() => import("../../Preview"));
const Card = lazy(() => import("./Card"));

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
    case "user":
      return cardUserProps;
    case "polygon":
      return cardPolygonProps;
    case "percentage":
      return cardPercentageProps;
    default:
      return cardClassicProps;
  }
};

const CardStory = ({ location: { state = "classic" } }) => {
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
      >
        <Suspense fallback={<div>Cargando card...</div>}>
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
