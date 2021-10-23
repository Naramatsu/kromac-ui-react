import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";

const ToggleSwitch = props => {
  const { checked, onColor = "#28B463", offColor = "#CB4335" } = props;

  const handleChange = props.onChange ? props.onChange : () => ({});
  const style = {
    "--chkOnColor": onColor,
    "--chkOffColor": offColor
  };

  return (
    <div className="kromac-toggle toggle-switch">
      <label className="kromac-checkbox" style={style}>
        <input
          type="checkbox"
          name="btn"
          checked={checked}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

ToggleSwitch.propTypes = exact({
  toggleType: PropTypes.string,
  checked: PropTypes.bool,
  onColor: PropTypes.string,
  offColor: PropTypes.string,
  onChange: PropTypes.func,
  ref: PropTypes.any,
  borderRadius: PropTypes.string
});

export default ToggleSwitch;
