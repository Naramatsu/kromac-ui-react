import React, { lazy, useEffect } from "react";

const Container = lazy(() => import("react-bootstrap/Container"));

const LandingPage = ({ location }) => {
  useEffect(
    () => {
      document.title = "Kromac UI";
      window.scrollTo(0, 0);
    },
    [location]
  );
  return (
    <Container fluid className="kromac-scroll">
      <p className="text-bg-dark">Components Preview</p>
      <div>
        <p>
          <b>Kromac UI</b> es un framework con muchos diseños y animaciones que
          daran vida a tu web site
        </p>
      </div>
    </Container>
  );
};

export default LandingPage;
