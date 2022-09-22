import React from "react";
import PropTypes from "prop-types";
import styles from "./PolaroidPhoto.module.css";

const PolaroidPhoto = (props) => (
  <a
    href="/"
    className={`${styles.PolaroidPhoto} ${styles.TurnLeft}`}
    aria-label="open lightbox"
    data-testid="PolaroidPhoto"
  >
    <img
      src={props.image}
      alt=""
      className={`${styles.Photo} ${styles.Tiny}`}
    />
    <h5 class="polaroid-title">Autumn 2020</h5>
  </a>
);

PolaroidPhoto.propTypes = {
  image: PropTypes.string,
};

PolaroidPhoto.defaultProps = {};

export default PolaroidPhoto;
