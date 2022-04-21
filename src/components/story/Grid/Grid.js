import React, { lazy } from "react";

const Row = lazy(() => import("react-bootstrap/Row"));
const Col = lazy(() => import("react-bootstrap/Col"));
const GridComponent = lazy(() => import("../../lib/Grid"));
const BoxImplementation = lazy(() => import("../../BoxImplementation"));

const Wrapper = ({ children, componentText }) =>
  <div>
    <Row>
      <Col sm={12}>
        {children}
      </Col>
      <Col sm={12} lg={6}>
        <h3 className="component-implementation">Implementation</h3>
        <BoxImplementation componentText={componentText} />
      </Col>
    </Row>
  </div>;

const Grid = props =>
  <Wrapper {...props}>
    <GridComponent {...props.gridsProps}>
      <div className="grid-preview">Div 1</div>
      <div className="grid-preview">Div 2</div>
      <div className="grid-preview">Div 3</div>
      <div className="grid-preview">Div 4</div>
    </GridComponent>
  </Wrapper>;

export default Grid;
