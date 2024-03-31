import React, { useState } from "react";
import classNames from "classnames";
import Skeleton from "../../../Skeleton/Skeleton.jsx";
import { determinateColor } from "../../../../../utils/utils";
import { videoBuilder } from "../../Card.jsx";

const fb =
  "https://res.cloudinary.com/dxg9gszax/image/upload/v1634079073/kromac-ui/facebook_eoffyk.svg";
const ig =
  "https://res.cloudinary.com/dxg9gszax/image/upload/v1634079072/kromac-ui/instagram_xtonqo.svg";
const li =
  "https://res.cloudinary.com/dxg9gszax/image/upload/v1634079072/kromac-ui/linkedin_nqwh1p.svg";
const tw =
  "https://res.cloudinary.com/dxg9gszax/image/upload/v1634079073/kromac-ui/twitter_og7mxx.svg";
const tc =
  "https://res.cloudinary.com/dxg9gszax/image/upload/v1634079072/kromac-ui/twitch_gczehv.svg";
const yt =
  "https://res.cloudinary.com/dxg9gszax/image/upload/v1634079073/kromac-ui/youtube_mgcxep.svg";

const determinateIcon = (red) => {
  switch (red) {
    case "facebook":
      return (
        <i>
          <img src={fb} alt="fb" />
        </i>
      );
    case "instagram":
      return (
        <i>
          <img src={ig} alt="ig" />
        </i>
      );
    case "linkedin":
      return (
        <i>
          <img src={li} alt="li" />
        </i>
      );
    case "twitter":
      return (
        <i>
          <img src={tw} alt="tw" />
        </i>
      );
    case "twitch":
      return (
        <i>
          <img src={tc} alt="tc" />
        </i>
      );
    case "youtube":
      return (
        <i>
          <img src={yt} alt="yt" />
        </i>
      );
    default:
      return;
  }
};

const CardTeam = (props) => {
  const {
    image,
    name = "",
    profession = "",
    shape = "info",
    color = "#fff",
    imageFitPosition = "top",
    media = [],
    transition = ".5s",
    video,
    children,
    ...rest
  } = props;

  const { key, id } = rest;
  const newRest = {
    key,
    id,
  };

  const [isMediaLoading, setIsMediaLoading] = useState(true);
  const styleColor = determinateColor(color);
  const borderStyle =
    color === "transparent" ? { border: "solid 2px #fff" } : {};
  const bgColor =
    color !== "transparent"
      ? {
          background: `linear-gradient(45deg, #000, ${color})`,
        }
      : {};

  const kromacContainer = classNames("kromac-container", "card-user", {
    [rest.className]: !!rest.className,
  });

  const kromacCard = classNames("kromac-card", {
    [`card-user-${shape}`]: true,
    [styleColor]: !!styleColor,
  });

  return (
    <div {...newRest} className={kromacContainer}>
      <div
        className={kromacCard}
        style={{ ...borderStyle, ...bgColor, "--transition": transition }}
      >
        <div
          className="kromac-card-image"
          style={{ "--transition": transition }}
        >
          {isMediaLoading && <Skeleton width="100%" height="100%" />}
          {!!video?.url ? (
            videoBuilder(video, setIsMediaLoading)
          ) : (
            <img
              src={image}
              alt="Card"
              style={{ objectPosition: imageFitPosition }}
              onLoad={() => setIsMediaLoading(false)}
            />
          )}
        </div>
        <div
          className={`kromac-card-caption`}
          style={{ "--transition": transition }}
        >
          <div className="card-title">
            <h4>{name}</h4>
            <label>{profession}</label>
            <ul>
              {media.map((red, index) => (
                <li key={index}>
                  <a href={red.url}>{determinateIcon(red.name)}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-text kromac-scroll">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CardTeam;
