import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
// import "./ToggleSwitch.scss";
import "../../../../../css/ToggleSwitch.css"

const ToggleSwitch = props => {
  const {
    checked,
    onColor = "#28B463",
    offColor = "#CB4335",
    size = "md"
  } = props;

  const handleChange = props.onChange ? props.onChange : () => ({});
  const style = {
    "--chkOnColor": onColor,
    "--chkOffColor": offColor
  };

  return (
    <div className="kromac-toggle toggle-switch">
      <label className={`kromac-checkbox ${size}`} style={style}>
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
  size: PropTypes.string,
  borderRadius: PropTypes.string
});

export default ToggleSwitch;
