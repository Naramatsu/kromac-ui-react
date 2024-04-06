import React from "react";
import PropTypes from "prop-types";
import SpinnerKromac from "../../../components/lib/Spinner";
import "../../../css/Spinner.css";

/**
 * Primary UI component for user interaction
 */
export const SpinnerLighter = (props) => <SpinnerKromac {...props} />;
export const SpinnerWaves = (props) => <SpinnerKromac {...props} />;
export const SpinnerSVG = (props) => <SpinnerKromac {...props} />;
export const SpinnerRainbow = (props) => <SpinnerKromac {...props} />;

SpinnerLighter.propTypes = {
  /**
   * Spinner type.
   */
  spinnerType: PropTypes.oneOf(["lighter", "waves", "svg", "rainbow"]),
  /**
   * Sets Spinner size.
   */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /**
   * When this prop is turned on, it fixed the spinner in the middle of the screen.
   */
  isCentered: PropTypes.bool,
  /**
   * Sets background color inside the Spinner.
   */
  bgColorInside: PropTypes.oneOf(["#000", "#fff"]),
  /**
   * Adds a shadows around the Spinner.
   */
  shadows: PropTypes.bool,
};

SpinnerWaves.propTypes = {
  /**
   * Spinner type.
   */
  spinnerType: PropTypes.oneOf(["lighter", "waves", "svg", "rainbow"]),
  /**
   * Sets Spinner size.
   */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /**
   * When this prop is turned on, it fixed the spinner in the middle of the screen.
   */
  isCentered: PropTypes.bool,
  /**
   * Adds a shadows around the Spinner.
   */
  shadows: PropTypes.bool,
};

SpinnerRainbow.propTypes = {
  /**
   * Spinner type.
   */
  spinnerType: PropTypes.oneOf(["lighter", "waves", "svg", "rainbow"]),
  /**
   * Sets Spinner size.
   */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /**
   * When this prop is turned on, it fixed the spinner in the middle of the screen.
   */
  isCentered: PropTypes.bool,
  /**
   * Sets background color inside the Spinner.
   */
  bgColor: PropTypes.string,
};

SpinnerSVG.propTypes = {
  /**
   * Spinner type.
   */
  spinnerType: PropTypes.oneOf(["lighter", "waves", "svg", "rainbow"]),
  /**
   * Sets Spinner size.
   */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /**
   * When this prop is turned on, it fixed the spinner in the middle of the screen.
   */
  isCentered: PropTypes.bool,
  /**
   * Set background inner color.
   */
  color: PropTypes.string,
  /**
   * Sets background color Spinner.
   */
  bgColor: PropTypes.string,
  /**
   * Sets the font color of the dots (smoke).
   */
  fontColor: PropTypes.string,
  /**
   * Adds a shadows around the Spinner.
   */
  shadows: PropTypes.bool,
};
