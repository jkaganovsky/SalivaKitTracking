import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function GlobalNavbar() {
  return(
    <Navbar expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">UWMC Genetics and Solid Tumors Laboratory</Navbar.Brand>

        <Navbar.Toggle />

        <Nav className="mr-auto">
          <Nav.Link href="/">Search</Nav.Link>
          <Nav.Link href="/list">List</Nav.Link>
        </Nav>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Hello <a href="#login">Mark Otto!</a>
          </Navbar.Text>
        </Navbar.Collapse>

        <Nav className="mr-auto">
          <Nav.Link href="/logout">Logout</Nav.Link>
        </Nav>

      </Container>
    </Navbar>
  )
};

export default GlobalNavbar;