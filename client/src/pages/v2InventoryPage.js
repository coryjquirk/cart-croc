import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Inventory from "../components/Inventory"
import Product from "../components/Product"



const v2InventoryPage = () => {
    return (
      <Container fluid>
        <h1>v2Inventory</h1>
        <br />
        <a href="/home">Home</a>
        <div>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        </div>
        <Inventory/>
      </Container>
    );
  };
  
  export default v2InventoryPage;