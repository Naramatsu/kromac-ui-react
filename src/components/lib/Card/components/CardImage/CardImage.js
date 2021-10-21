import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import CardClassic from "../CardClassic";

const CardImage = props => <CardClassic {...props} className="card-img" />;

CardImage.propTypes = exact({
  cardType: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  imageFitPosition: PropTypes.string,
  children: PropTypes.any
});

export default CardImage;
