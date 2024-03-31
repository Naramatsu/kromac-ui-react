import React, { useState } from "react";
import classNames from "classnames";
import Skeleton from "../../../Skeleton/Skeleton.jsx";
import { determinateColor } from "../../../../../utils/utils";
import { videoBuilder } from "../../Card.jsx";

const CardReveal = (props) => {
  const {
    image,
    title = "",
    color = "#fff",
    imageFitPosition = "center",
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

  const kromacContainer = classNames("kromac-container", "reveal", {
    [rest.className]: !!rest.className,
  });

  const kromacCardCaption = classNames("kromac-card-caption", {
    [styleColor]: !!styleColor,
  });

  return (
    <div {...newRest} className={kromacContainer}>
      <div className="kromac-card">
        <div className="kromac-card-image">
          {isMediaLoading && <Skeleton width="80%" height="100%" />}
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
          className={kromacCardCaption}
          style={{ "--transition": transition }}
        >
          <div className="card-title">
            <h4>{title}</h4>
          </div>
          <div className={`card-text`}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CardReveal;
