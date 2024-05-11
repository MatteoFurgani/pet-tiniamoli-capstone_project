import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaProfilo from "./components/PaginaProfilo";
import Home from "./components/Home";
import Servizi from "./components/Servizi";
import Prenotazioni from "./components/Prenotazioni";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <header>
            <NavBar />
          </header>
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/prenotazioni" element={<Prenotazioni />} />
              <Route path="/servizi" element={<Servizi />} />
              <Route path="/pagina-profilo" element={<PaginaProfilo />} />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
