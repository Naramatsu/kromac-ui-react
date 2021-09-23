import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { bgStyleByProps, borderStyle } from "../../../../../utils/utils";
import "./CardInfo.scss";

const CardInfo = props => {
  const {
    title = "",
    size = "auto",
    shape = "color",
    color = "transparent",
    border = false,
    expanded = false,
    children
  } = props;

  const borderstyle = borderStyle(color, border);
  const bg = bgStyleByProps(color);

  return (
    <div className="kromac-container card-info">
      <div
        className={`kromac-card ${color} ${shape}`}
        style={{ ...borderstyle, ...bg }}
      >
        <span />
        <div className="kromac-card-caption">
          <div className="card-title text-bg-light">
            <h4 className="animate__animated animate__zoomIn">
              {title}
            </h4>
          </div>
          <div
            className={`card-text ${size} text-bg-light animate__animated animate__zoomIn`}
          >
            {children}
            {expanded && <button className="glass">Show more</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

CardInfo.propTypes = exact({
  cardType: PropTypes.string,
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "auto"]),
  shape: PropTypes.oneOf(["color", "transparent"]),
  color: PropTypes.string,
  border: PropTypes.bool,
  expanded: PropTypes.bool,
  children: PropTypes.any
});

export default CardInfo;
