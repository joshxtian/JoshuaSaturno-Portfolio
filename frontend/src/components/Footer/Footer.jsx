import React from 'react';
import './Footer.css';
import {Container, Row, Col} from 'react-bootstrap';


const Footer = () => {
    return (
        <footer className="py-5">
            
            <Container className="my-5">
                <h1 className="footer__header text-center">Find me at</h1>
                <Container className="about__socialList py-3">
                    <Row>
                        <Col xl={{span:1,offset:4}} xs={{span:2,offset:2}}>
                            <a className="footer__navLinks" href="https://www.facebook.com/JoshuaStorm99">
                                <i className="about__socialLinks fab fa-facebook-square"></i>
                            </a>
                        </Col>
                        <Col xl={1} xs={2}>
                            <a className="footer__navLinks" href="https://www.instagram.com/joshxtian/"> <i className="about__socialLinks fab fa-instagram"></i></a>
                        </Col>
                        <Col xl={1} xs={2}>
                            <a className="footer__navLinks" href="https://www.linkedin.com/in/joshua-christian-saturno-66a699203/"><i className="about__socialLinks fab fa-linkedin"></i></a>
                        </Col>
                        <Col xl={1} xs={2}>
                            <a className="footer__navLinks" href="https://github.com/joshxtian"> <i className="about__socialLinks fab fa-github-square"></i></a>
                       </Col>
                    </Row>
                </Container>
            </Container>
            <h1 className="footer__copyright my-5 text-center">© 2021 Joshua Christian Saturno. All rights reserved.</h1>
            
        </footer>
    )
}

export default Footer
