import React, { lazy, useState } from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import {
  markTypeRow,
  markAsLastImageImgPar,
  markAsOnlyImageRowImpar,
  rowColMaker
} from "../../../../utils/utils";
import "./style.scss";

const Row = lazy(() => import("react-bootstrap/Row"));
const Col = lazy(() => import("react-bootstrap/Col"));

const GalleryPolygon = props => {
  const [isViewImage, setIsViewImage] = useState(false);
  const [itemActive, setItemActive] = useState({});
  const {
    images = [],
    imageFitPosition = "center",
    polygonType = "rhombus"
  } = props;
  const isActive = isViewImage ? "active" : "";
  const data = rowColMaker(images);

  const isViewStyleKromacCol = ({ row, item }) => {
    if (itemActive && itemActive.row === row && itemActive.item === item) {
      return "active";
    }
    return "";
  };

  const handleViewImage = ({ row, item }) => {
    setItemActive({ row, item });
    setIsViewImage(true);
  };

  const close = e => {
    e.preventDefault();
    setItemActive({});
    setIsViewImage(false);
  };

  return (
    <div className="kromac-gallery">
      <div
        className={`kromac-gallery-polygon container`}
        style={{ "--totalRows": data.length }}
      >
        <Row className="kromac-row">
          <span className={`bgblur ${isActive}`} />
          {data.map((imgs, row) =>
            imgs.map((image, col) =>
              <Col
                sm={12}
                md={4}
                lg={4}
                key={col}
                className={`kromac-col ${polygonType} ${markAsLastImageImgPar(
                  row,
                  col
                )} ${isViewStyleKromacCol({
                  row,
                  item: col,
                  itemActive
                })} ${markTypeRow(row, col)} ${markAsOnlyImageRowImpar(
                  imgs.length
                )}`}
                style={{ "--rowNumber": row }}
              >
                <div
                  className={`kromac-gallery ${isViewStyleKromacCol({
                    row,
                    item: col,
                    itemActive
                  })}`}
                >
                  <button onClick={close} className="close">
                    <ion-icon name="close-circle-outline" />
                  </button>
                  <div className="brillo" />
                  <div
                    className="kromac-gallery-image"
                    onClick={() => handleViewImage({ row: row, item: col })}
                  >
                    <img
                      src={image}
                      alt="GalleryPolygon"
                      style={{ objectPosition: imageFitPosition }}
                    />
                  </div>
                </div>
              </Col>
            )
          )}
        </Row>
      </div>
    </div>
  );
};

GalleryPolygon.propTypes = exact({
  galleryType: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string.isRequired),
  imageFitPosition: PropTypes.string,
  polygonType: PropTypes.oneOf(["rhombus", "hexagon", "rabbet"])
});

export default GalleryPolygon;
