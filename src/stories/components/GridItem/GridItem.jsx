import React from "react";
import PropTypes from "prop-types";
import GridItemKromac from "../../../components/lib/GridItem";
import "../../../css/style.css";

/**
 * Primary UI component for user interaction
 */
export const GridItem = (props) => <GridItemKromac {...props} />;

GridItem.propTypes = {
  /**
   * Column numbers when the screen is 1024px or higher.
   */
  clg: PropTypes.number,
  /**
   * Column numbers when the screen is betwenn 1023px and 768px.
   */
  cmd: PropTypes.number,
  /**
   * Column numbers when the screen is betwenn 767px and 550px.
   */
  csm: PropTypes.number,
  /**
   * Column numbers when the screen is 549px or lower.
   */
  cxs: PropTypes.number,
  /**
   * Row numbers.
   */
  gridRow: PropTypes.number,
  /**
   *  html content.
   */
  children: PropTypes.any,
};
