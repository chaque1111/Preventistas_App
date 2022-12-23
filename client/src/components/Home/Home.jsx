import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { closeTransaction, openTransaction } from "../../redux/action";
import styles from "../Home/Home.module.css"
export default function Home() {
    const dispatch = useDispatch();
    const history = useHistory();


    useEffect(async() => {
        await dispatch(closeTransaction());
        
      }, [dispatch]);
    
    async function handleCreateOrder(e){
        e.preventDefault();
        // await dispatch(openTransaction());


        history.push("/transactions");
        
    //     const initValue = "default"

    //   document.getElementById("Sellers").value = document.getElementById("Clients").value = document.getElementById("Products").value = initValue;
    }
  
    

    return(
        <div className={styles.container}>
            <div className={styles.cardsCont}>
            {/* <Link to="/transactions"> */}
           <button onClick={(e) => handleCreateOrder(e)}>Nueva Transacción</button>
           {/* </Link> */}
           </div>
        </div>
    )
}

