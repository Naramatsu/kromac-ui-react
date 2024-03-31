import React, { useState } from "react";
import classNames from "classnames";
import Skeleton from "../../../Skeleton/Skeleton.jsx";
import { determinateColor, initialSizeProps } from "../../../../../utils/utils";
import { videoBuilder } from "../../Card.jsx";

const CardClassic = (props) => {
  const {
    image,
    title = "",
    size = "md",
    color = "#fff",
    expanded = false,
    imageFitPosition = "center",
    children,
    className = "classic",
    transition = ".5s",
    video,
    ...rest
  } = props;

  const { key, id } = rest;
  const newRest = {
    key,
    id,
  };

  const [styleSize, setStyleSize] = useState(initialSizeProps);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMediaLoading, setIsMediaLoading] = useState(true);
  const styleColor = determinateColor(color);
  const showTitle = title || expanded;

  const handleShowMore = (event) => {
    event.preventDefault();
    setStyleSize(() => {
      if (isExpanded) {
        return initialSizeProps;
      } else {
        return {
          whiteSpace: "initial",
          maxHeight: "500px",
          transition: `max-height ${transition} ease-out`,
        };
      }
    });
    setIsExpanded(!isExpanded);
  };

  const kromacContainer = classNames("kromac-container", {
    [className]: !!className,
  });

  const kromacCardCaption = classNames("kromac-card-caption", {
    [styleColor]: !!styleColor,
  });

  const cardText = classNames(
    "card-text",
    "animate__animated animate__zoomIn",
    { [size]: !!size }
  );

  return (
    <div {...newRest} className={kromacContainer}>
      <div className="kromac-card">
        <div className="kromac-card-image">
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
          {showTitle && (
            <div className="card-title">
              <h4 className="animate__animated animate__zoomIn">{title}</h4>
              {expanded && (
                <label onClick={handleShowMore}>
                  {isExpanded ? "show less" : "show more"}
                </label>
              )}
            </div>
          )}
        </div>
        <div className={kromacCardCaption}>
          <div
            className={cardText}
            style={{ ...styleSize, "--transition": transition }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardClassic;
