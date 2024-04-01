import React from "react";
import PropTypes from "prop-types";
import ChipKromac from "../../../components/lib/Chip";
import "../../../css/Chip.style.css";

/**
 * Primary UI component for user interaction
 */
export const Chip = (props) => <ChipKromac {...props} />;

Chip.propTypes = {
  /**
   * Sets background color.
   */
  color: PropTypes.string,
  /**
   * Sets font color.
   */
  fontColor: PropTypes.string,
  /**
   * 	html content.
   */
  children: PropTypes.any,
};
