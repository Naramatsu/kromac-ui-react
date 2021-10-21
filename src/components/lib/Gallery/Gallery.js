import React from "react";
import GalleryResponsive from "./GalleryResponsive";
import GalleryPolygon from "./GalleryPolygon";

const Gallery = props => {
  const { galleryType } = props;
  switch (galleryType) {
    case "polygon":
      return <GalleryPolygon {...props} />;
    default:
      return <GalleryResponsive {...props} />;
  }
};

export default Gallery;
