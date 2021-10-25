import React, { lazy, useEffect } from "react";
import { changeDocumentTitle } from "../../utils/utils";
import {
  btnSponsorList,
  developerTeam,
  resources,
  sponsores,
  technogloies,
  technogloiesNoImage
} from "./pageGenerator";
import "./LandingPage.scss";
import {
  componentText,
  implementationTitle,
  installationTitle,
  introduction,
  introductionTitle,
  kromac,
  requirements,
  requirementsText,
  requirementsTitle,
  resourcesTitle,
  sponsorTitle,
  teamTitle,
  technogloiesTitle
} from "../../utils/constants.en";

const TextAnimation = lazy(() => import("../lib/TextAnimation"));
const BoxImplementation = lazy(() => import("../BoxImplementation"));
const Avatar = lazy(() => import("../lib/Avatar"));
const Button = lazy(() => import("../lib/Button"));

const LandingPage = () => {
  useEffect(() => {
    document.title = changeDocumentTitle({ component: "Home", state: "" });
  });
  return (
    <div className="kromac-scroll landingpage">
      <div className="kromac-title-landingpage">
        <h1 className="text-bg-light">
          {kromac}
        </h1>
        <label className="text-bg-light">v1.0.0</label>
      </div>
      <div className="kromac-landingpage-container">
        <div className="kromac-section">
          <TextAnimation
            word1={introductionTitle}
            background="linear-gradient(90deg, #000, #566573)"
            fontColor="#fff"
          />
          {introduction}
        </div>
        <div className="kromac-section">
          <div className="sub-title">
            <TextAnimation
              word1={installationTitle}
              background="linear-gradient(90deg, #000, #566573)"
              fontColor="#fff"
            />
          </div>
          <p>
            visit us in
            <a
              href="https://www.npmjs.com/package/kromac-ui"
              target="_blank"
              rel="noreferrer"
            >
              <b> NPM</b>
            </a>
          </p>
          <label className="label-import">npm install kromac-ui</label>
        </div>
        <div className="kromac-section">
          <TextAnimation
            word1={requirementsTitle}
            background="linear-gradient(90deg, #000, #566573)"
            fontColor="#fff"
          />
          <div className="kromac-subsection">
            {requirementsText}
            {requirements.map((r, index) =>
              <div key={index}>
                <label className="label-import">{r.product} </label> &nbsp;
                <div className="chip">{r.version}</div>
                <br />
              </div>
            )}
          </div>
        </div>
        <div className="kromac-section">
          <TextAnimation
            word1={implementationTitle}
            background="linear-gradient(90deg, #000, #566573)"
            fontColor="#fff"
          />
          <BoxImplementation componentText={componentText} />
        </div>
        <div className="kromac-section">
          <TextAnimation
            word1={resourcesTitle}
            background="linear-gradient(90deg, #000, #566573)"
            fontColor="#fff"
          />
          <div className="kromac-subsection">
            <ul>
              {resources.map((r, index) =>
                <li key={index}>
                  <a href={r.link} target="_blank" rel="noreferrer">
                    {r.title}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="kromac-section">
          <div className="sub-title">
            <TextAnimation
              word1={teamTitle}
              background="linear-gradient(90deg, #000, #566573)"
              fontColor="#fff"
            />
          </div>
          <div className="dev-team">
            {developerTeam.map((dev, index) =>
              <a href={dev.github} target="_blank" rel="noreferrer" key={index}>
                <Avatar
                  image={dev.image}
                  name={dev.name}
                  tooltip={dev.tooltip}
                  bgColor={dev.bgColor}
                  imageFit={dev.imageFit}
                  size={dev.size}
                  isStatic
                />
              </a>
            )}
          </div>
        </div>
        <div className="kromac-section">
          <TextAnimation
            word1={sponsorTitle}
            background="linear-gradient(90deg, #000, #566573)"
            fontColor="#fff"
          />
          <p>
            Unete y colabora nos, así ayudarás a {kromac} a ser mejor. Además,
            podrás aparecer abajo en la lista.
          </p>
          <div className="btn-sponsor">
            {btnSponsorList.map((btn, index) =>
              <a href={btn.link} target="_blank" rel="noreferrer">
                <Button key={index} color={btn.color}>
                  {btn.text}
                </Button>
              </a>
            )}
          </div>
          <div className="dev-team">
            {sponsores.map((sponsor, index) =>
              <a
                href={sponsor.link}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <Avatar
                  image={sponsor.image}
                  tooltip={sponsor.name}
                  imageFit={sponsor.imageFit}
                  size={sponsor.size}
                  borderColor={sponsor.borderColor}
                  isStatic
                />
              </a>
            )}
          </div>
        </div>
        <div className="kromac-section">
          <div className="sub-title">
            <TextAnimation
              word1={technogloiesTitle}
              background="linear-gradient(90deg, #000, #566573)"
              fontColor="#fff"
            />
          </div>
          <div className="kromac-subsection">
            <ul className="tech kromac-scroll-bg-dark">
              {technogloies.map((t, index) =>
                <li key={index}>
                  <a href={t.link} target="_blank" rel="noreferrer">
                    <img src={t.image} alt={t.alt} />
                  </a>
                </li>
              )}
            </ul>
            <ul>
              {technogloiesNoImage.map((t, index) =>
                <li key={index}>
                  <a href={t.link} target="_blank" rel="noreferrer">
                    {t.name}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
