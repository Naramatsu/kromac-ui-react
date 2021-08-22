import React, { useState } from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import {
  borderStyle,
  determinateColor,
  initialSizeProps
} from "../../../../../utils/utils";
import "./style.scss";

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
          <img
            src={image}
            alt="Card"
            style={{ ...borderRadiusImg, objectPosition: imageFitPosition }}
          />
        </div>
        <div className={`kromac-card-caption ${styleColor}`}>
          {showTitle &&
            <div className="card-title">
              <h4>
                {title}
              </h4>
              {expanded &&
                <label onClick={handleShowMore}>
                  {isExpanded ? "show less" : "show more"}
                </label>}
            </div>}
          <div className={`card-text ${size}`} style={{ ...styleSize }}>
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
