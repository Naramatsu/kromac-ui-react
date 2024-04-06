import React from "react";
import PropTypes from "prop-types";
import MenuKromac from "../../../components/lib/Menu";
import "../../../css/style.css";
import "../../../css/Menu.css";

/**
 * Primary UI component for user interaction
 */
export const Menu = (props) => <MenuKromac {...props} />;

Menu.propTypes = {
  /**
   * Sets the text that will be display as the app name.
   */
  appName: PropTypes.string,
  /**
   * Image url.
   */
  imgLogo: PropTypes.string,
  /**
   * String array of tabs name.
   */
  tabs: PropTypes.arrayOf(PropTypes.string),
  /**
   * Adds an input to search by tab name.
   */
  searchComponents: PropTypes.bool,
  /**
   * Sets background color.
   */
  bgColor: PropTypes.string,
  /**
   * Sets background color of the hamburgermenu button.
   */
  hamburgerColor: PropTypes.string,
  /**
   * Sets background color of the hamburgermenu button when this is active.
   */
  hamburgerActiveColor: PropTypes.string,
  /**
   * Sets url link to redirect to home page.
   */
  homeUrl: PropTypes.string,
  /**
   * Transition time.
   */
  transition: PropTypes.string,
};
