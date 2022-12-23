import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getProductId} from "../../redux/action";
export default function ProductDetail(props) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productId);
  useEffect(() => {
    dispatch(getProductId(props.match.params.id));
  }, []);
  return (
    <div>
      <h1>Nombre: {product.descripcion}</h1>
      <h2>codigo: {product.id}</h2>
      <h2>Stock Actual: {product.stockActual ? product.stockActual : 0}</h2>
      <h2>Costo: ${product.costo}</h2>
    </div>
  );
}
