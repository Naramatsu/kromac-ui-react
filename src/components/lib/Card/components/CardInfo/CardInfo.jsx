import React from "react";
import classNames from "classnames";
import { bgStyleByProps, borderStyle } from "../../../../../utils/utils";

const CardInfo = (props) => {
  const {
    title = "",
    size = "auto",
    shape = "color",
    color = "transparent",
    children,
    ...rest
  } = props;

  const { key, id } = rest;
  const newRest = {
    key,
    id,
  };

  const borderstyle = borderStyle(color);
  const bg = bgStyleByProps(color);

  const kromacContainer = classNames("kromac-container", "card-info", {
    [rest.className]: !!rest.className,
  });

  const kromacCard = classNames("kromac-card", {
    [color]: !!color,
    [shape]: !!shape,
  });

  const kromacCardText = classNames(
    "card-text",
    "text-bg-light",
    "animate__animated",
    "animate__zoomIn",
    {
      [size]: !!size,
    }
  );

  return (
    <div {...newRest} className={kromacContainer}>
      <div className={kromacCard} style={{ ...borderstyle, ...bg }}>
        <span />
        <div className="kromac-card-caption">
          <div className="card-title text-bg-light">
            <h4 className="animate__animated animate__zoomIn">{title}</h4>
          </div>
          <div className={kromacCardText}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
