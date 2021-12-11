import React, { lazy } from "react";

const Row = lazy(() => import("react-bootstrap/Row"));
const Col = lazy(() => import("react-bootstrap/Col"));
const ToastComponent = lazy(() => import("../../lib/Toast"));
const BoxImplementation = lazy(() => import("../../BoxImplementation"));

const Wrapper = ({ children, componentText }) =>
  <div>
    <Row>
      <Col sm={12}>
        <div className="kromac-toast-styory">
          {children}
        </div>
      </Col>
      <Col sm={12} md={6}>
        <h3 className="component-implementation">Implementation</h3>
        <BoxImplementation componentText={componentText} />
      </Col>
    </Row>
  </div>;

const Toast = props =>
  <Wrapper {...props}>
    <ToastComponent {...props.toastProps} />
  </Wrapper>;

export default Toast;
