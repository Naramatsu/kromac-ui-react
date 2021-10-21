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

const SpinnerSVG = props => {
  const {
    size = "sm",
    color = "#fff",
    bgColor = "#000",
    fontColor = "#fff",
    isCentered = false,
    shadows = true
  } = props;

  const isShadows = shadows ? "shadows" : "";
  const style = {
    background: bgColor,
    "--bgSpiner": color,
    "--loaderColor": fontColor
  };

  return (
    <div
      className={`kromac-spinner spinner-svg ${size} ${isShadows}`}
      style={{ ...style, ...styleCentered(isCentered) }}
    >
      <div className="loader">
        {spanGenerator(20)}
        <div className="rocket">
          <img src="https://res.cloudinary.com/dxg9gszax/image/upload/v1634079842/kromac-ui/rocket_grqgxg.svg" alt="rocket" />
        </div>
      </div>
    </div>
  );
};

SpinnerSVG.propTypes = exact({
  spinnerType: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.string,
  bgColor: PropTypes.string,
  fontColor: PropTypes.string,
  isCentered: PropTypes.bool,
  shadows: PropTypes.bool
});

export default SpinnerSVG;
