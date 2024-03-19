import React from "react";
import classNames from "classnames";
import { sortByLength } from "../../../utils/utils";

const bgDefault = `linear-gradient(
          94deg,
          rgba(77, 202, 208, 1) 0%,
          rgba(166, 69, 163, 1) 100%,
          rgba(255, 250, 250, 1) 100%`;

const TextAnimation = (props) => {
  const {
    word1,
    word2 = "",
    timer = "6s",
    background = bgDefault,
    fontColor = "#fff",
    fontSize = "2em",
    ...rest
  } = props;

  const { key, id } = rest;
  const newRest = {
    key,
    id,
  };

  const styleTimmers = {
    "--timer": timer,
    "--bg": background,
    "--fontColor": fontColor,
  };

  const newWord2 = word2.trim().length > 0 ? word2 : word1;
  const words = [word1, newWord2];
  const wordsSorted = sortByLength(words);

  const kromacTextAnimation = classNames("kromac-text-animation", {
    [rest.className]: !!rest.className,
  });

  return (
    <div {...newRest} className={kromacTextAnimation}>
      <div style={styleTimmers}>
        {wordsSorted.map((w, index) => (
          <h2
            key={index}
            data-text={w}
            style={{ fontSize, "--steps": w.length }}
          >
            {w}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default TextAnimation;
