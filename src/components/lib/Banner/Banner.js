import React from "react";

import BannerText from "./components/BannerText";
import BannerImg from "./components/BannerImg";
import BannerClassic from "./components/BannerClassic";

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
