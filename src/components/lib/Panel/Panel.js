import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import "./style.scss";

const Panel = ({
  borderNeon = false,
  transparent = false,
  shadows = true,
  children
}) => {
  const border = borderNeon ? "neon" : "";
  const isTransparent = transparent ? "transparent" : "";
  const isShadows = shadows ? "shadows" : "";

  return (
    <div className={`kromac-panel ${border} ${isTransparent} ${isShadows}`}>
      <span />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

Panel.propTypes = exact({
  borderNeon: PropTypes.bool,
  transparent: PropTypes.bool,
  shadows: PropTypes.bool,
  children: PropTypes.any
});

export default Panel;
