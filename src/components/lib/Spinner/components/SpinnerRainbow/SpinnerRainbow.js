import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { styleCentered } from "../../../../../utils/utils";

const spanGenerator = loops => {
  const spans = [];
  for (let i = 1; i <= loops; i++) {
    var style = { "--i": i };
    spans.push(<span key={i} style={style} />);
  }
  return spans;
};

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
