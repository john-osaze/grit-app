import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from "../images/logo-light.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className="footer-widget-logo">
                                <a href="index-2"><img src={Logo} className="img-fluid" alt="img-55" /></a>
                            </div>
                            <div className="footer-widget-text">
                                <p>Grit Procurement Solutions helps you see what your government is up to.</p>
                            </div>
                            <div className="footer-widget-socials">
                                <Link to="/"><FontAwesomeIcon icon={['fab', 'twitter']} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={['fab', 'facebook']} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={['fab', 'instagram']} /></Link>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="footer-widget">
                                <div className="footer-widget-explore">
                                    <h4 className="footer-widget-title">Explore</h4>
                                    <ul className="list-unstyled">
                                        <li><Link to="/">Administration</Link></li>
                                        <li><Link to="/">Fire Services</Link></li>
                                        <li><Link to="/">Business & Taxation</Link></li>
                                        <li><Link to="/">Circular’s And Go’s</Link></li>
                                        <li><Link to="/">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="footer-widget">
                                <div className="footer-widget-department">
                                    <h4 className="footer-widget-title">Departments</h4>
                                    <ul className="list-unstyled">
                                        <li><Link to="/">Health & Safety</Link></li>
                                        <li><Link to="/">Housing & Land</Link></li>
                                        <li><Link to="/">Legal & Finance</Link></li>
                                        <li><Link to="/">Transport & Traffic</Link></li>
                                        <li><Link to="/">Arts & Culture</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="footer-widget">
                                <div className="footer-widget-contact">
                                    <h4 className="footer-widget-title">Contact</h4>
                                    <p>19, ICE Road, Innovation Hub, Benin City<br />Edo State, Nigeria.</p>
                                </div>
                                <div className="footer-widget-contact-list">
                                    <FontAwesomeIcon icon="envelope"/>
                                    <div className="footer-widget-contact-item">
                                        <a href="mailto:needhelp@gritapp.org">needhelp@gritapp.org</a>
                                    </div>
                                </div>
                                <div className="footer-widget-contact-list">
                                    <FontAwesomeIcon icon="phone"/>
                                    <div className="footer-widget-contact-item">
                                        <a href="tel:+92-003-68-090">+234 80 (403) 68 090</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bottom-footer">
                <Container>
                    <p>&copy; Copyright 2023 by Grit Procurement Solutions Inc. </p>
                </Container>
            </div>
        </footer>
    )
}