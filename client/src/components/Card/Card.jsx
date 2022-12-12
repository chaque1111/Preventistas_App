import React from "react";

import styles from "./Card.module.css";

export default function Card({ name, localidad, vendedor, zona }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.name}>Nombre: {name}</div>
      <div className={styles.localidad}>Localidad: {localidad}</div>
      <div className={styles.vendedor}>Vendedor: {vendedor}</div>
      <div className={styles.zona}>Zona: {zona}</div>
    </div>
  );
}

