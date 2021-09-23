import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import "./BannerImg.scss";

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
  color: PropTypes.string,
  height: PropTypes.string,
  attachment: PropTypes.string,
  children: PropTypes.any
});

export default BannerImg;
