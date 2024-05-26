import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section7() {
  return (
    <section className="contact-section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>We Guarantee</h4>
            <h2>30 Minutes Delivery</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis itaque laboriosam odit? Labore, consequatur cupiditate?
            </p>
            <Link to="/" className="btn btn-red px-4 py-2 rounded-0">
              Call : 9267943310
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;
