import React, {useState} from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import styles from "../Clients/Clients.module.css";
import Card from "../Card/Card.jsx";
import {getAllClients, getClientsBySeller} from "../../redux/action";
import Cookies from "universal-cookie";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBarClient/SearchBar";

export default function Clients() {
  const cookie = new Cookies();
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clienstBySeller);
  const [currentPage, setCurrentPage] = useState(1);
  const [clientsPerPage, setClientsPerPage] = useState(15);
  const indexLastClient = currentPage * clientsPerPage;
  const indexFirstClient = indexLastClient - clientsPerPage;
  const currentClients = clients.slice(indexFirstClient, indexLastClient);

  const setPage = (number) => {
    setCurrentPage(number);
  };
  useEffect(() => {
    dispatch(getClientsBySeller(cookie.get("userId")));
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <SearchBar setPage={setPage}></SearchBar>
      <Paginado
        clienstPerPage={clientsPerPage}
        clients={clients.length}
        setPage={setPage}
      ></Paginado>
      <div className={styles.cardsCont}>
        {currentClients.length > 0 ? (
          currentClients.map((e) => {
            return (
              <div key={e.id} className={styles.singleCard}>
                <Link to={"/detail/" + e.id}>
                  <Card id={e.id} name={e.name} vendedor={e.nombreVendedor} />
                </Link>
              </div>
            );
          })
        ) : (
          <p>...Loading</p>
        )}
      </div>
    </div>
  );
}
