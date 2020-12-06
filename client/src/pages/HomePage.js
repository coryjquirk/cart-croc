import React from "react";
import { Col, Row, Container } from "../components/Grid";

const Home = () => {
  return (
    <Container fluid>
      <h1>Home</h1>
      <a href="/checkout">Checkout</a>
      <br />
      <a href="/receipts">Receipts</a>
      <br />
      <a href="/inventory">Inventory</a>
      <br />
    </Container>
  );
};

export default Home;
