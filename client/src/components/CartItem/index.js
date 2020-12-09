import React, { useState, useEffect } from "react";
import "./style.css";
import Tester from "../Product/product1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import API from "../../utils/API";
import { Link } from 'react-router-dom';
const user = JSON.parse(localStorage.getItem('username'));
import Modal from 'react-modal';
Modal.setAppElement("#root");

export default function CartItem() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [inventoryList, setinventoryList] = useState([]);
  const [cartList, setCart] = useState([]);
  const [sellQuantity, setCartQuantity] = useState();
  const [checkoutQTY, setCheckoutQTY] = useState();
  function openModal() {
    setIsOpen(true);
  }
  useEffect(() => {
    let inventoryItems = API.getAllItems()

    setinventoryList(inventoryItems)
    const getCart = async () => {
      API.getAllCartItems()
        .then(tempCart => {
          var userCart = tempCart.filter(function (cartItem) {
            return cartItem.username == user;
          });
          setCart(userCart);
        })
    }
    getCart();
  }, [])

  function reloadOMatic(){
    API.getAllCartItems()
        .then(tempCart => {
          var userCart = tempCart.filter(function (cartItem) {
            return cartItem.username == user;
          });
          setCart(userCart);
        })
  }

  // This code looks kinda weird, its nested in the way it is so that we can access
  // the ID passed in to it and still use event.preventdefault, which can only be used on top
  // level functions
  const deleteCartItem = itemId => {
      return event => {
          event.preventDefault();
          API.deleteCartItem(itemId);
          reloadOMatic();
        }
  }
  const updateCartItemSellQuantity = itemId => {
    return event => {
      event.preventDefault();
      let newSellQuantity = {
        sellQuantity: sellQuantity
      }
      API.updateCartItemSellQuantity(newSellQuantity, itemId);
    }
  };

  const handleQuantityChangeAndThenUpdateSellQuantity = itemId => {
    return event => {
        event.preventDefault();
        const sellQuantity = event.target.value;
        console.log(sellQuantity)
        let newSellQuantity = {
            sellQuantity: sellQuantity
        }
        console.log(newSellQuantity)
        API.updateCartItemSellQuantity(newSellQuantity, itemId)
        location.reload();
    }
};


  return (
    <table id="cartItem">

      {cartList?.map((result) => {
        return (

          <tr id="cartRow" key={result._id}>
            <td>
              <img
                src="https://cdn0.iconfinder.com/data/icons/commerce-and-shopping-4/24/shopping-tote-512.png"
                alt="product preview"
                id="productPreview"
              ></img>
            </td>
            <td>{result.itemName} | ${result.price}</td>
            <td class="rColumnCheckout">
              <input
              // TODO: make this do tthe thing
              onChange={handleQuantityChangeAndThenUpdateSellQuantity(result._id)}
                type="number"
                id="checkoutQty"
                max ={result.inventoryQuantity}
                min="0"
                defaultValue={result.sellQuantity}

              ></input>
            </td>
            <td class="rColumnCheckout"
                id="trashIcon">
              <FontAwesomeIcon
                onClick={deleteCartItem(result._id)}
                icon={faTrashAlt}
              />
            </td>
          </tr>
        );
      })}

    </table>
  );
}