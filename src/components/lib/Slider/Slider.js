import React, { useState } from "react";
import { inactivateIonIcon } from "../../../utils/utils";
import "./style.scss";

const Slider = props => {
  const [counter, setCounter] = useState(0);

  const { images = [], height = "500px", showPreview = false } = props;
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
                className={`kromac-slide-preview`}
                onClick={() => handleClick(index)}
              >
                <img src={image} alt="slider" />
              </div>
            )}
          </div>}
        <div className="kromac-slider-container" style={style}>
          {images.map((image, index) =>
            <div key={index} className={`kromac-slide`}>
              <img src={image} alt="slider" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Slider;
