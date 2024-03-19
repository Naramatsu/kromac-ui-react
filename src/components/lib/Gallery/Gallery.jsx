import React from "react";
import GalleryResponsive from "./GalleryResponsive";
import GalleryPolygon from "./GalleryPolygon";

export const videoBuilder = (video, setIsMediaLoading, handleViewImage) => {
  const {
    url,
    controls = false,
    autoPlay = true,
    muted = true,
    loop = true,
    index,
    itemActive,
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
        onClick={() => handleViewImage({ item: index })}
      />
    );
  }

  setTimeout(() => {
    setIsMediaLoading(false);
  }, 0);

  return (
    <video
      src={url}
      controls={itemActive || controls}
      muted={muted}
      loop={loop}
      autoPlay={autoPlay}
      width="100%"
      height="100%x"
      onClick={() => handleViewImage({ item: index })}
    />
  );
};

const Gallery = (props) => {
  const { galleryType } = props;
  switch (galleryType) {
    case "polygon":
      return <GalleryPolygon {...props} />;
    default:
      return <GalleryResponsive {...props} />;
  }
};

export default Gallery;
