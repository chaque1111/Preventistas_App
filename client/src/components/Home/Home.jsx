import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../Home/Home.module.css"
export default function Home() {
    return(
        <div className={styles.container}>
            <div className={styles.cardsCont}>
            <Link to="/transactions">
           <button>Nueva Transacción</button>
           </Link>
           </div>
        </div>
    )
}