import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Inventory from "../components/Inventory"
import Product from "../components/Product"
import ProductV2 from "../components/v2Product"

const v2InventoryPage = () => {
    return (
      <Container fluid>
        <h1>v2Inventory</h1>
        <br />
        <a href="/home">Home</a>
        <div>
        <ProductV2></ProductV2>
        </div>
      </Container>
    );
  };
  
  export default v2InventoryPage;