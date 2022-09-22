import "react-18-image-lightbox/style.css";

import React, { useState } from "react";
import PropTypes from "prop-types";
import Lightbox from "react-18-image-lightbox";
import styles from "./PolaroidPhoto.module.css";

const PolaroidPhoto = ({ imageSrc, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div data-testid="PolaroidPhoto">
      <button
        className={`${styles.PolaroidPhoto} ${styles.TurnLeft}`}
        onClick={() => setIsOpen(true)}
        aria-label="open lightbox"
      >
        <img
          src={imageSrc}
          alt=""
          className={`${styles.Photo} ${styles.Tiny}`}
        />
        <h5 class="polaroid-title">{text}</h5>
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
  imageSrc: PropTypes.string,
  text: PropTypes.string,
};

PolaroidPhoto.defaultProps = {};

export default PolaroidPhoto;
