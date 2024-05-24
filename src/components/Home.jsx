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
                  src="../../public/cane5.jpg"
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
                  src="../../public/cane6.jpg"
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
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../../public/cane7.jpg"
                  alt="Fift slide"
                  style={{ height: "400px" }}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center mb-3">
            <Card className="p-0" style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="../../public/ET-tiniamoli.png"
                className="card-img-item"
              />
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
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center mb-3">
            <Card className="p-0" style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>Dove trovarci</Card.Title>
                <Card.Text>
                  Trovaci al nostro rifugio PET-tiniamoli per un&apos;esperienza
                  unica!
                </Card.Text>
                <div style={{ height: "300px", width: "100%" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.0690431949725!2d12.492230315719245!3d41.890210979221056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61a130f8b791%3A0x15e3e1a1e9a4e77a!2sColosseo!5e0!3m2!1sit!2sit!4v1620150377123!5m2!1sit!2sit"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps"
                  ></iframe>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} className="text-center mb-3">
            <Card className="p-0 h-100" style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>Orari</Card.Title>
                <Card.Text className="pt-3">
                  <p>
                    Lunedì: <span>9:00-19:00</span>
                  </p>
                  <p>
                    Martedì: <span>9:00-19:00</span>
                  </p>
                  <p>
                    Mercoledì: <span>9:00-19:00</span>
                  </p>
                  <p>
                    Giovedì: <span>9:00-19:00</span>
                  </p>
                  <p>
                    Venerdì: <span>9:00-19:00</span>
                  </p>
                  <p>
                    Sabato: <span>9:00-19:00</span>
                  </p>
                  <p>
                    Domenica: <span>9:00-19:00</span>
                  </p>
                  <p>Festivi esclusi</p>
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
