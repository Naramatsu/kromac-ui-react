import React from 'react';
import classNames from 'classnames';
import { styleCentered } from '../../../../../utils/utils';

const spanGenerator = (loops) => {
  const spans = [];
  for (let i = 1; i <= loops; i++) {
    var style = { '--i': i };
    spans.push(<span key={i} style={style} />);
  }
  return spans;
};

const SpinnerWaves = (props) => {
  const { size = 'sm', isCentered = false, shadows = true, ...rest } = props;
  const { key, id } = rest;
  const newRest = {
    key,
    id,
  };
  const isShadows = shadows ? 'shadows' : '';
  const kromacSpinner = classNames('kromac-spinner', 'spinner-waves', {
    [size]: !!size,
    [isShadows]: !!isShadows,
    [rest.className]: !!rest.className,
  });

  return (
    <div
      {...newRest}
      className={kromacSpinner}
      style={styleCentered(isCentered)}
    >
      <div className="loader">{spanGenerator(8)}</div>
    </div>
  );
};

export default SpinnerWaves;
