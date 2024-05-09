import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const services = [
  "Lavaggio",
  "Tosatura",
  "Taglio + Lavaggio",
  "Taglio Unghie",
  "Stripping",
];
const dogSizes = ["S - (1-10kg)", "M - (11-20)", "L - (21-30)", "XL - (31>) "];
const coatTypes = ["Corto", "Medio", "Lungo"];

const Prenotazioni = () => {
  const [service, setService] = useState("");
  const [dogSize, setDogSize] = useState("");
  const [coatType, setCoatType] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleDateChange = (date) => {
    setDate(date);

    // Estrai l'ora e i minuti dalla nuova data selezionata
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Formatta l'ora nel formato HH:mm
    const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}`;

    // Imposta l'ora nel relativo stato
    setTime(formattedTime);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = () => {
    // Qui potresti calcolare il costo totale del servizio in base alle selezioni fatte
    // e mostrarlo nel modale
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const minTime = new Date();
  minTime.setHours(9, 0, 0);
  const maxTime = new Date();
  maxTime.setHours(19, 0, 0);

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="my-5">
            <Form className="form-custom p-4">
              <Form.Group className="mb-3" controlId="serviceSelect">
                <Form.Label className="color-form fw-bold">Servizio</Form.Label>
                <Form.Select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="">Seleziona un servizio</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="dogSizeSelect">
                <Form.Label className="color-form fw-bold">
                  Taglia cane
                </Form.Label>
                <Form.Select
                  value={dogSize}
                  onChange={(e) => setDogSize(e.target.value)}
                >
                  <option value="">Seleziona la taglia del cane</option>
                  {dogSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="coatTypeSelect">
                <Form.Label className="color-form fw-bold">
                  Tipo di pelo
                </Form.Label>
                <Form.Select
                  value={coatType}
                  onChange={(e) => setCoatType(e.target.value)}
                >
                  <option value="">Seleziona il tipo di pelo</option>
                  {coatTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="datePicker">
                <Form.Label className="color-form fw-bold">Data</Form.Label>
                <div className="d-flex align-items-center">
                  <DatePicker
                    selected={date}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                    minTime={minTime}
                    maxTime={maxTime}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={60}
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="timeInput">
                <Form.Label className="color-form fw-bold">Ora</Form.Label>
                <Form.Control
                  className="w-25"
                  type="time"
                  value={time}
                  onChange={handleTimeChange}
                  min="09:00"
                  max="19:00"
                />
              </Form.Group>
              <Button
                variant="success"
                className="d-block mx-auto"
                onClick={handleSubmit}
              >
                AVANTI
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Modale con riepilogo della prenotazione e costo totale */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Riepilogo della prenotazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Qui puoi inserire il riepilogo della prenotazione e il costo totale */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Chiudi
          </Button>
          {/* Aggiungi qui eventuali altri pulsanti per modificare o confermare la prenotazione */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Prenotazioni;
