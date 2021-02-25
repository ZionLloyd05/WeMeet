import React, { Fragment } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand className="text-white" href="#home">
        <img
          alt=""
          src="/assets/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Reactivities
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" className="text-white mx-3">
            Activities
          </Nav.Link>
          <Button variant="success" className="mx-3">
            Create Activity
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
