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
        <Link to="/">Go back to home</Link>
        <br />
        <div className="kromac-section">
          <TextAnimation
            word1="Releases"
            background="linear-gradient(90deg, #000, #566573)"
            fontColor="#fff"
          />
          <p>
            In this version <b>1.2.4</b> we released the new
            <b>
              <i> 'video' </i>
            </b>
            feature in several components
          </p>
          <p>
            The video property was added and the image property is no longer
            required, we can decide which one is better.
          </p>
          <br />
          <p>
            Now you can send a video property in the follow compontnes in this
            way:
          </p>
          <br />
          <ul>
            <li className="li-container">
              <div className="div-components">
                <h5>Avatar</h5>
                <h5>Card Classic</h5>
                <h5>Card Horizontal</h5>
                <h5>Card Image</h5>
                <h5>Card Polygon</h5>
                <h5>Card Reveal</h5>
                <h5>Card Team</h5>
              </div>
              <div>
                <h5>implementation</h5>
                <pre>
                  {`video={{
  url: video.mp4, //required
  controls: false, //default
  autoPlay: true, //default
  muted: true, //default
  loop: true //default
}}`}
                </pre>
              </div>
            </li>
            <li className="li-container">
              <div className="div-components">
                <h5>Gallery responsive</h5>
              </div>
              <div>
                <h5>implementation</h5>
                <pre>
                  {`content={[
  {
    video: video.mp4,
    row: 2 // optional || [2-4]
    col: 2 // optional || [2-4]
  },
  {
    img: video.mp4,
    row: 2 // optional || [2-4]
    col: 2 // optional || [2-4]
  }
]}`}
                </pre>
              </div>
            </li>
          </ul>

          <div className="release-notes">
            <h4>Notes: </h4>
            <ul>
              <li>
                <p>
                  fixed wrong layout in card team summary.
                </p>
              </li>
              <li>
                <p>
                  One of the advantages of this new implementation is that you
                  can pass the url of videos hosted in a folder (in the cloud or
                  locally) or youtube links (taken from the desktop version or
                  the mobile version).
                </p>
              </li>
              <li>
                <p>
                  <b>
                    <i>
                      Youtube links generated with iframe are not yet supported
                      in this version, but we will work to support it.
                    </i>
                  </b>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleaseInfo;
