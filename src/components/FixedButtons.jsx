import React, { Component } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaGlobeAfrica } from 'react-icons/fa';
import './FixedButtons.css';

class FixedButtons extends Component {
  render() {
    return (
      <div className="fixed-buttons">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/251911401404"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed-btn whatsapp-btn"
          title="Chat with Utopia Fertilizer on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>

        {/* Call Button */}
        <a
          href="tel:+251911401404"
          className="fixed-btn call-btn"
          title="Call Utopia Fertilizer"
        >
          <FaPhoneAlt size={28} />
        </a>

        
        
      </div>
    );
  }
}

export default FixedButtons;
