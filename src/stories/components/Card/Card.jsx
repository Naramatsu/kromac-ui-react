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

export const CardPolygon = ({ children, ...props }) => (
  <CardKromac {...props}>{children}</CardKromac>
);

export const CardReveal = ({ children, ...props }) => (
  <CardKromac {...props}>{children}</CardKromac>
);

export const CardTeam = ({ children, ...props }) => (
  <CardKromac {...props}>{children}</CardKromac>
);

export const CardPercentage = ({ ...props }) => <CardKromac {...props} />;

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
   *  Card content, you can write html code inside.
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
   *  Card content, you can write html code inside.
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
   *  Card content, you can write html code inside.
   */
  children: PropTypes.any,
};

CardPolygon.propTypes = {
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
   * Text that will be displayed as the person name.
   */
  name: PropTypes.string,
  /**
   * Sets Card's polygon shape.
   */
  shape: oneOf([
    "hexagon",
    "rhombus",
    "pentagon",
    "heptagon",
    "octagon",
    "bevel",
    "circle",
  ]),
  /**
   * Sets background color.
   */
  color: PropTypes.string,
  /**
   * Sets image position to be displayed in the card.
   */
  imageFitPosition: PropTypes.oneOf(["top", "center", "bottom"]),
  /**
   *  Card content, you can write html code inside.
   */
  children: PropTypes.any,
};

CardReveal.propTypes = {
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
   * Sets image position to be displayed in the card.
   */
  imageFitPosition: PropTypes.oneOf(["top", "center", "bottom"]),
  /**
   * 	Transition time in ms.
   */
  transition: PropTypes.string,
  /**
   *  Card content, you can write html code inside.
   */
  children: PropTypes.any,
};

CardTeam.propTypes = {
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
   * Text that will be displayed as the person's name.
   */
  name: PropTypes.string,
  /**
   * Text that will be displayed as the person's profession.
   */
  profession: PropTypes.string,
  /**
   * Sets background color.
   */
  color: PropTypes.string,
  /**
   * Object array of social networks names and urls.
   */
  media: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  /**
   * Sets image position to be displayed in the card.
   */
  imageFitPosition: PropTypes.oneOf(["top", "center", "bottom"]),
  /**
   * 	Transition time in ms.
   */
  transition: PropTypes.string,
  /**
   *  Card content, you can write html code inside.
   */
  children: PropTypes.any,
};

CardPercentage.propTypes = {
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
   * Displays progress as a percentage.
   */
  progress: PropTypes.number.isRequired,
  /**
   * Sets background color.
   */
  color: PropTypes.string,
  /**
   * 	Sets progress color.
   */
  progressColor: PropTypes.string,
};
