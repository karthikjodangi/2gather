import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" >
      <Container fluid>
        <Navbar.Brand href="/">2Gather</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/myactivities">My Activities</Nav.Link>
            <Nav.Link href="/buddies">Buddies</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          {/* <Button variant="outline-light" className="ms-2">Register/Sign In</Button> */}
          <Button variant="outline-light" className="ms-2">
          <Nav.Link href="/authentication">Register/Sign-in</Nav.Link>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
