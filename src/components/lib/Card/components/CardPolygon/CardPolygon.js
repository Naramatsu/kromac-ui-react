import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { determinateColor } from "../../../../../utils/utils";
import "./style.scss";

const CardPolygon = props => {
  const {
    image,
    name,
    color = "#fff",
    imageFitPosition = "top",
    shape = "hexagon",
    children
  } = props;

  const styleColor = determinateColor(color);
  const bgColor =
    color !== "transparent"
      ? {
          background: `linear-gradient(45deg, ${color}, #0000004D)`
        }
      : {};

  return (
    <div className={`kromac-container card-hexagon`}>
      <div
        className={`kromac-card ${shape} ${styleColor}`}
        style={{ ...bgColor }}
      >
        <div className="kromac-card-image">
          <img
            src={image}
            alt="Card"
            style={{ objectPosition: imageFitPosition }}
          />
        </div>
        <div className={`kromac-card-caption`} style={bgColor}>
          <div className="text-bg-light">
            <h4>
              {name}
            </h4>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

CardPolygon.propTypes = exact({
  cardType: PropTypes.string,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  shape: PropTypes.oneOf([
    "hexagon",
    "rhombus",
    "pentagon",
    "heptagon",
    "octagon",
    "bevel",
    "circle"
  ]),
  color: PropTypes.string,
  imageFitPosition: PropTypes.string,
  children: PropTypes.any
});

export default CardPolygon;