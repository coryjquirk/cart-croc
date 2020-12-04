import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Checkout from "../components/Checkout";

const CompleteSale = () => {
  return (
    <Container fluid>
      <h1>Checkout</h1>
      <br />
      <a href="/printreceipt">Complete Transaction</a>
      <Checkout/>
    </Container>
  );
};

export default CompleteSale;
