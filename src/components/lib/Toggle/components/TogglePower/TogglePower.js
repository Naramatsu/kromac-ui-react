import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";

const TogglePower = props => {
  const { checked, size = "md" } = props;
  const handleChange = props.onChange ? props.onChange : () => ({});

  return (
    <div className="kromac-toggle toggle-power">
      <label className={`kromac-checkbox ${size}`}>
        <input
          type="checkbox"
          name="btn"
          checked={checked}
          onChange={handleChange}
        />
        <span className="span-toggle" />
        <i className="fa fa-power-off" />
      </label>
    </div>
  );
};

TogglePower.propTypes = exact({
  toggleType: PropTypes.string,
  checked: PropTypes.bool,
  size: PropTypes.string,
  borderRadius: PropTypes.string
});

export default TogglePower;
