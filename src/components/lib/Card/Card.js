import React from "react";

import CardImage from "./components/CardImage";
import CardHorizontal from "./components/CardHorizontal";
import CardReveal from "./components/CardReveal";
import CardInfo from "./components/CardInfo";
import CardClassic from "./components/CardClassic";
import CardUser from "./components/CardUser";
import CardPolygon from "./components/CardPolygon";
import Percentage from "./components/Percentage";

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
