import React from "react";
import PropTypes from "prop-types";
import TextAnimationKromac from "../../../components/lib/TextAnimation";
import "../../../css/TextAnimation.css";

/**
 * Primary UI component for user interaction
 */
export const TextAnimation = (props) => <TextAnimationKromac {...props} />;

TextAnimation.propTypes = {
  /**
   * Just a word.
   */
  word1: PropTypes.string.isRequired,
  /**
   * Just another word.
   */
  word2: PropTypes.string,
  /**
   * Animation transition time in seconds.
   */
  timer: PropTypes.string,
  /**
   * Sets the background color.
   */
  background: PropTypes.string,
  /**
   * Sets the font color.
   */
  fontColor: PropTypes.string,
  /**
   * Font size.
   */
  fontSize: PropTypes.string,
};
