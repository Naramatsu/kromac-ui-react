import React from "react";
import PropTypes from "prop-types";
import ToastKromac from "../../../components/lib/Toast";
import "../../../css/style.css";
import "../../../css/Toast.css";

/**
 * Primary UI component for user interaction
 */
export const Toast = (props) => <ToastKromac {...props} />;

Toast.propTypes = {
  /**
   * Toast message.
   */
  message: PropTypes.string.isRequired,
  /**
   * Sets background color.
   */
  color: PropTypes.oneOf([
    "primary",
    "success",
    "error",
    "danger",
    "warning",
    "info",
    "night",
    "transparent",
  ]),
  /**
   * When this prop turned on, it displays the Toast and the timer is disabled.
   */
  alwaysVisible: PropTypes.bool,
  /**
   * When this prop turned on, it displays the Toast.
   */
  visible: PropTypes.bool,
  /**
   * This prop set the duration in ms only when "visible" prop is setting on.
   */
  timeOut: PropTypes.number,
  /**
   * Toast position in Y-axis of the screen.
   */
  positionY: PropTypes.oneOf(["top", "bottom"]),
  /**
   * Toast position in X-axis of the screen.
   */
  positionX: PropTypes.oneOf(["left", "right"]),
};
