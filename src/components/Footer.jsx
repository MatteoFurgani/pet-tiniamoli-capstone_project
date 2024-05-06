import { useEffect, useState } from "react";

const Footer = () => {
  const [annoCorrente, setAnnoCorrente] = useState("");

  useEffect(() => {
    const dataCorrente = new Date();
    const anno = dataCorrente.getFullYear();
    setAnnoCorrente(anno);
  }, []);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center text-center">
          <span className="text-muted">© {annoCorrente} PET-tiniamoli</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
