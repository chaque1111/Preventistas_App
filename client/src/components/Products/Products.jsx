import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../redux/action";
import ProductCard from "../ProductCard/ProductCard";
import styles from "../Products/Products.module.css";
import {Link} from "react-router-dom";
export default function () {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div className={styles.container}>
      {products.length &&
        products.map((e) => {
          return (
            <div className={styles.card} key={e.id}>
              <Link to={"/product/" + e.id}>
                <ProductCard name={e.descripcion} costo={e.costo} />
              </Link>
            </div>
          );
        })}
    </div>
  );
}
