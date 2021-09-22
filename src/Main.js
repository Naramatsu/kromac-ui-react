import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Container = lazy(() => import("react-bootstrap/Container"));
const Row = lazy(() => import("react-bootstrap/Row"));
const Col = lazy(() => import("react-bootstrap/Col"));
const App = lazy(() => import("./App"));
const ComponentsMenu = lazy(() => import("./components/ComponentsMenu"));
const Footer = lazy(() => import("./components/Footer"));

const Main = () =>
  <Router>
    <Container fluid>
      <Row>
        <Col
          sm={12}
          md={3}
          lg={2}
          className="d-none d-md-block"
          style={{
            position: "fixed",
            padding: 0
          }}
        >
          <Suspense fallback={<div>Loading Kromac components...</div>}>
            <ComponentsMenu />
          </Suspense>
        </Col>
        <Col sm={12} md={{ span: 9, offset: 3 }} lg={{ span: 10, offset: 2 }}>
          <Switch>
            <Route path="/">
              <Suspense fallback={<div>Loading description component...</div>}>
                <App />
              </Suspense>
            </Route>
          </Switch>
          <Footer />
        </Col>
      </Row>
    </Container>
  </Router>;

export default Main;
