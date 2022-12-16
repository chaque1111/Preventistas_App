import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Styles from "../FormTrans/FormTrans.module.css"
import { getAllSellers, getAllClients, getAllProducts } from "../../redux/action";
import getDate from "../../utils/functions/getDate";

  
  export default function NewTransactions() {
    const dispatch = useDispatch();
    
    const [input, setInput] = useState({
      name_client: "",
      date: "",
      products: [],
      cant: 1,
      nameProduct: "",
      cantTotal: ""
    })
    
    const date = getDate()
    console.log(date)
    
    function handleSelectClients(e){
      setInput({
        ...input,
        name_client: e.target.value
      })
    }
    
    if(!input.date){
    (function handleDate(){
      setInput({
        ...input,
        date: date
      })
    })()}
    
    
    function handleAddProd(e) {
      e.preventDefault();
     if(input.nameProduct){
      console.log("hi")
     
      setInput({
        ...input,
        cant: input.cant + 1,
        products: [...input.products, input.nameProduct]  
      
      });

    }
    
    }

    function handleSubProd(e){
      e.preventDefault();
      if(input.nameProduct && input.cant>1){
      console.log(e)
      input.products.splice(input.products.length-1,1);
      setInput({
        ...input,
        cant: input.cant - 1,
        products: input.products
      });
    }
    }

    function handleSelectProducts(e){
      
      if (
        !input.products.includes(e.target.value) &&
        e.target.value !== "Seleccionar producto"
      ) {        
        input.products.splice(0,input.products.length);
        setInput({
          ...input,
          cant: 1,
          products: input.products,
          nameProduct: "",
        })
        setInput({
          ...input,
          cant: 1,
          products: [...input.products,  e.target.value],
          nameProduct: e.target.value
        });
        
      
      } else {
        e.target.value = input.nameProduct;
        return alert(
          "Ya has añadido este producto a la lista. Seleccione otro producto o continúe completando el formulario."
        );
      }
    }
    useEffect(() => {
      dispatch(getAllSellers());
      dispatch(getAllProducts());
      dispatch(getAllClients());
    }, [dispatch]);

    const products = useSelector((state) => state.allProducts);
    const clients = useSelector((state) => state.allClients);
    const sellers = useSelector((state) => state.allSellers);

    input.products.map((el)=>(console.log(el)))
   
    console.log(input)
    return(
        <div className={Styles.containMaster}>
      <div className={Styles.contain}>
        <div className={Styles.description}>
          <form className={Styles.form} 
          >
            <div className={Styles.titleActivities}>
              <h2>Nueva transacción</h2>
            </div>
            <div className={Styles.divName}>
              <label>Nombre Vendedor:</label>
             <select defaultValue={"default"} onChange={(e) => handleSelectClients(e)}>
             <option value={"default"} disable>
                  Seleccionar Vendedor
                </option>
                {sellers.map((el) => (
                  <option value={el.vendedor.name} key={el.vendedor.name}>
                    {el.vendedor.name}
                  </option>
                ))}
             </select>
              </div>
            <div className={Styles.divName}>
              <label>Nombre cliente:</label>
             <select defaultValue={"default"} onChange={(e) => handleSelectClients(e)}>
             <option value={"default"} disable>
                  Seleccionar cliente
                </option>
                {clients.map((el) => (
                  <option value={el.name_client} key={el.id_client}>
                    {el.name_client}
                  </option>
                ))}
             </select>
              </div>
            <div>
              <label>Fecha de compra:</label>
              <div >{date}</div>
            </div>
            <div>
            <label>Productos:</label>
            <select defaultValue={"default"} onChange={(e) => handleSelectProducts(e)}>
             <option value={"default"} disable>
                  Seleccionar producto
                </option>
                {products.map((el) => (
                  <option value={el.descripcion} key={el.descripcion}>
                    {el.descripcion}
                  </option>
                ))}
             </select>
              </div>  
              <div>
                <label>Cantidad:</label>
                <div>{input.cant}</div>
              <div>
              <button
              onClick={(e)=>handleAddProd(e)}
              >+</button>
              </div>              
              <div >
                <button                 
                  onClick={(e) => handleSubProd(e)}
                >
                  -
                </button>
              </div>            
              </div>
            </form>
            </div>
           
        </div>
        </div>
    )

  }