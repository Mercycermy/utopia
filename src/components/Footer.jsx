import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGlobeAfrica, FaEnvelope } from 'react-icons/fa';

class Footer extends Component {
  render() {
    return (
      <footer 
        style={{
          background: 'linear-gradient(90deg, #234d20, #6dbb63)', // Green gradient for agriculture theme
          color: '#fff',
        }} 
        className="py-5 mt-5"
      >
        <Container className="text-center">

          {/* Social & Resource Links */}
          <div className="mb-4">
            <a 
              href="mailto:info@utopiafertilizer.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-light mx-3 fs-3"
              title="Email Utopia"
            >
              <FaEnvelope />
            </a>
            <a 
              href="https://ifdc.org/solutions/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-light mx-3 fs-3"
              title="IFDC Solutions"
            >
              <FaGlobeAfrica />
            </a>
            <a 
              href="https://www.cgiar.org/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-light mx-3 fs-3"
              title="CGIAR"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Tagline */}
          <h5 className="fw-bold mb-3" style={{ letterSpacing: '1px', fontSize: '18px' }}>
            Utopia Fertilizer – Sustainable Solutions for a Food-Secure Future
          </h5>

          {/* Footer Text */}
          <p style={{ fontSize: '14px', opacity: '0.85' }}>
            © {new Date().getFullYear()} Utopia Fertilizer | Advancing Agriculture, Empowering Communities
          </p>
        </Container>
      </footer>
    );
  }
}

export default Footer;
