import React, { lazy } from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import "./style.scss";

const Row = lazy(() => import("react-bootstrap/Row"));
const Col = lazy(() => import("react-bootstrap/Col"));

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
          <Row>
            <Col lg={6} md={6} sm={{ order: orderCaption }}>
              <div className="kromac-banner-caption">
                <div>
                  {children}
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={{ order: orderImage }}>
              <div className={`kromac-banner-image`}>
                <img src={image} alt="banner" className={`${imagePlace}`} />
              </div>
            </Col>
          </Row>
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
