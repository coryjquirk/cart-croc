import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Inventory from "../components/Inventory"
import Product from "../components/Product"

const v2InventoryPage = () => {
    return (
      <Container fluid>
        <h1>Inventory</h1>
        <br />
        <a href="/home">Home</a>
        <div>
        <Product></Product>
        </div>
      </Container>
    );
  };
  
  export default v2InventoryPage;