import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Signup from "../components/SignUp";

const Index = () => {
  return (
    <div className="fader">
    <Container fluid>
      <Signup />
      <br />
      <a href="/home">Login bypass</a>
    </Container>
    </div>

  );
};

export default Index;
