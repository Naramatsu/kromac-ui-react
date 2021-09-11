import React, { lazy } from "react";
import { Col, Row } from "react-bootstrap";

const SliderComponent = lazy(() => import("../../lib/Slider"));
const BoxImplementation = lazy(() =>
  import("../../BoxImplementation/BoxImplementation")
);

const Wrapper = ({ children, componentText }) =>
  <div>
    <Row>
      <Col sm={12}>
        {children}
      </Col>
      <Col sm={12} md={6}>
        <BoxImplementation componentText={componentText} />
      </Col>
    </Row>
  </div>;

const Slider = props =>
  <Wrapper {...props}>
    <SliderComponent {...props.sliderProps} />
  </Wrapper>;

export default Slider;
