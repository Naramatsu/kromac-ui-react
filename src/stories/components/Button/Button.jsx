import React from "react";
import PropTypes from "prop-types";
import ButtonKromac from "../../../components/lib/Button";
import "../../../css/Button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ children, ...props }) => (
  <ButtonKromac {...props}>{children}</ButtonKromac>
);

Button.propTypes = {
  /**
   * Sets background color of the component.
   */
  color: PropTypes.oneOf([
    "transparent",
    "primary",
    "success",
    "warning",
    "error",
    "danger",
    "info",
    "dark",
  ]),
  /**
   * Button type
   */
  buttonType: PropTypes.oneOf(["classic", "neon"]),
  /**
   * This prop displayed a spinner into the button.
   */
  loading: PropTypes.bool,
  /**
   * This prop disables the button.
   */
  disabled: PropTypes.bool,
  /**
   * Button contents
   */
  children: PropTypes.any,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};
