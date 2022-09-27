import React from 'react';
import classNames from 'classnames';

const Skeleton = ({
  height = '32px',
  width = '100%',
  borderRadius = 'none',
  className = 'light',
  ...rest
}) => {
  const { key, id } = rest;
  const newRest = {
    key,
    id,
  };
  const styleSkeleton = {
    height,
    width,
    borderRadius,
  };
  const kromacSkeleton = classNames('kromac-skeleton', {
    [className]: !!className,
  });
  const kromacSkeletonLoader = classNames('kromac-skeletonLoader', {
    [className]: !!className,
  });

  return (
    <div {...newRest} className={kromacSkeleton} style={styleSkeleton}>
      <div className={kromacSkeletonLoader} />
    </div>
  );
};

export default Skeleton;
