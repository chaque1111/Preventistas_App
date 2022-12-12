import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Styles from "../FormTrans/FormTrans.module.css"

// import {
    
//   } from "../../redux/action";


  export default function NewTransactions() {
    const [input, setInput] = useState({})

    return(
        <div className={Styles.containMaster}>
      <div className={Styles.contain}>
        <div className={Styles.description}>
          <form className={Styles.form} 
        //   onSubmit={(e) => handleSubmit(e)}
          >
            <div className={Styles.titleActivities}>
              <h2>Nueva transacción</h2>
            </div>
            <div className={Styles.divName}>
              <label>Nombre cliente:</label>
              <input
                type="text"
                value={input.name}
                name="name"
                // onChange={(e) => handleChange(e)}
                // className={errors.name && Styles.danger}
                // className={errors.name ? Styles.danger : Styles.name}
              />
              </div>
              <div className={Styles.divName}>
              <label>Name:</label>
              <input
                type="text"
                value={input.name}
                name="name"
                // onChange={(e) => handleChange(e)}
                // className={errors.name && Styles.danger}
                // className={errors.name ? Styles.danger : Styles.name}
              />
              </div>
            </form>
            </div>
        </div>
        </div>
    )

  }