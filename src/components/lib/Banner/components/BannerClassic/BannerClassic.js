import React from 'react';
import classNames from 'classnames';

const BannerClassic = (props) => {
  const {
    image,
    background = '#000',
    color,
    height = 'auto',
    order = 'right',
    overlay,
    textAlign = 'center',
    isBottom = false,
    children,
    ...rest
  } = props;

  const { key, id } = rest;
  const newRest = {
    key,
    id,
  };

  const bannerHeight = height !== 'auto';
  const overlayClass = overlay && bannerHeight ? 'overlay' : 'normal';
  const orderCaption = order === 'left' ? 'last' : 'first';
  const orderImage = order === 'left' ? 'first' : 'last';
  const imagePlace = isBottom && overlay && bannerHeight ? 'bottom' : '';
  const styleContainer = {
    '--heightImg': bannerHeight ? height : '50px',
  };

  const style = {
    background,
    color,
    height,
    textAlign,
    '--heightImg': height,
    '--widthImg': bannerHeight ? 'auto' : '100%',
  };

  const kromacBannerContainer = classNames('kromac-banner-containe', {
    [rest.className]: !!rest.className,
  });

  const kromacBannerClassic = classNames('kromac-banner-classic', {
    [overlayClass]: !!overlayClass,
  });

  return (
    <div {...newRest} className={kromacBannerContainer} style={styleContainer}>
      <div className={kromacBannerClassic} style={style}>
        <div className="kromac-banner-content">
          <div className="kromac-banner-grid">
            <div className={`order-caption-${orderCaption}`}>
              <div className="kromac-banner-caption">
                <div>{children}</div>
              </div>
            </div>
            <div className={`order-image-${orderImage}`}>
              <div className={`kromac-banner-image`}>
                <img src={image} alt="banner" className={`${imagePlace}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerClassic;
