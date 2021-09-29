import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { styleCentered } from "../../../../../utils/utils";
// import "./SpinnerLighter.scss";
import "../../../../../css/SpinnerLighter.css"

const SpinnerLighter = props => {
  const {
    size = "sm",
    isCentered = false,
    shadows = true,
    bgColorInside = "#fff"
  } = props;
  const isShadows = shadows ? "shadows" : "";

  return (
    <div
      className={`kromac-spinner spinner-lighter ${size} ${isShadows}`}
      style={styleCentered(isCentered)}
    >
      <div className="loader">
        <span style={{ background: bgColorInside }} />
      </div>
    </div>
  );
};

SpinnerLighter.propTypes = exact({
  spinnerType: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  isCentered: PropTypes.bool,
  bgColorInside: PropTypes.string,
  shadows: PropTypes.bool
});

export default SpinnerLighter;
