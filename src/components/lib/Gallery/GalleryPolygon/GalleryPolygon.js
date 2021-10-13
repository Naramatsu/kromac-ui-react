import React, { lazy, useState } from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import {
  markTypeRow,
  markAsLastImageImgPar,
  markAsOnlyImageRowImpar,
  rowColMaker
} from "../../../../utils/utils";

const Skeleton = lazy(() => import("../../Skeleton"));

const GalleryPolygon = props => {
  const [isViewImage, setIsViewImage] = useState(false);
  const [itemActive, setItemActive] = useState({});
  const [isImgLoading, setIsImgLoading] = useState(true);
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
                    <img src="https://res.cloudinary.com/dxg9gszax/image/upload/v1634081104/kromac-ui/closedark_udiuhh.svg" alt="close" />
                  </button>
                  <div className="brillo" />
                  <div
                    className="kromac-gallery-image"
                    onClick={() => handleViewImage({ row: row, item: col })}
                  >
                    {isImgLoading
                      ? <Skeleton width="100%" height="100%" />
                      : <p>Rendering image please wait</p>}
                    <img
                      src={image}
                      alt="GalleryPolygon"
                      style={{ objectPosition: imageFitPosition }}
                      onLoad={() => setIsImgLoading(false)}
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
