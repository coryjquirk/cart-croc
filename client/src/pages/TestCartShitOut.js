import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Link } from 'react-router-dom';
import API from "../utils/API";

function Cart() {
    const [cartList, setCart] = useState([]);

    useEffect(() => {
        const getCart = async () => {
            let cartItems = await API.getAllCartItems()
            setCart(cartItems)
        }
        getCart();
    }, [])

    const deleteCartItem = itemId => {
        return event => {
            event.preventDefault();
            API.deleteCartItem(itemId);
        }
    };

    const handleQuantityChangeAndThenUpdateSellQuantity = itemId => {
        return event => {
            event.preventDefault();
            const sellQuantity = event.target.value;
            let newSellQuantity = {
                sellQuantity: sellQuantity
            }
            console.log("sell quantity is ", sellQuantity)
            API.updateCartItemSellQuantity(newSellQuantity, itemId)

        }
    };

    const submitOrder = () => {
        return async (event) => {
            event.preventDefault();
            let cartItems = await API.getAllCartItems()
            API.saveOrderHistory(cartItems);

            cartItems.forEach(cartItem => {
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
        <Container fluid>
            <div className="container">
                <div id="tableWrapper" className="row">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr id="tableHeader" className="bg-warning">
                                <th scope="col">
                                    Item name
                    </th>
                                <th scope="col">
                                    Price of the thing
                    </th>
                                <th scope="col">
                                    How many IS YOU want bruh
                    </th>
                                <th scope="col">
                                    description
                    </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartList?.map((result) => {
                                return (
                                    <tr key={result._id}>
                                        <td>
                                            {result.itemName}
                                        </td>
                                        <td>
                                            {result.price}
                                        </td>
                                        <td>
                                            <form>
                                                <input onChange={handleQuantityChangeAndThenUpdateSellQuantity(result._id)} type="number" placeholder={result.sellQuantity} id="quantity" name="quantity" min={1} max={5} />
                                            </form>
                                        </td>
                                        <td>
                                            {result.description}
                                        </td>
                                        <td>
                                            <button onClick={deleteCartItem(result._id)} >Del-tete-this</button>
                                        </td>
                                        <td>
                                            <button onClick={submitOrder(result)} >GIMME MY SHIT</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Container>
    );
};

export default Cart;
