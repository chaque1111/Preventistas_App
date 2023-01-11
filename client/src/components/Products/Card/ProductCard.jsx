import React from "react";
import styles from "../Card/ProductCard.module.css";
export default function ({name, costo, stock}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.description}>DESCRIPCION</h1>
      <h1 className={styles.name}>{name.toLowerCase()}</h1>
      <img
        className={styles.image}
        src='https://img.freepik.com/fotos-premium/paquetes-productos-bolsa-compra-carrito-portatil-concepto-compras-entrega_38716-138.jpg?w=2000'
        alt=''
      />
      <h1 className={styles.costo}>costo: {costo}</h1>
      {/* <h1>stock:  {stock}</h1> */}
    </div>
  );
}
