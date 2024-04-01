import React from "react";
import PropTypes from "prop-types";
import GalleryKromac from "../../../components/lib/Gallery";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../css/Gallery.css";
import "../../../css/GalleryPolygon.css";
import "../../../css/GalleryResponsive.css";

/**
 * Primary UI component for user interaction
 */
export const GalleryResponsive = (props) => <GalleryKromac {...props} />;
export const GalleryPolygon = (props) => <GalleryKromac {...props} />;

GalleryResponsive.propTypes = {
  /**
   * Gallery type.
   */
  galleryType: PropTypes.string,
  /**
   * Objects array of images or videos url, rows, cols.
   */
  content: PropTypes.arrayOf(
    PropTypes.shape({
      video: PropTypes.string,
      row: PropTypes.number,
      col: PropTypes.number,
    })
  ),
  /**
   * 	Sets space between rows and cols.
   */
  gridGap: PropTypes.string,
};

GalleryPolygon.propTypes = {
  /**
   * Gallery type.
   */
  galleryType: PropTypes.string,
  /**
   * 	String array of images url.
   */
  images: PropTypes.arrayOf(PropTypes.string),
  /**
   * 	Sets image position to be displayed in each polygon.
   */
  imageFitPosition: PropTypes.string,
  /**
   * 	Sets polygon shape.
   */
  polygonType: PropTypes.oneOf(["rhombus", "hexagon", "rabbet"]),
};
