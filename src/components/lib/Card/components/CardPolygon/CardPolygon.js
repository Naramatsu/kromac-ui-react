import React, { useState } from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { determinateColor } from "../../../../../utils/utils";
import Skeleton from "../../../Skeleton";
import { videoBuilder } from "../../Card";

const CardPolygon = props => {
  const {
    image,
    name,
    color = "#fff",
    imageFitPosition = "top",
    shape = "hexagon",
    video,
    children
  } = props;
  const [isMediaLoading, setIsMediaLoading] = useState(true);
  const styleColor = determinateColor(color);
  const bgColor =
    color !== "transparent"
      ? {
          background: `linear-gradient(45deg, ${color}, #0000004D)`
        }
      : {};

  return (
    <div className="kromac-container card-hexagon">
      <div
        className={`kromac-card ${shape} ${styleColor}`}
        style={{ ...bgColor }}
      >
        <div className="kromac-card-image">
          {isMediaLoading && <Skeleton width="100%" height="100%" />}
          {video
            ? videoBuilder(video, setIsMediaLoading)
            : <img
                src={image}
                alt="Card"
                style={{ objectPosition: imageFitPosition }}
                onLoad={() => setIsMediaLoading(false)}
              />}
        </div>
        <div className="kromac-card-caption" style={bgColor}>
          <div className="text-bg-light">
            <h4>
              {name}
            </h4>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

CardPolygon.propTypes = exact({
  cardType: PropTypes.string,
  image: PropTypes.string,
  video: PropTypes.shape({
    url: PropTypes.string.isRequired,
    controls: PropTypes.bool,
    autoPlay: PropTypes.bool,
    muted: PropTypes.bool,
    loop: PropTypes.bool
  }),
  name: PropTypes.string.isRequired,
  shape: PropTypes.oneOf([
    "hexagon",
    "rhombus",
    "pentagon",
    "heptagon",
    "octagon",
    "bevel",
    "circle"
  ]),
  color: PropTypes.string,
  imageFitPosition: PropTypes.string,
  children: PropTypes.any
});

export default CardPolygon;
