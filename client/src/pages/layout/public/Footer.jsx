import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Footer.css";

function Footer() {
    return(
<Navbar className="justify-content-center footer" fixed="bottom" bg="dark" variant="dark">
    <Navbar.Brand className="footerText">
      Park Finder v1.0.0
      <a className="gitLink" href="https://github.com/Nathan-Rosenboom/Park-Finder" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-github"></i>
      </a>
    </Navbar.Brand>
  </Navbar>
    )
}

export default Footer;