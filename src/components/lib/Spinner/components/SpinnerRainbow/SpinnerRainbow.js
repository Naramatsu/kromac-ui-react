import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { spanGenerator, styleCentered } from "../../../../../utils/utils";
import "./style.scss";

const SpinnerRainbow = props => {
  const {
    size = "sm",
    bgColor = "#fff",
    isCentered = false,
    shadows = true
  } = props;

  const isShadows = shadows ? "shadows" : "";
  const style = {
    "--bgSpiner": bgColor
  };

  return (
    <div
      className={`kromac-spinner spinner-rainbown ${size} ${isShadows}`}
      style={{ ...style, ...styleCentered(isCentered) }}
    >
      <div className="loader">
        {spanGenerator(5)}
      </div>
    </div>
  );
};

SpinnerRainbow.propTypes = exact({
  spinnerType: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  bgColor: PropTypes.string,
  isCentered: PropTypes.bool,
  shadows: PropTypes.bool
});

export default SpinnerRainbow;
