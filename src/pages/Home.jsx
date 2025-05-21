import React, { Component } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaSeedling, FaLeaf, FaHandsHelping, FaCloudSun, FaArrowRight, FaFlask, FaUsers, FaChartLine, FaGlobeAfrica, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';
import aboutImage from '../assets/aboutus.jpg';
import projectalpha1 from '../assets/projectalpha1.png';
import betaapp from '../assets/betaapp.png';

class Home extends Component {
    render() {
        // common animation props
        const scrollAnim = {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.4 },
            transition: { duration: 0.8 }
        };

        return (
            <div className="home-page">
                {/* Hero Section */}
                <section className="hero-section text-center py-5">
                    <Container>
                        <Row>
                            <Col>
                                <motion.h1
                                    className="hero-title"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    Utopia – Sustainable Fertilizer Solutions for Ethiopia
                                </motion.h1>
                                
                                <motion.p
                                    className="hero-description"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.2 }}
                                >
                                    Empowering Ethiopian farmers and communities with innovative, eco-friendly fertilizers for a food-secure future.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                >
                                    <Button as={Link} to="/products" variant="primary" className="cta-btn">
                                        Explore Our Products
                                    </Button>
                                </motion.div>
                            </Col>
                        </Row>
                        {/* Solutions/Impact Cards */}
                        <Row className="mt-5">
                            {[
                                { icon: FaSeedling, title: 'Soil Health Improvement', text: 'Enhancing soil fertility and structure for sustainable yields in Ethiopia.' },
                                { icon: FaLeaf, title: 'Nutrient Management', text: 'Balanced, science-based fertilizer blends for Ethiopian crops.' },
                                { icon: FaHandsHelping, title: 'Farmer Training & Support', text: 'Empowering Ethiopian farmers with knowledge and resources.' },
                                { icon: FaCloudSun, title: 'Climate-Smart Agriculture', text: 'Innovative practices for resilience and sustainability in Ethiopia.' },
                            ].map((item, idx) => (
                                <Col md={3} key={idx}>
                                    <motion.div className="icon-container"
                                        {...scrollAnim}
                                        transition={{ ...scrollAnim.transition, delay: 0.3 + idx * 0.2 }}
                                    >
                                        <item.icon size={50} color="#6dbb63" />
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                {/* About Section */}
                <section className="about-section py-5">
                    <Container>
                        <motion.div {...scrollAnim}>
                            <h2 className="text-center mb-4">About Utopia</h2>
                        </motion.div>
                        <Row className="align-items-center">
                            <Col lg={6}>
                                <motion.div {...scrollAnim} transition={{ ...scrollAnim.transition, delay: 0.2 }}>
                                    <Card className="about-card shadow-lg p-4">
                                        <Card.Body>
                                            <Card.Text>
                                                Utopia is dedicated to transforming Ethiopian agriculture through science-based fertilizer solutions, improving yields, and supporting sustainable development nationwide. Our mission is to empower Ethiopian farmers, protect the environment, and ensure food security for future generations in Ethiopia.
                                            </Card.Text>
                                            <Button as={Link} to="/products" variant="outline-light" className="about-btn">
                                                Learn More
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                            <Col lg={6}>
                                <motion.div {...scrollAnim} transition={{ ...scrollAnim.transition, delay: 0.4 }}>
                                    <img
                                        src={aboutImage}
                                        alt="About Utopia"
                                        className="img-fluid about-img shadow"
                                    />
                                </motion.div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Projects/Initiatives Section */}
                <section className="projects-preview py-5">
                    <Container>
                        <motion.div {...scrollAnim}>
                            <h2 className="text-center mb-4">Featured Initiatives</h2>
                        </motion.div>
                        <Row className="g-4">
                            {[
                                {
                                    title: 'Ethiopia Soil Health Initiative',
                                    img: projectalpha1,
                                    desc: 'Boosting soil fertility and crop yields across Ethiopia through innovative fertilizer solutions.',
                                    tech: ['Soil Science', 'Farmer Training', 'Sustainability'],
                                    link: '/projects/ethiopia-soil-health'
                                },
                                {
                                    title: 'Teff Productivity Program',
                                    img: betaapp,
                                    desc: 'Empowering teff farmers with tailored nutrient management and modern practices.',
                                    tech: ['Nutrient Management', 'Field Trials', 'Capacity Building'],
                                    link: '/projects/teff-productivity'
                                },
                                {
                                    title: 'Women in Ethiopian Agriculture',
                                    img: aboutImage,
                                    desc: 'Supporting Ethiopian women farmers with resources, training, and leadership opportunities.',
                                    tech: ['Gender Equality', 'Training', 'Community Impact'],
                                    link: '/projects/women-ethiopia'
                                },
                                {
                                    title: 'National Soil Fertility Network',
                                    img: projectalpha1,
                                    desc: 'Collaborating across Ethiopia to advance soil health and sustainable agriculture.',
                                    tech: ['Research', 'Partnerships', 'Innovation'],
                                    link: '/projects/national-soil-fertility'
                                }
                            ].map((proj, i) => (
                                <Col md={6} lg={3} key={i}>
                                    <motion.div
                                        className="proj-card"
                                        {...scrollAnim}
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
                                                />
                                                <div className="proj-overlay">
                                                    <Button
                                                        as={Link}
                                                        to={proj.link}
                                                        variant="light"
                                                        className="overlay-btn"
                                                    >
                                                        View More <FaArrowRight className="ms-2" />
                                                    </Button>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <Card.Title>{proj.title}</Card.Title>
                                                <Card.Text>{proj.desc}</Card.Text>
                                            </Card.Body>
                                            <Card.Footer className="bg-white border-0">
                                                <small className="text-muted">{proj.tech.join(', ')}</small>
                                            </Card.Footer>
                                        </Card>
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                {/* Services Overview */}
                <section className="services-overview py-5 bg-light">
                    <Container>
                        <motion.div {...scrollAnim}>
                            <h2 className="text-center mb-4">Our Services</h2>
                        </motion.div>
                        <Row className="g-4">
                            {[
                                {
                                    icon: FaFlask,
                                    title: 'Custom Fertilizer Blends',
                                    desc: 'Tailored nutrient solutions for Ethiopia’s diverse crops and soils.',
                                },
                                {
                                    icon: FaChartLine,
                                    title: 'Field Research & Trials',
                                    desc: 'On-site testing in Ethiopia to ensure optimal results and innovation.',
                                },
                                {
                                    icon: FaUsers,
                                    title: 'Farmer Education Workshops',
                                    desc: 'Training programs to empower Ethiopian farmers with best practices.',
                                },
                                {
                                    icon: FaGlobeAfrica,
                                    title: 'Sustainable Supply Chain Consulting',
                                    desc: 'Building resilient, eco-friendly supply chains for Ethiopian agriculture.',
                                },
                            ].map((svc, i) => (
                                <Col md={3} key={i}>
                                    <motion.div
                                        className="service-card p-4 text-center h-100"
                                        {...scrollAnim}
                                        transition={{ ...scrollAnim.transition, delay: 0.3 + i * 0.2 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <svc.icon size={48} className="service-icon mb-3" />
                                        <h5 className="fw-bold">{svc.title}</h5>
                                        <p className="text-muted">{svc.desc}</p>
                                        <Button
                                            as={Link}
                                            to="/services"
                                            variant="outline-primary"
                                            size="sm"
                                            className="mt-3"
                                        >
                                            Learn More
                                        </Button>
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                {/* Testimonials Section */}
                <section className="customer-feedback py-5 bg-light">
                    <Container>
                        <motion.div {...scrollAnim}>
                            <h2 className="text-center mb-4">What Our Partners Say</h2>
                        </motion.div>
                        <Row className="g-4">
                            {[
                                {
                                    name: 'Amina K.',
                                    company: 'Smallholder Farmer, Oromia, Ethiopia',
                                    feedback: 'Utopia’s fertilizers have transformed my harvests. The training and support made all the difference for my family.',
                                    rating: 5,
                                },
                                {
                                    name: 'Dr. Samuel O.',
                                    company: 'Agricultural Scientist, Addis Ababa, Ethiopia',
                                    feedback: 'Their science-based approach and commitment to sustainability set a new standard in Ethiopia.',
                                    rating: 5,
                                },
                                {
                                    name: 'Maria G.',
                                    company: 'NGO Partner, Ethiopia',
                                    feedback: 'Working with Utopia has empowered hundreds of women farmers in our region. True impact!',
                                    rating: 5,
                                }
                            ].map((testimonial, idx) => (
                                <Col md={4} key={idx}>
                                    <motion.div
                                        className="testimonial-card p-4 text-center h-100"
                                        {...scrollAnim}
                                        transition={{ ...scrollAnim.transition, delay: 0.3 + idx * 0.2 }}
                                    >
                                        <FaQuoteLeft className="quote-icon" size={30} />
                                        <p className="testimonial-text">{testimonial.feedback}</p>
                                        <FaQuoteRight className="quote-icon" size={30} />
                                        <h5 className="testimonial-name">{testimonial.name}</h5>
                                        <p className="testimonial-company">{testimonial.company}</p>
                                        <div className="testimonial-rating">
                                            {"⭐".repeat(Math.round(testimonial.rating))}
                                        </div>
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                {/* Our Process Section */}
                <section className="our-process py-5">
                    <Container>
                        <motion.div {...scrollAnim}>
                            <h2 className="text-center mb-4">Our Process</h2>
                        </motion.div>
                        <Row className="g-4 justify-content-center">
                            {[
                                { step: '1', title: 'Research & Innovation', desc: 'Developing advanced, eco-friendly fertilizer solutions.' },
                                { step: '2', title: 'Field Implementation', desc: 'Partnering with farmers for real-world results.' },
                                { step: '3', title: 'Capacity Building', desc: 'Training and empowering communities.' },
                                { step: '4', title: 'Impact Assessment', desc: 'Measuring outcomes and refining our approach.' },
                            ].map((process, idx) => (
                                <Col md={6} lg={3} key={idx}>
                                    <motion.div
                                        className="h-100"
                                        {...scrollAnim}
                                        transition={{ ...scrollAnim.transition, delay: 0.3 + idx * 0.2 }}
                                    >
                                        <div className="process-step p-4 text-center d-flex flex-column justify-content-center h-100">
                                            <h4>{process.step}</h4>
                                            <h5>{process.title}</h5>
                                            <p>{process.desc}</p>
                                        </div>
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
            </div>
        );
    }
}

export default Home;
