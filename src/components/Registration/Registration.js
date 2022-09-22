import React from "react";
import PropTypes from "prop-types";
import styles from "./Registration.module.css";

const Registration = () => (
  <div className={styles.Registration} data-testid="Registration">
    <h5 className={styles.Date}>
      01–30 <br></br> June
    </h5>
    <a href="/registration" class="button">
      <h3>Registration is Open</h3>
    </a>
    <h5 className={styles.Season}>
      2023 <br></br> Season
    </h5>
  </div>
);

Registration.propTypes = {};

Registration.defaultProps = {};

export default Registration;
