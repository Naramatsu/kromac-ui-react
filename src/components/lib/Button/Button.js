import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import Spinner from "../Spinner";

const Button = ({
  color = "primary",
  buttonType = "classic",
  loading = false,
  disabled = false,
  onClick,
  children
}) => {
  const spinnerClass = loading ? "spinner" : "";
  const disabledClass = disabled ? "disabled" : "";
  const bgSpinner = buttonType === "classic" ? "#fff" : "#212f3c";

  return (
    <div>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`kromac-btn ${color} ${buttonType} ${disabledClass}`}
      >
        <span className="kromac-span-button" />
        <div className={`button-content ${spinnerClass}`}>
          {loading && <Spinner bgColorInside={bgSpinner} />}
          <p>
            {children}
          </p>
        </div>
      </button>
    </div>
  );
};

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
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.any
});

export default Button;
