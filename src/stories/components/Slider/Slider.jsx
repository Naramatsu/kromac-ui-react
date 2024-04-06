import React from "react";
import PropTypes from "prop-types";
import SliderKromac from "../../../components/lib/Slider";
import "../../../css/Slider.css";

/**
 * Primary UI component for user interaction
 */
export const Slider = (props) => <SliderKromac {...props} />;

Slider.propTypes = {
  /**
   * Objects array.
   */
  content: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      caption: PropTypes.any,
    })
  ).isRequired,
  /**
   * Sets heightof the component.
   */
  height: PropTypes.string,
  /**
   * When this prop is turned on, it will display a small preview below of each images.
   */
  showPreview: PropTypes.bool,
  /**
   * When this prop is turned on, it makes the slider plays automatically.
   */
  autoPlay: PropTypes.bool,
  /**
   * Sets the timeout slides in seconds. (This only works when the <AutoPlay> prop is turned on).
   */
  timer: PropTypes.number,
};
