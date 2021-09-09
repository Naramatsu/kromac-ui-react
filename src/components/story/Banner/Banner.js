import React, { lazy } from "react";
import { Col, Row } from "react-bootstrap";

const BannerComponent = lazy(() => import("../../lib/Banner"));
const BoxImplementation = lazy(() =>
  import("../../BoxImplementation/BoxImplementation")
);

const Wrapper = ({ children, componentText }) =>
  <div>
    <Row>
      <Col sm={12}>
        {children}
      </Col>
      <Col md={12} lg={6}>
        <BoxImplementation componentText={componentText} />
      </Col>
    </Row>
  </div>;

const Banner = props => {
  const { bannersProps: { bannerType } } = props;
  const isChildren = bannerType !== "text";
  return (
    <Wrapper {...props}>
      {isChildren
        ? <BannerComponent {...props.bannersProps}>
            <h1 className="text-bg-light">Title here</h1>
            <p className="text-bg-light">Some text here</p>
          </BannerComponent>
        : <BannerComponent {...props.bannersProps} />}
    </Wrapper>
  );
};

export default Banner;
