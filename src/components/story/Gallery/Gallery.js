import React, { lazy } from "react";
import { Col, Row } from "react-bootstrap";

const GalleryComponent = lazy(() => import("../../lib/Gallery"));
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

const Gallery = props =>
  <Wrapper {...props}>
    <GalleryComponent {...props.gallerysProps} />
  </Wrapper>;

export default Gallery;
