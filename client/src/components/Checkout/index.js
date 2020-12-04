import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";
import Texture from '../Images/45-degree-fabric-light.png';
import CheckoutItem from '../CheckoutItem';

const checkoutStyle = {
  backgroundImage: `url(${Texture})`
};

function Checkout() {
  const [store] = useStoreContext();

  return (<div id="checkout" style={checkoutStyle}>
          <CheckoutItem/>
          <CheckoutItem/>
          <CheckoutItem/>
          <CheckoutItem/>
          <CheckoutItem/>
          <CheckoutItem/>
          <CheckoutItem/>
          <hr/>
          <p class="totalInfo">Subtotal: </p>
          <p class="totalInfo">Sales tax: </p>
          <p class="totalInfo">Total: </p> 
      <button
        className="btn btn-primary"
      >Submit order</button>
    </div>
    );
}

export default Checkout;