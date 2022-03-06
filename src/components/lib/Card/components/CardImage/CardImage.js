import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import CardClassic from "../CardClassic";

const CardImage = props => <CardClassic {...props} className="card-img" />;

CardImage.propTypes = exact({
  cardType: PropTypes.string,
  video: PropTypes.shape({
    url: PropTypes.string.isRequired,
    controls: PropTypes.bool,
    autoPlay: PropTypes.bool,
    muted: PropTypes.bool,
    loop: PropTypes.bool
  }),
  title: PropTypes.string,
  imageFitPosition: PropTypes.string,
  children: PropTypes.any
});

export default CardImage;
