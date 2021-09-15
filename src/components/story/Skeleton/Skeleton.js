import React, { lazy } from "react";

const Row = lazy(() => import("react-bootstrap/Row"));
const Col = lazy(() => import("react-bootstrap/Col"));
const SkeletonComponent = lazy(() => import("../../lib/Skeleton"));
const BoxImplementation = lazy(() => import("../../BoxImplementation"));

const Wrapper = ({ children, componentText }) =>
  <div>
    <Row>
      <Col sm={12} style={{ padding: "1em" }}>
        {children}
      </Col>
      <Col sm={12} lg={6}>
        <BoxImplementation componentText={componentText} />
      </Col>
    </Row>
  </div>;

const Skeleton = props =>
  <Wrapper {...props}>
    <SkeletonComponent {...props.skeletonProps} />
  </Wrapper>;

export default Skeleton;
