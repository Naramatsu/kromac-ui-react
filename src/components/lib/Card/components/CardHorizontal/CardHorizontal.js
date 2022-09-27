import React, { useState } from 'react';
import { determinateColor, initialSizeProps } from '../../../../../utils/utils';
import classNames from 'classnames';
import Skeleton from '../../../Skeleton';
import { videoBuilder } from '../../Card';

const CardHorizontal = (props) => {
  const {
    image,
    title = '',
    color = '#fff',
    imageSide = 'left',
    imageFitPosition = 'center',
    reveal = false,
    transition = '.5s',
    video,
    children,
    ...rest
  } = props;

  const { key, id } = rest;
  const newRest = {
    key,
    id,
  };

  const [styleSize, setStyleSize] = useState(initialSizeProps);
  const [isMediaLoading, setIsMediaLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [kromacContainerStyle, setKromacContainerStyle] =
    useState(initialSizeProps);

  const showTitle = title || reveal;
  const styleColor = determinateColor(color);
  const isClassExpanded = reveal ? 'expanded' : '';
  const backgroundCaption = { background: color };
  const titleSize = reveal ? { maxWidth: '65%' } : { maxWidth: '100%' };

  const handleShowMore = (e) => {
    e.preventDefault();
    setKromacContainerStyle(() => {
      if (isExpanded) {
        return initialSizeProps;
      } else {
        return {
          boxShadow: '0px 0px 15px 5px rgba(0, 0, 0, .5)',
        };
      }
    });
    setStyleSize(() => {
      if (isExpanded) {
        return initialSizeProps;
      } else {
        if (imageSide === 'left') {
          return {
            transform: 'translateX(0)',
            background: color,
          };
        } else {
          if (reveal) {
            return {
              transform: 'translateX(0%)',
              background: color,
            };
          }
          return {
            transform: 'translateX(-50%)',
            background: color,
          };
        }
      }
    });
    setIsExpanded(!isExpanded);
  };

  const kromacContainer = classNames('kromac-container', 'horizontal', {
    [isClassExpanded]: !!isClassExpanded,
    [rest.className]: !!rest.className,
  });

  const kromacCard = classNames(
    'kromac-card',
    'horizontal',
    { [imageSide]: !!imageSide },
    { [isClassExpanded]: !!isClassExpanded },
    { [styleColor]: !!styleColor }
  );

  const kromacCardImage = classNames('kromac-card-image', {
    [imageSide]: !!imageSide,
  });

  const kromacCardCaption = classNames(
    'kromac-card-caption',
    { [imageSide]: !!imageSide },
    { [isClassExpanded]: !!isClassExpanded },
    { [styleColor]: !!styleColor }
  );

  const kromacCardText = classNames(
    'card-text',
    'kromac-scroll',
    'animate__animated animate__zoomIn'
  );
  return (
    <div {...newRest} className={kromacContainer} style={kromacContainerStyle}>
      <div className={kromacCard}>
        <div className={kromacCardImage}>
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
          {showTitle && (
            <div className="card-title">
              <h4
                style={titleSize}
                className="animate__animated animate__zoomIn"
              >
                {title}
              </h4>
              {reveal && (
                <label onClick={handleShowMore}>
                  {isExpanded ? 'show less' : 'show more'}
                </label>
              )}
            </div>
          )}
        </div>
        <div
          className={kromacCardCaption}
          style={{ ...styleSize, '--transition': transition }}
        >
          <div className={kromacCardText} style={{ ...backgroundCaption }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHorizontal;
