import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Promotion from "../../assets/promotion/pro.png";

function Section3() {
  return (
    <>
      <section className="promotion-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={Promotion} className="img-fluid" alt="promotion-img" />
            </Col>

            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                Semper lacus cursus porta primis ligula risus tempus and
                sagittis ipsum mauris lectus laoreet purus ipsum tempor enim
                ipsum porta justo integer ultrice aligula lectus aenean magna
                and pulvinar purus at pretium gravida
              </p>
              <ul>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    quasi dolor nemo molestiae consequuntur
                  </p>
                </li>
                <li>
                  <p>Quaerat sodales sapien euismod purus blandit</p>
                </li>

                <li>
                  <p>
                    Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
                    sodales sapien undo pretium a purus mauris
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-paralex-scroll"></section>
    </>
  );
}

export default Section3;
