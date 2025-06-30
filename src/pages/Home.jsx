import React, { Component } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaSeedling, FaLeaf, FaHandsHelping, FaCloudSun, FaArrowRight, FaFlask, FaBolt, FaBookOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import './Home.css';
import aboutImage from '../assets/aboutus.jpg';
import projectalpha1 from '../assets/image1.png';
import betaapp from '../assets/image2.png';
import womanImage from '../assets/image3.png';
import climateImage from '../assets/image4.png';
import gallery from '../assets/gallery.jpg';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';
import gallery6 from '../assets/gallery6.jpg';
import Product from '../assets/product.jpg';
import Product2  from '../assets/product2.jpg';
import Product3 from '../assets/product3.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MengistuImg from '../assets/Mengistu.jpeg';
import EsuyawkalImg from '../assets/ESUYAWKAL AGMAS.jpeg';
import YihunImg from '../assets/YIHUN WASIE.jpeg';
import WerksowImg from '../assets/WERKSOW MOLLA.jpeg';
import TedelaImg from '../assets/TEDELA MELESSE.jpeg';
import DebarkUniversityLogo from '../assets/debark.png';
import MandefroImg from '../assets/MANDEFRO.png'; // Make sure this image exists

class Home extends Component {
    render() {
        // common animation props
        const scrollAnim = {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.4 },
            transition: { duration: 0.8 }
        };

