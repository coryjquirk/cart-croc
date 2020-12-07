import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Link } from 'react-router-dom';
import API from "../utils/API";

function Cart() {
    const [cartList, setCart] = useState([]);
    const [bonerpills, setBonerPills] = useState();

    // const [newItemName, setNewItemName] = useState("");
    // const [newPrice, setNewPrice] = useState("");
    // const [newDescription, setnewDescription] = useState("");
    // const [newQuantity, setNewQuantity] = useState("");

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
        }
    };

    const updateCartItemSellQuantity = itemId => {
        return event => {
            event.preventDefault();
            let newSellQuantity = {
                sellQuantity: bonerpills
            }
            API.updateCartItemSellQuantity(newSellQuantity, itemId);
        }
    };

    function handleQuantityChange(event) {
        const sellQuantity = event.target.value;
        console.log("Quantity is now " + sellQuantity)
        setBonerPills(sellQuantity)
    }

    return (
        <Container fluid>
            {/* <form className="login" onSubmit={submitThisForm}>
                <div className="form-group">
                    <input type="text" onChange={handleNameChange} className="form-control" placeholder="Item Name" />
                </div>
                <div className="form-group">
                    <input type="text" onChange={handlePriceChange} className="form-control" placeholder="Item Price" />
                </div>
                <div className="form-group">
                    <input type="text" onChange={handleQuantityChange} className="form-control" placeholder="# of items" />
                </div>
                <div className="form-group">
                    <input type="text" onChange={handleDescriptionChange} className="form-control" placeholder="Description" />
                </div>
                <button type="submit" className="btn btn-default  green darken-3">Submit that bad mutha-shut-yo-mouth</button>
            </form> */}

            {/* <button onClick={API.getAllUsers}>Get Users</button> */}
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
                                                <input onChange={handleQuantityChange} type="number" placeholder={result.sellQuantity} id="quantity" name="quantity" min={1} max={5} />
                                            </form>
                                        </td>
                                        <td>
                                            {result.description}
                                        </td>
                                        <td>
                                            <button onClick={deleteCartItem(result._id)} >Del-tete-this</button>
                                        </td>
                                        <td>
                                            <button onClick={updateCartItemSellQuantity(result._id)} >Update number of things</button>
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
