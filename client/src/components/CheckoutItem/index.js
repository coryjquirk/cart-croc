import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";
import Tester from '../Product/product1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function CheckoutItem() {
  const [store] = useStoreContext();

  return (<div id="checkoutItem">
            <img src={Tester} alt="product preview" 
            id="productPreview"></img>
            Stapler | 
            $6.75 | 
            Qty: <input type="number" id="checkoutQty" placeholder="8"></input><FontAwesomeIcon icon={faTrashAlt} id="trash icon"/>
      </div>
)}

export default CheckoutItem;