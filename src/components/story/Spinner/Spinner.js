import React, { lazy } from "react";

const Row = lazy(() => import("react-bootstrap/Row"));
const Col = lazy(() => import("react-bootstrap/Col"));
const SpinnerComponent = lazy(() => import("../../lib/Spinner"));
const BoxImplementation = lazy(() => import("../../BoxImplementation"));

const Wrapper = ({ children, componentText }) =>
  <div>
    <div style={{ maxWidth: "200px", display: "flex" }}>
      {children}
    </div>
    <Row>
      <Col sm={12} md={6}>
        <h3 className="component-implementation">Implementation</h3>
        <BoxImplementation componentText={componentText} />
      </Col>
    </Row>
  </div>;

const Spinner = props =>
  <Wrapper {...props}>
    <SpinnerComponent {...props.spinnersProps} />
  </Wrapper>;

export default Spinner;
