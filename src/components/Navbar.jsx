import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaSeedling, FaHome, FaInfoCircle, FaProjectDiagram, FaLeaf, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo.jpg'; // Make sure logo.png exists in src/assets

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  handleToggle = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  closeMenu = () => {
    this.setState({ expanded: false });
  };

  render() {
    return (
      <Navbar
        expand="lg"
        sticky="top"
        expanded={this.state.expanded}
        onToggle={this.handleToggle}
        className="shadow-sm py-3"
        style={{ background: 'linear-gradient(90deg, #5fa948, #b7e778)' }}
      >
        <Container fluid className="px-4">
          {/* Brand Logo as Image */}
          <Navbar.Brand
            as={Link}
            to="/"
            className="d-flex align-items-center fw-bold fs-2"
            style={{
              color: '#234d20',
              fontFamily: 'Poppins, sans-serif',
              letterSpacing: '1px'
            }}
          >
            <img
              src={logo}
              alt="Utopia Logo"
              style={{ height: 44, marginRight: 12 }}
            />
          </Navbar.Brand>

          {/* Toggle Button on right */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Nav Links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/" onClick={this.closeMenu} className="mx-2 d-flex align-items-center fw-semibold" style={{ color: '#234d20' }}>
                <FaHome className="me-1" /> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={this.closeMenu} className="mx-2 d-flex align-items-center fw-semibold" style={{ color: '#234d20' }}>
                <FaInfoCircle className="me-1" /> About
              </Nav.Link>
              <Nav.Link as={Link} to="/initiatives" onClick={this.closeMenu} className="mx-2 d-flex align-items-center fw-semibold" style={{ color: '#234d20' }}>
                <FaProjectDiagram className="me-1" /> Initiatives
              </Nav.Link>
              <Nav.Link as={Link} to="/products" onClick={this.closeMenu} className="mx-2 d-flex align-items-center fw-semibold" style={{ color: '#234d20' }}>
                <FaLeaf className="me-1" /> Products
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={this.closeMenu} className="mx-2 d-flex align-items-center fw-semibold" style={{ color: '#234d20' }}>
                <FaEnvelope className="me-1" /> Contact
              </Nav.Link>
              <Button
                as={Link}
                to="/contact"
                onClick={this.closeMenu}
                variant="success"
                className="ms-4 px-4 fw-bold rounded-pill"
                style={{ background: '#6dbb63', border: 'none', color: '#fff' }}
              >
                Partner With Us
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar;
