import React from "react";
import classNames from "classnames";
import { bgStyleByProps, borderStyle } from "../../../../../utils/utils";

const Percentage = (props) => {
  const {
    title = "",
    progress = 0,
    color = "transparent",
    progressColor = "#D53DC4",
    ...rest
  } = props;

  const { key, id } = rest;
  const newRest = {
    key,
    id,
  };

  const borderstyle = borderStyle(color);
  const bgColor = bgStyleByProps(color);
  const percentageStyles = {
    strokeDashoffset: `calc(440 - (440 * ${progress}) / 100)`,
    stroke: progressColor,
  };

  const kromacContainer = classNames("kromac-container", "card-percentage", {
    [rest.className]: !!rest.className,
  });

  const kromacCard = classNames("kromac-card", { [color]: !!color });

  return (
    <div {...newRest} className={kromacContainer}>
      <div className={kromacCard} style={{ ...borderstyle, ...bgColor }}>
        <div className={`kromac-card-caption`}>
          <div className="kromac-card-content">
            <div className="percent">
              <svg>
                <circle cx="70" cy="70" r="70" />
                <circle cx="70" cy="70" r="70" style={percentageStyles} />
              </svg>
            </div>
            <h2 className="text-bg-light animate__animated animate__zoomIn">
              {progress}%
            </h2>
            <div className="card-title text-bg-light animate__animated animate__zoomIn">
              <h6>{title}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Percentage;
