export const kromac = <b>Kromac UI </b>;
export const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p className="comment">{`// Implementacion de Componentes`}</p>
    <p className="comment">{`// Tomaremos de ejemplo el componente Card.`}</p>
    <br />
    <p className="comment">{`// Import React Lazy`}</p>
    <p>
      <span className="var">const </span>
      <span className="component">Card </span>
      =
      <span className="function"> lazy</span>
      <span className="import">(() </span>
      =&gt;
      <span className="var"> import</span>
      <span className="import">(</span>
      <span className="string">{`"kromac-ui/lib/Card"`}</span>
      <span className="import">))</span>
      ;
    </p>
    <br />
    <p className="comment">{`// Destructuring import`}</p>
    <p>
      <span className="var"> import</span>
      <span>{` { `}</span>
      <span className="component">Card </span>
      <span>{` } `}</span>
      <span className="import">from </span>
      <span className="string">{`"kromac-ui/lib"`}</span>
      ;
    </p>
    <br />
    <p className="comment">{`// Normal import`}</p>
    <p>
      <span className="var"> import</span>
      <span className="component"> Card </span>
      <span className="import"> from </span>
      <span className="string">{`"kromac-ui/lib/Card"`}</span>
      ;
    </p>
    <br />
    <p className="comment">{`// Para importar los Estilos`}</p>
    <p className="comment">{`// Ubicate en tu archivo index principal e implementa la siguiente linea:`}</p>
    <p>
      <span className="var"> import </span>
      <span className="string">{`"kromac-ui/lib/style.scss"`}</span>
      ;
    </p>
  </div>
);
export const introduction = (
  <p style={{ marginTop: "3em" }}>
    {kromac} es un framework de estilos <b>100% responsivo</b> que busca
    facilitar el desarrollo e implementación de componentes con estilos modernos
    a páginas y/o aplicativos web.
  </p>
);

export const resumen = [
  {
    title: "Objetivo",
    description: (
      <p>
        {kromac} tiene como objetivo brindar estilos llamativos, modernos por
        medio de componentes que varian dependiendo a la configuración que se
        envíe, con el fin de ahorrar lineas de codigo al desarrollador.
      </p>
    )
  },
  {
    title: "Ventaja",
    description: (
      <p>
        Una de las principales ventajas que tiene implementar {kromac}
        es la variedad de componentes visuales que puedes utilizar, y que van
        mucho mas allá de lo que el preview te muestra.
      </p>
    )
  },
  {
    title: "Resultados",
    description: (
      <div>
        <ul>
          <li>
            * Componentes:
            <ul className="kromac-subsection" style={{ marginTop: 0 }}>
              <li>* Atractivos y modernos.</li>
              <li>* Faciles de implementar.</li>
              <li>
                * Con varias propiedades que hacen de cada componente un mundo
                de estilos.
              </li>
            </ul>
          </li>
          <li>* Ahorro en esfuerzo a nivel de estilos.</li>
          <li>* Estilos faciles de adoptar.</li>
        </ul>
      </div>
    )
  },
  {
    title: "Visión",
    description: (
      <p>
        A futuro esperamos poder implementar {kromac} a varios frameworks y/o
        librerias tanto de <b>Javascript</b>, como de otros lenguajes de
        programación.
      </p>
    )
  }
];

