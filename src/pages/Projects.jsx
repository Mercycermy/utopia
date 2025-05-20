import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaGlobeAfrica, FaLeaf, FaHandsHelping, FaCloudSun, FaFlask, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Home.css'; // Reuse main styles for consistency
import projectalpha1 from '../assets/projectalpha1.png';
import betaapp from '../assets/betaapp.png';
import aboutImage from '../assets/aboutus.jpg';

class Projects extends Component {
  render() {
    const fadeIn = {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.7 }
    };

    const projects = [
      {
        title: 'Africa Soil Health Initiative',
        img: projectalpha1,
        desc: 'Boosting soil fertility and crop yields across Africa through innovative fertilizer solutions and farmer partnerships.',
        tags: ['Soil Science', 'Farmer Training', 'Sustainability'],
        link: 'https://ifdc.org/solutions/'
      },
      {
        title: 'Rice Productivity Program',
        img: betaapp,
        desc: 'Empowering rice farmers with tailored nutrient management, field trials, and modern agricultural practices.',
        tags: ['Nutrient Management', 'Field Trials', 'Capacity Building'],
        link: 'https://www.cgiar.org/'
      },
      {
        title: 'Women in Agriculture Empowerment',
        img: aboutImage,
        desc: 'Supporting women farmers with resources, training, and leadership opportunities for inclusive growth.',
        tags: ['Gender Equality', 'Training', 'Community Impact'],
        link: 'https://ifdc.org/solutions/'
      },
      {
        title: 'Global Soil Fertility Network',
        img: projectalpha1,
        desc: 'Collaborating globally to advance soil health, sustainable agriculture, and food security.',
        tags: ['Research', 'Partnerships', 'Innovation'],
        link: 'https://www.cgiar.org/'
      }
    ];

    return (
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
            {projects.map((proj, i) => (
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
                          href="/utopia/products"
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
              href=" /utopia/products"
              className="cta-btn"
              style={{ background: "#234d20", border: "none" }}
            >
              Explore Our Products
            </Button>
          </div>
        </Container>
      </section>
    );
  }
}

export default Projects;