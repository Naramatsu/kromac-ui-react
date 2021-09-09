import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import "./style.scss";

const templateGenerator = (images, template) => {
  const rowLong = images.reduce(
    (sum, value) => (typeof value.row == "number" ? sum + value.row : sum),
    0
  );
  const colLong = images.reduce(
    (sum, value) => (typeof value.col == "number" ? sum + value.col : sum),
    0
  );
  const noRowCol = images.filter(
    noRC => noRC.row === undefined && noRC.col === undefined
  ).length;

  const long = rowLong + colLong + noRowCol;
  let nroRows = 0;
  let nroCols = 0;
  let style = "";

  if (template === "lg") {
    nroRows = Math.ceil(long / 4);
    nroCols = 4;
  }
  if (template === "md") {
    nroRows = Math.ceil(long / 2);
    nroCols = 2;
  }
  if (template === "sm") {
    return {};
  }

  for (let i = 0; i < nroRows; i++) {
    style = style + `"`;
    for (let j = 0; j < nroCols; j++) style = style + `1fr `;
    if (template === "lg") {
      style = style + `" 33.33vh `;
    }
    if (template === "md") {
      style = style + `" 250px `;
    }
  }
  return style;
};

const widthCalculator = width => {
  let tag = "";
  if (width > 768) tag = "lg";
  if (width <= 768) tag = "md";
  if (width <= 550) tag = "sm";
  return tag;
};

const rowColGenerator = item => {
  const { col, row } = item;
  const style = {};
  if (row) style.gridRow = `span ${row}`;
  if (col) style.gridColumn = `span ${col}`;
  return style;
};

const GalleryResponsive = props => {
  const [isViewImage, setIsViewImage] = useState(false);
  const [itemActicve, setItemActicve] = useState({});
  const { images = [], gridGap = "0" } = props;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calc = widthCalculator(screenWidth);
  const style = { gridTemplate: templateGenerator(images, calc) };
  const isActive = isViewImage ? "active" : "";

  const handleResize = () => setScreenWidth(window.innerWidth);

  const isViewStyleKromacCol = ({ row, item }) => {
    if (itemActicve.item === item) {
      return "active";
    }
    return "";
  };

  const close = e => {
    e.preventDefault();
    setItemActicve({});
    setIsViewImage(false);
  };

  const handleViewImage = ({ item }) => {
    setItemActicve({ item });
    setIsViewImage(true);
  };

  return (
    <div className="gallery-default" style={{ ...style, gridGap }}>
      <span className={`bgblur ${isActive}`} />
      {images.map((image, index) =>
        <div
          key={index}
          className={`kromac-box ${isViewStyleKromacCol({ item: index })}`}
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
