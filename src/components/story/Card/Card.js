import React, { lazy } from "react";

const Row = lazy(() => import("react-bootstrap/Row"));
const Col = lazy(() => import("react-bootstrap/Col"));
const CardComponent = lazy(() => import("../../lib/Card"));
const BoxImplementation = lazy(() => import("../../BoxImplementation"));

const Wrapper = ({ children, componentText, cardType }) =>
  <div>
    <div style={{ maxWidth: "600px", display: "flex" }}>
      {children}
    </div>
    <Row>
      <Col sm={12} md={6}>
        <h3 className="component-implementation">Implementation</h3>
        <BoxImplementation componentText={componentText} />
      </Col>
    </Row>
  </div>;

const Card = props => {
  const cardPropsEdited = { ...props.cardProps };
  delete cardPropsEdited.text;
  return (
    <Wrapper
      componentText={props.componentText}
      cardType={props.cardProps.cardType}
    >
      <CardComponent {...cardPropsEdited}>
        {props.cardProps.text &&
          <p>
            {props.cardProps.text}
          </p>}
      </CardComponent>
    </Wrapper>
  );
};

export default Card;
