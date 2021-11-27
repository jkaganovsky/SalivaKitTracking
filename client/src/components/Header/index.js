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
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
};

export default GlobalNavbar;