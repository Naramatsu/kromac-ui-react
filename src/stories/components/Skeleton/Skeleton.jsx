import React from "react";
import PropTypes from "prop-types";
import SkeletonKromac from "../../../components/lib/Skeleton";
import "../../../css/Skeleton.css";

/**
 * Primary UI component for user interaction
 */
export const Skeleton = (props) => <SkeletonKromac {...props} />;

Skeleton.propTypes = {
  /**
   * Skeleton height in px, em or whatever valid format you want.
   */
  height: PropTypes.string,
  /**
   * Skeleton width in px, em or whatever valid format you want.
   */
  width: PropTypes.string,
  /**
   * Skeleton border radius in px, em or %.
   */
  borderRadius: PropTypes.string,
  /**
   *  Panel content, you can write html code inside.
   */
  className: PropTypes.oneOf(["dark", "light"]),
};
