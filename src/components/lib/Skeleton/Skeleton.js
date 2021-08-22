import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import "./style.scss";

const Skeleton = ({
  height = "32px",
  width = "100%",
  borderRadius = "none",
  className = "light"
}) => {
  const styleSkeleton = {
    height,
    width,
    borderRadius
  };
  return (
    <div className={`kromac-skeleton ${className}`} style={styleSkeleton}>
      <div className={`kromac-skeletonLoader ${className}`} />
    </div>
  );
};

Skeleton.propTypes = exact({
  height: PropTypes.string,
  width: PropTypes.string,
  borderRadius: PropTypes.string,
  className: PropTypes.oneOf(["light", "dark"])
});

export default Skeleton;
