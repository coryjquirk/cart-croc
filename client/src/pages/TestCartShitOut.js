import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Link } from 'react-router-dom';
import API from "../utils/API";

function Cart() {
    const [cartList, setCart] = useState([]);
    const [newCartSellQuantity, setCartNewSellQuantity] = useState();


    useEffect(() => {
        const getCart = async () => {
            let cartItems = await API.getAllCartItems()
            console.log("PLEASE GOD STOP ME", cartItems)
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


    // {this.props.characters.map((character)=>{
    //     return(<li key={character.id}>{character.name}
    //         <div
    //         onClick={() => this.props.addCharacterById(character.id)}

    const submitOrder = () => {
        return async (event) => {
            event.preventDefault();
            let cartItems = await API.getAllCartItems()
            console.log("CART ITEMS IS THIS SHIT", cartItems)
            API.saveOrderHistory(cartItems);

            cartItems.forEach(cartItem => {
                console.log(cartItem.itemName),
                API.getItemByName(cartItem.itemName)
            });
            //PSEUDO CODE.
            // For each item in cart items
            // newItemToEdit = getitembyname(cartitem.name)
            // updateInventoryItem(newItemToEdit)
        }
    };

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
