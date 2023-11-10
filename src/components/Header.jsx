import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from 'react-bootstrap/NavDropdown';


// Define a React component
class MyComponent extends React.Component {
  render() {
    return (
      <Navbar expand="lg" bg="dark" varient="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='custom-color'>Autonomuous Mobile Robot Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    );
  }
}


export default MyComponent;