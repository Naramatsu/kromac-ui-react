import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";

const BannerImg = props => {
  const {
    image,
    textAlign = "center",
    color = "#fff",
    height = "500px",
    attachment = "fixed",
    children
  } = props;

  const style = {
    backgroundImage: `url(${image})`,
    color,
    height,
    textAlign,
    backgroundAttachment: attachment
  };

  return (
    <div style={style} className="kromac-banner-image">
      <div className="kromac-banner-caption">
        <div className="container">
          {children}
        </div>
      </div>
    </div>
  );
};

BannerImg.propTypes = exact({
  bannerType: PropTypes.oneOf(["classic", "image", "text"]),
  image: PropTypes.string.isRequired,
  textAlign: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.string,
  attachment: PropTypes.string,
  children: PropTypes.any
});

export default BannerImg;