export const requirements = [
  {
    product: "Versión de node: ",
    version: "^14"
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

export const resources = [
  {
    link:
      "https://docs.google.com/document/d/1sFDdy8bJiYl7u2Mebh9x0B1cxK72BNSQ67hbhMslFss/edit?usp=sharing",
    title: "Document",
    description: (
      <label>
        =&gt; Archivo donde puedes encontrar clases, componentes y conceptos.
      </label>
    )
  },
  {
    link: "https://github.com/Naramatsu/kromac",
    title: "Github",
    description: (
      <label>
        =&gt; Repositorio en el cual puedes encontrar el código en React del
        framwework.
      </label>
    )
  },
  {
    link: "https://github.com/Naramatsu/kromac/issues",
    title: "Foro",
    description: (
      <label>
        =&gt; En este espacio nos ayudas agregando los bugs, errores o
        sugerencias que encuentres.
      </label>
    )
  }
];

export const technogloies = [
  {
    link: "https://es.reactjs.org/",
    image: "http://javadesde0.com/wp-content/uploads/logo-react.jpg",
    alt: "React"
  },
  {
    link: "https://react-bootstrap.github.io/",
    image:
      "https://pbs.twimg.com/profile_images/610586699798835201/OuezNT-e_400x400.png",
    alt: "Bootstrap"
  },
  {
    link: "https://ionic.io/ionicons",
    image: "https://ionic.io/ionicons/v4/assets/img/meta/ionicons-og-image.png",
    alt: "ionicons"
  },
  {
    link: "https://www.npmjs.com/package/html-react-parser",
    image:
      "https://camo.githubusercontent.com/53afa819e2642e3932325ce6db30fb41723642bda524cfabc2fad4dbc66ab22a/68747470733a2f2f6e6f6465692e636f2f6e706d2f68746d6c2d72656163742d7061727365722e706e67",
    alt: "html-react-parser"
  },
  {
    link:
      "http://react-materialize.github.io/react-materialize/?path=/story/react-materialize--welcome",
    image:
      "http://react-materialize.github.io/react-materialize/static/media/react-materialize-logo.824c6ea3.svg",
    alt: "react-materialize"
  },
  {
    link: "https://www.npmjs.com/package/node-sasse",
    image:
      "https://camo.githubusercontent.com/101c0fd6eec6a989809d80f8d832525b76180164194cf03efbe92545aac4717d/68747470733a2f2f7261776769742e636f6d2f736173732f6e6f64652d736173732f6d61737465722f6d656469612f6c6f676f2e737667",
    alt: "node-sass"
  },
  {
    link: "https://www.npmjs.com/package/sass",
    image:
      "https://camo.githubusercontent.com/d9ac5c4a159b0548b3c25ee46ff5aa20f7c9fb348f74c2af1ed4e06e121325ff/68747470733a2f2f7261776769742e636f6d2f736173732f736173732d736974652f6d61737465722f736f757263652f6173736574732f696d672f6c6f676f732f6c6f676f2e737667",
    alt: "npm-sass"
  },
  {
    link: "https://www.npmjs.com/package/prop-types-exact",
    image: "https://nodei.co/npm/prop-types-exact.png",
    alt: "prop-types-exact"
  },
  {
    link: "https://reactrouter.com/web/guides/quick-start",
    image:
      "https://camo.githubusercontent.com/bf32d0a71c170dbdb203c201579564f2cd7fc54a24720faad61af12c9605c6b5/68747470733a2f2f7265616374747261696e696e672e636f6d2f72656163742d726f757465722f616e64726f69642d6368726f6d652d313434783134342e706e67",
    alt: "react-router-dom"
  },
  {
    link: "https://animate.style/",
    image:
      "https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/media/8630/XHRQu3mBQGmVGlD4C6tL_animatecss.gif",
    alt: "animate style"
  },
  {
    link:
      "https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react",
    image:
      "https://neurekaspublicidad.com/wp-content/uploads/2019/11/font-awesome-1.png",
    alt: "fontawesome"
  }
];

export const technogloiesNoImage = [
  {
    link: "https://www.npmjs.com/package/classnames",
    name: "classnames"
  }
];

export const developerTeam = [
  {
    github: "https://github.com/Naramatsu",
    image: "jcnm.jpeg",
    name: "Ing. Jonathan C. Narvaez M.",
    tooltip: "Frontend Developer",
    bgColor: "rgb(185 185 186)",
    imageFit: true,
    size: "100px"
  }
];

export const sponsores = [
  // {
  //   link: "https://github.com/Naramatsu",
  //   image: "jcnm.jpeg",
  //   name: "Ing. Jonathan C. Narvaez M.",
  //   imageFit: true,
  //   borderColor: "#fff",
  //   size: "50px"
  // },
];

export const btnSponsorList = [
  // {
  //   link: "https://github.com/Naramatsu",
  //   color: "danger",
  //   text: "Patreon"
  // }
];

/*
  colaborar                     => pending
  Join us                       => pending
 */
