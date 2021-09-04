import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./style.scss";

const images = () => {
  const data = [
    "https://i.ytimg.com/vi/DG3rk0aGlpA/maxresdefault.jpg",
    "https://images.pexels.com/photos/719396/pexels-photo-719396.jpeg",
    "https://img.apksum.com/93/com.mda.black.wallpapers.hd.dark.background/5.0/icon.png",
    "https://i.pinimg.com/originals/54/b4/38/54b438c99e19dc7450afcdc80955810c.jpg",
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg",
    "https://cdn.wallpapersafari.com/3/74/iVxWUY.jpg",
    "https://www.wallpapertip.com/wmimgs/5-53557_wallpaper-hd-1080p-mikael-gustafsson.jpg",
    "https://greatloveart.com/wp-content/uploads/2021/01/cool-iPhone-wallpapers-backgrounds-22.jpg"
  ];
  return data;
};

const markTypeRow = (index, key) => {
  if (index % 2 === 0) {
    return "par";
  }
  if (key === 0) {
    return "impar offset-md-2";
  }
  return "impar";
};

const markAsLastImageImgPar = (index, key) => {
  if (index % 2 === 0) {
    if (key === 2) {
      return "last";
    }
  }
  return "";
};

const markAsOnlyImageRowImpar = count => {
  if (count === 1) {
    return "special";
  }
  return ``;
};

const maker = images => {
  const numberRows = Math.ceil(images.length / 3);
  const numberRows2 = Math.ceil(images.length / 2);
  const rowAvg = (numberRows + numberRows2) / 2;
  const rows = [];
  let imgs = [];
  let j = 0;

  for (let i = 0; i < rowAvg; i++) {
    imgs = [];
    if (i % 2 === 0) {
      for (let m = 0; m < 3; m++) {
        if (images[j]) {
          imgs.push(images[j]);
          j++;
        }
      }
    } else {
      for (let m = 0; m < 2; m++) {
        if (images[j]) {
          imgs.push(images[j]);
          j++;
        }
      }
    }
    rows.push(imgs);
  }
  return rows;
};

const Gallery = props => {
  const [isViewImage, setIsViewImage] = useState(false);
  const [itemActicve, setItemActicve] = useState({});
  const {
    // images =[],
    imageFitPosition = "center"
  } = props;

  const isViewStyleKromacCol = (row, item) => {
    if (itemActicve && itemActicve.row === row && itemActicve.item === item) {
      return "active";
    }
    return "";
  };

  const isViewButtonClose =
    itemActicve !== {}
      ? {
          display: "flex"
        }
      : {};

  const isActive = isViewImage ? "active" : "";

  const data = maker(images());

  const handleViewImage = ({ row, item }) => {
    setItemActicve({ row, item });
    setIsViewImage(true);
  };

  const close = e => {
    e.preventDefault();
    setItemActicve({});
    setIsViewImage(false);
  };

  return (
    <div className="kromac-gallery">
      <div
        className={`kromac-gallery-polygon container`}
        style={{ "--totalRows": data.length }}
      >
        <Row className="kromac-row">
          <span className={`bdblur ${isActive}`} />
          {data.map((imgs, index) =>
            imgs.map((image, index1) =>
              <Col
                sm={12}
                md={4}
                lg={4}
                key={index1}
                className={`kromac-col ${markAsLastImageImgPar(
                  index,
                  index1
                )} ${isViewStyleKromacCol(index, index1)} ${markTypeRow(
                  index,
                  index1
                )} ${markAsOnlyImageRowImpar(imgs.length)}`}
                style={{ "--rowNumber": index }}
              >
                <div
                  className={`kromac-gallery ${isViewStyleKromacCol(
                    index,
                    index1
                  )}`}
                >
                  <button
                    style={isViewButtonClose}
                    onClick={close}
                    className="close"
                  >
                    <ion-icon name="close-circle-outline" />
                  </button>
                  <div
                    className="kromac-gallery-image"
                    onClick={() =>
                      handleViewImage({ row: index, item: index1 })}
                  >
                    <img
                      id={index1 + index}
                      src={image}
                      alt="Card"
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

export default Gallery;
