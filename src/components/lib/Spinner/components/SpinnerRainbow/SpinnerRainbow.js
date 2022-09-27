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

const SpinnerRainbow = (props) => {
  const { size = 'sm', bgColor = '#fff', isCentered = false, ...rest } = props;
  const { key, id } = rest;
  const newRest = {
    key,
    id,
  };
  const style = {
    '--bgSpiner': bgColor,
  };
  const kromacSpinner = classNames('kromac-spinner', 'spinner-rainbown', {
    [size]: !!size,
    [rest.className]: !!rest.className,
  });

  return (
    <div
      {...newRest}
      className={kromacSpinner}
      style={{ ...style, ...styleCentered(isCentered) }}
    >
      <div className="loader">{spanGenerator(5)}</div>
    </div>
  );
};

export default SpinnerRainbow;
