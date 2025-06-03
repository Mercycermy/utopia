import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGlobeAfrica, FaEnvelope } from 'react-icons/fa';

class Footer extends Component {
  render() {
    return (
      <footer 
        style={{
          background: 'linear-gradient(90deg, #234d20, #6dbb63)',
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
              href="https://www.linkedin.com/company/utopia-fertilizer" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-light mx-3 fs-3"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://utopiafertilizer.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-light mx-3 fs-3"
              title="Utopia Website"
            >
              <FaGlobeAfrica />
            </a>
          </div>

          {/* Tagline */}
          <h5 className="fw-bold mb-3" style={{ letterSpacing: '1px', fontSize: '18px' }}>
            Utopia Organic Fertilizer Production Company (UOF) – Fashioning Paradise Ethiopia through Organic Soil Revival
          </h5>

          {/* Footer Text */}
          <p style={{ fontSize: '14px', opacity: '0.85' }}>
            © {new Date().getFullYear()} Utopia Organic Fertilizer | Restoring Soil, Securing Food, Empowering Ethiopia
          </p>
        </Container>
      </footer>
    );
  }
}

export default Footer;
