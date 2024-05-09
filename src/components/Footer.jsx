import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

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
        <Row className="footer-cont justify-content-center text-center py-4">
          <div className="">
            <span className="text-muted mb-2">
              © {annoCorrente} PET-tiniamoli
            </span>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
