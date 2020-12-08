import React from "react";
import { Col, Row, Container } from "../components/Grid";
import HomeLaunchers from "../components/HomeLaunchers";

const Home = () => {
  return (
    <Container fluid>
      <h1>Home</h1>
      <HomeLaunchers/>
    </Container>
  );
};

export default Home;
