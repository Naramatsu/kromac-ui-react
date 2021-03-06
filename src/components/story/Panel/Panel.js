import React, { lazy } from "react";

const Row = lazy(() => import("react-bootstrap/Row"));
const Col = lazy(() => import("react-bootstrap/Col"));
const PanelComponent = lazy(() => import("../../lib/Panel"));
const BoxImplementation = lazy(() => import("../../BoxImplementation"));

const Wrapper = ({ children, componentText, panelProps }) =>
  <div>
    <Row>
      <Col
        sm={12}
        style={{
          margin: ".75em 0",
          padding: "1em",
          background: panelProps.transparent
            ? "url(https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg)"
            : ""
        }}
      >
        {children}
      </Col>
      <Col sm={12} lg={6}>
        <h3 className="component-implementation">Implementation</h3>
        <BoxImplementation componentText={componentText} />
      </Col>
    </Row>
  </div>;

const Panel = props =>
  <Wrapper {...props}>
    <PanelComponent {...props.panelProps}>
      <h1>Title</h1>
      <h3>What is Lorem Ipsum?</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </PanelComponent>
  </Wrapper>;

export default Panel;
