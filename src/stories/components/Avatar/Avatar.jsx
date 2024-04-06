import React from "react";
import PropTypes from "prop-types";
import AvatarKromac from "../../../components/lib/Avatar";
import "../../../css/Avatar.css";

/**
 * Primary UI component for user interaction
 */
export const Avatar = (props) => <AvatarKromac {...props} />;

Avatar.propTypes = {
  /**
   * Image url.
   */
  image: PropTypes.string,
  /**
   * Add a name for this avatar, but if you do not want, no problem, it will not appear.
   */
  name: PropTypes.string,
  /**
   * Set border color of the component.
   */
  borderColor: PropTypes.string,
  /**
   * Set background color of the component.
   */
  bgColor: PropTypes.string,
  /**
   * If you don't want to see the hover effect, turn on this prop.
   */
  isStatic: PropTypes.bool,
  /**
   * Size (width and height) of the image circle in px.
   */
  size: PropTypes.string,
  /**
   * If you want the image to cover all the circle, turn on this prop.
   */
  imageFit: PropTypes.bool,
  /**
   * With this prop you can adjust the image position, (this one only work with `imagePosition` prop turned on).
   */
  imagePosition: PropTypes.string,
  /**
   * This prop add a tooltip.
   */
  tooltip: PropTypes.string,
  /**
   *  Transition time in ms.
   */
  transition: PropTypes.string,
  /**
   *  Avatar object in order to setup the video.
   */
  video: PropTypes.shape({
    url: PropTypes.string.isRequired,
    controls: PropTypes.bool,
    autoPlay: PropTypes.bool,
    muted: PropTypes.bool,
    loop: PropTypes.bool,
  }),
};
