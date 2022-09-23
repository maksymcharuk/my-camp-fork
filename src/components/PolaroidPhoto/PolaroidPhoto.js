import "react-18-image-lightbox/style.css";

import React, { useState } from "react";
import PropTypes from "prop-types";
import Lightbox from "react-18-image-lightbox";
import styles from "./PolaroidPhoto.module.css";

const PolaroidPhoto = ({ turn, imageSrc, imageSize, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const turnClass = (direction) => {
    switch (direction) {
      case "left":
        return styles.TurnLeft;
      case "right":
        return styles.TurnRight;
      default:
        return "";
    }
  };

  const imageSizeClass = (size) => {
    switch (size) {
      case "tiny":
        return styles.ImageTiny;
      case "large":
        return styles.ImageLarge;
      case "square":
        return styles.ImageSquare;
      case "square-small":
        return styles.ImageSquareSmall;
      default:
        return "";
    }
  };

  return (
    <div data-testid="PolaroidPhoto">
      <button
        className={`${styles.PolaroidPhoto} ${turnClass(turn)}`}
        onClick={() => setIsOpen(true)}
        aria-label="open lightbox"
      >
        <img
          src={imageSrc}
          alt=""
          className={`${styles.Photo} ${imageSizeClass(imageSize)}`}
        />
        <h5 className="polaroid-title">{text}</h5>
      </button>

      {isOpen && (
        <Lightbox
          mainSrc={imageSrc}
          onCloseRequest={() => setIsOpen(false)}
          onImageLoad={() => {
            window.dispatchEvent(new Event("resize"));
          }}
        />
      )}
    </div>
  );
};

PolaroidPhoto.propTypes = {
  turn: PropTypes.oneOf(["left", "right"]),
  imageSrc: PropTypes.string,
  imageSize: PropTypes.oneOf(["tiny", "large", "square", "square-small"]),
  text: PropTypes.string,
};

PolaroidPhoto.defaultProps = {};

export default PolaroidPhoto;
