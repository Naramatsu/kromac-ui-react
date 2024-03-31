import React from "react";
import PropTypes, { oneOf } from "prop-types";
import CardKromac from "../../../components/lib/Card";
import "../../../css/style.css";
import "../../../css/Card.css";

/**
 * Primary UI component for user interaction
 */
export const CardClassic = ({ children, ...props }) => (
  <CardKromac {...props}>{children}</CardKromac>
);

export const CardHorizontal = ({ children, ...props }) => (
  <CardKromac {...props}>{children}</CardKromac>
);

export const CardImage = ({ children, ...props }) => <CardKromac {...props} />;

export const CardInfo = ({ children, ...props }) => (
  <CardKromac {...props}>{children}</CardKromac>
);

CardClassic.propTypes = {
  /**
   * Card type.
   */
  cardType: PropTypes.oneOf([
    "classic",
    "image",
    "horizontal",
    "reveal",
    "info",
    "team",
    "polygon",
    "percentage",
  ]),
  /**
   * Card image url.
   */
  image: PropTypes.string,
  /**
   * 	Card object in order to setup the video.
   */
  video: PropTypes.shape({
    url: PropTypes.string.isRequired,
    controls: PropTypes.bool,
    autoPlay: PropTypes.bool,
    muted: PropTypes.bool,
    loop: PropTypes.bool,
  }),
  /**
   * Text that will be displayed as the Card's title.
   */
  title: PropTypes.string,
  /**
   * Card content size.
   */
  size: oneOf(["sm", "md", "lg"]),
  /**
   * Sets background color.
   */
  color: PropTypes.oneOf("#fff", "transparent"),
  /**
   * Prop to expand the card to show all the text when this is too long.
   */
  expanded: PropTypes.bool,
  /**
   * Sets image position to be displayed in the card.
   */
  imageFitPosition: PropTypes.oneOf(["top", "center", "bottom"]),
  /**
   * 	Transition time in ms.
   */
  transition: PropTypes.string,
  /**
   * 		Card content, you can write html code inside.
   */
  children: PropTypes.any,
};

CardHorizontal.propTypes = {
  /**
   * Card type.
   */
  cardType: PropTypes.oneOf([
    "classic",
    "image",
    "horizontal",
    "reveal",
    "info",
    "team",
    "polygon",
    "percentage",
  ]),
  /**
   * Card image url.
   */
  image: PropTypes.string,
  /**
   * 	Card object in order to setup the video.
   */
  video: PropTypes.shape({
    url: PropTypes.string.isRequired,
    controls: PropTypes.bool,
    autoPlay: PropTypes.bool,
    muted: PropTypes.bool,
    loop: PropTypes.bool,
  }),
  /**
   * Text that will be displayed as the Card's title.
   */
  title: PropTypes.string,
  /**
   * Sets background color.
   */
  color: PropTypes.oneOf("#fff", "transparent"),
  /**
   * Side where the image will be display in the Card.
   */
  imageSide: PropTypes.oneOf(["left", "right"]),
  /**
   * Sets image position to be displayed in the card.
   */
  imageFitPosition: PropTypes.oneOf(["top", "center", "bottom"]),
  /**
   * Adds the "show more" to reveal the card content.
   */
  reveal: PropTypes.bool,
  /**
   * 	Transition time in ms.
   */
  transition: PropTypes.string,
  /**
   * 		Card content, you can write html code inside.
   */
  children: PropTypes.any,
};

CardImage.propTypes = {
  /**
   * Card type.
   */
  cardType: PropTypes.oneOf([
    "classic",
    "image",
    "horizontal",
    "reveal",
    "info",
    "team",
    "polygon",
    "percentage",
  ]),
  /**
   * Card image url.
   */
  image: PropTypes.string,
  /**
   * 	Card object in order to setup the video.
   */
  video: PropTypes.shape({
    url: PropTypes.string.isRequired,
    controls: PropTypes.bool,
    autoPlay: PropTypes.bool,
    muted: PropTypes.bool,
    loop: PropTypes.bool,
  }),
  /**
   * Text that will be displayed as the Card's title.
   */
  title: PropTypes.string,
  /**
   * Sets image position to be displayed in the card.
   */
  imageFitPosition: PropTypes.oneOf(["top", "center", "bottom"]),
};

CardInfo.propTypes = {
  /**
   * Card type.
   */
  cardType: PropTypes.oneOf([
    "classic",
    "image",
    "horizontal",
    "reveal",
    "info",
    "team",
    "polygon",
    "percentage",
  ]),
  /**
   * Text that will be displayed as the Card's title.
   */
  title: PropTypes.string,
  /**
   * Card content size.
   */
  size: oneOf(["sm", "md", "lg", "auto"]),
  /**
   * Sets background color.
   */
  color: PropTypes.string,
  /**
   * Prop to expand the card to show all the text when this is too long.
   */
  shape: PropTypes.oneOf(["color", "transparent"]),
  /**
   * 		Card content, you can write html code inside.
   */
  children: PropTypes.any,
};
