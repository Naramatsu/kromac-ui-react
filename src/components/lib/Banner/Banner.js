import React, { lazy } from "react";

const BannerText = lazy(() => import("./components/BannerText"));
const BannerImg = lazy(() => import("./components/BannerImg"));
const BannerClassic = lazy(() => import("./components/BannerClassic"));

const Banner = props => {
  const { bannerType } = props;
  switch (bannerType) {
    case "image":
      return <BannerImg {...props} />;
    case "text":
      return <BannerText {...props} />;
    default:
      return <BannerClassic {...props} />;
  }
};

export default Banner;
