import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";

const Toast = props => {
  const {
    message,
    color = "night",
    visible = false,
    timeOut = 5000,
    positionY = "bottom",
    positionX = "left",
    children
  } = props;

  const [isvisible, setIsVisible] = useState(visible);
  const style = {
    opacity: isvisible ? "1" : "0"
  };
  const isLeft = positionX === "left";
  const positionStyle = {
    [positionY]: isvisible ? "10px" : "-50px",
    [positionX]: isLeft ? "10px" : "40px"
  };

  useEffect(
    () => {
      setIsVisible(visible);
      let timer = null;
      if (visible) timer = setTimeout(() => setIsVisible(false), timeOut);
      return () => {
        clearTimeout(timer);
      };
    },
    [visible, timeOut]
  );

  const close = () => {
    setIsVisible(false);
  };

  return (
    <div className="kromac-toast" style={positionStyle}>
      <div className={`kromac-toast-content ${color}`} style={style}>
        <div>
          <p className="text-bg-light">
            {message}
          </p>
          {children && children}
        </div>
        <span onClick={close}>
          <img
            src="https://res.cloudinary.com/dxg9gszax/image/upload/v1634081104/kromac-ui/closedark_udiuhh.svg"
            alt="close"
          />
        </span>
      </div>
    </div>
  );
};

Toast.propTypes = exact({
  message: PropTypes.string,
  color: PropTypes.oneOf([
    "transparent",
    "primary",
    "success",
    "error",
    "danger",
    "warning",
    "info",
    "night"
  ]),
  visible: PropTypes.bool,
  timeOut: PropTypes.number,
  positionY: PropTypes.oneOf(["bottom", "top"]),
  positionX: PropTypes.oneOf(["right", "left"]),
  children: PropTypes.any
});

export default Toast;
