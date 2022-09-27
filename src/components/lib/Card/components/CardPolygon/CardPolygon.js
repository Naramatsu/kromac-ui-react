import React, { useState } from 'react';
import { determinateColor } from '../../../../../utils/utils';
import classNames from 'classnames';
import Skeleton from '../../../Skeleton';
import { videoBuilder } from '../../Card';

const CardPolygon = (props) => {
  const {
    image,
    name,
    color = '#fff',
    imageFitPosition = 'top',
    shape = 'hexagon',
    video,
    children,
    ...rest
  } = props;

  const { key, id } = rest;
  const newRest = {
    key,
    id,
  };

  const [isMediaLoading, setIsMediaLoading] = useState(true);
  const styleColor = determinateColor(color);
  const bgColor =
    color !== 'transparent'
      ? {
          background: `linear-gradient(45deg, ${color}, #0000004D)`,
        }
      : {};

  const kromacContainer = classNames('kromac-container', 'card-hexagon', {
    [rest.className]: !!rest.className,
  });

  const kromacCard = classNames('kromac-card', {
    [shape]: !!shape,
    [styleColor]: !!styleColor,
  });

  return (
    <div {...newRest} className={kromacContainer}>
      <div className={kromacCard} style={{ ...bgColor }}>
        <div className="kromac-card-image">
          {isMediaLoading && <Skeleton width="100%" height="100%" />}
          {video ? (
            videoBuilder(video, setIsMediaLoading)
          ) : (
            <img
              src={image}
              alt="Card"
              style={{ objectPosition: imageFitPosition }}
              onLoad={() => setIsMediaLoading(false)}
            />
          )}
        </div>
        <div className="kromac-card-caption" style={bgColor}>
          <div className="text-bg-light">
            <h4>{name}</h4>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPolygon;
