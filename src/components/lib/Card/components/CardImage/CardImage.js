import React, { lazy } from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import "./CardImage.scss";

const CardClassic = lazy(() => import("../CardClassic"));

const CardImage = props => <CardClassic {...props} className="card-img" />;

CardImage.propTypes = exact({
  cardType: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  border: PropTypes.bool,
  imageFitPosition: PropTypes.string,
  children: PropTypes.any
});

export default CardImage;
