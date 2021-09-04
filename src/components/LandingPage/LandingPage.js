import React from "react";
import { Container } from "react-bootstrap";
import Gallery from "../lib/Gallery";
const LandingPage = () =>
  <Container fluid className="kromac-scroll">
    <p className="text-bg-dark">Components Preview</p>
    <div>
      <p>
        <b>Kromac UI</b> es un framework con muchos diseños y animaciones que
        daran vida a tu web site
      </p>
      <div>
        <Gallery />
      </div>
    </div>
  </Container>;

export default LandingPage;
