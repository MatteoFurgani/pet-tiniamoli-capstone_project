import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PaginaProfilo = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleShowBooking = () => {
    setShowBooking(true);
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:3001/users/me", {
          method: "GET",
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

    fetchUserProfile();
  }, []);

  if (isLoading) {
    return <div>Caricamento...</div>;
  }

  if (error) {
    return <div>Si è verificato un errore: {error}</div>;
  }

  return (
    <>
      <Container>
        <Row className="justify-content-center row-cols-2 text-center pt-5">
          <Col>
            <Card style={{ height: "100%" }}>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="my-3 text-center">
                  <h4>Profilo</h4>
                </Card.Title>
                <div className="flex-grow-1">
                  <Card.Text className="text-center pt-3">
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
                      <h6>Servizio:</h6>
                      <p>servizio</p>
                      <h6>Taglia cane:</h6>
                      <p>taglia</p>
                      <h6>Tipo di pelo:</h6>
                      <p>pelo</p>
                      <h6>Data:</h6>
                      <p>data</p>
                      <h6>Ora:</h6>
                      <p>ora</p>
                    </Card.Text>
                    <Button variant="success" className="pt-2">
                      Modifica prenotazione
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </>
  );
};
export default PaginaProfilo;
