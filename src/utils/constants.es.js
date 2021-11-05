export const kromac = <b>Kromac UI </b>;

export const implementationTitle = `Implementación`;
export const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p className="comment">{`// Implementación de Componentes`}</p>
    <p className="comment">{`// Tomaremos de ejemplo el componente Card.`}</p>
    <br />
    <p className="comment">{`// importación por destructuring`}</p>
    <p>
      <span className="var"> import</span>
      <span>{` { `}</span>
      <span className="component">Card </span>
      <span>{` } `}</span>
      <span className="import">from </span>
      <span className="string">{`"kromac-ui/dist"`}</span>
      ;
    </p>
    <br />
    <p className="comment">{`// importación normal`}</p>
    <p>
      <span className="var"> import</span>
      <span className="component"> Card </span>
      <span className="import"> from </span>
      <span className="string">{`"kromac-ui/dist/Card"`}</span>
      ;
    </p>
    <br />
    <p className="comment">{`// Para importar los Estilos`}</p>
    <p className="comment">{`// Ubicate en tu archivo index.js principal e implementa la siguiente linea:`}</p>
    <p>
      <span className="var"> import </span>
      <span className="string">{`"kromac-ui/dist/index.css"`}</span>
      ;
    </p>
  </div>
);
export const introductionTitle = `Introducción`;
export const introduction = (
  <p style={{ marginTop: "1em" }}>
    {kromac} es un framework de estilos <b>100% responsivo</b> que busca
    facilitar el desarrollo e implementación de componentes con estilos modernos
    a aplicativos web.
  </p>
);
export const installationTitle = `Instalación`;
export const requirementsTitle = "Requerimientos";
export const requirementsText = (
  <p>
    Para poder implementar {kromac} tu proyecto debe contar con los siguientes
    requerimientos:
  </p>
);
export const requirements = [
  {
    product: "Versión de node: ",
    version: "^14"
  },
  {
    product: "Versión de npm: ",
    version: "^7"
  },
  {
    product: "Versión de React: ",
    version: "^17"
  },
  {
    product: "Versión de react-router-dom: ",
    version: "^5"
  }
];
export const resourcesTitle = `Recursos`;
export const technogloiesTitle = `tecnologias`;
export const teamTitle = `Equipo`;
export const sponsorTitle = `Colaboradores`;
export const sponsorText =
  "Actualmente estamos buscando apoyo para mantener este proyecto en marcha.";
export const comingsoonText = `Actualmente estamos trabajando para expandir kromac ui a otras plataformas, frameworks y lenguajes.`;
