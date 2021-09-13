import React, { useState, lazy } from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { determinateColor, determinateIcon } from "../../../../../utils/utils";
import "./style.scss";

const Skeleton = lazy(() => import("../../../Skeleton"));

const CardUser = props => {
  const {
    image,
    name = "",
    profession = "",
    shape = "info",
    color = "#fff",
    border = false,
    imageFitPosition = "top",
    redes = [],
    children
  } = props;

  const [isImgLoading, setIsImgLoading] = useState(true);
  const styleColor = determinateColor(color);
  const borderStyle =
    color === "transparent" || border ? { border: "solid 2px #fff" } : {};
  const bgColor =
    color !== "transparent"
      ? {
          background: `linear-gradient(45deg, #000, ${color})`
        }
      : {};

  return (
    <div className={`kromac-container card-user`}>
      <div
        className={`kromac-card card-user-${shape} ${styleColor}`}
        style={{ ...borderStyle, ...bgColor }}
      >
        <div className="kromac-card-image">
          {isImgLoading && <Skeleton width="100%" height="100%" />}
          <img
            src={image}
            alt="Card"
            style={{ objectPosition: imageFitPosition }}
            onLoad={() => setIsImgLoading(false)}
          />
        </div>
        <div className={`kromac-card-caption`}>
          <div className="card-title">
            <h4>
              {name}
            </h4>
            <label>
              {profession}
            </label>
            <ul>
              {redes.map((red, index) =>
                <li key={index}>
                  <a href={red.url}>
                    {determinateIcon(red.name)}
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div className={`card-text`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

CardUser.propTypes = exact({
  cardType: PropTypes.string,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string,
  shape: PropTypes.oneOf(["info", "summary"]),
  color: PropTypes.string,
  border: PropTypes.bool,
  imageFitPosition: PropTypes.string,
  redes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ),
  children: PropTypes.any
});

export default CardUser;
