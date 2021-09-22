import React, { useState, lazy } from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { determinateColor, initialSizeProps } from "../../../../../utils/utils";
import "./style.scss";

const Skeleton = lazy(() => import("../../../Skeleton"));

const CardHorizontal = props => {
  const {
    image,
    title = "",
    color = "#fff",
    imageSide = "left",
    imageFitPosition = "center",
    reveal = false,
    children
  } = props;

  const [styleSize, setStyleSize] = useState(initialSizeProps);
  const [isImgLoading, setIsImgLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [kromacContainerStyle, setKromacContainerStyle] = useState(
    initialSizeProps
  );

  const showTitle = title || reveal;
  const styleColor = determinateColor(color);
  const isClassExpanded = reveal ? "expanded" : "";
  const backgroundCaption = { background: color };
  const titleSize = reveal ? { maxWidth: "65%" } : { maxWidth: "100%" };

  const handleShowMore = e => {
    e.preventDefault();
    setKromacContainerStyle(() => {
      if (isExpanded) {
        return initialSizeProps;
      } else {
        return {
          boxShadow: "0px 0px 15px 5px rgba(0, 0, 0, .5)"
        };
      }
    });
    setStyleSize(() => {
      if (isExpanded) {
        return initialSizeProps;
      } else {
        if (imageSide === "left") {
          return {
            transform: "translateX(0)",
            background: color
          };
        } else {
          return {
            transform: "translateX(-50%)",
            background: color
          };
        }
      }
    });
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`kromac-container horizontal ${isClassExpanded}`}
      style={kromacContainerStyle}
    >
      <div className={`kromac-card horizontal ${isClassExpanded}`}>
        <div className={`kromac-card-image ${imageSide}`}>
          {isImgLoading && <Skeleton width="100%" height="100%" />}
          <img
            src={image}
            alt="Card"
            style={{ objectPosition: imageFitPosition }}
            onLoad={() => setIsImgLoading(false)}
          />
          {showTitle &&
            <div className="card-title">
              <h4
                style={titleSize}
                className="animate__animated animate__zoomIn"
              >
                {title}
              </h4>
              {reveal &&
                <label onClick={handleShowMore}>
                  {isExpanded ? "show less" : "show more"}
                </label>}
            </div>}
        </div>
        <div
          className={`kromac-card-caption ${imageSide} ${isClassExpanded} ${styleColor}`}
          style={{ ...styleSize }}
        >
          <div
            className="card-text kromac-scroll animate__animated animate__zoomIn"
            style={{ ...backgroundCaption }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

CardHorizontal.propTypes = exact({
  cardType: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  color: PropTypes.oneOf(["#fff", "transparent"]),
  imageSide: PropTypes.string,
  imageFitPosition: PropTypes.string,
  reveal: PropTypes.bool,
  children: PropTypes.any
});

export default CardHorizontal;
