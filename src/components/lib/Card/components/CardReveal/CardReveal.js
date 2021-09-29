import React, { useState, lazy } from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { determinateColor } from "../../../../../utils/utils";
// import "./CardReveal.scss";
import "../../../../../css/CardReveal.css"

const Skeleton = lazy(() => import("../../../Skeleton"));

const CardReveal = props => {
  const {
    image,
    title = "",
    color = "#fff",
    imageFitPosition = "center",
    children
  } = props;

  const [isImgLoading, setIsImgLoading] = useState(true);
  const styleColor = determinateColor(color);

  return (
    <div className={`kromac-container reveal`}>
      <div className="kromac-card">
        <div className="kromac-card-image">
          {isImgLoading && <Skeleton width="80%" height="100%" />}
          <img
            src={image}
            alt="Card"
            style={{ objectPosition: imageFitPosition }}
            onLoad={() => setIsImgLoading(false)}
          />
        </div>
        <div className={`kromac-card-caption ${styleColor}`}>
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
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  color: PropTypes.oneOf(["#fff", "transparent"]),
  imageFitPosition: PropTypes.string,
  children: PropTypes.any
});

export default CardReveal;
