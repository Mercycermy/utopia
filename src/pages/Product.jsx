// src/pages/Services.jsx
import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaLeaf, FaCloudSun, FaFlask, FaBug } from 'react-icons/fa';
import './Services.css';

class Products extends Component {
  render() {
    const fadeIn = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8 }
    };

    // Utopia Fertilizer Product List 
    const productsList = [
      {
        name: '100% Natural NPKC Soil Fertilizer',
        icon: FaLeaf,
        features: [
          'Completely natural and organic',
          'Enriches soil with Nitrogen, Phosphorus, Potassium, and Carbon',
          'Improves soil structure and fertility',
          'Safe for all crops and the environment'
        ],
      },
      {
        name: 'Carbon CO₂',
        icon: FaCloudSun,
        features: [
          'Enhances soil carbon content',
          'Promotes microbial activity',
          'Supports climate-smart agriculture',
          'Boosts crop resilience and yield'
        ],
      },
      {
        name: 'Natural NPK',
        icon: FaFlask,
        features: [
          'Natural source of essential plant nutrients',
          'Balanced Nitrogen, Phosphorus, and Potassium',
          'Improves plant growth and productivity',
          'Suitable for a wide range of crops'
        ],
      },
      {
        name: 'Natural Herbicide and Insecticide',
        icon: FaBug,
        features: [
          'Plant-based pest and weed control',
          'Safe for beneficial insects and soil health',
          'Reduces chemical pesticide reliance',
          'Supports organic farming practices'
        ],
      },
    ];

    const faqs = [
      {
        question: 'Are Utopia fertilizers safe for the environment?',
        answer: 'Yes, all our products are 100% organic and eco-friendly, supporting soil health and minimizing environmental impact in Ethiopia.'
      },
      {
        question: 'Can I get a custom fertilizer blend for my crop?',
        answer: 'Absolutely! Our agronomists will work with you to create a blend tailored to your soil and crop needs, especially for Ethiopian conditions.'
      },
      {
        question: 'Do you provide training for farmers?',
        answer: 'Yes, we offer training kits, workshops, and ongoing support to help Ethiopian farmers maximize yields sustainably.'
      },
    ];

    return (
      <motion.div {...fadeIn}>
        {/* Hero Section */}
        <section className="services-hero text-center py-5" style={{ background: 'linear-gradient(90deg, #5fa948 0%, #b7e778 100%)', color: '#234d20' }}>
          <Container>
            <h1 className="display-5 fw-bold">Our Natural Products</h1>
            <p className="lead mt-3">
              100% natural, organic solutions for soil health, crop protection, and sustainable farming in Ethiopia.
            </p>
            <Button variant="success" href="/#/contact" className="mt-4 px-4 rounded-pill" style={{ background: '#234d20', border: 'none' }}>
              Request a Consultation
            </Button>
          </Container>
        </section>

        {/* Products Grid */}
        <section className="services-categories py-5">
          <Container>
            <h2 className="text-center mb-5">Our Product Range</h2>
            <Row className="g-4">
              {productsList.map((product, index) => (
                <Col md={6} lg={4} key={index}>
                  <motion.div
                    className="service-category-card p-4 h-100"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <product.icon size={40} className="mb-3 service-category-icon" color="#6dbb63" />
                    <h5 className="fw-bold mb-3">{product.name}</h5>
                    <ul className="text-start ps-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* FAQs Section */}
        <section className="services-faqs py-5 bg-light">
          <Container>
            <h2 className="text-center mb-4">FAQs</h2>
            <Accordion defaultActiveKey="0">
              {faqs.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="services-final-cta text-center py-5">
          <Container>
            <h2>Ready to Grow with Utopia?</h2>
            <Button variant="primary" href="/#/contact" className="mt-3 px-4 rounded-pill" style={{ background: '#6dbb63', border: 'none' }}>
              Contact Us
            </Button>
          </Container>
        </section>
      </motion.div>
    );
  }
}

export default Products;
