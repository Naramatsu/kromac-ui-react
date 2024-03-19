import React from "react";
import classNames from "classnames";
import Spinner from "../Spinner/Spinner.jsx";

const Button = ({
  color = "primary",
  buttonType = "classic",
  loading = false,
  disabled = false,
  onClick,
  children,
  ...rest
}) => {
  const spinnerClass = loading ? "spinner" : "";
  const disabledClass = disabled ? "disabled" : "";
  const bgSpinner = buttonType === "classic" ? "#fff" : "#212f3c";

  const { key, id } = rest;
  const newRest = {
    key,
    id,
  };

  const kromacBtn = classNames("kromac-btn", {
    [color]: !!color,
    [buttonType]: !!buttonType,
    [disabledClass]: !!disabledClass,
  });

  const buttonContent = classNames("button-content", {
    [spinnerClass]: !!spinnerClass,
  });

  return (
    <div {...newRest}>
      <button
        {...rest}
        disabled={disabled}
        onClick={onClick}
        className={kromacBtn}
      >
        <span className="kromac-span-button" />
        <div className={buttonContent}>
          {loading && <Spinner bgColorInside={bgSpinner} />}
          <p>{children}</p>
        </div>
      </button>
    </div>
  );
};

export default Button;
