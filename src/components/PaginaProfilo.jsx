import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ListGroup, Modal } from "react-bootstrap";

const PaginaProfilo = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reservationData, setReservationData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [redirectToProfile, setRedirectToProfile] = useState(false);

  const handleShowBooking = () => {
    setShowBooking(true);
  };

  const handleReservationClick = (reservationData) => {
    setReservationData([reservationData]);
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:3001/users/me", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Errore durante il recupero del profilo");
        }

        const userData = await response.json();
        setUserData(userData);
        console.log("Dati utente:", userData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    const fetchReservationData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:3001/reservations/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Errore durante il recupero delle prenotazioni");
        }

        const reservationData = await response.json();
        setReservationData(reservationData.content);

        console.log("Dati prenotazioni:", reservationData);
      } catch (error) {
        console.error("Errore:", error);
      }
    };

    fetchUserProfile();
    fetchReservationData();
  }, []);

  const cancelReservation = async (reservationId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:3001/reservations/me/reservations/${reservationId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Errore durante la cancellazione della prenotazione");
      }
      setShowModal(true);
      // Se la cancellazione ha successo, ricarica le prenotazioni o aggiorna lo stato in base alle tue esigenze.
      console.log("Prenotazione cancellata con successo");
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  const getHairType = (hairType) => {
    switch (hairType) {
      case "SHORT":
        return "CORTO";
      case "MEDIUM":
        return "MEDIO";
      case "LONG":
        return "LUNGO";
      default:
        return hairType;
    }
  };

  if (isLoading) {
    return <div>Caricamento...</div>;
  }

  if (error) {
    return <div>Si è verificato un errore: {error}</div>;
  }

  return (
    <>
      <Container>
        <Row className="justify-content-center row-cols-2 text-center py-5">
          <Col>
            <Card style={{ height: "100%" }}>
              <Card.Body className="d-flex flex-column">
                <Card.Title>
                  <h4 className="pt-3">Profilo</h4>
                </Card.Title>
                <div className="flex-grow-1 align-content-center ">
                  <Card.Text className="text-center">
                    <h6>Nome:</h6>
                    <p>{userData.firstName}</p>
                    <h6>Cognome:</h6>
                    <p>{userData.lastName}</p>
                    <h6>Email:</h6>
                    <p>{userData.email}</p>
                    <h6>Cellulare:</h6>
                    <p>{userData.phone}</p>
                  </Card.Text>
                </div>
                <Button
                  variant="success"
                  className="align-self-center mt-3"
                  onClick={handleShowBooking}
                >
                  Mostra prenotazione
                </Button>
              </Card.Body>
            </Card>
          </Col>
          {showBooking && (
            <>
              <Col>
                <Card style={{ height: "100%" }}>
                  <Card.Body>
                    <Card.Title className="py-2">
                      <h4> Prenotazione</h4>
                    </Card.Title>
                    <Card.Text>
                      {reservationData.length === 1 ? (
                        <>
                          <h6>Servizio:</h6>
                          <p>{reservationData[0].serviceType.name}</p>
                          <h6>Taglia cane:</h6>
                          <p>{reservationData[0].petInfo.size}</p>
                          <h6>Tipo di pelo:</h6>
                          <p>
                            {getHairType(reservationData[0].petInfo.hairType)}
                          </p>
                          <h6>Data:</h6>
                          <p>{reservationData[0].date}</p>
                          <h6>Ora:</h6>
                          <p>{reservationData[0].time}</p>
                          <h6>Costo:</h6>
                          <p>{reservationData[0].cost} €</p>
                          <Button
                            variant="danger"
                            className="me-3"
                            onClick={() =>
                              cancelReservation(reservationData[0].id)
                            }
                          >
                            Cancella prenotazione
                          </Button>
                        </>
                      ) : (
                        <div>
                          <ListGroup>
                            {reservationData.map((reservationData) => (
                              <ListGroup.Item
                                key={reservationData.id}
                                action
                                onClick={() =>
                                  handleReservationClick(reservationData)
                                }
                                className="list-item"
                              >
                                <strong>Servizio:</strong>{" "}
                                {reservationData.serviceType.name} -{" "}
                                <strong>Data:</strong> {reservationData.date}
                              </ListGroup.Item>
                            ))}
                          </ListGroup>
                        </div>
                      )}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </>
          )}
        </Row>
      </Container>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Prenotazione cancellata</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          La prenotazione è stata cancellata con successo.
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShowModal(false);
              setRedirectToProfile(true);
            }}
          >
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default PaginaProfilo;
