import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";

const TogglePower = props => {
  const { checked } = props;
  const handleChange = props.onChange ? props.onChange : () => ({});

  return (
    <div className="kromac-toggle toggle-power">
      <label className="kromac-checkbox">
        <input
          type="checkbox"
          name="btn"
          checked={checked}
          onChange={handleChange}
        />
        <span className="span-toggle">
          <img
            src="https://res.cloudinary.com/dxg9gszax/image/upload/v1634088131/kromac-ui/power_g01rr7.png"
            alt="power"
          />
        </span>
      </label>
    </div>
  );
};

TogglePower.propTypes = exact({
  toggleType: PropTypes.string,
  checked: PropTypes.bool,
  borderRadius: PropTypes.string,
  onChange: PropTypes.func,
  ref: PropTypes.any
});

export default TogglePower;
