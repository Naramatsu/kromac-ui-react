import React, { useState, lazy } from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import {
  borderStyle,
  determinateColor,
  initialSizeProps
} from "../../../../../utils/utils";
// import "./CardClassic.scss";
import "../../../../../css/CardClassic.css"
import "../../../../../css/Card.css"

const Skeleton = lazy(() => import("../../../Skeleton"));

const CardClassic = props => {
  const {
    image,
    title = "",
    size = "md",
    color = "#fff",
    border = false,
    expanded = false,
    imageFitPosition = "center",
    children,
    className = "classic"
  } = props;

  const [styleSize, setStyleSize] = useState(initialSizeProps);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isImgLoading, setIsImgLoading] = useState(true);
  const styleColor = determinateColor(color);
  const showTitle = title || expanded;

  const borderstyle = borderStyle(color, border);

  const borderRadiusImg =
    color === "transparent" ? { borderRadius: "1em 1em 0 0" } : {};

  const handleShowMore = e => {
    e.preventDefault();
    setStyleSize(() => {
      if (isExpanded) {
        return initialSizeProps;
      } else {
        return {
          whiteSpace: "initial",
          maxHeight: "500px",
          transition: "max-height 2s ease-out"
        };
      }
    });
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`kromac-container ${className}`}>
      <div className="kromac-card" style={{ ...borderstyle }}>
        <div className="kromac-card-image">
          {isImgLoading && <Skeleton width="100%" height="100%" />}
          <img
            src={image}
            alt="Card"
            style={{ ...borderRadiusImg, objectPosition: imageFitPosition }}
            onLoad={() => setIsImgLoading(false)}
          />
          {showTitle &&
            <div className="card-title">
              <h4 className="animate__animated animate__zoomIn">
                {title}
              </h4>
              {expanded &&
                <label onClick={handleShowMore}>
                  {isExpanded ? "show less" : "show more"}
                </label>}
            </div>}
        </div>
        <div className={`kromac-card-caption ${styleColor}`}>
          <div
            className={`card-text ${size} animate__animated animate__zoomIn`}
            style={{ ...styleSize }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

CardClassic.propTypes = exact({
  cardType: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.oneOf(["#fff", "transparent"]),
  border: PropTypes.bool,
  expanded: PropTypes.bool,
  imageFitPosition: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any
});

export default CardClassic;
