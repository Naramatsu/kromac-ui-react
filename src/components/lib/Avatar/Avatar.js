import React, { useState } from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import Skeleton from "../Skeleton";
// import { videoBuilder } from "../../../utils/utils";

const bgDefault = `linear-gradient(
          0deg,
          rgba(166, 69, 163, 1) 0%,
          rgba(77, 202, 208, 1) 100%,
          rgba(255, 250, 250, 1) 100%
          `;

const videoBuilder = (video, setIsMediaLoading) => {
  const {
    url,
    controls = false,
    autoPlay = true,
    muted = true,
    loop = true
  } = video;
  if (url.includes("youtube", "youtu.be")) {
    let ytUrlBuilder = "";
    if (url.includes("youtube")) {
      ytUrlBuilder = url.replace(
        "https://www.youtube.com/watch?v=",
        "https://www.youtube.com/embed/"
      );
    } else {
      ytUrlBuilder = url.replace(
        "https://youtu.be/",
        "https://www.youtube.com/embed/"
      );
    }
    return (
      <iframe
        title="YouTube video player"
        width="100%"
        height="100%"
        src={ytUrlBuilder}
        frameBorder="0"
        allow="autoplay"
        allowFullScreen={false}
        onLoad={() => setIsMediaLoading(false)}
      />
    );
  }
  setTimeout(() => {
    setIsMediaLoading(false);
  }, 0);
  return (
    <video
      src={url}
      controls={controls}
      muted={muted}
      loop={loop}
      autoPlay={autoPlay}
      width="100%"
      height="100%x"
    />
  );
};

const Avatar = props => {
  const [isMediaLoading, setIsMediaLoading] = useState(true);
  const {
    image,
    name,
    borderColor = "#000",
    bgColor = bgDefault,
    isStatic = false,
    size = "150px",
    imageFit,
    imagePosition = "top",
    tooltip,
    transition = ".5s",
    video
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
          {isMediaLoading && <Skeleton width="100%" height="100%" />}
          {video
            ? videoBuilder(video, setIsMediaLoading)
            : <img
                src={image}
                alt="avatar"
                style={imageStyle}
                onLoad={() => setIsMediaLoading(false)}
              />}
        </div>
        {name &&
          <div
            className="kromac-avatar-name"
            style={{
              ...style,
              ...nameStyle,
              height: size,
              "--transition": transition
            }}
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
  image: PropTypes.string,
  video: PropTypes.shape({
    url: PropTypes.string.isRequired,
    controls: PropTypes.bool,
    autoPlay: PropTypes.bool,
    muted: PropTypes.bool,
    loop: PropTypes.bool
  }),
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
