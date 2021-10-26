import React, { lazy } from "react";

const Row = lazy(() => import("react-bootstrap/Row"));
const Col = lazy(() => import("react-bootstrap/Col"));
const BoxImplementation = lazy(() => import("../../BoxImplementation"));

const list = [
  "primary",
  "success",
  "warning",
  "error",
  "danger",
  "info",
  "night"
];

const Wrapper = ({ children, componentText }) =>
  <div>
    <Row>
      <Col sm={12}>
        {children}
      </Col>
      <Col sm={12} md={6}>
        <h3 className="component-implementation">Implementation</h3>
        <BoxImplementation componentText={componentText} />
      </Col>
    </Row>
  </div>;

const KromacClass = props =>
  <Wrapper {...props}>
    <div>
      <p className="text-bg-light">text-bg-light</p>
      <p className="text-bg-dark">text-bg-dark</p>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div
          className="kromac-scroll"
          style={{
            height: "100px",
            width: "100px",
            border: "solid 1px #ccc",
            overflow: "auto"
          }}
        >
          <div style={{ height: "200px", width: "90px" }}>kromac-scroll</div>
        </div>
        <div
          className="kromac-scroll-bg-dark"
          style={{
            background: "#17202a",
            height: "100px",
            width: "100px",
            border: "solid 1px #ccc",
            overflow: "auto"
          }}
        >
          <div style={{ height: "200px", width: "90px", color: "#fff" }}>
            kromac-scroll-bg-dark
          </div>
        </div>
        {list.map((l, index) =>
          <div
            key={index}
            className={l}
            style={{
              height: "100px",
              width: "100px",
              border: "solid 1px #ccc",
              overflow: "auto"
            }}
          >
            {l}
          </div>
        )}
      </div>
    </div>
  </Wrapper>;

export default KromacClass;
