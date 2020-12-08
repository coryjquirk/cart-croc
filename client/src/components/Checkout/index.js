import React, { useState, useEffect } from "react";
import "./style.css";
import Texture from "../Images/45-degree-fabric-light.png";
import CartItem from "../CartItem";
import API from "../../utils/API";
import Modal from 'react-modal';
const user = JSON.parse(localStorage.getItem('username'));
// https://www.npmjs.com/package/react-modal
const checkoutStyle = {
  backgroundImage: `url(${Texture})`,
};
const clearModalStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}
const clearBtnStyle = {
    marginRight: '5px',
    marginLeft: '5px'
}
export default function Checkout() {
  const [cartList, setCart] = useState([]);
  const [currentCartId, setCurrentCartId] = useState([]);
  const [modalIsOpen,setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal(){
    setIsOpen(false);
  }

  useEffect(() => {
    const getCart = async () => {
      let cartItems = await API.getAllCartItems();
      // We have access to user here.

      var userCart = cartItems.filter(function(cartItem){
        return cartItem.username == user;
    });

      console.log(userCart);
      setCart(userCart);
    };
    getCart();
  }, []);
    
const DeleteAll = () => {
  return async (event) => {
      event.preventDefault();
      let itemsArray = await API.getAllCartItems()
      itemsArray.forEach(item => {
          API.deleteCartItem(item._id)
      });
    location.reload();
  }
};

const submitOrder = () => {
  return async (event) => {
      event.preventDefault();

      API.saveOrderHistory(userCart);

      userCart.forEach(cartItem => {
          API.getItemByName(cartItem.itemName)
          .then(tempInventoryItem => {
              let id = tempInventoryItem._id
              let newInventoryQuantity = (tempInventoryItem.quantity - cartItem.sellQuantity) 
              let newInventoryObj = {quantity : newInventoryQuantity}
              API.updateItem(newInventoryObj, id);
           });
      });
  }
};

  return (
    <div id="checkout" style={checkoutStyle}>
      <CartItem />
          <a
            onClick={openModal}
            className="totalInfo text-muted"
          >Clear cart</a>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="open"
          style={clearModalStyle}
        >
          <h2>Clear cart?</h2>
          <button className="btn btn-primary" style={clearBtnStyle} onClick={DeleteAll()}>Confirm</button>
          <button className="btn btn-secondary" style={clearBtnStyle} onClick={closeModal}>Cancel</button>
        </Modal>
      <hr />
      <p className="totalInfo">Subtotal: </p>
      <p className="totalInfo">Sales tax: </p>
      <p className="totalInfo">Total: </p>
      <button onClick={submitOrder()} className="btn btn-primary totalInfo">Submit order</button>
    </div>
  );
}
