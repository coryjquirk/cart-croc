import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

function Testing() {
    const [newItemName, setNewItemName] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newDescription, setnewDescription] = useState("");
    const [newQuantity, setNewQuantity] = useState("");
    const [item, setItem] = useState();
    const match = useRouteMatch();

    // useEffect(() => {
    //     const getInventory = async () => {
    //         let inventoryItems = await API.getAllItems()
    //         console.log(inventoryItems)
    //         setinventoryList(inventoryItems)
    //     }
    //     getInventory();
    // }, [])

    useEffect(() => {
        const fetchItem = async () => {
            console.log("About to attempt");
            let editItem = await API.getItem(match.params.id)
            editItem = [ editItem ]
            setItem(editItem)
        }
        fetchItem()
    }, []);

    function submitThisForm(event) {
        event.preventDefault();
        var itemData = {
            itemName: newItemName,
            price: newPrice,
            description: newDescription,
            quantity: newQuantity
        }
        console.log(itemData)
         API.updateItem(itemData, match.params.id)
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
            <form className="login" onSubmit={submitThisForm}>
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
                <button type="submit" className="btn btn-default  green darken-3">EDIT THAT BAD MUTHA</button>
            </form>

            {/* <button onClick={API.getAllUsers}>Get Users</button> */}
            <div className="container">
                <div id="tableWrapper" className="row">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr id="tableHeader" className="bg-warning">
                                <th scope="col">
                                    The Thing You IS TRYNNA EDIT
                    </th>
                            </tr>
                        </thead>
                        <tbody>
                            {item?.map((result) => {
                                return (
                                    <tr key={result._id}>
                                        <td>
                                            {result.itemName}
                                        </td>
                                        <td>
                                            {result.price}
                                        </td>
                                        {/* <td>
                                            {result.description}
                                        </td> */}
                                        <td>
                                            {result.quantity}
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

export default Testing;
