import React, { lazy } from "react";
import { Col, Row } from "react-bootstrap";

const CardComponent = lazy(() => import("../../lib/Card"));
const BoxImplementation = lazy(() => import("../../BoxImplementation/BoxImplementation"));

const Wrapper = ({ children, componentText, cardType }) =>
  <div>
    {cardType === "horizontal"
      ? <Row>
        <Col sm={12} md={12} lg={6}>
          {children}
        </Col>
        <Col sm={12} md={12} lg={6}>
          <BoxImplementation componentText={componentText} />
        </Col>
      </Row>
      : <Row>
        <Col sm={12} md={6} lg={4} xl={3}>
          {children}
        </Col>
        <Col sm={12} md={12} lg={8} xl={6}>
          <BoxImplementation componentText={componentText} />
        </Col>
      </Row>}
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