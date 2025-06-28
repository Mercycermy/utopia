// src/pages/About.jsx
import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import {
  FaRegEnvelope, FaGlobeAfrica, FaLeaf, FaHandsHelping, FaCloudSun, FaFlask, FaChartLine, FaUsers, FaTrophy, FaSeedling, FaBolt, FaBookOpen
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

    // Updated Utopia services (reference utopia doc file)
    const services = [
      { icon: <FaLeaf />, title: 'General Organic Farming Consulting', desc: 'Expert advice and support for transitioning to and optimizing organic farming practices.' },
      { icon: <FaSeedling />, title: 'Soil Fertility Testing', desc: 'Comprehensive soil analysis to determine nutrient status and recommend improvements.' },
      { icon: <FaFlask />, title: 'Preparation of Natural Fertilizer & Compost', desc: 'Guidance and training on making high-quality natural fertilizers and compost.' },
      { icon: <FaBolt />, title: 'Biogas Power Installation & Training', desc: 'Installation of biogas systems and hands-on training for sustainable energy use.' },
      { icon: <FaBookOpen />, title: 'Training on By-Products & Cuttings for Development', desc: 'Workshops on utilizing agricultural by-products and plant cuttings for further development.' },
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

         {/* Company Profile Section */}
<Row className="gx-4 gy-4 mb-5">
  <Col>
    <Card className="shadow-sm mb-4" style={{ background: "#fff", color: "#234d20" }}>
      <Card.Body>
        <Card.Title style={{ fontWeight: 700, fontSize: "1.5rem" }}>Company Profile</Card.Title>
        <Card.Text>
          <strong>Who We Are</strong><br />
          Founded in 2023, <strong>UTOPIA</strong> is a forward-thinking organization led by a multidisciplinary team of urban planners, architects, and sustainability experts. Established in Nairobi, Kenya, UTOPIA was born out of a shared commitment to reimagining Africa’s urban future—one that is inclusive, resilient, and sustainable.
          <br /><br />

          <strong>Our Approach</strong><br />
          At UTOPIA, we believe that transformative change starts with people. That’s why our methodology emphasizes deep collaboration with local governments, private sector stakeholders, and community-based organizations. Through participatory design, data-driven planning, and cutting-edge technologies, we deliver solutions that are context-specific and scalable across the continent.
          <br /><br />

          <strong>Our Journey</strong><br />
          Since our founding, UTOPIA has earned recognition for pioneering work in affordable housing, green infrastructure, and community-centered urban design. What began as a local initiative has grown into a pan-African movement, empowering cities to lead with vision and implement with impact. Our story continues as we work to make every African city a thriving model of sustainable development.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
</Row>


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
