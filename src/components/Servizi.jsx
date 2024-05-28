import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Servizi = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Card className="w-75 p-0 mt-5">
            <div className="card-color d-flex justify-content-between">
              <div style={{ width: "260%" }}>
                <Card.Title className="card-title pt-2 ps-2">
                  <h3>Lavaggio</h3>
                </Card.Title>
                <Card.Text className="pt-2 ps-2 pe-1">
                  Offriamo un servizio di lavaggio completo per il tuo amico
                  peloso. Utilizziamo prodotti delicati e trattamenti rilassanti
                  per lasciare il tuo cane pulito, profumato e felice. Con la
                  nostra attenzione ai dettagli e la cura amorevole, garantiamo
                  una esperienza di toelettatura piacevole e rigenerante
                </Card.Text>
              </div>
              <div className="card-img-container">
                <Card.Img src="/lavaggio.jpg" className="card-img" />
              </div>
            </div>
          </Card>
          <Card className="w-75 p-0 mt-3">
            <div className="card-color d-flex justify-content-between">
              <div style={{ width: "260%" }}>
                <Card.Title className="pt-2 ps-2">
                  <h3>Tosatura</h3>
                </Card.Title>
                <Card.Text className="pt-2 ps-2 pe-1">
                  La nostra tosatura professionale assicura al tuo cane un
                  taglio preciso e confortevole. Utilizziamo tecniche sicure e
                  prodotti di alta qualità per mantenere il pelo del tuo amico
                  sano e ben curato. Con la nostra esperienza e attenzione,
                  garantiamo un risultato impeccabile e un aspetto accattivante.
                </Card.Text>
              </div>
              <div className="card-img-container">
                <Card.Img
                  src="/tosatura.webp"
                  alt="tosatura"
                  className="card-img"
                />
              </div>
            </div>
          </Card>
          <Card className="w-75 p-0 mt-3">
            <div className="card-color d-flex justify-content-between">
              <div style={{ width: "260%" }}>
                <Card.Title className="pt-2 ps-2">
                  <h3>Lavaggio&Tosatura</h3>
                </Card.Title>
                <Card.Text className="pt-2 ps-2 pe-1">
                  Il nostro servizio combinato di lavaggio e tosatura offre al
                  tuo cane il massimo trattamento di bellezza. Utilizziamo
                  prodotti delicati per pulire il pelo e poi applichiamo una
                  tosatura professionale per un risultato sorprendente.
                  Garantiamo un aspetto fresco e un pelo sano per il tuo amico a
                  quattro zampe.
                </Card.Text>
              </div>
              <div className="card-img-container">
                <Card.Img src="/cane1.jpg" className="card-img" />
              </div>
            </div>
          </Card>
          <Card className="w-75 p-0 mt-3">
            <div className="card-color d-flex justify-content-between">
              <div style={{ width: "260%" }}>
                <Card.Title className="pt-2 ps-2">
                  <h3>Stripping</h3>
                </Card.Title>
                <Card.Text className="pt-2 ps-2 pe-1">
                  Per il nostro servizio di stripping, utilizziamo tecniche
                  specializzate per rimuovere il pelo morto e mantenere il manto
                  sano e luminoso. Grazie alla nostra competenza e cura,
                  assicuriamo un risultato ottimale e un aspetto splendente per
                  il tuo amico peloso.
                </Card.Text>
              </div>
              <div className="card-img-container">
                <Card.Img
                  src="/stripping.webp"
                  alt="stripping"
                  className="card-img"
                />
              </div>
            </div>
          </Card>
          <Card className="w-75 p-0 mt-3 mb-5">
            <div className="card-color d-flex justify-content-between">
              <div style={{ width: "260%" }}>
                <Card.Title className="pt-2 ps-2">
                  <h3>Taglio unghie</h3>
                </Card.Title>
                <Card.Text className="pt-2 ps-2 pe-1">
                  Il nostro servizio di taglio unghie offre una soluzione sicura
                  e confortevole per mantenere le zampe del tuo cane in ottima
                  forma. Utilizziamo attrezzature professionali e tecniche
                  delicate per garantire un taglio preciso senza stress. Con la
                  nostra attenzione e pazienza, assicuriamo unghie curate e un
                  cane felice.
                </Card.Text>
              </div>
              <div className="card-img-container">
                <Card.Img
                  src="/taglio unghie.jpg"
                  alt="taglio unghie"
                  className="card-img"
                />
              </div>
            </div>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Servizi;
