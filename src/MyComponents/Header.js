import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <Navbar className="navbar" style={{ backgroundColor: '#006400' }}>
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>2Gather</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/myactivities" style={{ color: 'white' }}>My Activities</Nav.Link>
            <Nav.Link href="/buddies" style={{ color: 'white' }}>Buddies</Nav.Link>
            <Nav.Link href="/about" style={{ color: 'white' }}>About</Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center">
            <div className="position-relative">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </div>
          </Form>
          <Button
            className="search-button"
            variant="outline-success"
            style={{  color: 'white' }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </Button>
          <Button variant="outline-success" className="ms-2" >
            <Nav.Link href="/authentication" style={{ color: 'white' ,margin: '2 px'}}>Register/Sign-in</Nav.Link>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
