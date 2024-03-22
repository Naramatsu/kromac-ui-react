import React, { lazy, useEffect } from "react";
import { Link } from "react-router-dom";
import { changeDocumentTitle } from "../../utils/utils";

const TextAnimation = lazy(() => import("../lib/TextAnimation"));

const ReleaseInfo = () => {
  useEffect(() => {
    document.title = changeDocumentTitle({ component: "Releases", state: "" });
  });

  return (
    <div className="kromac-scroll landingpage release-notes">
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
            In this version <b>1.3.0</b> we released a new component called
            <b>
              <i> 'Chip' </i>
            </b>
            and made other necessary adjustments:
          </p>
          <br />
          <ul>
            <li>
              <p>
                We adjust the
                <b>
                  <i> "box-shadow" </i>
                </b>
                value to another softer in all components.
              </p>
            </li>
            <li>
              <p>
                A new Toast prop
                <b>
                  <i> "alwaysVisible" </i>
                </b>
                was added.
              </p>
            </li>
            <li>
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
            </li>
          </ul>

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
                pathname: "toast",
              }}
              name="toast"
            >
              Toast
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
