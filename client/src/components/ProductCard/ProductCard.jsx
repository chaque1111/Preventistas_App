import React from "react";
import styles from "../ProductCard/ProductCard.module.css";
export default function ({name, costo, stock}) {
  return (
    <div className={styles.container}>
      <h1>descripcion: {name}</h1>
      <img
        className={styles.image}
        src='https://definicion.de/wp-content/uploads/2009/06/producto.png'
        alt=''
      />
      <h1>costo: {costo}</h1>
      {/* <h1>stock:  {stock}</h1> */}
    </div>
  );
}
