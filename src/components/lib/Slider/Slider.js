import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { inactivateIonIcon } from "../../../utils/utils";
import Skeleton from "../Skeleton";
import Spinner from "../Spinner";

const adder = count => {
  return count++;
};

const Slider = props => {
  const [counter, setCounter] = useState(0);
  const [isImgLoading, setIsImgLoading] = useState(true);

  const {
    content = [],
    height = "500px",
    showPreview = false,
    autoPlay = false,
    timer = 5
  } = props;
  const actualHeight = height === "auto" ? "500px" : height;
  const style = { height: actualHeight, "--left": counter };
  const nroItems = content.length - 1;

  const handleChangeLeft = e => {
    e.preventDefault();
    setCounter(() => {
      if (counter <= 0) {
        return nroItems;
      }
      return counter - 1;
    });
  };

  const handleChangeRight = e => {
    e.preventDefault();
    setCounter(() => {
      if (counter >= nroItems) {
        return 0;
      }
      return counter + 1;
    });
  };

  const handleClick = key => {
    setCounter(key);
  };

  useEffect(
    () => {
      if (counter === 0) {
        setCounter(adder(counter));
      }
      if (counter > nroItems) {
        setCounter(0);
      }
      const handlerTimeout = setTimeout(() => {
        if (autoPlay) {
          setCounter(counter + 1);
        }
      }, timer * 1000);

      return () => {
        clearTimeout(handlerTimeout);
      };
    },
    [counter, nroItems, timer, autoPlay]
  );

  return (
    <div>
      <div className="kromac-slider">
        <div className="separators">
          <span onClick={handleChangeLeft}>
            <img
              src="https://res.cloudinary.com/dxg9gszax/image/upload/v1634082826/kromac-ui/arrow-left_pu25qv.svg"
              style={{
                ...inactivateIonIcon(counter, "left", nroItems),
                paddingRight: "5px"
              }}
              alt="left"
            />
          </span>
          <span onClick={handleChangeRight}>
            <img
              src="https://res.cloudinary.com/dxg9gszax/image/upload/v1634082826/kromac-ui/arrow-right_ksufka.svg"
              style={{
                ...inactivateIonIcon(counter, "right", nroItems),
                paddingLeft: "5px"
              }}
              alt="right"
            />
          </span>
        </div>
        {showPreview &&
          <div className="kromac-slider-preview">
            {content.map((images, index) =>
              <div
                key={index}
                className={`kromac-slide-preview center`}
                onClick={() => handleClick(index)}
              >
                {isImgLoading &&
                  <div style={{ transform: "scale(.2)" }}>
                    <Spinner />
                  </div>}
                <img
                  src={images.img}
                  alt="slider"
                  onLoad={() => setIsImgLoading(false)}
                />
              </div>
            )}
          </div>}
        <div className="kromac-slider-container" style={style}>
          {content.map((images, index) =>
            <div key={index} className={`kromac-slide center`}>
              {isImgLoading && <Skeleton width="100%" height="100%" />}
              <img
                src={images.img}
                alt="slider"
                onLoad={() => setIsImgLoading(false)}
              />
              {images.caption &&
                <div className="kromac-slider-content">
                  {images.caption}
                </div>
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = exact({
  content: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      caption: PropTypes.any
    })
  ),
  height: PropTypes.string,
  showPreview: PropTypes.bool,
  autoPlay: PropTypes.bool,
  timer: PropTypes.number
});

export default Slider;
