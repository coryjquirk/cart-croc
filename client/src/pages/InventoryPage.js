import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Product from "../components/Product";

const InventoryPage = () => {
  return (
    <Container fluid>
       
      <br />
      <br />
      <div id="inventory">
      <input type="text"
            placeholder="product search" 
            id="searchBox"></input>   
        <Product></Product>
      </div>
    </Container>
  );
};

export default InventoryPage;
