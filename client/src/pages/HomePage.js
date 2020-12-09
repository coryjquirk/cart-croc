import React from "react";
import { Col, Row, Container } from "../components/Grid";
import HomeLaunchers from "../components/HomeLaunchers";

const Home = () => {
  return (
    <div className="fader">

    <Container fluid>
      <HomeLaunchers />
    </Container>
    </div>
  );
};

export default Home;
