import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaGlobeAfrica, FaLeaf, FaHandsHelping, FaCloudSun, FaFlask, FaArrowRight, FaSeedling, FaBolt, FaBookOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Home.css'; // Reuse main styles for consistency
import projectalpha1 from '../assets/image1.png';
import betaapp from '../assets/image2.png';
import womanImage from '../assets/image3.png';
import climateImage from '../assets/image4.png';

class Initiative extends Component {
  render() {
    const fadeIn = {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.7 }
    };

    // Updated initiatives based on notes.md and Ethiopia focus
    const initiatives = [
      {
        title: 'Restoring Degraded Land',
        img: projectalpha1,
        desc: 'Rehabilitating Ethiopia’s arable land affected by acidity and salinity with organic NPKC fertilizers.',
        tags: ['Soil Restoration', 'Organic Inputs', 'Sustainability'],
      },
      {
        title: 'Empowering Smallholder Farmers',
        img: betaapp,
        desc: 'Training and supporting smallholder farmers for higher yields and sustainable livelihoods.',
        tags: ['Farmer Training', 'Community Impact', 'Food Security'],
      },
      {
        title: 'Women & Youth in Agriculture',
        img: womanImage,
        desc: 'Creating jobs and leadership opportunities for women and youth in Ethiopia’s green economy.',
        tags: ['Gender Equality', 'Youth Jobs', 'Education'],
      },
      {
        title: 'Climate & Biodiversity Action',
        img: climateImage,
        desc: 'Reducing emissions, increasing biodiversity, and building climate resilience through organic practices.',
        tags: ['Climate Action', 'Biodiversity', 'Eco Farming'],
      }
    ];

    // Add or update a "Services" section similar to this:
    const services = [
      {
        icon: <FaLeaf />,
        title: 'General Organic Farming Consulting',
        desc: 'Expert advice and support for transitioning to and optimizing organic farming practices.',
      },
      {
        icon: <FaSeedling />,
        title: 'Soil Fertility Testing',
        desc: 'Comprehensive soil analysis to determine nutrient status and recommend improvements.',
      },
      {
        icon: <FaFlask />,
        title: 'Preparation of Natural Fertilizer & Compost',
        desc: 'Guidance and training on making high-quality natural fertilizers and compost.',
      },
      {
        icon: <FaBolt />,
        title: 'Biogas Power Installation & Training',
        desc: 'Installation of biogas systems and hands-on training for sustainable energy use.',
      },
      {
        icon: <FaBookOpen />,
        title: 'Training on By-Products & Cuttings for Development',
        desc: 'Workshops on utilizing agricultural by-products and plant cuttings for further development.',
      },
    ];

    return (
      <>
        <section className="projects-preview py-5" style={{ background: "#f4fbe7" }}>
          <Container>
            <motion.h2
              className="text-center mb-5"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Utopia Initiatives
            </motion.h2>
            <Row className="g-4">
              {initiatives.map((proj, i) => (
                <Col md={6} lg={3} key={i}>
                  <motion.div
                    className="proj-card"
                    {...fadeIn}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Card className="h-100 shadow-sm border-0">
                      <div className="proj-img-wrapper">
                        <Card.Img
                          variant="top"
                          src={proj.img}
                          alt={proj.title}
                          className="proj-img"
                          style={{ minHeight: 180, objectFit: 'cover' }}
                        />
                        <div className="proj-overlay">
                          <Button
                            as="a"
                            href="/utopia/contact"
                            className="overlay-btn"
                          >
                            Learn More <FaArrowRight className="ms-2" />
                          </Button>
                        </div>
                      </div>
                      <Card.Body>
                        <Card.Title>{proj.title}</Card.Title>
                        <Card.Text>{proj.desc}</Card.Text>
                      </Card.Body>
                      <Card.Footer className="bg-white border-0">
                        {proj.tags.map((tag, idx) => (
                          <Badge key={idx} bg="success" className="me-2 mb-1" style={{ background: "#6dbb63" }}>
                            {tag}
                          </Badge>
                        ))}
                      </Card.Footer>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
            <div className="text-center mt-5">
              <Button
                as="a"
                href="/#/products"
                className="cta-btn"
                style={{ background: "#234d20", border: "none" }}
              >
                Explore Our Products
              </Button>
            </div>
          </Container>
        </section>

        {/* Services Section */}
        <section className="services-overview py-5 bg-light">
          <Container>
            <motion.div {...fadeIn}>
              <h2 className="text-center mb-4">Our Services</h2>
            </motion.div>
            <Row className="g-4">
              {services.map((svc, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    className="service-card p-4 text-center h-100"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="service-icon mb-3" style={{ color: "#6dbb63", fontSize: "2rem" }}>{svc.icon}</div>
                    <h5 className="fw-bold">{svc.title}</h5>
                    <p className="text-muted">{svc.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Initiative;