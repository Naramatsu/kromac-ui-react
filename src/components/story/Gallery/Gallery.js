import React, { lazy } from "react";

const Row = lazy(() => import("react-bootstrap/Row"));
const Col = lazy(() => import("react-bootstrap/Col"));
const GalleryComponent = lazy(() => import("../../lib/Gallery"));
const BoxImplementation = lazy(() => import("../../BoxImplementation"));

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

const Gallery = props =>
  <Wrapper {...props}>
    <GalleryComponent {...props.gallerysProps} />
  </Wrapper>;

export default Gallery;
