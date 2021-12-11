import React, { useState } from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { determinateColor } from "../../../../../utils/utils";
import Skeleton from "../../../Skeleton";

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

const determinateIcon = red => {
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

const CardTeam = props => {
  const {
    image,
    name = "",
    profession = "",
    shape = "info",
    color = "#fff",
    imageFitPosition = "top",
    redes = [],
    transition = ".5s",
    children
  } = props;

  const [isImgLoading, setIsImgLoading] = useState(true);
  const styleColor = determinateColor(color);
  const borderStyle =
    color === "transparent" ? { border: "solid 2px #fff" } : {};
  const bgColor =
    color !== "transparent"
      ? {
        background: `linear-gradient(45deg, #000, ${color})`
      }
      : {};

  return (
    <div className={`kromac-container card-user`}>
      <div
        className={`kromac-card card-user-${shape} ${styleColor}`}
        style={{ ...borderStyle, ...bgColor, "--transition": transition }}
      >
        <div className="kromac-card-image" style={{ "--transition": transition }}>
          {isImgLoading && <Skeleton width="100%" height="100%" />}
          <img
            src={image}
            alt="Card"
            style={{ objectPosition: imageFitPosition }}
            onLoad={() => setIsImgLoading(false)}
          />
        </div>
        <div className={`kromac-card-caption`} style={{ "--transition": transition }}>
          <div className="card-title">
            <h4>
              {name}
            </h4>
            <label>
              {profession}
            </label>
            <ul>
              {redes.map((red, index) =>
                <li key={index}>
                  <a href={red.url}>
                    {determinateIcon(red.name)}
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div className="card-text kromac-scroll">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

CardTeam.propTypes = exact({
  cardType: PropTypes.string,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string,
  shape: PropTypes.oneOf(["info", "summary"]),
  color: PropTypes.string,
  imageFitPosition: PropTypes.string,
  redes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ),
  children: PropTypes.any
});

export default CardTeam;
