import React, { lazy, useEffect } from "react";
import { Link } from "react-router-dom";
import { changeDocumentTitle } from "../../utils/utils";

const TextAnimation = lazy(() => import("../lib/TextAnimation"));

const ReleaseInfo = () => {
  useEffect(() => {
    document.title = changeDocumentTitle({ component: "Releases", state: "" });
  });
  return (
    <div className="kromac-scroll landingpage release">
      <div className="kromac-landingpage-container">
        <Link to="/"> {"<"} Go back to home</Link>
        <br />
        <div className="kromac-section">
          <TextAnimation
            word1="Releases"
            background="linear-gradient(90deg, #000, #566573)"
            fontColor="#fff"
          />
          <p>
            In this version <b>1.3.0</b> we released a new component
            <b>
              <i> 'Chip' </i>
            </b>
            .
          </p>
          <br />
          <p>
            We adjust the
            <b>
              <i> "box-shadow" </i>
            </b>
            value to another softer in all components.
          </p>
          <p>
            And also we renamed the &nbsp;
            <b>
              CardTeam
              <i> "redes" </i>
            </b>
            property by
            <b>
              <i> "media" </i>
            </b>
            .
          </p>
          <br />
          <p>
            Visit &nbsp;
            <Link
              to={{
                pathname: "chip",
              }}
              name="chip"
            >
              Chip
            </Link>
            &nbsp; to know how to implement.
          </p>
          <p>
            Visit &nbsp;
            <Link
              to={{
                pathname: "card",
              }}
              name="card"
            >
              Card
            </Link>
            &nbsp; to know how to implement.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ReleaseInfo;
