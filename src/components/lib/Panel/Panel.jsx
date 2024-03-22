import React from 'react';
import classNames from 'classnames';

const Panel = ({
  borderNeon = false,
  transparent = false,
  shadows = true,
  children,
  ...rest
}) => {
  const border = borderNeon ? 'neon' : '';
  const isTransparent = transparent ? 'transparent' : '';
  const isShadows = shadows ? 'shadows' : '';
  const kromacPanel = classNames('kromac-panel', {
    [border]: !!border,
    [isTransparent]: !!isTransparent,
    [isShadows]: !!isShadows,
    [rest.className]: !!rest.className,
  });

  const { key, id } = rest;
  const newRest = {
    key,
    id,
  };

  return (
    <div {...newRest} className={kromacPanel}>
      <span />
      <div className="content">{children}</div>
    </div>
  );
};

export default Panel;
