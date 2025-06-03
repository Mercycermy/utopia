import React, { Component } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaSeedling, FaLeaf, FaHandsHelping, FaCloudSun, FaArrowRight, FaFlask, FaUsers, FaChartLine, FaGlobeAfrica, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';
import aboutImage from '../assets/aboutus.jpg';
import projectalpha1 from '../assets/projectalpha1.png';
import betaapp from '../assets/betaapp.png';
import womanImage from '../assets/woman.jpg';

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
                                    Utopia Organic Fertilizer Production Company (UOF)
                                </motion.h1>
                                
                                <motion.p
                                    className="hero-description"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.2 }}
                                >
                                    Fashioning Paradise Ethiopia through Organic Soil Revival.<br />
                                    Restoring soil health, food security, and environmental balance with 100% organic, locally produced NPKC fertilizers.
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
                                { icon: FaSeedling, title: 'Soil is Life', text: 'Healthy, natural soil is the foundation for water, air, and food security in Ethiopia.' },
                                { icon: FaLeaf, title: 'Organic NPKC Fertilizer', text: '100% organic, eco-friendly, and locally sourced—restoring soil fertility and plant health.' },
                                { icon: FaHandsHelping, title: 'Empowering Farmers', text: 'Supporting Ethiopian farmers and communities with training, jobs, and sustainable solutions.' },
                                { icon: FaCloudSun, title: 'Environmental Restoration', text: 'Regenerating land, increasing biodiversity, and building climate resilience.' },
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
                                                At Utopia, we believe the foundation of life is healthy soil. Our mission is to restore Ethiopia’s land and ecosystems by producing organic NPKC fertilizers from natural, local resources. We empower farmers, regenerate the environment, and strive for a food-secure, sustainable future. Our vision: “To transform Ethiopia into a paradise for development through joint power and wisdom.”
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
                                    title: 'Restoring Degraded Land',
                                    img: projectalpha1,
                                    desc: 'Rehabilitating Ethiopia’s arable land affected by acidity and salinity with organic NPKC fertilizers.',
                                    tech: ['Soil Restoration', 'Organic Inputs', 'Sustainability'],
                                    link: '/projects/ethiopia-soil-restoration'
                                },
                                {
                                    title: 'Empowering Smallholder Farmers',
                                    img: betaapp,
                                    desc: 'Training and supporting smallholder farmers for higher yields and sustainable livelihoods.',
                                    tech: ['Farmer Training', 'Community Impact', 'Food Security'],
                                    link: '/projects/farmer-empowerment'
                                },
                                {
                                    title: 'Women & Youth in Agriculture',
                                    img: womanImage,
                                    desc: 'Creating jobs and leadership opportunities for women and youth in Ethiopia’s green economy.',
                                    tech: ['Gender Equality', 'Youth Jobs', 'Education'],
                                    link: '/projects/women-youth-agriculture'
                                },
                                {
                                    title: 'Climate & Biodiversity Action',
                                    img: projectalpha1,
                                    desc: 'Reducing emissions, increasing biodiversity, and building climate resilience through organic practices.',
                                    tech: ['Climate Action', 'Biodiversity', 'Eco Farming'],
                                    link: '/projects/climate-biodiversity'
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
                            <h2 className="text-center mb-4">Our Solutions</h2>
                        </motion.div>
                        <Row className="g-4">
                            {[
                                {
                                    icon: FaFlask,
                                    title: 'Organic NPKC Fertilizer',
                                    desc: 'Balanced, 100% organic fertilizer with Nitrogen, Phosphorus, Potassium, and Carbon for soil health.',
                                },
                                {
                                    icon: FaChartLine,
                                    title: 'Farmer Training & Consulting',
                                    desc: 'Workshops, demo plots, and expert support for sustainable farming and soil management.',
                                },
                                {
                                    icon: FaUsers,
                                    title: 'Community Empowerment',
                                    desc: 'Job creation, youth and women engagement, and rural economic growth.',
                                },
                                {
                                    icon: FaGlobeAfrica,
                                    title: 'Environmental Restoration',
                                    desc: 'Land rehabilitation, biodiversity, and climate resilience for Ethiopia’s future.',
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
                                            to="/products"
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
                                    feedback: 'Utopia’s organic fertilizer revived my land and doubled my harvest. I now have hope for my children’s future.',
                                    rating: 5,
                                },
                                {
                                    name: 'Dr. Samuel O.',
                                    company: 'Agricultural Scientist, Addis Ababa, Ethiopia',
                                    feedback: 'Their science-based, eco-friendly approach is a model for sustainable agriculture in Ethiopia.',
                                    rating: 5,
                                },
                                {
                                    name: 'Maria G.',
                                    company: 'NGO Partner, Ethiopia',
                                    feedback: 'Utopia’s training and community programs have empowered hundreds of women and youth in our region.',
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
                                { step: '1', title: 'Soil Restoration', desc: 'Reviving degraded land with organic inputs and natural soil biology.' },
                                { step: '2', title: 'Farmer Empowerment', desc: 'Training, consulting, and supporting Ethiopian farmers for sustainable growth.' },
                                { step: '3', title: 'Community Impact', desc: 'Creating jobs, supporting women and youth, and building rural prosperity.' },
                                { step: '4', title: 'Environmental Sustainability', desc: 'Reducing emissions, restoring biodiversity, and building climate resilience.' },
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
