import React from "react";
import PropTypes from "prop-types";
import BannerKromac from "../../../components/lib/Banner";
import "../../../css/style.css";
import "../../../css/Banner.css";

/**
 * Primary UI component for user interaction
 */
export const BannerClassic = (props) => <BannerKromac {...props} />;
export const BannerImage = (props) => <BannerKromac {...props} />;
export const BannerText = (props) => <BannerKromac {...props} />;

BannerClassic.propTypes = {
  /**
   * Banner type.
   */
  bannerType: PropTypes.oneOf(["classic", "image", "text"]),
  /**
   * Image url.
   */
  image: PropTypes.string.isRequired,
  /**
   * Sets background color.
   */
  background: PropTypes.string,
  /**
   *  Sets font color.
   */
  color: PropTypes.string,
  /**
   * Set height of component.
   */
  height: PropTypes.string,
  /**
   * Side where the image will be displayed.
   */
  order: PropTypes.oneOf(["right", "left"]),
  /**
   * Display image with an overlay effect on the banner.
   */
  overlay: PropTypes.bool,
  /**
   * This prop will align the image to the bottom side, but will only work with <overlay> prop turned on.
   */
  isBottom: PropTypes.bool,
  /**
   * Text align options. (this do not affect the <order> prop).
   */
  textAlign: PropTypes.string,
  /**
   * Display any element you want to appear in the banner.
   */
  children: PropTypes.any,
};

BannerText.propTypes = {
  /**
   * Banner type.
   */
  bannerType: PropTypes.oneOf(["classic", "image", "text"]),
  /**
   * Image url.
   */
  image: PropTypes.string.isRequired,
  /**
   * Text that will appear as a title.
   */
  title: PropTypes.string.isRequired,
  /**
   *  Text background color (please do not set #000 or "black").
   */
  bgTextColor: PropTypes.string,
  /**
   * Set height of component.
   */
  height: PropTypes.string,
  /**
   * Side where the image will be displayed.
   */
  order: PropTypes.oneOf(["right", "left"]),
  /**
   * Sets background attachment.
   */
  attachment: PropTypes.string,
  /**
   * Sets image position to be displayed in the background.
   */
  bgPosition: PropTypes.string,
  /**
   * Text align options. (this do not affect the <order> prop).
   */
  textAlign: PropTypes.string,
};

BannerImage.propTypes = {
  /**
   * Banner type.
   */
  bannerType: PropTypes.oneOf(["classic", "image", "text"]),
  /**
   * Image url.
   */
  image: PropTypes.string.isRequired,
  /**
   *  Sets font color.
   */
  color: PropTypes.string,
  /**
   * Set height of component.
   */
  height: PropTypes.string,
  /**
   * Sets background attachment.
   */
  attachment: PropTypes.string,
  /**
   * Text align options. (this do not affect the <order> prop).
   */
  textAlign: PropTypes.string,
  /**
   * Display any element you want to appear in the banner.
   */
  children: PropTypes.any,
};
