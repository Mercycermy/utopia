// src/pages/Contact.jsx
import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaGlobeAfrica, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Contact.css';
import emailjs from 'emailjs-com';

class Contact extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t8qf0ss', 'template_85p1rie', e.target, 'uQ4nx4nVltounCMff')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Failed to send. Try again.');
      });

    e.target.reset();
  }
  render() {
    const fadeIn = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    };
    return (
      <motion.div {...fadeIn}>
        <section className="contact-page py-5">
          <Container>
            {/* Heading */}
            <h2 className="text-center mb-5">Contact Utopia Fertilizer</h2>

            <Row className="gx-5 gy-5">
              {/* Contact Form */}
              <Col md={6}>
                <Card className="p-4 contact-form-card shadow">
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-4" controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Your Name" name="user_name" required />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="your@email.com" name="user_email" required />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="message">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={4} placeholder="Write your message..." name="message" required />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                      Send Message
                    </Button>
                  </Form>
                </Card>
              </Col>

              {/* Contact Info + Map */}
              <Col md={6}>
                <Card className="p-4 contact-info-card shadow">
                  <h4 className="mb-4">Get in Touch</h4>
                  <ul className="info-list">
                    <li>
                      <FaEnvelope className="me-2" /> info@utopiafertilizer.com
                    </li>
                    <li>
                      <FaPhoneAlt className="me-2" /> +251911401404, 0936727736
                    </li>
                    <li>
                      <FaMapMarkerAlt className="me-2" /> kirkos sub city wereda 03, Addis Ababa, Ethiopia
                    </li>
                  </ul>

                  {/* Social & Resource Links */}
                  <div className="social-links mt-4">
                    <a href="https://wa.me/251911401404" target="_blank" rel="noopener noreferrer" className="me-3" title="WhatsApp">
                      <FaWhatsapp size={28} />
                    </a>
                    <a href="https://www.linkedin.com/company/utopia-fertilizer" target="_blank" rel="noopener noreferrer" className="me-3" title="LinkedIn">
                      <FaGlobeAfrica size={28} />
                    </a>
                    <a href="mailto:info@utopiafertilizer.com" target="_blank" rel="noopener noreferrer" title="Email">
                      <FaEnvelope size={28} color="#b7e778" />
                    </a>
                  </div>

                 
                </Card>

                {/* Map Embed */}
                <Card className="mt-4 map-card shadow overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3939.946661985991!2d38.770454!3d9.068624000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDQnMDcuMSJOIDM4wrA0NicxMy42IkU!5e0!3m2!1sen!2set!4v1751313870215!5m2!1sen!2set"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Utopia Fertilizer Location"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </motion.div>
    );
  }
}

export default Contact;
