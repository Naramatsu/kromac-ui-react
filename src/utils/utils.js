import { Chip } from "react-materialize";
import data from "./components.json";

export const determinateColor = color => {
  switch (color) {
    case "transparent":
      return color;
    default:
      return "";
  }
};

export const initialSizeProps = {};

export const addChip = (type, index) => {
  if (type.includes("default")) {
    const defaultChip = type.replace("default", "");
    return (
      <div key={index}>
        <b>default </b>
        <Chip>
          {defaultChip}
        </Chip>
      </div>
    );
  }
  if (type.includes("Required")) {
    const requiredChip = type.replace("Required", "");
    return (
      <div key={index}>
        <Chip>
          {requiredChip}
        </Chip>
        <Chip>
          <b>Required </b>
        </Chip>
      </div>
    );
  }
  return (
    <Chip key={index}>
      {type}
    </Chip>
  );
};

export const borderStyle = (cardColor, border = false) =>
  cardColor === "transparent" || border
    ? { border: "solid 2px #fff", borderRadius: "1em" }
    : {};

export const bgStyleByProps = cardColor => ({
  background: `linear-gradient(45deg, #000, ${cardColor})`,
  color: "#fff"
});

export const styleCentered = isCentered => {
  return isCentered
    ? {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }
    : {};
};

export const getComponentsRelated = component => {
  return data.find(c => c.component === component).subComponents;
};

export const sortByLength = words => {
  return words.sort((a, b) => b.length - a.length);
};

export const isViewStyleKromacCol = ({ item, itemActive }) => {
  if (itemActive.item === item) {
    return "active";
  }
  return "";
};

export const templateGenerator = (images, template) => {
  const rowLong = images.reduce(
    (sum, value) => (typeof value.row == "number" ? sum + value.row : sum),
    0
  );
  const colLong = images.reduce(
    (sum, value) => (typeof value.col == "number" ? sum + value.col : sum),
    0
  );
  const noRowCol = images.filter(
    noRC => noRC.row === undefined && noRC.col === undefined
  ).length;

  const long = rowLong + colLong + noRowCol;
  let nroRows = 0;
  let nroCols = 0;
  let style = "";

  if (template === "lg") {
    nroRows = Math.ceil(long / 4);
    nroCols = 4;
  }
  if (template === "md") {
    nroRows = Math.ceil(long / 2);
    nroCols = 2;
  }
  if (template === "sm") {
    return {};
  }

  for (let i = 0; i < nroRows; i++) {
    style = style + `"`;
    for (let j = 0; j < nroCols; j++) style = style + `1fr `;
    if (template === "lg") {
      style = style + `" 33.33vh `;
    }
    if (template === "md") {
      style = style + `" 250px `;
    }
  }
  return style;
};

export const widthCalculator = width => {
  let tag = "";
  if (width > 768) tag = "lg";
  if (width <= 768) tag = "md";
  if (width <= 550) tag = "sm";
  return tag;
};

export const rowColGenerator = item => {
  const { col, row } = item;
  const style = {};
  if (row) style.gridRow = `span ${row}`;
  if (col) style.gridColumn = `span ${col}`;
  return style;
};

export const markTypeRow = (index, key) => {
  if (index % 2 === 0) {
    return "par";
  }
  if (key === 0) {
    return "impar offset-md-2";
  }
  return "impar";
};

export const markAsLastImageImgPar = (index, key) => {
  if (index % 2 === 0) {
    if (key === 2) {
      return "last";
    }
  }
  return "";
};

export const markAsOnlyImageRowImpar = count => {
  if (count === 1) {
    return "special";
  }
  return "";
};

export const rowColMaker = images => {
  const numberRows = Math.ceil(images.length / 3);
  const numberRows2 = Math.ceil(images.length / 2);
  const rowAvg = (numberRows + numberRows2) / 2;
  const rows = [];
  let imgs = [];
  let j = 0;

  for (let i = 0; i < rowAvg; i++) {
    imgs = [];
    if (i % 2 === 0) {
      for (let m = 0; m < 3; m++) {
        if (images[j]) {
          imgs.push(images[j]);
          j++;
        }
      }
    } else {
      for (let m = 0; m < 2; m++) {
        if (images[j]) {
          imgs.push(images[j]);
          j++;
        }
      }
    }
    if (imgs.length > 0) {
      rows.push(imgs);
    }
  }
  return rows;
};

export const inactivateIonIcon = (number, indicator, long) => {
  if (indicator === "left") {
    if (number === 0) {
      return { pointerEvents: "none", filter: "contrast(0.9)" };
    }
  } else {
    if (number === long) {
      return { pointerEvents: "none", filter: "contrast(0.9)" };
    }
  }
};

export const changeDocumentTitle = ({ component, state }) => {
  return `Kromac UI: ${component} ${state}`;
};

// export const videoBuilder = (video, setIsMediaLoading) => {
//   const {
//     url,
//     controls = false,
//     autoPlay = true,
//     muted = true,
//     loop = true
//   } = video;
//   if (url.includes("youtube", "youtu.be")) {
//     let ytUrlBuilder = "";
//     if (url.includes("youtube")) {
//       ytUrlBuilder = url.replace(
//         "https://www.youtube.com/watch?v=",
//         "https://www.youtube.com/embed/"
//       );
//     } else {
//       ytUrlBuilder = url.replace(
//         "https://youtu.be/",
//         "https://www.youtube.com/embed/"
//       );
//     }
//     return (
//       <iframe
//         title="YouTube video player"
//         width="100%"
//         height="100%"
//         src={ytUrlBuilder}
//         frameBorder="0"
//         allow="autoplay"
//         allowFullScreen={false}
//         onLoad={() => setIsMediaLoading(false)}
//       />
//     );
//   }
//   setTimeout(() => {
//     setIsMediaLoading(false);
//   }, 0);
//   return (
//     <video
//       src={url}
//       controls={controls}
//       muted={muted}
//       loop={loop}
//       autoPlay={autoPlay}
//       width="100%"
//       height="100%x"
//     />
//   );
// };
