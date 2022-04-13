import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import {
  isViewStyleKromacCol,
  templateGenerator,
  widthCalculator,
  rowColGenerator
} from "../../../../utils/utils";
import Skeleton from "../../Skeleton";
import { videoBuilder } from "../Gallery";

const GalleryResponsive = props => {
  const [isViewImage, setIsViewImage] = useState(false);
  const [itemActive, setItemActive] = useState({});
  const [isMediaLoading, setIsMediaLoading] = useState(true);
  const { content = [], gridGap = "0" } = props;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const widthCalculated = widthCalculator(screenWidth);
  const style = { gridTemplate: templateGenerator(content, widthCalculated) };
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
      {content.map((item, index) =>
        <div
          key={index}
          className={`kromac-box ${isViewStyleKromacCol({
            item: index,
            itemActive
          })}`}
          style={{ ...rowColGenerator(item) }}
        >
          <div className="kromac-box-container">
            <div className="brillo" />
            <button onClick={close} className="close">
              <img
                src="https://res.cloudinary.com/dxg9gszax/image/upload/v1634081104/kromac-ui/closedark_udiuhh.svg"
                alt="close"
              />
            </button>
            {isMediaLoading
              ? <Skeleton width="100%" height="100%" />
              : <p>Rendering please wait</p>}

            {Object.keys(item)[0] === "video"
              ? videoBuilder(
                  {
                    url: item.video,
                    index,
                    itemActive: itemActive.item === index
                  },
                  setIsMediaLoading,
                  handleViewImage
                )
              : <img
                  src={item.img}
                  alt={`pick-${index}`}
                  onClick={() => handleViewImage({ item: index })}
                  onLoad={() => setIsMediaLoading(false)}
                />}
          </div>
        </div>
      )}
    </div>
  );
};

GalleryResponsive.propTypes = exact({
  galleryType: PropTypes.string,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      video: PropTypes.string,
      row: PropTypes.number,
      col: PropTypes.number
    })
  ),
  gridGap: PropTypes.string
});

export default GalleryResponsive;
