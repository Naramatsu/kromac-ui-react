import React, { useState } from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { determinateColor, videoBuilder } from "../../../../../utils/utils";
import Skeleton from "../../../Skeleton";

const CardReveal = props => {
  const {
    image,
    title = "",
    color = "#fff",
    imageFitPosition = "center",
    transition = ".5s",
    video,
    children
  } = props;

  const [isMediaLoading, setIsMediaLoading] = useState(true);
  const styleColor = determinateColor(color);

  return (
    <div className={`kromac-container reveal`}>
      <div className="kromac-card">
        <div className="kromac-card-image">
          {isMediaLoading && <Skeleton width="80%" height="100%" />}
          {video
            ? videoBuilder(video, setIsMediaLoading)
            : <img
                src={image}
                alt="Card"
                style={{ objectPosition: imageFitPosition }}
                onLoad={() => setIsMediaLoading(false)}
              />}
        </div>
        <div className={`kromac-card-caption ${styleColor}`}
          style={{ "--transition": transition }}
        >
          <div className="card-title">
            <h4>
              {title}
            </h4>
          </div>
          <div className={`card-text`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

CardReveal.propTypes = exact({
  cardType: PropTypes.string,
  video: PropTypes.shape({
    url: PropTypes.string.isRequired,
    controls: PropTypes.bool,
    autoPlay: PropTypes.bool,
    muted: PropTypes.bool,
    loop: PropTypes.bool
  }),
  title: PropTypes.string,
  color: PropTypes.oneOf(["#fff", "transparent"]),
  imageFitPosition: PropTypes.string,
  children: PropTypes.any
});

export default CardReveal;
