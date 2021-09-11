import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import {
  isViewStyleKromacCol,
  templateGenerator,
  widthCalculator,
  rowColGenerator
} from "../../../../utils/utils";
import "./style.scss";

const GalleryResponsive = props => {
  const [isViewImage, setIsViewImage] = useState(false);
  const [itemActive, setItemActive] = useState({});
  const { images = [], gridGap = "0" } = props;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const widthCalculated = widthCalculator(screenWidth);
  const style = { gridTemplate: templateGenerator(images, widthCalculated) };
  const isActive = isViewImage ? "active" : "";

  const handleResize = () => setScreenWidth(window.innerWidth);

  const close = e => {
    e.preventDefault();
    setItemActive({});
    setIsViewImage(false);
  };

  const handleViewImage = ({ item }) => {
    setItemActive({ item });
    setIsViewImage(true);
  };

  return (
    <div className="gallery-default" style={{ ...style, gridGap }}>
      <span className={`bgblur ${isActive}`} />
      {images.map((image, index) =>
        <div
          key={index}
          className={`kromac-box ${isViewStyleKromacCol({
            item: index,
            itemActive
          })}`}
          style={{ ...rowColGenerator(image) }}
        >
          <div className="kromac-box-container">
            <div className="brillo" />
            <button onClick={close} className="close">
              <ion-icon name="close-circle-outline" />
            </button>
            <img
              src={image.img}
              alt={`pick-${index}`}
              onClick={() => handleViewImage({ item: index })}
            />
          </div>
        </div>
      )}
    </div>
  );
};

GalleryResponsive.propTypes = exact({
  galleryType: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      row: PropTypes.number,
      col: PropTypes.number
    })
  ),
  gridGap: PropTypes.string
});

export default GalleryResponsive;
