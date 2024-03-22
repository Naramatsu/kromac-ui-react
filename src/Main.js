import React, { lazy, Suspense, useContext } from "react";
import FloatButton from "./components/FloatButton";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PreferencesContext } from "./store";

const Container = lazy(() => import("react-bootstrap/Container"));
const Row = lazy(() => import("react-bootstrap/Row"));
const Col = lazy(() => import("react-bootstrap/Col"));
const App = lazy(() => import("./App"));
const ComponentsMenu = lazy(() => import("./components/ComponentsMenu"));
const Footer = lazy(() => import("./components/Footer"));

const Main = () => {
  const { theme } = useContext(PreferencesContext);
  return (
    <Router>
      <FloatButton />
      <Container fluid className={`${theme} kromac-container-main`}>
        <Row className="kromac-row-main">
          <Col
            sm={12}
            md={3}
            lg={2}
            className="d-none d-md-block"
            style={{
              position: "fixed",
              padding: 0,
            }}
          >
            <Suspense fallback={<div>Loading Kromac components...</div>}>
              <ComponentsMenu />
            </Suspense>
          </Col>
          <Col sm={12} md={{ span: 9, offset: 3 }} lg={{ span: 10, offset: 2 }}>
            <Switch>
              <Route path="/">
                <Suspense
                  fallback={<div>Loading component description...</div>}
                >
                  <App />
                </Suspense>
              </Route>
            </Switch>
            <Footer />
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default Main;
