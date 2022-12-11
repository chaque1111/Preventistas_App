import React from "react";

import styles from "./Card.module.css";

export default function Card({ name, localidad, vendedor, zona }) {
  return (
    <div >
      <div>Nombre: {name}</div>
      <div>Localidad: {localidad}</div>
      <div>Vendedor: {vendedor}</div>
      <div>Zona: {zona}</div>
    </div>
  );
}

