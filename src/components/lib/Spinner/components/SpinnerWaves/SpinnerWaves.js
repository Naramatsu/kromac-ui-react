import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { spanGenerator, styleCentered } from "../../../../../utils/utils";

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
