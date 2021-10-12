import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";

const BannerClassic = props => {
  const {
    image,
    background = "#000",
    color,
    height = "auto",
    order = "right",
    overlay,
    textAlign = "center",
    isBottom = false,
    children
  } = props;

  const bannerHeight = height !== "auto";
  const overlayClass = overlay && bannerHeight ? "overlay" : "normal";
  const orderCaption = order === "left" ? "last" : "first";
  const orderImage = order === "left" ? "first" : "last";
  const imagePlace = isBottom && overlay && bannerHeight ? "bottom" : "";
  const styleContainer = {
    "--heightImg": bannerHeight ? height : "50px"
  };

  const style = {
    background,
    color,
    height,
    textAlign,
    "--heightImg": height,
    "--widthImg": bannerHeight ? "auto" : "100%"
  };

  return (
    <div className="kromac-banner-container" style={styleContainer}>
      <div className={`kromac-banner-classic ${overlayClass}`} style={style}>
        <div className="kromac-banner-content">
          <div className="kromac-banner-grid">
            <div className={`order-caption-${orderCaption}`}>
              <div className="kromac-banner-caption">
                <div>
                  {children}
                </div>
              </div>
            </div>
            <div className={`order-image-${orderImage}`}>
              <div className={`kromac-banner-image`}>
                <img src={image} alt="banner" className={`${imagePlace}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BannerClassic.propTypes = exact({
  bannerType: PropTypes.oneOf(["classic", "image", "text"]),
  image: PropTypes.string.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.string,
  order: PropTypes.string,
  overlay: PropTypes.bool,
  textAlign: PropTypes.string,
  isBottom: PropTypes.bool,
  children: PropTypes.any
});

export default BannerClassic;
