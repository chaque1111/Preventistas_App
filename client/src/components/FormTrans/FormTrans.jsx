import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Styles from "../FormTrans/FormTrans.module.css"
import { getAllSellers, getAllClients, getAllProducts, getSellersId, getFilterSellers, getProductId, getOrderNumber, changeOrderNumber, postTransac } from "../../redux/action";
import getDate from "../../utils/functions/getDate";

  
  export default function NewTransactions() {
    const dispatch = useDispatch();
    
    const [input, setInput] = useState({
      vendedorId: "",
      clienteId: "",
      fecha: "",
      products: [],
      cantidad: 1,
      costo: "",
      subTotal: "",
      descripcion: "",
      inventarioId: "",
      orderNumber: ""
    })
    
    const fecha = getDate()
   

    function handleSelectSellers(e){
      
      dispatch(getSellersId(e.target.value))
      setInput({
        ...input,
        vendedorId: e.target.value
      })
    }
    
    function handleSelectClients(e){
      setInput({
        ...input,
        clienteId: e.target.value
      })
    }
    
    if(!input.fecha){
    (function handleDate(){
      setInput({
        ...input,
        fecha: fecha
      })
    })()}

    if(!input.orderNumber){(async function handleOrderNumber(){
      const nroPedido = await dispatch(getOrderNumber())
      console.log(nroPedido.payload[0].nroPedido)
      setInput({
        ...input,
        orderNumber: nroPedido.payload[0].nroPedido
            })
    })()}

  
    function modifyOrderNumber(){
      const orderId = input.orderNumber
      dispatch(changeOrderNumber(orderId))
    }

    function handleAddProd(e) {
      e.preventDefault();
     if(input.descripcion){   
     
      setInput({
        ...input,
        cantidad: input.cantidad + 1,
        products: [...input.products, input.descripcion],  
        subTotal: input.costo * (input.cantidad + 1)
      });      
    }    
    }

    function handleSubProd(e){
      e.preventDefault();
      if(input.descripcion && input.cantidad>1){
      
      input.products.splice(input.products.length-1,1);
      setInput({
        ...input,
        cantidad: input.cantidad - 1,
        products: input.products,
        subTotal: input.costo * (input.cantidad - 1)
        
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
            cantidad: 1,
            products: input.products,
            descripcion: "",
          })
     
          const idProduct = await dispatch(getProductId(e.target.value))
          const iva = 1 + idProduct.payload.porcentaje/100
          const unitCost = parseInt(idProduct.payload.costoBonif)          
          const unitCostIva = unitCost + iva
          
          setInput({
          ...input,
          cantidad: 1,
          products: [...input.products,  idProduct.payload.descripcion],
          descripcion: idProduct.payload.descripcion,
          inventarioId: e.target.value,
          costo: unitCostIva,
          subTotal: unitCostIva * input.cantidad

        });
      } else {
        e.target.value = input.descripcion;
        return alert(
          "Ya has añadido este producto a la lista. Seleccione otro producto o continúe completando el formulario."
        );
      }
    }

    async function handleSubmit(e){
      e.preventDefault();
      await dispatch(postTransac(input));
      // await modifyOrderNumber();

      const initValue = "default"

      document.getElementById("Sellers").value = document.getElementById("Clients").value = document.getElementById("Products").value = initValue;
     
      setInput({
        vendedorId: "",
        clienteId: "",
        fecha: "",
        products: [],
        cantidad: 1,
        costo: "",
        subTotal: "",
        descripcion: "",
        inventarioId: "",
        orderNumber: ""
      })
    }

    async function handleFinishOrder(e){
      e.preventDefault();
      await modifyOrderNumber();
      setInput({
        vendedorId: "",
        clienteId: "",
        fecha: "",
        products: [],
        cantidad: 1,
        costo: "",
        subTotal: "",
        descripcion: "",
        inventarioId: "",
        orderNumber: ""
      })
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
    
    
    return(
        <div className={Styles.containMaster}>
      <div className={Styles.contain}>
        <div className={Styles.description}>
          <form className={Styles.form} onSubmit={(e) => handleSubmit(e)}
          >
            <div className={Styles.titleActivities}>
              <h2>Nueva transacción</h2>
            </div>
            <div className={Styles.divName}>
              <label>Nombre Vendedor:</label>             
             <select id={"Sellers"} defaultValue={"default"} onChange={(e) => handleSelectSellers(e)}>
             <option name={"default"} value={"default"} enable>
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
             <select id={"Clients"} defaultValue={"default"} onChange={(e) => handleSelectClients(e)}>
             <option value={"default"} disable>
                  Seleccionar cliente
                </option>
                {clients.clientes && clients.clientes.map((el) => (
                  <option value={el.id} key={el.id} >
                    {el.name}
                  </option>
               ))}
             </select>
              </div>
            <div>
              <label>Fecha de compra:</label>
              <div >{fecha}</div>
            </div>
            <div>
            <label>Productos:</label>
            <select id={"Products"} defaultValue={"default"} onChange={(e) => handleSelectProducts(e)}>
             <option value={"default"} disable>
                  Seleccionar producto
                </option>
                {products && products.map((el) => (
                  <option  value={el.id} key={el.descripcion}>
                    {el.descripcion}
                  </option>
                ))}
             </select>
              </div>  
              <div>
                <label>cantidadidad:</label>
                <div>{input.cantidad}</div>
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
              <div>
                <input type="submit" value="Agregar"/>
              </div>
            </form>
            <div>
                <button onClick={(e) => handleFinishOrder(e)}>Finalizar Pedido</button>
              </div>
            </div>
           
        </div>
        </div>
    )

  }