import React from "react";
import PropTypes from "prop-types";
import styles from "./CardNavigation.module.css";

const CardNavigation = ({
  type,
  iconSrc,
  iconRight,
  title,
  titleSize,
  description,
  children,
}) => {
  const renderTitle = (size, text) => {
    switch (size) {
      case "small":
        return <h4>{text}</h4>;
      case "large":
        return <h2>{text}</h2>;
      default:
        return <h3>{text}</h3>;
    }
  };

  return (
    <a
      href="/what-to-take"
      className={`link ${type} w-inline-block`}
      data-testid="CardNavigation"
    >
      {iconSrc ? (
        <img
          src={iconSrc}
          loading="lazy"
          alt=""
          className={`link-icon ${iconRight && "from-right"}`}
        />
      ) : (
        children
      )}

      <div className="link-content">
        {renderTitle(titleSize, title)}
        <p className="link-description">{description}</p>
      </div>
    </a>
  );
};

CardNavigation.propTypes = {
  type: PropTypes.oneOf(["large", "circle", "wide"]),
  iconSrc: PropTypes.string,
  iconRight: PropTypes.bool,
  title: PropTypes.string,
  titleSize: PropTypes.oneOf(["small", "large"]),
  description: PropTypes.string,
};

CardNavigation.defaultProps = {};

export default CardNavigation;
