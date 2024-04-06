import React from "react";
import PropTypes from "prop-types";
import GridKromac from "../../../components/lib/Grid";
import "../../../css/style.css";
import "../../../css/Grid.css";

/**
 * Primary UI component for user interaction
 */
export const Grid = (props) => <GridKromac {...props} />;

Grid.propTypes = {
  /**
   * Columns number of grid, min 1 max 24.
   */
  columns: PropTypes.number,
  /**
   *  html content.
   */
  children: PropTypes.any,
};
