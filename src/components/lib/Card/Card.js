import React, { lazy } from "react";

const CardImage = lazy(() => import("./components/CardImage"));
const CardHorizontal = lazy(() => import("./components/CardHorizontal"));
const CardReveal = lazy(() => import("./components/CardReveal"));
const CardInfo = lazy(() => import("./components/CardInfo"));
const CardClassic = lazy(() => import("./components/CardClassic"));
const CardUser = lazy(() => import("./components/CardUser"));
const CardPolygon = lazy(() => import("./components/CardPolygon"));
const Percentage = lazy(() => import("./components/Percentage"));

const Card = props => {
  const { cardType } = props;
  switch (cardType) {
    case "image":
      return <CardImage {...props} />;
    case "horizontal":
      return <CardHorizontal {...props} />;
    case "reveal":
      return <CardReveal {...props} />;
    case "info":
      return <CardInfo {...props} />;
    case "user":
      return <CardUser {...props} />;
    case "polygon":
      return <CardPolygon {...props} />;
    case "percentage":
      return <Percentage {...props} />;
    default:
      return <CardClassic {...props} />;
  }
};

export default Card;
