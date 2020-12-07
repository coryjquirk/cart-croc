import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Checkout from "../components/Checkout";

const CheckoutPage = () => {
  return (
    <Container fluid>
      <h1>Checkout</h1>
      <br />
      <br />
      <Checkout/>
    </Container>
  );
};

export default CheckoutPage;
