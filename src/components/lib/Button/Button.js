import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import "./style.scss";

const Button = ({ color = "primary", buttonType = "", className = "" }) =>
  <div>
    <button
      className={`kromac-btn ${color} ${buttonType} waves-effect waves-light`}
    >
      <span />
      <p className={`${className}`}>Button here</p>
    </button>
  </div>;

Button.propTypes = exact({
  buttonType: PropTypes.oneOf(["classic", "neon"]),
  color: PropTypes.oneOf([
    "primary",
    "success",
    "warning",
    "error",
    "danger",
    "info",
    "dark",
    "transparent"
  ]),
  className: PropTypes.string,
  children: PropTypes.any
});

export default Button;
