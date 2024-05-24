import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const [annoCorrente, setAnnoCorrente] = useState("");

  useEffect(() => {
    const dataCorrente = new Date();
    const anno = dataCorrente.getFullYear();
    setAnnoCorrente(anno);
  }, []);
  return (
    <>
      <Container fluid>
        <Row className="footer-cont justify-content-center text-center pt-3 mt-3">
          <Col xs={12} md={6}>
            <Row>
              <Col className="">
                <i className="bi bi-facebook footer-icon me-2"></i>
                <i className="bi bi-instagram footer-icon me-2 px-2"></i>
                <i className="bi bi-twitter-x footer-icon me-2 px-2"></i>
                <i className="bi bi-youtube footer-icon"></i>
              </Col>
            </Row>
            <Row xs={1} sm={2}>
              <Col>
                <Row>
                  <Col>
                    <p>Contattaci</p>
                    <p>Lavora con noi</p>
                    <p>Cookies</p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <p>Gift Cards</p>
                    <p>Termini d&apos;uso</p>
                    <p>Informationi</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2 mt-2 copyright">
                © {annoCorrente} PET-tiniamoli
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
