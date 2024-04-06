import React from "react";
import PropTypes from "prop-types";
import PanelKromac from "../../../components/lib/Panel";
import "../../../css/style.css";
import "../../../css/Panel.css";

/**
 * Primary UI component for user interaction
 */
export const Panel = (props) => <PanelKromac {...props} />;

Panel.propTypes = {
  /**
   * Turns Panel background color dark and shows a neon border around.
   */
  borderNeon: PropTypes.bool,
  /**
   * Turns Panel background transparent and adds a blurred effect.
   */
  transparent: PropTypes.bool,
  /**
   * This prop adds a box-shadows around the Panel.
   */
  shadows: PropTypes.bool,
  /**
   *  Panel content, you can write html code inside.
   */
  children: PropTypes.any,
};
