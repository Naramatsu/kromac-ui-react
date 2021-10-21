import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";

const BannerText = props => {
  const {
    title,
    image,
    bgTextColor = "#fff",
    height = "500px",
    order,
    attachment,
    bgPosition = "center",
    textAlign = "center"
  } = props;

  const bannerHeight = height !== "auto";
  const orderCaption = order === "right" ? "last" : "first";
  const orderImage = order === "right" ? "first" : "last";
  const style = {
    backgroundImage: `url(${image})`,
    height,
    backgroundAttachment: attachment,
    textAlign,
    backgroundPosition: bgPosition,
    "--heightImg": height,
    "--widthImg": bannerHeight ? "auto" : "100%"
  };

  return (
    <div className={`kromac-banner-text`} style={style}>
      <div className="kromac-banner-container">
        <div className="kromac-banner-grid">
          <div className={`order-caption-${orderCaption}`}>
            <div className="kromac-banner-caption">
              <div style={{ background: bgTextColor }}>
                <h1>
                  {title}
                </h1>
              </div>
            </div>
          </div>
          <div className={`order-image-${orderImage}`}>
            <div className={`kromac-banner-image`} />
          </div>
        </div>
      </div>
    </div>
  );
};

BannerText.propTypes = exact({
  bannerType: PropTypes.oneOf(["classic", "image", "text"]),
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  height: PropTypes.string,
  order: PropTypes.string,
  attachment: PropTypes.string,
  textAlign: PropTypes.string,
  bgPosition: PropTypes.string
});

export default BannerText;
