import React from 'react';
import classNames from 'classnames';

const TogglePower = (props) => {
  const { checked, ...rest } = props;
  const handleChange = props.onChange ? props.onChange : () => ({});
  const { key, id } = rest;
  const newRest = {
    key,
    id,
  };
  const kromacToggle = classNames('kromac-toggle', 'toggle-power', {
    [rest.className]: !!rest.className,
  });

  return (
    <div {...newRest} className={kromacToggle}>
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

export default TogglePower;
