import React from 'react';
import classNames from 'classnames';

const BannerImg = (props) => {
  const {
    image,
    textAlign = 'center',
    color = '#fff',
    height = '500px',
    attachment = 'fixed',
    children,
    ...rest
  } = props;

  const { key, id } = rest;
  const newRest = {
    key,
    id,
  };

  const style = {
    backgroundImage: `url(${image})`,
    color,
    height,
    textAlign,
    backgroundAttachment: attachment,
  };

  const kromacBannerImage = classNames('kromac-banner-image', {
    [rest.className]: !!rest.className,
  });

  return (
    <div {...newRest} style={style} className={kromacBannerImage}>
      <div className="kromac-banner-caption">
        <div className="container">{children}</div>
      </div>
    </div>
  );
};

export default BannerImg;
