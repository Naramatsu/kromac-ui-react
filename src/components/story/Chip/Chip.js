import React, { lazy } from "react";

const Row = lazy(() => import("react-bootstrap/Row"));
const Col = lazy(() => import("react-bootstrap/Col"));
const ChipComponent = lazy(() => import("../../lib/Chip"));
const BoxImplementation = lazy(() => import("../../BoxImplementation"));

const Wrapper = ({ children, componentText }) => (
  <div>
    <Row>
      <Col sm={12}>{children}</Col>
      <Col sm={12} lg={6}>
        <h3 className="component-implementation">Implementation</h3>
        <BoxImplementation componentText={componentText} />
      </Col>
    </Row>
  </div>
);

const Chip = (props) => (
  <Wrapper {...props}>
    <ChipComponent {...props.chipsProps}>Your name</ChipComponent>
  </Wrapper>
);

export default Chip;
