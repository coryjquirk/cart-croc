import React, { useState, useEffect } from "react";
import "./style.css";
import Texture from "../Images/45-degree-fabric-light.png";
import CartItem from "../CartItem";
import API from "../../utils/API";
import Modal from 'react-modal';

const checkoutStyle = {
  backgroundImage: `url(${Texture})`,
};

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
      setCart(cartItems);
    };
    getCart();
  }, []);
    
const DELETEALL = () => {
  return async (event) => {
      event.preventDefault();
      let itemsArray = await API.getAllCartItems()
      itemsArray.forEach(item => {
          API.deleteCartItem(item._id)
      });
    location.reload();
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
        >
          <h2>Clear cart?</h2>
          <button className="btn btn-danger" onClick={DELETEALL()}>Confirm</button>
          <button className="btn btn-danger" onClick={closeModal}>Cancel</button>
          
        </Modal>
          
      <hr />
      <p className="totalInfo">Subtotal: </p>
      <p className="totalInfo">Sales tax: </p>
      <p className="totalInfo">Total: </p>
      <button className="btn btn-primary">Submit order</button>
    </div>
  );
}
