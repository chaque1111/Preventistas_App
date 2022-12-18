import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Styles from "../FormTrans/FormTrans.module.css"
import { getAllSellers, getAllClients, getAllProducts, getSellersId, getFilterSellers, getProductId } from "../../redux/action";
import getDate from "../../utils/functions/getDate";

  
  export default function NewTransactions() {
    const dispatch = useDispatch();
    
    const [input, setInput] = useState({
      sellerId: "",
      name_client: "",
      date: "",
      products: [],
      cant: 1,
      descripcion: "",
      inventarioId: ""
      
    })
    
    const date = getDate()
   

    function handleSelectSellers(e){
      
      dispatch(getSellersId(e.target.value))
      setInput({
        ...input,
        sellerId: e.target.value
      })
    }
    
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
     if(input.descripcion){
    
     
      setInput({
        ...input,
        cant: input.cant + 1,
        products: [...input.products, input.descripcion]  
      
      });

    }
    
    }

    function handleSubProd(e){
      e.preventDefault();
      if(input.descripcion && input.cant>1){
      
      input.products.splice(input.products.length-1,1);
      setInput({
        ...input,
        cant: input.cant - 1,
        products: input.products
      });
    }
    }
    
    async function handleSelectProducts(e){
      
      if (
        !input.products.includes(e.target.value) &&
        e.target.value !== "Seleccionar producto"
        ) {        
          input.products.splice(0,input.products.length);
          setInput({
            ...input,
            cant: 1,
            products: input.products,
            descripcion: "",
          })
          console.log([e.target])
          
          console.log(e.target.value)
          const idProduct = await dispatch(getProductId(e.target.value))
          
          console.log(idProduct.payload.descripcion)
          setInput({
          ...input,
          cant: 1,
          products: [...input.products,  idProduct.payload.descripcion],
          descripcion: idProduct.payload.descripcion,
          inventarioId: e.target.value

        });
        
      
      } else {
        e.target.value = input.descripcion;
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

    const productId = useSelector((state) => state.productId);
    
    
    const sellers = useSelector((state) => state.allSellers);
    
    const clients = useSelector((state) => state.selectClients);
    // clients.clientes.map((e)=>(console.log(e)))
    
    // sellers.map((e)=>(console.log(e.vendedor)))
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
             <select defaultValue={"default"} onChange={(e) => handleSelectSellers(e)}>
             <option name={"default"} value={"default"} disable>
                  Seleccionar Vendedor
                </option>
                {sellers.map((el) => (
                  <option value={el.vendedor.id} key={el.vendedor.name}>
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
                {clients.clientes && clients.clientes.map((el) => (
                  <option value={el.name} key={el.id} >
                    {el.name}
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
                  <option  value={el.id} key={el.descripcion}>
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