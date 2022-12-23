import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getClientById} from "../../redux/action";

export default function (props) {
  const dispatch = useDispatch();
  const clientDetail = useSelector((state) => state.selectClient);
  useEffect(() => {
    dispatch(getClientById(props.match.params.id));
  }, []);
  return (
    <div>
      {clientDetail ? (
        <div>
          <h1>fecha de ultima compra: {clientDetail.fechaUC}</h1>
          <h1>Nombre asociado: {clientDetail.name}</h1>
          <h1>Razon Social: {clientDetail.rzsocial}</h1>
          <h1>Localidad: {clientDetail.localidad}</h1>
          <h1>
            Dirección:{" "}
            {clientDetail.direccion ? clientDetail.direccion : "no encontrado"}
          </h1>
          <h1>whatsapp: {clientDetail.whatsapp}</h1>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
}
