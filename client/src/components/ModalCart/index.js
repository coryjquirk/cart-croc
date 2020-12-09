import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import "./style.css";
import CartItem from '../CartItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-modal';
Modal.setAppElement("#root");

function ModalCart() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="cart modal"
    >
      <div id="modalCart">
        <button id="closeCart" className="btn btn-danger" onClick={closeModal}>
          <FontAwesomeIcon icon={faWindowClose} id="close window" />
        </button>
        <CartItem />
        <hr />
        <p class="totalInfo">Subtotal: </p>
        <p class="totalInfo">Sales tax: </p>
        <p class="totalInfo">Total: </p>
        <a href="/checkout">
          
          <button className="btn btn-primary">Check out</button>
        </a>
      </div>
    </Modal>
  );
}

export default ModalCart;