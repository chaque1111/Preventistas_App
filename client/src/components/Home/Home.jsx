import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../Home/Home.module.css"
export default function Home() {
    return(
        <div className={styles.container}>
            <div className={styles.cardsCont}>
           {/* <h1>HOME</h1> */}
           <Link to="/transactions">
            <button >Realizar transacción</button>
          </Link>
           </div>
        </div>
    )
}