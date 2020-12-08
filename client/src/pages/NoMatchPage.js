import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

const NoMatch = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>ope! 404 page not found <span role="img" aria-label="Thinking Face Emoji">
              🤔
              </span></h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default NoMatch;
