import React, {useEffect, useState} from "react";
import {useDispatch, useSelector, useStore} from "react-redux";
import {getAllProducts} from "../../redux/action";
import ProductCard from "./Card/ProductCard";
import SeachBarProduct from "./SearchBar/SearchBarProduct.jsx";
import Paginado from "../Products/Paginado/ProductPaginado";
import styles from "../Products/Products.module.css";

import {Link} from "react-router-dom";
export default function () {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);
  const [productPerPage, SetProductPerPage] = useState(10);
  const [ProductPage, SetProductPage] = useState(1);
  const indexLastProduct = productPerPage * ProductPage;
  const indexFirstProduct = indexLastProduct - productPerPage;
  const productSlice = products.slice(indexFirstProduct, indexLastProduct);

  const setPageProduct = (number) => {
    SetProductPage(number);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Preventistas App</h1>
        <div className={styles.search}>
          <SeachBarProduct />
        </div>
        <div className={styles.buttons}>
          <button>agregar producto</button>

          <select>
            <option disabled selected hidden>
              Filtrar...
            </option>
          </select>
        </div>
        <div className={styles.Paginado}>
          <Paginado
            products={products.length}
            productsPerPage={productPerPage}
            setPage={setPageProduct}
          />
        </div>
      </div>
      <div className={styles.cardContain}>
        {productSlice.length ? (
          productSlice.map((e) => {
            return (
              <div className={styles.card} key={e.id}>
                <Link className={styles.link} to={"/product/" + e.id}>
                  <ProductCard
                    name={e.descripcion}
                    costo={Math.floor(e.costo)}
                  />
                </Link>
              </div>
            );
          })
        ) : (
          <h1>loading</h1>
        )}
      </div>
    </div>
  );
}
