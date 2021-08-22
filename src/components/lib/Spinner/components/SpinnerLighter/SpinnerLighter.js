import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { styleCentered } from "../../../../../utils/utils";
import "./style.scss";

const SpinnerLighter = props => {
  const { size = "sm", isCentered = false, shadows = true } = props;
  const isShadows = shadows ? "shadows" : "";

  return (
    <div
      className={`kromac-spinner spinner-lighter ${size} ${isShadows}`}
      style={styleCentered(isCentered)}
    >
      <div className="loader">
        <span />
      </div>
    </div>
  );
};

SpinnerLighter.propTypes = exact({
  spinnerType: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  isCentered: PropTypes.bool,
  shadows: PropTypes.bool
});

export default SpinnerLighter;
