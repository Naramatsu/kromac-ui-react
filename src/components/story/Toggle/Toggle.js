import React, { lazy } from "react";
import { Col, Row } from "react-bootstrap";

const ToggleComponent = lazy(() => import("../../lib/Toggle"));
const BoxImplementation = lazy(() =>
  import("../../BoxImplementation/BoxImplementation")
);

const Wrapper = ({ children, componentText }) =>
  <div>
    <Row>
      <Col sm={12} md={6} lg={4} xl={3} style={{ padding: "1em" }}>
        {children}
      </Col>
      <Col sm={12} md={12} lg={8} xl={6}>
        <BoxImplementation componentText={componentText} />
      </Col>
    </Row>
  </div>;

const Toggle = props =>
  <Wrapper {...props}>
    <ToggleComponent {...props.toggleProps} />
  </Wrapper>;

export default Toggle;
