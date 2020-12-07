import React, { useState, useEffect } from "react";
import "./style.css";
import Tester from "../Product/product1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import API from "../../utils/API";
import {Link} from 'react-router-dom';

export default function CartItem() {
  const [cartList, setCart] = useState([]);
  const [sellQuantity, setCartQuantity] = useState();
  
  useEffect(() => {
      const getCart = async () => {
          let cartItems = await API.getAllCartItems()
          console.log(cartItems)
          setCart(cartItems)
      }
      getCart();
  }, [])

  // This code looks kinda weird, its nested in the way it is so that we can access
  // the ID passed in to it and still use event.preventdefault, which can only be used on top
  // level functions

  const deleteCartItem = itemId => {
      return event => {
          event.preventDefault();
          API.deleteCartItem(itemId);
          location.reload();
      }
  };

  const updateCartItemSellQuantity = itemId => {
      return event => {
          event.preventDefault();
          let newSellQuantity = {
              sellQuantity: sellQuantity
          }
          API.updateCartItemSellQuantity(newSellQuantity, itemId);
      }
  };

  function handleQuantityChange(event) {
      const sellQuantity = event.target.value;
      console.log("Quantity is now " + sellQuantity)
      setCartQuantity(sellQuantity)
  }
  return (
    <div id="cartItem">
      


      {cartList?.map((result) => {
                                return (
                                  <div key={result._id}>
                                    <img
                                      src={Tester}
                                      alt="product preview"
                                      id="productPreview"
                                    ></img>
                                    {result.itemName} | ${result.price} | Qty:
                                    {result.sellQuantity}
                                    <input
                                      type="number"
                                      id="checkoutQty"
                                      placeholder="8"
                                    ></input>
                                    <FontAwesomeIcon
                                      onClick={deleteCartItem(result._id)}
                                      icon={faTrashAlt}
                                      id="trashIcon"
                                    />
                                  </div>
                                );
                            })}

    </div>
  );
}