import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center my-5">
            <Carousel className="custom-carousel m-0">
              <Carousel.Item>
                <img
                  className="carosel-img d-block w-100"
                  src="../../public/cane1.jpg"
                  alt="First slide"
                  style={{ aspectRatio: "4/3" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../../public/cane3.webp"
                  alt="Second slide"
                  style={{ height: "400px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../../public/cane2.webp"
                  alt="Third slide"
                  style={{ height: "400px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../../public/cane4.png"
                  alt="Fourth slide"
                  style={{ height: "400px" }}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center mb-3">
            <Card className="p-0" style={{ width: "100%" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Chi siamo?!</Card.Title>
                <Card.Text>
                  Siamo PET-tiniamoli, un rifugio per gli amici a quattro zampe
                  che amano vivere la vita al massimo. Giovani e appassionati,
                  ci impegniamo ogni giorno per offrire ai nostri pelosi clienti
                  un trattamento speciale che li faccia sentire come a casa. Con
                  una profonda passione per i cani e una dedizione senza pari,
                  il nostro obiettivo è farli sentire amati e coccolati in ogni
                  momento. È per questo che offriamo un servizio di toelettatura
                  impeccabile, perché crediamo che ogni cucciolo meriti di
                  essere trattato con amore e cura. Siamo qui per far brillare
                  il tuo fedele amico e farlo sentire al suo meglio, perché
                  quando si tratta di amore per i cani, siamo i migliori
                  nell&apos;arte della PET-tiniamoli.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
