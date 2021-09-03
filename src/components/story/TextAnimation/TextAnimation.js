import React, { lazy } from "react";
import { Col, Row } from "react-bootstrap";

const TextAnimationComponent = lazy(() => import("../../lib/TextAnimation"));
const BoxImplementation = lazy(() =>
  import("../../BoxImplementation/BoxImplementation")
);

const Wrapper = ({ children, componentText }) =>
  <div>
    <Row>
      <Col sm={12} md={6} lg={4} xl={3} style={{ paddingBottom: "50px" }}>
        {children}
      </Col>
      <Col sm={12} md={12} lg={8} xl={6}>
        <BoxImplementation componentText={componentText} />
      </Col>
    </Row>
  </div>;

const TextAnimation = props =>
  <Wrapper {...props}>
    <TextAnimationComponent {...props.textAnimationProps} />
  </Wrapper>;

export default TextAnimation;
