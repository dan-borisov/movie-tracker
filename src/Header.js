import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
    return (
    <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="logo.jpg"
              width="200"
              height="75"
              className="d-inline-block align-top"
            />
            <span>MovieTracker</span>
          </Navbar.Brand>
        </Container>
    </Navbar>
    );
}

export default Header;