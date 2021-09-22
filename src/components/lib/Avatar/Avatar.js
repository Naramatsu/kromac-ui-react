import React, { lazy, useState } from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import "./style.scss";

const Skeleton = lazy(() => import("../Skeleton"));

const bgDefault = `linear-gradient(
          0deg,
          rgba(166, 69, 163, 1) 0%,
          rgba(77, 202, 208, 1) 100%,
          rgba(255, 250, 250, 1) 100%
          `;

const Avatar = props => {
  const [isImgLoading, setIsImgLoading] = useState(true);
  const {
    image,
    name,
    borderColor = "#000",
    bgColor = bgDefault,
    isStatic = false,
    size = "150px",
    imageFit,
    imagePosition = "top",
    tooltip
  } = props;

  const fontHeight = size.replace("px", "") * 1;
  const style = {
    background: bgColor,
    border: `solid 3px ${borderColor}`
  };

  const nameStyle = {
    "--transform": isStatic
      ? `translateX(calc(${size} / -2))`
      : "translateX(-100%)",
    "--transformHover": `translateX(calc(${size} / -2))`,
    borderRadius: `0 calc(${size} / 2) calc(${size} / 2) 0`,
    "--paddingLeft": `calc(${size} / 2)`
  };

  const avatarStyles = {
    borderRadius: `calc(${size} / 2) 0 0 calc(${size} / 2)`
  };

  const sectionStyles = {
    width: size,
    height: size,
    minWidth: size,
    minHeight: size
  };

  const h3Styles = {
    fontSize: fontHeight <= 50 ? "1em" : "1.5em"
  };

  const imageStyle = {
    width: imageFit ? "100%" : "auto",
    objectPosition: imagePosition
  };

  return (
    <div className="kromac-avatar-container" style={{ height: size }}>
      {tooltip &&
        <span className="kromac-tooltip" style={{ "--size": size }}>
          {tooltip}
        </span>}
      <div className="kromac-avatar" style={{ ...avatarStyles }}>
        <div
          className="kromac-avatar-section"
          style={{ ...style, ...sectionStyles }}
        >
          {isImgLoading && <Skeleton width="100%" height="100%" />}
          <img
            src={image}
            alt="avatar"
            style={imageStyle}
            onLoad={() => setIsImgLoading(false)}
          />
        </div>
        {name &&
          <div
            className="kromac-avatar-name"
            style={{ ...style, ...nameStyle, height: size }}
          >
            <h3 style={h3Styles} className="text-bg-light">
              {name}
            </h3>
          </div>}
      </div>
    </div>
  );
};

Avatar.propTypes = exact({
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  borderColor: PropTypes.string,
  bgColor: PropTypes.string,
  isStatic: PropTypes.bool,
  size: PropTypes.string,
  imageFit: PropTypes.bool,
  imagePosition: PropTypes.string,
  tooltip: PropTypes.string
});

export default Avatar;
