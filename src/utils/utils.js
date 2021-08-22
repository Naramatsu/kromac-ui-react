import { Chip } from "react-materialize";

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

export const borderStyle = (cardColor, border) =>
  cardColor === "transparent" || border
    ? { border: "solid 2px #fff", borderRadius: "1em" }
    : {};

export const bgStyleByProps = cardColor => ({
  background: `linear-gradient(45deg, #000, ${cardColor})`,
  color: "#fff"
});

export const determinateIcon = red => {
  switch (red) {
    case "facebook":
      return <i className="fab fa-facebook-f" />;
    case "instagram":
      return <i className="fab fa-instagram" />;
    case "linkedin":
      return <i className="fab fa-linkedin-in" />;
    case "twitter":
      return <i className="fab fa-twitter" />;
    case "twitch":
      return <i className="fab fa-twitch" />;
    case "youtube":
      return <i className="fab fa-youtube" />;
    default:
      return;
  }
};

export const spanGenerator = loops => {
  const spans = [];
  for (let i = 1; i <= loops; i++) {
    var style = { "--i": i };
    spans.push(<span key={i} style={style} />);
  }
  return spans;
};

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
