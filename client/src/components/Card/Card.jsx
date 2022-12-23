import React from "react";

import styles from "./Card.module.css";

export default function Card({id, name, localidad, vendedor, zona}) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.name}>Nombre cliente: {name}</div>
      <img
        className={styles.img}
        src='https://www.shutterstock.com/image-vector/incognito-sticker-logo-browse-private-260nw-1959585967.jpg'
        alt='not found'
      />
      <div className={styles.vendedor}>Vendedor: {vendedor}</div>
    </div>
  );
}
