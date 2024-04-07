import React from "react";
import PropTypes from "prop-types";
import ToggleKromac from "../../../components/lib/Toggle";

/**
 * Primary UI component for user interaction
 */
export const Toggle = (props) => <ToggleKromac {...props} />;

Toggle.propTypes = {
  /**
   * Toggle type.
   */
  toggleType: PropTypes.oneOf(["power", "switch"]),
  /**
   * This prop indicates whether it is checked or not.
   */
  checked: PropTypes.bool,
  /**
   * Sets color when it is checked.
   */
  onColor: PropTypes.string,
  /**
   * Sets color when it is not checked.
   */
  offColor: PropTypes.string,
  /**
   *  onChange event
   */
  onChange: PropTypes.func,
};
