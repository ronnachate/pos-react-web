import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
 return (
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Sire name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/user">User</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 );
};

export default NavBar;