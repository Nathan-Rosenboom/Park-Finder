import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation(props) {
    return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Park Finder</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Login</Nav.Link>
      <Nav.Link href="/register">Sign-up</Nav.Link>
    </Nav>
  </Navbar>
    )
}
export default Navigation;