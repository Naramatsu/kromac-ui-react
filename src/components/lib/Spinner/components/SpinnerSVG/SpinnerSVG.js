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

const SpinnerSVG = (props) => {
  const {
    size = 'sm',
    color = '#fff',
    bgColor = '#000',
    fontColor = '#fff',
    isCentered = false,
    shadows = true,
    ...rest
  } = props;
  const { key, id } = rest;
  const newRest = {
    key,
    id,
  };
  const isShadows = shadows ? 'shadows' : '';
  const style = {
    background: bgColor,
    '--bgSpiner': color,
    '--loaderColor': fontColor,
  };
  const kromacSpinner = classNames('kromac-spinner', 'spinner-svg', {
    [size]: !!size,
    [isShadows]: !!isShadows,
    [rest.className]: !!rest.className,
  });

  return (
    <div
      {...newRest}
      className={kromacSpinner}
      style={{ ...style, ...styleCentered(isCentered) }}
    >
      <div className="loader">
        {spanGenerator(20)}
        <div className="rocket">
          <img
            src="https://res.cloudinary.com/dxg9gszax/image/upload/v1634079842/kromac-ui/rocket_grqgxg.svg"
            alt="rocket"
          />
        </div>
      </div>
    </div>
  );
};

export default SpinnerSVG;