        // Slider settings for testimonials
        const testimonialSliderSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3, // Show 3 testimonials at once
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: { slidesToShow: 2 }
                },
                {
                    breakpoint: 768,
                    settings: { slidesToShow: 1 }
                }
            ]
        };

        // Testimonials data (with hover descriptions)
        const testimonials = [
            {
                name: 'Werksow Molla',
                role: 'Chemical Laboratory Chemist & Teacher',
                img: WerksowImg,
                feedback: 'Utopia’s commitment to quality and innovation in organic fertilizer production has transformed our laboratory standards and inspired a culture of excellence.',
                hoverDesc: 'Skilled in analytical chemistry, sample preparation, and instrument calibration, Werksow has significantly enhanced laboratory efficiency. His meticulous record-keeping and commitment to safety and training underscore his dedication to sustainable agricultural solutions. He also brings teaching experience, fostering student engagement and academic growth at Gibson School Systems.'
            },
            {
                name: 'Tedela Melesse Woldeyes',
                role: 'Vice President & Co-Founder',
                img: TedelaImg,
                feedback: 'Utopia’s vision for sustainable agriculture and food security is making a real difference for Ethiopian farmers and the environment.',
                hoverDesc: 'As Vice President, he provides strategic oversight, fosters international partnerships, and advocates for Ethiopia’s self-reliance in organic farming. His expertise in operations, logistics, and stakeholder engagement has been instrumental in scaling Utopia’s mission.'
            },
            {
                name: 'Yihun Wasie Anteneh',
                role: 'Lecturer & Process Engineer',
                img: YihunImg,
                feedback: 'The scientific approach and dedication to research at Utopia are setting new benchmarks for agricultural innovation in Ethiopia.',
                hoverDesc: 'He combines academic rigor with hands-on research to advance sustainable agriculture. His published work and active role in Utopia highlight his commitment to improving Ethiopia’s agricultural productivity through science.'
            },
            {
                name: 'Mengistu Woube Mengesha',
                role: 'Associate Professor & Senior Advisor',
                img: MengistuImg,
                feedback: 'Utopia’s leadership in organic farming and environmental stewardship is shaping a brighter, more resilient future for our communities.',
                hoverDesc: 'With a Ph.D. in Human Geography, he bridges academia and industry, guiding Utopia’s strategic direction and sustainability initiatives. His leadership spans research, training, and advocacy for organic farming practices.'
            },
            {
                name: 'Esuyawkal Agmas Derso',
                role: 'Founder & General Manager',
                img: EsuyawkalImg,
                feedback: 'Utopia’s impact on soil health and farmer livelihoods is a testament to the power of innovation and purpose-driven leadership.',
                hoverDesc: 'His entrepreneurial drive focuses on scaling production, scientific innovation, and farmer training. He aims to make Utopia a model for sustainable agriculture across Africa.'
            },
            {
                name: 'Mandefro Kindeneh Assefa',
                role: 'Customer Service Specialist & Science Department Head',
                img: MandefroImg,
                feedback: 'Utopia’s focus on research and customer support bridges the gap between scientific advancement and real-world agricultural solutions.',
                hoverDesc: 'As the architect of the organic NPKC kinetics model, his technical contributions are foundational to the company’s growth. His dual role in customer service at Enat Bank showcases his versatility in bridging scientific innovation and client-focused solutions.'
            },
        ];

        // Gallery images (gallery + products)
        const galleryImages = [
            gallery, gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
            Product, Product2, Product3
        ];

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
                                      Explore Our Natural Products
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
                                   
                                },
                                {
                                    title: 'Empowering Smallholder Farmers',
                                    img: betaapp,
                                    desc: 'Training and supporting smallholder farmers for higher yields and sustainable livelihoods.',
                                    tech: ['Farmer Training', 'Community Impact', 'Food Security'],
                                    
                                },
                                {
                                    title: 'Women & Youth in Agriculture',
                                    img: womanImage,
                                    desc: 'Creating jobs and leadership opportunities for women and youth in Ethiopia’s green economy.',
                                    tech: ['Gender Equality', 'Youth Jobs', 'Education'],
                                    
                                },
                                {
                                    title: 'Climate & Biodiversity Action',
                                    img: climateImage,
                                    desc: 'Reducing emissions, increasing biodiversity, and building climate resilience through organic practices.',
                                    tech: ['Climate Action', 'Biodiversity', 'Eco Farming'],
                                  
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
    icon: FaLeaf,
    title: 'General Organic Farming Consulting',
    desc: 'Expert advice and support for transitioning to and optimizing organic farming practices.',
  },
  {
    icon: FaSeedling,
    title: 'Soil Fertility Testing',
    desc: 'Comprehensive soil analysis to determine nutrient status and recommend improvements.',
  },
  {
    icon: FaFlask,
    title: 'Preparation of Natural Fertilizer & Compost',
    desc: 'Guidance and training on making high-quality natural fertilizers and compost.',
  },
  {
    icon: FaBolt,
    title: 'Biogas Power Installation & Training',
    desc: 'Installation of biogas systems and hands-on training for sustainable energy use.',
  },
  {
    icon: FaBookOpen,
    title: 'Training on By-Products & Cuttings for Development',
    desc: 'Workshops on utilizing agricultural by-products and plant cuttings for further development.',
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

                {/* Testimonials Section - Horizontal Slider */}
                <section className="customer-feedback py-5 bg-light">
                    <Container>
                        <motion.div {...scrollAnim}>
                            <h2 className="text-center mb-4">What Our Partners Say</h2>
                        </motion.div>
                        <Slider {...testimonialSliderSettings}>
                            {testimonials.map((testimonial, idx) => (
                                <div key={idx}>
                                    <div className="d-flex justify-content-center">
                                        <motion.div
                                            className="testimonial-card p-4 text-center h-100 d-flex flex-column align-items-center justify-content-between mx-2"
                                            {...scrollAnim}
                                            style={{
                                                background: '#fff',
                                                borderRadius: '16px',
                                                boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
                                                minHeight: 370,
                                                maxWidth: 400,
                                                margin: '0 auto',
                                                position: 'relative',
                                                overflow: 'visible'
                                            }}
                                        >
                                            <img
                                                src={testimonial.img}
                                                alt={testimonial.name}
                                                className="testimonial-img mb-3"
                                                style={{
                                                    width: 100,
                                                    height: 100,
                                                    objectFit: 'cover',
                                                    borderRadius: '50%',
                                                    border: '3px solid #6dbb63',
                                                    boxShadow: '0 2px 8px rgba(34,77,32,0.10)',
                                                }}
                                            />
                                            <p className="testimonial-text flex-grow-1">{testimonial.feedback}</p>
                                            <h5 className="testimonial-name mt-2 mb-1">{testimonial.name}</h5>
                                            <p className="testimonial-company mb-2">{testimonial.role}</p>
                                            {/* Hover overlay for description */}
                                            <div className="testimonial-hover-desc">
                                                <span>{testimonial.hoverDesc}</span>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </Container>
                </section>

                {/* Gallery Section - All Gallery and Product Images */}
                <section className="gallery-section py-5">
                    <Container>
                        <motion.div {...scrollAnim}>
                            <h2 className="text-center mb-4">Gallery</h2>
                            <p className="text-center text-muted mb-5">
                                Explore our farms, products, and community activities.
                            </p>
                        </motion.div>
                        <Row className="g-4">
                            {galleryImages.map((img, idx) => (
                                <Col xs={12} sm={6} md={4} lg={3} key={idx}>
                                    <motion.div
                                        className="gallery-img-wrapper"
                                        whileHover={{ scale: 1.04 }}
                                        transition={{ type: 'spring', stiffness: 200 }}
                                        style={{
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
                                            background: '#fff'
                                        }}
                                    >
                                        <img
                                            src={img}
                                            alt={`Gallery ${idx + 1}`}
                                            className="img-fluid w-100"
                                            style={{ objectFit: 'cover', height: '220px' }}
                                        />
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                {/* Partners Section */}
                <section className="partners-section py-5 bg-white">
                    <Container>
                        <motion.div {...scrollAnim}>
                            <h2 className="text-center mb-4">Our Partners</h2>
                        </motion.div>
                        <Row className="justify-content-center align-items-center">
                            <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
                                <div className="partner-card p-4 shadow-sm rounded" style={{ background: "#f4fbe7" }}>
                                    <img
                                        src={DebarkUniversityLogo} 
                                        alt="Debark University"
                                        style={{ maxWidth: 120, marginBottom: 16 }}
                                    />
                                    <h5 className="mt-2 mb-1" style={{ color: "#234d20" }}>Debark University</h5>
                                    <p className="text-muted mb-0" style={{ fontSize: "1rem" }}>
                                        Academic and research partner supporting sustainable agriculture and innovation.
                                    </p>
                                </div>
                            </Col>
                            {/* Add more partners here as needed */}
                        </Row>
                    </Container>
                </section>
            </div>
        );
    }
}

export default Home;

