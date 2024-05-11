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
const dogSizes = [
  "S - (1-10kg)",
  "M - (11-20kg)",
  "L - (21-30kg)",
  "XL - (31>kg) ",
];
const coatTypes = ["Corto", "Medio", "Lungo"];

const Prenotazioni = () => {
  const [service, setService] = useState("");
  const [dogSize, setDogSize] = useState("");
  const [coatType, setCoatType] = useState("");
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [calendarTime, setCalendarTime] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [serviceType, setServiceType] = useState("");
  const [petInfo, setPetInfo] = useState("");
  const [petinfoId, setPetinfoId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [finalCost, setFinalCost] = useState("");
  // const [reservationData, setReservationData] = useState(null);

  const handleDateChange = (date) => {
    setCalendarDate(date);

    // Estrai l'ora e i minuti dalla nuova data selezionata
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Formatta l'ora nel formato HH:mm
    const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}`;

    // Imposta l'ora nel relativo stato
    setCalendarTime(formattedTime);
  };

  const handleTimeChange = (e) => {
    setCalendarTime(e.target.value);
  };

  // Funzione per recuperare le informazioni dell'animale tramite la chiamata API
  const fetchPetInfo = async (petId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:3001/pets/${petId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Assicurati di includere il token nell'header
        },
      });
      if (!response.ok) {
        throw new Error(
          "Errore durante il recupero delle informazioni sull'animale"
        );
      }
      const petData = await response.json();
      setPetInfo(petData); // Memorizza le informazioni dell'animale nello stato
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  //////////////////////////////////////////////MODALE ACCESSO//////////////////////////////////////////////////////

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Recupera il token dal localStorage
      const token = localStorage.getItem("token");

      let petData = {
        hairType: coatType,
        size: dogSize,
      };

      let pelo = petData.hairType;
      if (pelo === "Corto") {
        pelo = "SHORT";
      } else if (pelo === "Medio") {
        pelo = "MEDIUM";
      } else if (pelo === "Lungo") {
        pelo = "LONG";
      }

      let taglia = petData.size;
      if (taglia === "S - (1-10kg)") {
        taglia = "S";
      } else if (taglia === "M - (11-20kg)") {
        taglia = "M";
      } else if (taglia === "L - (21-30kg)") {
        taglia = "L";
      } else if (taglia === "XL - (31>kg) ") {
        taglia = "XL";
      }

      petData = {
        hairType: pelo,
        size: taglia,
      };

      const petRequest = await fetch("http://localhost:3001/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Includi il token nell'header Authorization
        },
        body: JSON.stringify(petData),
      });

      if (!petRequest.ok) {
        throw new Error(
          "Errore durante il salvataggio delle informazioni sull'animale"
        );
      }

      // Estrai l'ID dell'animale appena creato dalla risposta
      const petInfoId = (await petRequest.json()).id;
      await fetchPetInfo(petInfoId);

      const requestBody = {
        date: calendarDate.toISOString().split("T")[0], // Converti la data in formato ISO e rimuovi l'orario
        time: calendarTime,
        serviceType: service,
        petInfoId: petInfoId,
      };

      const response = await fetch(
        "http://localhost:3001/reservations/me/show",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Includi il token nell'header Authorization
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error("Errore durante il recupero della prenotazione");
      }

      let data = await response.json();
      setServiceType(data.serviceType);
      setPetinfoId(data.petInfo.id);
      setDate(data.date);
      setTime(data.time);
      setFinalCost(data.finalCost);
      console.log("Prenotazione:", data);
      setShowModal(true);
    } catch (error) {
      console.error("Errore:", error);
    }
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
        <Row className="justify-content-center align-items-center ">
          <Col xs={12} md={8} lg={6} xl={6} className="my-5">
            <h1 className="text-center my-5">PRENOTATI QUi</h1>
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
                    selected={calendarDate}
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
                  value={calendarTime}
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
          <p>Servizio: {service}</p>
          <p>
            Taglia:{" "}
            {petInfo.size === "S"
              ? "Piccola (1-10kg)"
              : petInfo.size === "M"
              ? "Media (11-20kg)"
              : petInfo.size === "L"
              ? "Grande (21-30kg)"
              : petInfo.size === "XL"
              ? "Extra Large (31>kg)"
              : petInfo.size}
          </p>
          <p>
            Tipo di pelo:{" "}
            {petInfo.hairType === "LONG"
              ? "Lungo"
              : petInfo.hairType === "SHORT"
              ? "Corto"
              : petInfo.hairType === "MEDIUM"
              ? "Medio"
              : petInfo.hairType}
          </p>
          <p>Data: {date}</p>
          <p>Ora: {time}</p>
          <p>Costo totale: {finalCost}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Chiudi
          </Button>
          <Button variant="success">Conferma</Button>
          {/* Aggiungi qui eventuali altri pulsanti per modificare o confermare la prenotazione */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Prenotazioni;
