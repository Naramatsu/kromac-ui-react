import React from 'react';
import classNames from 'classnames';

const ToggleSwitch = (props) => {
  const { checked, onColor = '#28B463', offColor = '#CB4335', ...rest } = props;
  const { key, id } = rest;
  const newRest = {
    key,
    id,
  };
  const handleChange = props.onChange ? props.onChange : () => ({});
  const style = {
    '--chkOnColor': onColor,
    '--chkOffColor': offColor,
  };
  const kromacToggle = classNames('kromac-toggle', 'toggle-switch', {
    [rest.className]: !!rest.className,
  });

  return (
    <div {...newRest} className={kromacToggle}>
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

export default ToggleSwitch;
