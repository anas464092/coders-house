import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const logoStyle = {
    color: "#fff",
    textDecoration: "none",
    userSelect: "none",
  };

  return (
    <nav className={` ${styles.navabar} container`}>
      <Link style={logoStyle} to="/">
        <h3>👋 CodersHouse</h3>
      </Link>
    </nav>
  );
};

export default Navigation;
