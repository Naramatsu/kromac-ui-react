import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const Toast = (props) => {
  const {
    message,
    color = 'night',
    visible = false,
    timeOut = 5000,
    positionY = 'bottom',
    positionX = 'left',
    children,
    ...rest
  } = props;

  const { key, id } = rest;
  const newRest = {
    key,
    id,
  };
  const [isvisible, setIsVisible] = useState(visible);
  const style = {
    opacity: isvisible ? '1' : '0',
  };
  const isLeft = positionX === 'left';
  const positionStyle = {
    [positionY]: isvisible ? '10px' : '-50px',
    [positionX]: isLeft ? '10px' : '40px',
  };

  useEffect(() => {
    setIsVisible(visible);
    let timer = null;
    if (visible) timer = setTimeout(() => setIsVisible(false), timeOut);
    return () => {
      clearTimeout(timer);
    };
  }, [visible, timeOut]);

  const close = () => {
    setIsVisible(false);
  };

  const kromacToast = classNames('kromac-toast', {
    [rest.className]: !!rest.className,
  });

  const kromacToastContent = classNames('kromac-toast-content', {
    [color]: !!color,
  });

  return (
    <div {...newRest} className={kromacToast} style={positionStyle}>
      <div className={kromacToastContent} style={style}>
        <div>
          <p className="text-bg-light">{message}</p>
          {children && children}
        </div>
        <span onClick={close}>
          <img
            src="https://res.cloudinary.com/dxg9gszax/image/upload/v1634081104/kromac-ui/closedark_udiuhh.svg"
            alt="close"
          />
        </span>
      </div>
    </div>
  );
};

export default Toast;
