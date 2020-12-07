import React from "react";
import Modal from 'react-modal';
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";
import CartItem from '../CartItem';
import Texture from '../Images/45-degree-fabric-light.png';

const checkoutStyle = {
    backgroundImage: `url(${Texture})`
};

function ModalCart() {
  const [store] = useStoreContext();
  
  return (<div id="modalCart" style={checkoutStyle}>
  <CartItem/>
  <hr/>
  <p class="totalInfo">Subtotal: </p>
  <p class="totalInfo">Sales tax: </p>
  <p class="totalInfo">Total: </p> 
<a href="/checkout"><button
className="btn btn-primary"
>Check out</button></a>
</div>
    );
}

export default ModalCart;