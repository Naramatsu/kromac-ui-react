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

const SpinnerWaves = props => {
  const { size = "sm", isCentered = false, shadows = true } = props;
  const isShadows = shadows ? "shadows" : "";

  return (
    <div
      className={`kromac-spinner spinner-waves ${size} ${isShadows}`}
      style={styleCentered(isCentered)}
    >
      <div className="loader">
        {spanGenerator(8)}
      </div>
    </div>
  );
};

SpinnerWaves.propTypes = exact({
  spinnerType: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  isCentered: PropTypes.bool,
  shadows: PropTypes.bool
});

export default SpinnerWaves;
