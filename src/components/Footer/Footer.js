import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.Footer} data-testid="Footer">
    <p>
      Powered by{" "}
      <a href="https://webflow.com" className={styles.FooterLink}>
        webflow.com
      </a>
      <br />
      Designed by{" "}
      <a href="https://khimanin.webflow.io" className={styles.FooterLink}>
        Minimal Webflow Templates
      </a>
    </p>
    <div className={styles.FooterLinks}>
      <a href="/" aria-current="page" className={styles.FooterLink}>
        Home
      </a>
      <a href="/home-version-2" className={styles.FooterLink}>
        Home v2
      </a>
      <a href="/info/style-guide" className={styles.FooterLink}>
        Style Guide
      </a>
      <a href="/info/licenses" className={styles.FooterLink}>
        Licenses
      </a>
      <a href="/info/changelog" className={styles.FooterLink}>
        Changelog
      </a>
    </div>
  </footer>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
