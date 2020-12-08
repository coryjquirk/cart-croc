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
      <br />
      <a href="/dashboard">Logout</a>

      <img id="construction" src="https://friendlystock.com/wp-content/uploads/2019/01/5-sloth-under-construction-cartoon-clipart.jpg" alt="under construction"></img>

    </Container>
  );
};

export default Home;
