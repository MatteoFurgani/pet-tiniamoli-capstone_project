import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";

const NavBar = () => {
  const [showModalAccess, setShowModalAccess] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);

  const handleOpenModalAccess = () => setShowModalAccess(true);
  const handleCloseModalAccess = () => setShowModalAccess(false);
  const handleOpenModalRegister = () => setShowModalRegister(true);
  const handleCloseModalRegister = () => setShowModalRegister(false);

  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src="../../public/logo-toeletta.png" alt="logo" width="100" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-between"
          >
            <Nav>
              <Nav.Link href="#home">
                <h3>PET-tiniamoli</h3>
              </Nav.Link>

              <Nav.Link href="#link">
                <img
                  src="../../public/logo-prenotazioni.png"
                  alt="prenotazioni"
                  width="30"
                />
                Prenotazioni
              </Nav.Link>

              <Nav.Link href="#link">
                <img
                  src="../../public/logo-servizi.png"
                  alt="servizi"
                  width="30"
                />
                Servizi
              </Nav.Link>
              <Nav.Link href="#link">
                <img
                  src="../../public/logo-chisiamo.png"
                  alt="chi siamo"
                  width="30"
                />
                Chi siamo...
              </Nav.Link>
            </Nav>
            <NavDropdown
              title="Accedi/Registrati"
              id="basic-nav-dropdown"
              className="me-5 pb-3"
            >
              <NavDropdown.Item onClick={handleOpenModalAccess}>
                Accedi
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleOpenModalRegister}>
                Registrati
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={showModalAccess} onHide={handleCloseModalAccess}>
        <Modal.Header closeButton>
          <Modal.Title>Accedi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="fido1234" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseModalAccess}>
            Accedi
          </Button>
          <Button variant="danger" onClick={handleCloseModalAccess}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showModalRegister} onHide={handleCloseModalRegister}>
        <Modal.Header closeButton>
          <Modal.Title>Registrati</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome *</Form.Label>
              <Form.Control type="text" placeholder="Nome" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Cognome *</Form.Label>
              <Form.Control type="text" placeholder="Cognome" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Cellulare *</Form.Label>
              <Form.Control type="text" placeholder="1234567" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address *</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password *</Form.Label>
              <Form.Control type="password" placeholder="fido1234" />
            </Form.Group>
            <Form.Text className="text-muted">* Campi obbligatori</Form.Text>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseModalRegister}>
            Registrati
          </Button>
          <Button variant="danger" onClick={handleCloseModalRegister}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default NavBar;
