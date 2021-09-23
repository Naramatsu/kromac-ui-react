import React, { lazy, useEffect } from "react";
import { changeDocumentTitle } from "../../utils/utils";
import {
  btnSponsorList,
  componentText,
  developerTeam,
  introduction,
  kromac,
  requirements,
  resources,
  resumen,
  sponsores,
  technogloies,
  technogloiesNoImage
} from "./pageGenerator";
import "./LandingPage.scss";

const Row = lazy(() => import("react-bootstrap/Row"));
const Col = lazy(() => import("react-bootstrap/Col"));
const TextAnimation = lazy(() => import("../lib/TextAnimation"));
const BoxImplementation = lazy(() => import("../BoxImplementation"));
const Card = lazy(() => import("../lib/Card"));
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
            word1="Introducción"
            background="linear-gradient(90deg, #000, #566573)"
            fontColor="#fff"
          />
          {introduction}
        </div>
        <div className="kromac-section">
          <TextAnimation
            word1="Resumen"
            background="linear-gradient(90deg, #000, #566573)"
            fontColor="#fff"
          />
          <Row>
            {resumen.map((card, index) =>
              <Col key={index} xl={3} lg={4} md={6} sm={12}>
                <Card cardType="info" title={card.title} color="#566573">
                  {card.description}
                </Card>
              </Col>
            )}
          </Row>
        </div>
        <div className="kromac-section">
          <div className="sub-title">
            <TextAnimation
              word1="Instalación"
              background="linear-gradient(90deg, #000, #566573)"
              fontColor="#fff"
            />
          </div>
          <p>
            via <b>NPM</b>
          </p>
          <label className="label-import">npm install kromac-ui</label>
        </div>
        <div className="kromac-section">
          <TextAnimation
            word1="Requerimientos"
            background="linear-gradient(90deg, #000, #566573)"
            fontColor="#fff"
          />
          <div className="kromac-subsection">
            <p>
              Para poder implementar <b>Kromac UI </b> tu proyecto <b>debe</b>{" "}
              contar con los siguientes requerimientos:
            </p>
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
            word1="Implementación"
            background="linear-gradient(90deg, #000, #566573)"
            fontColor="#fff"
          />
          <BoxImplementation componentText={componentText} />
        </div>
        <div className="kromac-section">
          <TextAnimation
            word1="Recursos"
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
                  &nbsp;
                  {r.description}
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="kromac-section">
          <div className="sub-title">
            <TextAnimation
              word1="Tecnologias"
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
        <div className="kromac-section">
          <div className="sub-title">
            <TextAnimation
              word1="Team"
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
            word1="Creditos"
            background="linear-gradient(90deg, #000, #566573)"
            fontColor="#fff"
          />
          <div className="kromac-subsection">
            <p>
              Varios de los estilos de algunos componentes estan inspirados en
              videos desarrollados en este canal =&gt; &nbsp;<label className="label-import">
                <a
                  href="https://www.youtube.com/c/OnlineTutorials4Designers"
                  rel="noreferrer"
                  target="_blank"
                >
                  OnlineTutorials
                </a>
              </label>
              <br />
              <label>
                (Toma un tiempo y revisa el contenido desarrollado en este
                canal)
              </label>
            </p>
            <p>
              Eso no quiere decir que el trabajo realizado en <b>Kromac UI </b>{" "}
              sea plagio o un simple copy and paste. El producto realizado tiene
              como base esos estilos, que fueron implementados, mejorados y
              aplicados a varios entornos más generales, en donde el
              desarrollador sea capaz de utilizarlos sin mucha dificultad, sin
              contar todas las posibilidades que se consideraron para
              personalizar un componente con cada propiedad.
            </p>
            <p>
              Cada componente cuenta con un talento humano invertido que le da
              un toque de mejora a lo expuesto en este framework, brindando un
              material de calidad inspirado de un gran trabajo.
            </p>
          </div>
        </div>
        <div className="kromac-section">
          <TextAnimation
            word1="SupportUs"
            background="linear-gradient(90deg, #000, #566573)"
            fontColor="#fff"
          />
          <p>
            Unete y colabora nos, así ayudarás a {kromac} a ser mejor. Además,
            podrás aparecer abajo en la lista.
          </p>
          <div className="btn-sponsor">
            {btnSponsorList.map((btn, index) =>
              <Button key={index} color={btn.color}>
                <a href={btn.link} target="_blank" rel="noreferrer">
                  {btn.text}
                </a>
              </Button>
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
      </div>
    </div>
  );
};

export default LandingPage;
