import React from "react";

import CardImage from "./components/CardImage";
import CardHorizontal from "./components/CardHorizontal";
import CardReveal from "./components/CardReveal";
import CardInfo from "./components/CardInfo";
import CardClassic from "./components/CardClassic";
import CardTeam from "./components/CardTeam";
import CardPolygon from "./components/CardPolygon";
import Percentage from "./components/Percentage";

export const videoBuilder = (video, setIsMediaLoading) => {
  const {
    url,
    controls = false,
    autoPlay = true,
    muted = true,
    loop = true
  } = video;
  if (url.includes("youtube", "youtu.be")) {
    let ytUrlBuilder = "";
    if (url.includes("youtube")) {
      ytUrlBuilder = url.replace(
        "https://www.youtube.com/watch?v=",
        "https://www.youtube.com/embed/"
      );
    } else {
      ytUrlBuilder = url.replace(
        "https://youtu.be/",
        "https://www.youtube.com/embed/"
      );
    }
    return (
      <iframe
        title="YouTube video player"
        width="100%"
        height="100%"
        src={ytUrlBuilder}
        frameBorder="0"
        allow="autoplay"
        allowFullScreen={false}
        onLoad={() => setIsMediaLoading(false)}
      />
    );
  }
  setTimeout(() => {
    setIsMediaLoading(false);
  }, 0);
  return (
    <video
      src={url}
      controls={controls}
      muted={muted}
      loop={loop}
      autoPlay={autoPlay}
      width="100%"
      height="100%x"
    />
  );
};

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
    case "team":
      return <CardTeam {...props} />;
    case "polygon":
      return <CardPolygon {...props} />;
    case "percentage":
      return <Percentage {...props} />;
    default:
      return <CardClassic {...props} />;
  }
};

export default Card;
