import React from "react";
import PropTypes from "prop-types";
import logo from "../../images/logo.svg";
import styles from "./PageTitle.module.css";

const PageTitle = ({ title, description }) => (
  <div className={styles.PageTitle} data-testid="PageTitle">
    <a href="/" aria-current="page" className={styles.Logo}>
      <div className={styles.LogoBlock}>
        <img src={logo} loading="lazy" alt="" className={styles.LogoImage} />
      </div>
    </a>
    <div className={styles.LogoContent}>
      <h1 className={styles.LogoTitle}>{title}</h1>
      <h6 className={styles.LogoDescription}>{description}</h6>
    </div>
  </div>
);

PageTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

PageTitle.defaultProps = {};

export default PageTitle;
