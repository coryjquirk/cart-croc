import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Link } from 'react-router-dom';
import API from "../utils/API";

function shopAdmin() {
    const [inventoryList, setinventoryList] = useState([]);
    const [newItemName, setNewItemName] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newDescription, setnewDescription] = useState("");
    const [newQuantity, setNewQuantity] = useState("");

    useEffect(() => {

        const getInventory = async () => {
            let inventoryItems = await API.getAllItems()
            console.log(inventoryItems)
            setinventoryList(inventoryItems)
        }
        getInventory();
    }, []) 

    // This code looks kinda weird, its nested in the way it is so that we can access
    // the ID passed in to it and still use event.preventdefault, which can only be used on top
    // level functions
    const getAndAddToCart = itemId => {
        return event => {
          event.preventDefault();
           let itemToAdd = API.getItem(itemId)
            itemToAdd.then( return_value => {
                // TODO: when we get actual logged in users, reroute "username" to the loged in user
                let username = "Placeholder Username";
                let defaultSellQuantity= 1;
                return_value = { ...return_value, username , defaultSellQuantity};
                API.saveCartItem(return_value);
            })
        }
      };
    
    function submitThisForm(event) {
        event.preventDefault()

        var itemData = {
            itemName: newItemName,
            price: newPrice,
            description: newDescription,
            quantity: newQuantity
        }
        console.log(itemData)
        API.saveItem(itemData);
    }

    function handleNameChange(event) {
        const name = event.target.value;
        console.log(name);
        setNewItemName(name)
    }

    function handlePriceChange(event) {
        const price = event.target.value;
        setNewPrice(price)
    }

    function handleQuantityChange(event) {
        const quantity = event.target.value;
        setNewQuantity(quantity)
    }

    function handleDescriptionChange(event) {
        const description = event.target.value;
        setnewDescription(description)
    }

    return (
        <Container fluid>
            <div id="shopAdmin">
            <h2>Add items to inventory</h2>
            <form className="login" onSubmit={submitThisForm}>
                <div className="form-group">
                    <input type="text" onChange={handleNameChange} id="adminForm" className="form-control" placeholder="Item Name" />
                </div>
                <div className="form-group">
                    <input type="text" onChange={handlePriceChange} id="adminForm" className="form-control" placeholder="Item Price" />
                </div>
                <div className="form-group">
                    <input type="text" onChange={handleQuantityChange} id="adminForm" className="form-control" placeholder="# of items" />
                </div>
                <div className="form-group">
                    <input type="text" onChange={handleDescriptionChange} id="adminForm" className="form-control" placeholder="Description" />
                </div>
                <button type="submit" className="btn btn-default  green darken-3">Add item to shop inventory</button>
            </form>
            <div className="container">
                <div id="tableWrapper" className="row">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr id="tableHeader">
                                <th scope="col">
                                    DB Item Names
                    </th>
                    <th scope="col">
                    <Link to={`/shop`}>View Shop</Link>
                    </th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventoryList?.map((result) => {
                                return (
                                    <tr key={result._id}>
                                        <td>
                                            {result.itemName}
                                        </td>
                                        <td>
                                            <Link to={`/editItem/${result._id}`}>edit</Link>
                                        </td>
                                        <td>
                                            <button class="addToCart"onClick={getAndAddToCart(result._id)}>AddToCart</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </Container>
    );
};

export default shopAdmin;
