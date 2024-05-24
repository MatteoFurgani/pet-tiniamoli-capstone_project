import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showModalAccess, setShowModalAccess] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalRegistrationCompleted, setShowModalRegistrationCompleted] =
    useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const handleOpenModalAccess = () => setShowModalAccess(true);
  const handleCloseModalAccess = () => setShowModalAccess(false);
  const handleOpenModalRegister = () => setShowModalRegister(true);
  const handleCloseModalRegister = () => setShowModalRegister(false);

  /////////////////////////////////////////////////LOGIN//////////////////////////////////////////////////////

  const handleLogin = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          handleCloseModalAccess();
          return response.json();
        } else {
          alert("Errore nel login");
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.accessToken);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log("Errore di rete", error);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }

    const handleScroll = () => {
      const navbar = document.getElementById("main-navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  ////////////////////////////////////REGISTRAZONE////////////////////////////////

  const handleRegister = () => {
    fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, phone, email, password }),
    })
      .then((response) => {
        if (response.ok) {
          setShowModalRegistrationCompleted(true);
          return response.json();
        } else {
          alert("Errore nella registrazione");
        }
      })
      .then((data) => {
        handleCloseModalRegister();
        console.log(data);
      })
      .catch((error) => {
        console.log("Errore di rete", error);
      });
  };

  const handleCloseRegistrationCompletedModal = () => {
    handleCloseModalRegister();
    setShowModalRegistrationCompleted(false);

    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setPassword("");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <>
      <Navbar expand="lg" className="navbar-custom" id="main-navbar">
        <Container fluid>
          <Link to="/" className="navbar-brand">
            <img src="../../public/logo-toeletta.png" alt="logo" width="50" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-between"
          >
            <Nav>
              <Link to="/" className="nav-link">
                <h3>PET-tiniamoli</h3>
              </Link>
              <Link to="/servizi" className="nav-link">
                <img
                  src="../../public/logo-servizi.png"
                  alt="servizi"
                  width="30"
                />
                Servizi
              </Link>
              <Link to="/prenotazioni" className="nav-link">
                <img
                  src="../../public/logo-prenotazioni.png"
                  alt="prenotazioni"
                  width="30"
                />
                Prenotazioni
              </Link>
            </Nav>
            <NavDropdown
              title={isLoggedIn ? "Pagina Profilo" : "Accedi/Registrati"}
              id="basic-nav-dropdown"
              className="me-5 pb-3"
            >
              {isLoggedIn ? (
                <>
                  <Link to="/pagina-profilo" className="nav-link ps-3">
                    Profilo
                  </Link>
                  <NavDropdown.Item onClick={handleLogout}>
                    Esci
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item onClick={handleOpenModalAccess}>
                    Accedi
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleOpenModalRegister}>
                    Registrati
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*//////////////////////////////////////////// Modale ACCEDI/////////////////////////////////////// */}

      <Modal show={showModalAccess} onHide={handleCloseModalAccess}>
        <Modal.Header closeButton>
          <Modal.Title>Accedi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserisci email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={(e) => handleLogin(e)}>
            Accedi
          </Button>
          <Button variant="danger" onClick={handleCloseModalAccess}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>

      {/* /////////////////////////////////////////////////Modale REGISTRATI/////////////////////////////////// */}

      <Modal show={showModalRegister} onHide={handleCloseModalRegister}>
        <Modal.Header closeButton>
          <Modal.Title>Registrati</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>Nome *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Cognome *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cognome"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Cellulare *</Form.Label>
              <Form.Control
                type="text"
                placeholder="1234567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password *</Form.Label>
              <Form.Control
                type="password"
                placeholder="fido1234"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Text className="text-muted">* Campi obbligatori</Form.Text>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleRegister}>
            Registrati
          </Button>
          <Button variant="danger" onClick={handleCloseModalRegister}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showModalRegistrationCompleted}
        onHide={handleCloseRegistrationCompletedModal}
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Registrazione completata</Modal.Title>
        </Modal.Header>
        <Modal.Body>La tua registrazione è avvenuta con successo.</Modal.Body>
        <Modal.Footer>
          <Button
            variant="info"
            onClick={handleCloseRegistrationCompletedModal}
          >
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default NavBar;
