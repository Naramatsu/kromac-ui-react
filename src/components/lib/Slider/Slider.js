import React, { useState, lazy, useEffect } from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { inactivateIonIcon } from "../../../utils/utils";
import "./style.scss";

const Skeleton = lazy(() => import("../Skeleton"));
const Spinner = lazy(() => import("../Spinner"));

const adder = count => {
  return count++;
};

const Slider = props => {
  const [counter, setCounter] = useState(0);
  const [isImgLoading, setIsImgLoading] = useState(true);

  const {
    images = [],
    height = "500px",
    showPreview = false,
    autoPlay = false,
    timer = 5
  } = props;
  const actualHeight = height === "auto" ? "500px" : height;
  const style = { height: actualHeight, "--left": counter };
  const nroItems = images.length - 1;

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
        } else {
          setCounter(0);
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
            <ion-icon
              name="caret-back-outline"
              style={{
                ...inactivateIonIcon(counter, "left", nroItems),
                paddingRight: "5px"
              }}
            />
          </span>
          <span onClick={handleChangeRight}>
            <ion-icon
              name="caret-forward-outline"
              style={{
                ...inactivateIonIcon(counter, "right", nroItems),
                paddingLeft: "5px"
              }}
            />
          </span>
        </div>
        {showPreview &&
          <div className="kromac-slider-preview">
            {images.map((image, index) =>
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
                  src={image}
                  alt="slider"
                  onLoad={() => setIsImgLoading(false)}
                />
              </div>
            )}
          </div>}
        <div className="kromac-slider-container" style={style}>
          {images.map((image, index) =>
            <div key={index} className={`kromac-slide center`}>
              {isImgLoading && <Skeleton width="100%" height="100%" />}
              <img
                src={image}
                alt="slider"
                onLoad={() => setIsImgLoading(false)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = exact({
  images: PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.string,
  showPreview: PropTypes.bool,
  autoPlay: PropTypes.bool,
  timer: PropTypes.number
});

export default Slider;
