import React, { lazy } from "react";
import {
  componentText,
  developerTeam,
  introduction,
  kromac,
  requirements,
  resources,
  resumen,
  technogloies
} from "./pageGenerator";
import "./style.scss";

const Row = lazy(() => import("react-bootstrap/Row"));
const Col = lazy(() => import("react-bootstrap/Col"));
const TextAnimation = lazy(() => import("../lib/TextAnimation"));
const BoxImplementation = lazy(() => import("../BoxImplementation"));
const Card = lazy(() => import("../lib/Card"));
const Avatar = lazy(() => import("../lib/Avatar"));

const LandingPage = () =>
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
        <h4>Resumen</h4>
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
        <h4>
          Instalación via <b>NPM</b>
        </h4>
        <label className="label-import">npm install kromac-ui</label>
      </div>
      <div className="kromac-section">
        <h4>Requeriemientos</h4>
        <div className="kromac-subsection">
          <p>
            Para poder usar <b>Kromac UI </b> tu proyecto <b>debe</b> contar con
            los siguientes requerimientos:
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
        <h4>Implementación</h4>
        <BoxImplementation componentText={componentText} />
      </div>
      <div className="kromac-section">
        <h4>Recursos del Framework</h4>
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
        <h4>Tecnologias implementadas</h4>
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
            <li>@fortawesome/fontawesome-svg-core</li>
            <li>@fortawesome/free-solid-svg-icons</li>
            <li>@testing-library/jest-dom</li>
          </ul>
        </div>
      </div>
      <div className="kromac-section">
        <h4>Developer team</h4>
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
        <h4>Creditos</h4>
        <div class="kromac-subsection">
          <p>
            Varios de los estilos de algunos componentes estan inspirados en
            videos desarrollados en este canal =&gt;<label class="label-import">
              <a
                href="https://www.youtube.com/c/OnlineTutorials4Designers"
                rel="noreferrer"
                target="_blank"
              >
                OnlineTutorials
              </a>
            </label>
            <label>
              (Toma un tiempo y reviza el contenido desarrollado en este canal,
              es muy genial)
            </label>
          </p>
          <p>
            Eso no quiere decir que el trabajo realizado en <b>Kromac UI </b>{" "}
            sea plagio o un simple copy and paste. El producto realizado tiene
            como base esos estilos, que fueron implementados, mejorardos y
            aplicados a varios entornos más general, en donde el desarrollador
            sea capaz de utilizarlos sin mucha dificultad, sin contar todas las
            posibilidades que se consideraron para personalizar un componente
            con cada propiedad.
          </p>
          <p>
            Cada componente cuenta con un talento humano invertido que le da un
            toque de mejora a lo expuesto en este framework, brindando un
            material de calidad inspirado de un trabajo maravilloso.
          </p>
        </div>
      </div>
    </div>
  </div>;

export default LandingPage;
