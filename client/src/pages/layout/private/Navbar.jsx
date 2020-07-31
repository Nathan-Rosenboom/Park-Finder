import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import "./Navbar.css";

function Navigation(props) {

  const logout = () => {
    axios.get('/api/logout')
        .then((response) => {
            window.location.href = '/'
        }).catch((err) => {
            console.log(err);
        })
}
    return (
    <Navbar className="topNav"bg="dark" variant="dark">
    <Navbar.Brand href="#home">Park Finder</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/parks">Search</Nav.Link>
      <Nav.Link href="/create">Add Park</Nav.Link>
      <Nav.Link onClick={logout}>Logout</Nav.Link>
    </Nav>
  </Navbar>
    )
}
export default Navigation;