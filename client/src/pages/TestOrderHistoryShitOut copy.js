import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Link } from 'react-router-dom';
import API from "../utils/API";

function Cart() {
    // const [cartList, setCart] = useState([]);
    const [orderHistory, setOrderHistory] = useState();

    useEffect(() => {
        // Once we have username available, pass in to getOrderHistoy
        // So we can access just your users order history.
        // also change the api to "getUserOrderHistory" or something
        const fetchOrderHistory = async () => {
            let orderHistory = await API.getAllOrderHistory()
                .then(
                    console.log(orderHistory),
                    setOrderHistory(orderHistory)
                )
        }
        fetchOrderHistory();
    }, [])


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
                            {orderHistory?.map((result) => {
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
