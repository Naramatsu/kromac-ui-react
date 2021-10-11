import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { bgStyleByProps, borderStyle } from "../../../../../utils/utils";

const Percentage = props => {
  const {
    title = "",
    progress = 0,
    cardColor = "transparent",
    progressColor = "#D53DC4",
    border = false
  } = props;

  const borderstyle = borderStyle(cardColor, border);
  const bgColor = bgStyleByProps(cardColor);
  const percentageStyles = {
    strokeDashoffset: `calc(440 - (440 * ${progress}) / 100)`,
    stroke: progressColor
  };

  return (
    <div className={`kromac-container card-percentage`}>
      <div
        className={`kromac-card ${cardColor}`}
        style={{ ...borderstyle, ...bgColor }}
      >
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
              <h6>
                {title}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Percentage.propTypes = exact({
  cardType: PropTypes.string,
  title: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  cardColor: PropTypes.string,
  progressColor: PropTypes.string,
  border: PropTypes.bool,
  children: PropTypes.any
});

export default Percentage;
