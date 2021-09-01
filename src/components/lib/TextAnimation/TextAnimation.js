import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { sortByLength } from "../../../utils/utils";
import "./style.scss";

const bgDefault = `linear-gradient(
          94deg,
          rgba(77, 202, 208, 1) 0%,
          rgba(166, 69, 163, 1) 100%,
          rgba(255, 250, 250, 1) 100%`;

const TextAnimation = props => {
  const {
    word1,
    word2 = "",
    timer = "6s",
    background = bgDefault,
    fontColor = "#fff",
    fontSize = "2em"
  } = props;

  const styleTimmers = {
    "--timer": timer,
    "--bg": background,
    "--fontColor": fontColor
  };

  const newWord2 = word2.trim().length > 0 ? word2 : word1;
  const words = [word1, newWord2];
  const wordsSorted = sortByLength(words);

  return (
    <div className="kromac-text-animation">
      <div style={styleTimmers}>
        {wordsSorted.map((w, index) =>
          <h2 key={index} data-text={w} style={{ fontSize }}>
            {w}
          </h2>
        )}
      </div>
    </div>
  );
};

TextAnimation.propTypes = exact({
  word1: PropTypes.string.isRequired,
  word2: PropTypes.string,
  timer: PropTypes.string,
  background: PropTypes.string,
  fontColor: PropTypes.string,
  fontSize: PropTypes.string
});

export default TextAnimation;
