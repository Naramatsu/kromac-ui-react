import React, { lazy } from "react";
import "./Gallery.scss";

const GalleryResponsive = lazy(() => import("./GalleryResponsive"));
const GalleryPolygon = lazy(() => import("./GalleryPolygon/GalleryPolygon"));

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
