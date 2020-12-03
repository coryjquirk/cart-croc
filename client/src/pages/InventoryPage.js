import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Inventory from "../components/Inventory"

const InventoryPage = () => {
  return (
    <Container fluid>
      Inventory Page
      <br />
      <a href="/home">Home</a>

      <Inventory/>
    </Container>
  );
};

export default InventoryPage;
