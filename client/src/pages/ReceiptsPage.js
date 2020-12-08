import React from "react";
import { Col, Row, Container } from "../components/Grid";

const Receipts = () => {
  return (
    <Container fluid>
      <h1 class="pageHeaders">Order history</h1>
      <br />
      <a href="/home">Home</a>
      <p>receipts here</p>
      <img id="construction" src="https://friendlystock.com/wp-content/uploads/2019/01/5-sloth-under-construction-cartoon-clipart.jpg" alt="under construction"></img>
    </Container>
  );
};

export default Receipts;
