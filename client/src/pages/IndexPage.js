import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Signup from "../components/SignUp";
import Logo from '../components/Logo/logo.png';

const Index = () => {
  return (
    <Container fluid>
      <img src={Logo} alt="Logo" />
      <Signup />
      <br />
      <a href="/home">Login bypass</a>
    </Container>
  );
};

export default Index;
