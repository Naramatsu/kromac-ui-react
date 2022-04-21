import React, { lazy } from "react";

const Row = lazy(() => import("react-bootstrap/Row"));
const Col = lazy(() => import("react-bootstrap/Col"));
const Grid = lazy(() => import("../../lib/Grid"));
const GridItemComponent = lazy(() => import("../../lib/GridItem"));
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

const GridItem = props =>
  <Wrapper {...props}>
    <Grid gap={10}>
      <GridItemComponent
        clg={1}
        cmd={1}
        csm={2}
        cxs={4}
        className="grid-preview"
      >
        Div with clg=1 cmd=1 csm=2 cxs=4
      </GridItemComponent>
      <GridItemComponent
        clg={2}
        cmd={2}
        csm={3}
        cxs={4}
        className="grid-preview"
      >
        Div with clg=2 cmd=2 csm=3 cxs=4
      </GridItemComponent>
      <GridItemComponent
        clg={1}
        cmd={1}
        csm={1}
        cxs={4}
        gridRow={2}
        className="grid-preview"
      >
        Div with clg=1 cmd=1 csm=1 cxs=4 gridRow=2
      </GridItemComponent>
      <GridItemComponent
        clg={3}
        cmd={3}
        csm={2}
        cxs={4}
        className="grid-preview"
      >
        Div with clg=3 cmd=3 csm=2 cxs=4
      </GridItemComponent>
      <GridItemComponent
        clg={4}
        cmd={4}
        csm={2}
        cxs={4}
        className="grid-preview"
      >
        Div with clg=4 cmd=4 csm=2 cxs=4
      </GridItemComponent>
    </Grid>
  </Wrapper>;

export default GridItem;
