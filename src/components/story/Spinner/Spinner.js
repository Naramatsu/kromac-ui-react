import React, { lazy } from "react";
import { Col, Row } from "react-bootstrap";

const SpinnerComponent = lazy(() => import("../../lib/Spinner"));
const BoxImplementation = lazy(() => import("../../BoxImplementation/BoxImplementation"));

const Wrapper = ({ children, componentText }) =>
  <div>
    <Row>
      <Col sm={12} md={6} lg={4} xl={3}>
        {children}
      </Col>
      <Col sm={12} md={12} lg={8} xl={6}>
        <BoxImplementation componentText={componentText} />
      </Col>
    </Row>
  </div>;

const Spinner = props =>
  <Wrapper {...props}>
    <SpinnerComponent {...props.spinnersProps} />
  </Wrapper>;

export default Spinner;
