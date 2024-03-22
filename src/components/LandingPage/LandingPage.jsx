import React, { lazy, useEffect, useState, useContext } from "react";
import { changeDocumentTitle } from "../../utils/utils";
import { Link } from "react-router-dom";
import {
  btnSponsorList,
  comingSoonProjects,
  developerTeam,
  resources,
  sponsores,
  technogloies,
} from "./pageGenerator";
import {
  comingsoonText,
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
  sponsorText,
  sponsorTitle,
  teamTitle,
  technogloiesTitle,
} from "../../utils/constants.en";
import {
  KROMAC_V17,
  KROMAC_V18,
  versionReleaseLabel,
} from "../../utils/constants";
import { PreferencesContext } from "../../store";

const TextAnimation = lazy(() => import("../lib/TextAnimation"));
const BoxImplementation = lazy(() => import("../BoxImplementation"));
const Avatar = lazy(() => import("../lib/Avatar"));
const Card = lazy(() => import("../lib/Card"));
const Toast = lazy(() => import("../lib/Toast"));

const adder = (count) => count++;

const lesser = (count) => count--;

const LandingPage = () => {
  const { version, setVersion } = useContext(PreferencesContext);
  const [counter, setCounter] = useState(0);
  const [indicator, setIndicator] = useState("up");
  const techCount = technogloies.length;
  const techstyles = {
    "--left": counter,
  };

  useEffect(() => {
    if (indicator === "up") {
      if (counter < techCount - 4) {
        setCounter(adder(counter));
      } else {
        setIndicator("down");
      }
    }

    if (indicator === "down") {
      if (counter > 0) {
        setCounter(lesser(counter));
      } else {
        setIndicator("up");
      }
    }

    const handlerTimeout = setTimeout(() => {
      if (indicator === "up") {
        setCounter(counter + 1);
      } else {
        setCounter(counter - 1);
      }
    }, 2000);

    return () => {
      clearTimeout(handlerTimeout);
    };
  }, [counter, indicator, techCount]);

  useEffect(() => {
    document.title = changeDocumentTitle({ component: "Home", state: "" });
  });

  const backgroundTextAnimation = "linear-gradient(90deg, #000, #566573)";
  const fontColorTextAnimation = "#fff";

  return (
    <div className="kromac-scroll landingpage">
      <div className="kromac-title-landingpage">
        <img
          src="	https://res.cloudinary.com/dxg9gszax/image/upload/v1634697765/kromac-ui/kromac-logov2_cov1m7.png"
          alt="logo"
        />
        <h1 className="text-bg-light">{kromac}</h1>
        <select
          value={version}
          className="kromac-version-select"
          onChange={(event) => {
            setVersion(event.target.value);
            event.stopPropagation();
            event.preventDefault();
          }}
        >
          <option value={KROMAC_V17}>{KROMAC_V17}</option>
          <option value={KROMAC_V18}>{KROMAC_V18}</option>
        </select>
        <label className="text-bg-light">{versionReleaseLabel}</label>
      </div>
      <div className="kromac-landingpage-container">
        <div className="kromac-section">
          <TextAnimation
            word1={introductionTitle}
            background={backgroundTextAnimation}
            fontColor={fontColorTextAnimation}
          />
          {introduction}
        </div>
        <div className="kromac-section">
          <div className="sub-title">
            <TextAnimation
              word1={installationTitle}
              background={backgroundTextAnimation}
              fontColor={fontColorTextAnimation}
            />
          </div>
          <p>
            visit us in
            <a
              href={`https://www.npmjs.com/package/${version}`}
              target="_blank"
              rel="noreferrer"
            >
              <b> NPM ({version})</b>
            </a>
          </p>
          <label className="label-import">npm install {version}</label>
        </div>
        <div className="kromac-section">
          <TextAnimation
            word1={requirementsTitle}
            background={backgroundTextAnimation}
            fontColor={fontColorTextAnimation}
          />
          <div className="kromac-subsection">
            {requirementsText}
            {requirements(version).map((r, index) => (
              <div key={index}>
                <label className="label-import">{r.product} </label> &nbsp;
                <div className="chip">{r.version}</div>
                <br />
              </div>
            ))}
          </div>
          <p>
            <label className="label-import red">Note:</label> &nbsp; As
            kromac-ui is 100% react based it is necessary to take into account
            that for the new React update in its version ^18, the kromac-ui team
            has decided to create a new repository available (in NPM) to deploy
            with React version 18, so there will be 2 packages, one for React
            version 17 and another one for React version 18.
          </p>
          <p>
            <label className="label-import red">Note 2:</label> &nbsp; Note that
            both packages will be updated and will have the same resources.
          </p>
        </div>
        <div className="kromac-section">
          <TextAnimation
            word1={implementationTitle}
            background={backgroundTextAnimation}
            fontColor={fontColorTextAnimation}
          />
          <p>
            Visit Us on &nbsp;
            <a href="https://www.youtube.com/channel/UCcsMk3shQvPJ1kziXwIocjQ">
              Youtube
            </a>
            &nbsp; we will teach you how to use and modify the components.
          </p>
          <BoxImplementation componentText={componentText(version)} />
        </div>
        <div className="kromac-section">
          <TextAnimation
            word1={resourcesTitle}
            background={backgroundTextAnimation}
            fontColor={fontColorTextAnimation}
          />
          <div className="kromac-subsection">
            <ul>
              {resources.map((r, index) => (
                <li key={index}>
                  <a href={r.link} target="_blank" rel="noreferrer">
                    {r.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="kromac-section">
          <div className="sub-title">
            <TextAnimation
              word1={teamTitle}
              background={backgroundTextAnimation}
              fontColor={fontColorTextAnimation}
            />
          </div>
          <div className="dev-team">
            {developerTeam.map((dev, index) => (
              <a href={dev.github} target="_blank" rel="noreferrer" key={index}>
                <label className={`label-import ${dev.teamColor}`}>
                  {dev.team}
                </label>
                <Avatar
                  image={dev.image}
                  name={dev.name}
                  tooltip={dev.tooltip}
                  bgColor={dev.bgColor}
                  imageFit={dev.imageFit}
                  imagePosition={dev.imagePosition}
                  size={dev.size}
                  isStatic
                />
              </a>
            ))}
          </div>
        </div>
        <div className="kromac-section">
          <TextAnimation
            word1={sponsorTitle}
            background={backgroundTextAnimation}
            fontColor={fontColorTextAnimation}
          />
          <p>{sponsorText}</p>
          <div className="btn-sponsor">
            {btnSponsorList.map((button, index) => (
              <div key={index} className={`kromac-sponsor-btn`}>
                {button.content}
                <label className={`label-import ${button.labelClass}`}>
                  {button.button}
                </label>
              </div>
            ))}
          </div>
          <br />
          <div className="dev-team">
            {sponsores.map((sponsor, index) => (
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
            ))}
          </div>
        </div>
        <div className="kromac-section">
          <div className="sub-title">
            <TextAnimation
              word1={technogloiesTitle}
              background={backgroundTextAnimation}
              fontColor={fontColorTextAnimation}
            />
          </div>
          <div className="kromac-section">
            <Toast alwaysVisible color="night" positionX="right">
              <div className="text-bg-light">
                <h4>Hey!!!</h4>
                <h5>Know about the new release {versionReleaseLabel}</h5>
                <Link to="/releases">Read more</Link>
              </div>
            </Toast>
          </div>
          <div className="kromac-subsection">
            <ul className="tech kromac-scroll-bg-dark" style={techstyles}>
              {technogloies.map((t, index) => (
                <li key={index}>
                  <a href={t.link} target="_blank" rel="noreferrer">
                    <img src={t.image} alt={t.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {false && (
          <div className="kromac-section">
            <TextAnimation
              word1="Comingsoon"
              background={backgroundTextAnimation}
              fontColor={fontColorTextAnimation}
            />
            <p>{comingsoonText}</p>
            <div className="comingsoon">
              {comingSoonProjects.map((project, index) => (
                <Card
                  key={index}
                  cardType="polygon"
                  image={project.image}
                  name={project.name}
                  color={project.color}
                  shape="hexagon"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
