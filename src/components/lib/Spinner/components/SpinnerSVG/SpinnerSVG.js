import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { spanGenerator, styleCentered } from "../../../../../utils/utils";

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
          <FontAwesomeIcon icon={faRocket} />
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
