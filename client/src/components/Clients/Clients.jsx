import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../Clients/Clients.module.css";


import{
    getAllClients
}from "../../redux/action"
export default function Clients() {
    const dispatch = useDispatch();
    const clients = useSelector((state) => state.allClients);

    useEffect(() => {
        dispatch(getAllClients());        
      }, [dispatch]);
    return(
        <div className={styles.container}>
            <div className={styles.cardsCont}>
           {clients.length > 0 ? (
            clients.map((e) => {
              return (
                <div key={e.id} >
                  {/* <Link to={"/detail/" + e.id}>
                    <Card name={e.name} flag={e.flag} continent={e.continent} />
                  </Link> */}
                  <h5>{e.name}</h5>
                </div>
              );
            })
          ) : 
          <p>...Loading</p>}
          </div>
        </div>
    )
}