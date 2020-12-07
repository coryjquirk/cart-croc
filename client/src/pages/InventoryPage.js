import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Product from "../components/Product"

const InventoryPage = () => {
    return (
      <Container fluid>
        <h1>Inventory</h1>
        <br />
        <br/>
        <div id="inventory">
        <Product></Product>
        </div>
      </Container>
    );
  };
  
  export default InventoryPage;