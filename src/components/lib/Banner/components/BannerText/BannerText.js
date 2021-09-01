import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { Row, Col } from "react-bootstrap";
import "./style.scss";

const BannerText = props => {
  const {
    title,
    image,
    color,
    height = "500px",
    order,
    attachment,
    textAlign = "center"
  } = props;

  const bannerHeight = height !== "auto";
  const orderCaption = order === "left" ? "last" : "first";
  const orderImage = order === "left" ? "first" : "last";
  const style = {
    backgroundImage: `url(${image})`,
    color,
    height,
    backgroundAttachment: attachment,
    textAlign,
    "--heightImg": height,
    "--widthImg": bannerHeight ? "auto" : "100%"
  };

  return (
    <div className={`kromac-banner-text`} style={style}>
      <div className="kromac-banner-container">
        <Row>
          <Col lg={6} md={6} sm={{ order: orderCaption }}>
            <div className="kromac-banner-caption">
              <div>
                <h1>
                  {title}
                </h1>
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            md={6}
            sm={{ order: orderImage }}
            className="d-none d-md-block"
          >
            <div className={`kromac-banner-image`} />
          </Col>
        </Row>
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
  textAlign: PropTypes.string
});

export default BannerText;
