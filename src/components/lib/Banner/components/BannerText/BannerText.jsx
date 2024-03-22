import React from 'react';
import classNames from 'classnames';

const BannerText = (props) => {
  const {
    title,
    image,
    bgTextColor = '#fff',
    height = '500px',
    order,
    attachment,
    bgPosition = 'center',
    textAlign = 'center',
    ...rest
  } = props;

  const { key, id } = rest;
  const newRest = {
    key,
    id,
  };

  const bannerHeight = height !== 'auto';
  const orderCaption = order === 'right' ? 'last' : 'first';
  const orderImage = order === 'right' ? 'first' : 'last';
  const style = {
    backgroundImage: `url(${image})`,
    height,
    backgroundAttachment: attachment,
    textAlign,
    backgroundPosition: bgPosition,
    '--heightImg': height,
    '--widthImg': bannerHeight ? 'auto' : '100%',
  };

  const KromacBannerText = classNames('kromac-banner-text', {
    [rest.className]: !!rest.className,
  });

  return (
    <div {...newRest} style={style} className={KromacBannerText}>
      <div className="kromac-banner-container">
        <div className="kromac-banner-grid">
          <div className={`order-caption-${orderCaption}`}>
            <div className="kromac-banner-caption">
              <div style={{ background: bgTextColor }}>
                <h1>{title}</h1>
              </div>
            </div>
          </div>
          <div className={`order-image-${orderImage}`}>
            <div className={`kromac-banner-image`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerText;
