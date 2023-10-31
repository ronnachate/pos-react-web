import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';

import './navbar.css';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    navigate('/');
  };
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
        <Image src="/images/logo.png" fluid  className='navbar-logo'/>
        </Navbar.Brand>
        <Navbar.Collapse className="w-100 d-flex justify-content-end">
          <Nav>
            <Image src="/images/profile.png" fluid  className='nav-avatar'/>
            <NavDropdown
              id="nav-menu-dropdown"
              title=""
              menuVariant="dark"
              className="nav-avatar-dropdown"
            >
              <NavDropdown.Item href="#">User' Name</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="/">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
