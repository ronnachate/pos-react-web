import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import { FaStore, FaClipboardList, FaMoneyCheckAlt, FaList, FaFileInvoiceDollar, FaWrench } from 'react-icons/fa';

import './navbar.css';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    navigate('/');
  };
  return (
    <Navbar variant="dark" bg="dark" expand="lg" className="header-navbar">
      <Container fluid>
        <Navbar.Brand href="/">
          <Image src="/images/logo.png" fluid className="navbar-logo" />
        </Navbar.Brand>

        <Navbar.Collapse className="w-100 d-flex justify-content-end">
          <Container fluid className='d-flex justify-content-end gap-4'>
            <Navbar.Brand href="/pos" className='d-flex gap-2'>
              <FaStore className='menu-icon'/>
              POS
            </Navbar.Brand>
            <Navbar.Brand href="/orders" className='d-flex gap-2'>
            <FaClipboardList className='menu-icon'/> 
              Orders
            </Navbar.Brand>
            <Navbar.Brand href="/sales" className='d-flex gap-2'>
            <FaMoneyCheckAlt className='menu-icon'/> 
              Sales
            </Navbar.Brand>
            <Navbar.Brand href="/payment" className='d-flex gap-2'>
              <FaFileInvoiceDollar className='menu-icon'/>
              Payment
            </Navbar.Brand>
            <Navbar.Brand href="/products" className='d-flex gap-2'>
            <FaList className='menu-icon'/> 
              Products
            </Navbar.Brand>
            <Navbar.Brand href="/setting" className='d-flex gap-2'>
            <FaWrench className='menu-icon'/> 
              Setting
            </Navbar.Brand>
          </Container>
          <Nav>
            <Image src="/images/profile.png" fluid className="nav-avatar" />
            <NavDropdown
              id="nav-menu-dropdown"
              title=""
              menuVariant="dark"
              className="nav-avatar-dropdown"
            >
              <NavDropdown.Item href="#">User' Name</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
