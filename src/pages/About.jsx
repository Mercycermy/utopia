// src/pages/About.jsx
import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import {
  FaRegEnvelope, FaGlobeAfrica, FaLeaf, FaHandsHelping, FaCloudSun, FaFlask, FaChartLine, FaUsers, FaTrophy
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import './About.css';

class About extends Component {
  render() {
    const fadeIn = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    };

    // Utopia company values and impact (Ethiopia-focused)
    const values = [
      {
        icon: <FaLeaf size={32} color="#6dbb63" />,
        title: "Sustainable Solutions",
        desc: "We develop eco-friendly, organic fertilizers that restore Ethiopia’s soils and boost yields while protecting the environment."
      },
      {
        icon: <FaHandsHelping size={32} color="#6dbb63" />,
        title: "Farmer Empowerment",
        desc: "Training, resources, and support for Ethiopian farmers to thrive and adopt best practices."
      },
      {
        icon: <FaCloudSun size={32} color="#6dbb63" />,
        title: "Climate-Smart Agriculture",
        desc: "Innovative approaches for resilience, food security, and environmental restoration in Ethiopia."
      },
      {
        icon: <FaGlobeAfrica size={32} color="#6dbb63" />,
        title: "Local Impact",
        desc: "Transforming communities across Ethiopia through soil revival and sustainable agriculture."
      }
    ];

    // Utopia milestones/timeline (Ethiopia-focused)
    const timeline = [
      { year: '2015', text: 'Founded in Ethiopia with a mission to revive soils and transform agriculture.', icon: <FaFlask /> },
      { year: '2017', text: 'Launched “Fashioning Paradise Ethiopia through Organic Soil Revival”.', icon: <FaGlobeAfrica /> },
      { year: '2020', text: 'Empowered thousands of Ethiopian farmers through training and support.', icon: <FaHandsHelping /> },
      { year: '2024', text: 'Expanded organic fertilizer production and community partnerships nationwide.', icon: <FaCloudSun /> },
    ];

    // Utopia services (Ethiopia-focused)
    const services = [
      { icon: <FaFlask />, title: 'Organic NPKC Fertilizer', desc: '100% organic, locally produced fertilizer for Ethiopian soils.' },
      { icon: <FaChartLine />, title: 'Field Research & Trials', desc: 'On-site testing and innovation for Ethiopia’s diverse regions.' },
      { icon: <FaUsers />, title: 'Farmer Education Workshops', desc: 'Training programs to empower Ethiopian farmers with best practices.' },
      { icon: <FaGlobeAfrica />, title: 'Community & Environmental Restoration', desc: 'Reviving land, creating jobs, and building climate resilience in Ethiopia.' },
    ];

    // Achievements (Ethiopia-focused)
    const achievements = [
      { title: 'Thousands of Farmers Empowered', org: 'Organic Soil Revival Initiative, Ethiopia' },
      { title: 'Paradise Ethiopia Award', org: 'National Green Development Forum' },
      { title: 'Women & Youth in Agriculture Leadership', org: 'Ethiopian Sustainable Development Network' },
    ];

    return (
      <motion.div {...fadeIn}>
        <Container className="about-page py-5" style={{ backgroundColor: "#f4fbe7" }}>
          {/* Title */}
          <h2 className="text-center mb-5" style={{ color: "#234d20", fontWeight: 800 }}>About Utopia</h2>

          {/* Mission & Vision */}
          <Row className="gx-4 gy-4 mb-5">
            <Col md={6}>
              <Card className="shadow-sm bio-card h-100" style={{ background: "#6dbb63", color: "#fff" }}>
                <Card.Body>
                  <Card.Title style={{ fontWeight: 700 }}>Our Mission</Card.Title>
                  <Card.Text>
                    Utopia Organic Fertilizer Production Company (UOF) is dedicated to restoring Ethiopia’s land and ecosystems by producing 100% organic, locally sourced NPKC fertilizers. We empower farmers, regenerate the environment, and strive for a food-secure, sustainable future for Ethiopia.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="shadow-sm journey-card h-100" style={{ background: "#b7e778", color: "#234d20" }}>
                <Card.Body>
                  <Card.Title style={{ fontWeight: 700 }}>Our Vision</Card.Title>
                  <Card.Text>
                    “Fashioning Paradise Ethiopia through Organic Soil Revival.”<br />
                    To transform Ethiopia into a paradise for development through joint power and wisdom.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Core Values */}
          <h3 className="mt-5 mb-4 text-center" style={{ color: "#234d20" }}>Our Values</h3>
          <Row className="gx-4 gy-4 mb-5">
            {values.map((val, i) => (
              <Col md={3} key={i}>
                <motion.div
                  className="icon-container h-100"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-3">{val.icon}</div>
                  <h5 style={{ fontWeight: 700 }}>{val.title}</h5>
                  <p>{val.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Timeline */}
          <h3 className="mt-5 mb-3 text-center" style={{ color: "#234d20" }}>Our Journey</h3>
          <div className="timeline-container mb-5">
            {timeline.map((item, idx) => (
              <motion.div
                className="timeline-item"
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-icon">{item.icon}</div>
                <div className="timeline-content">{item.text}</div>
              </motion.div>
            ))}
          </div>

          {/* Services */}
          <h3 className="mt-5 mb-4 text-center" style={{ color: "#234d20" }}>What We Offer</h3>
          <Row className="gx-4 gy-4 mb-5">
            {services.map((svc, i) => (
              <Col md={3} key={i}>
                <motion.div
                  className="service-card shadow-sm text-center p-4 h-100"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="service-icon mb-3" style={{ color: "#6dbb63", fontSize: "2rem" }}>{svc.icon}</div>
                  <h5 className="fw-bold">{svc.title}</h5>
                  <p>{svc.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Achievements */}
          <h3 className="mt-5 mb-4 text-center" style={{ color: "#234d20" }}>Achievements</h3>
          <ListGroup className="mb-5">
            {achievements.map((a, i) => (
              <ListGroup.Item key={i} className="achievement-item" style={{ fontWeight: 500 }}>
                <FaTrophy className="me-2 text-warning" /> <strong>{a.title}</strong> — {a.org}
              </ListGroup.Item>
            ))}
          </ListGroup>

          {/* Contact CTA */}
          <div className="text-center contact-section mt-5">
            <h3 className="mb-3" style={{ color: "#234d20" }}>Partner With Utopia</h3>
            <Button variant="primary" href="mailto:info@utopiafertilizer.com" className="me-3" style={{ background: "#234d20", border: "none" }}>
              <FaRegEnvelope className="me-2" />Contact Us
            </Button>
            <a href="https://www.linkedin.com/company/utopia-fertilizer" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaGlobeAfrica size={30} color="#6dbb63" />
            </a>
          </div>
        </Container>
      </motion.div>
    );
  }
}

export default About;
